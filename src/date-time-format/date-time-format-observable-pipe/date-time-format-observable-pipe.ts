import { IObservable, IObservablePipe, reactiveFunction } from '@lifaon/rx-js-light';
import { IDateTimeFormatOptions, IDateTimeFormatValue } from '../date-time-format.type';
import { ILocales } from '../../locales/locales.type';
import DateTimeFormat = Intl.DateTimeFormat;
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export function dateTimeFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IDateTimeFormatOptions>,
): IObservablePipe<IDateTimeFormatValue, string> {
  const format: IObservable<DateTimeFormat> = reactiveFunction(
    [locales, options],
    (locales: ILocales, options: IDateTimeFormatOptions): DateTimeFormat => {
      return new Intl.DateTimeFormat(locales as any, options as DateTimeFormatOptions);
    },
  );
  return (subscribe: IObservable<IDateTimeFormatValue>): IObservable<string> => {
    return reactiveFunction(
      [subscribe, format],
      (value: IDateTimeFormatValue, format: DateTimeFormat): string => {
        return format.format(value);
      },
    );
  };
}



