import { IObservable } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { IPluralRulesValue } from '../plural-rules/plural-rules.type';
import { ITranslations } from './translations.type';

export function pluralRulesTranslationsObservable(
  locales: IObservable<ILocales>,
  translations: IObservable<ITranslations>,
  key: string,
  count: IObservable<IPluralRulesValue>,
  countKey: string,
): IObservable<string> {
  throw new Error('TODO');
  // return translateObservable(
  //   translations,
  //   pipeObservable(count, [
  //     pluralRulesForTranslationsObservablePipe(key, locales),
  //   ]),
  //   of({
  //     [countKey]: pipeObservable(count, [
  //       numberFormatObservablePipe(locales),
  //     ]),
  //   }),
  // );
}


