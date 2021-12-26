import { IObservable, IReactiveStringParameters, mergeAllSingleObservable, reactiveFunction, single } from '@lifaon/rx-js-light';
import { reactiveTranslation } from './reactive-translation';
import { ITranslations } from './translations.type';

export function translateObservable(
  translations: IObservable<ITranslations>,
  key: IObservable<string>,
  options: IObservable<IReactiveStringParameters> = single({}),
): IObservable<string> {
  return mergeAllSingleObservable(
    reactiveFunction(
      [translations, key, options],
      reactiveTranslation,
    ),
  );
}

