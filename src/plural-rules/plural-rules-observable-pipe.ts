import { IObservable, IObservablePipe, reactiveFunction, single } from '@lifaon/rx-js-light';
import { IPluralRulesOptions, IPluralRulesResult, IPluralRulesValue } from './plural-rules.type';
import { ILocales } from '../locales/locales.type';
import PluralRules = Intl.PluralRules;

export function pluralRulesObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IPluralRulesOptions> = single({}),
): IObservablePipe<IPluralRulesValue, IPluralRulesResult> {
  const format: IObservable<PluralRules> = reactiveFunction(
    [locales, options],
    (locales: ILocales, options: IPluralRulesOptions): PluralRules => {
      return new Intl.PluralRules(locales as string[], options);
    },
  );
  return (subscribe: IObservable<IPluralRulesValue>): IObservable<IPluralRulesResult> => {
    return reactiveFunction(
      [subscribe, format],
      (value: IPluralRulesValue, format: PluralRules): IPluralRulesResult => {
        return format.select(value);
      },
    );
  };
}
