import { IObservable, mergeMapObservablePipe, pipeObservable } from '@lifaon/rx-js-light';
import { ITranslations } from './translations.type';
import { ILocales } from '../locales/locales.type';

export interface ITranslationLoader {
  (locales: ILocales): IObservable<ITranslations>;
}

export function createTranslationsLoader(
  locales: IObservable<ILocales>,
  load: ITranslationLoader,
): IObservable<ITranslations> {
  return pipeObservable(locales, [
    mergeMapObservablePipe<ILocales, ITranslations>(load),
  ]);
}
