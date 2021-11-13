import { IObservable, IObservablePipe, reactiveFunction, single } from '@lifaon/rx-js-light';
import { INumberFormatOptions, INumberFormatValue } from '../number-format.type';
import { ILocales } from '../../locales/locales.type';
import NumberFormat = Intl.NumberFormat;

export function numberFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<INumberFormatOptions> = single({}),
): IObservablePipe<INumberFormatValue, string> {
  const format: IObservable<NumberFormat> = reactiveFunction(
    [locales, options],
    (locales: ILocales, options: INumberFormatOptions): NumberFormat => {
      return new Intl.NumberFormat(locales as string[], options);
    },
  );
  return (subscribe: IObservable<INumberFormatValue>): IObservable<string> => {
    return reactiveFunction(
      [subscribe, format],
      (value: INumberFormatValue, format: NumberFormat): string => {
        return format.format(value);
      },
    );
  };
}

