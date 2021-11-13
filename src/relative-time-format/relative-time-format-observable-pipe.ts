import { IObservable, IObservablePipe, reactiveFunction, single } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { IRelativeTimeFormatOptions, IRelativeTimeFormatValueAndUnit } from './relative-time-format.type';
import RelativeTimeFormat = Intl.RelativeTimeFormat;

export function relativeTimeFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IRelativeTimeFormatOptions> = single({}),
): IObservablePipe<IRelativeTimeFormatValueAndUnit, string> {
  const format: IObservable<RelativeTimeFormat> = reactiveFunction(
    [locales, options],
    (locales: ILocales, options: IRelativeTimeFormatOptions): RelativeTimeFormat => {
      return new Intl.RelativeTimeFormat(locales as string[], options);
    },
  );
  return (subscribe: IObservable<IRelativeTimeFormatValueAndUnit>): IObservable<string> => {
    return reactiveFunction(
      [subscribe, format],
      ({ value, unit }: IRelativeTimeFormatValueAndUnit, format: RelativeTimeFormat): string => {
        return format.format(value, unit);
      },
    );
  };
}



