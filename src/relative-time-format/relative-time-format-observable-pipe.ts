import { IObservable, IObservablePipe, single } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { relativeTimeFormatObservable } from './relative-time-format-observable';
import { IRelativeTimeFormatOptions, IRelativeTimeFormatUnit, IRelativeTimeFormatValue } from './relative-time-format.type';

export function relativeTimeFormaObservablePipe(
  unit: IObservable<IRelativeTimeFormatUnit>,
  locales: IObservable<ILocales>,
  options: IObservable<IRelativeTimeFormatOptions> = single({}),
): IObservablePipe<IRelativeTimeFormatValue, string> {
  return (subscribe: IObservable<IRelativeTimeFormatValue>): IObservable<string> => {
    return relativeTimeFormatObservable(
      subscribe,
      unit,
      locales,
      options,
    );
  };
}
