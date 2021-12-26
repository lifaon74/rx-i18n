import { IObservable, IObservablePipe, single } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { pluralRulesObservable } from './plural-rules-observable';
import { IPluralRulesOptions, IPluralRulesResult, IPluralRulesValue } from './plural-rules.type';

export function pluralRulesObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IPluralRulesOptions> = single({}),
): IObservablePipe<IPluralRulesValue, IPluralRulesResult> {
  return (subscribe: IObservable<IPluralRulesValue>): IObservable<IPluralRulesResult> => {
    return pluralRulesObservable(
      subscribe,
      locales,
      options,
    );
  };
}

