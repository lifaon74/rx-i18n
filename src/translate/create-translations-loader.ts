import { IObservable, mergeMapObservable } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { ITranslations } from './translations.type';

export interface ITranslationLoader {
  (locales: ILocales): IObservable<ITranslations>;
}

export function createTranslationsLoader(
  locales: IObservable<ILocales>,
  load: ITranslationLoader,
): IObservable<ITranslations> {
  return mergeMapObservable(locales, load);
}
