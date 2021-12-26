import { IObservable, IObservablePipe, single } from '@lifaon/rx-js-light';
import { ILocales } from '../../../locales/locales.type';
import { IRelativeTimeFormatOptions } from '../../relative-time-format.type';
import { IRelativeTimeFormatValueAndUnit } from './relative-time-format-with-value-and-unit.type';
import { relativeTimeFormatWithValueAndUnitObservable } from './relative-time-format-with-value-and-unit-observable';

export function relativeTimeFormatWithValueAndUnitObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IRelativeTimeFormatOptions> = single({}),
): IObservablePipe<IRelativeTimeFormatValueAndUnit, string> {
  return (subscribe: IObservable<IRelativeTimeFormatValueAndUnit>): IObservable<string> => {
    return relativeTimeFormatWithValueAndUnitObservable(
      subscribe,
      locales,
      options,
    );
  };
}
