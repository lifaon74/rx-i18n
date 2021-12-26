import { IObservable, reactiveFunction } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { IDateTimeFormatOptions, IDateTimeFormatValue } from './date-time-format.type';

export function dateTimeFormatObservable(
  value: IObservable<IDateTimeFormatValue>,
  locales: IObservable<ILocales>,
  options: IObservable<IDateTimeFormatOptions>,
): IObservable<string> {
  return reactiveFunction(
    [
      value,
      locales,
      options,
    ],
    (
      value: IDateTimeFormatValue,
      locales: ILocales,
      options: IDateTimeFormatOptions,
    ): string => {
      return new Intl.DateTimeFormat(locales as any, options).format(value);
    },
  );
}
