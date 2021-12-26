import { IObservable, IReactiveStringParameters, isObject, mapObservable, single } from '@lifaon/rx-js-light';
import { isFunction } from '../../helpers/is-function';
import { translateObservable } from '../translate-observable';
import { ITranslations } from '../translations.type';
import { ITranslationsLike } from './translations-like.type';

export function translationsLikeToTranslations(
  translationsLike: ITranslationsLike,
): ITranslations {
  if (translationsLike instanceof Map) {
    return translationsLike;
  } else if (Symbol.iterator in translationsLike) {
    return new Map<string, string>(translationsLike as Iterable<[string, string]>);
  } else if (isObject(translationsLike)) {
    return new Map<string, string>(Object.entries(translationsLike));
  } else {
    throw new TypeError(`Expected: Iterable<[string, string]> | Record<string, string>`);
  }
}

export function translateLikeObservable(
  translations: IObservable<ITranslationsLike> | ITranslationsLike,
  key: IObservable<string> | string,
  options: IObservable<IReactiveStringParameters> | IReactiveStringParameters = single({}),
): IObservable<string> {
  const translations$: IObservable<ITranslations> = isFunction(translations)
    ? mapObservable(translations, translationsLikeToTranslations)
    : single(translationsLikeToTranslations(translations));

  const key$: IObservable<string> = isFunction(key)
    ? key
    : single(key);

  const options$: IObservable<IReactiveStringParameters> = isFunction(options)
    ? options
    : single(options);

  return translateObservable(
    translations$,
    key$,
    options$,
  );
}

