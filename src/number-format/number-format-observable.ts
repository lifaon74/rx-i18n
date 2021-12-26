import { IObservable, reactiveFunction, single } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { INumberFormatOptions, INumberFormatValue } from './number-format.type';

export function numberFormatObservable(
  value: IObservable<INumberFormatValue>,
  locales: IObservable<ILocales>,
  options: IObservable<INumberFormatOptions> = single({}),
): IObservable<string> {
  return reactiveFunction(
    [
      value,
      locales,
      options,
    ],
    (
      value: INumberFormatValue,
      locales: ILocales,
      options: INumberFormatOptions,
    ): string => {
      return new Intl.NumberFormat(locales as string[], options as Intl.NumberFormatOptions).format(value);
    },
  );
}
