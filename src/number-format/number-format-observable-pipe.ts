import { IObservable, IObservablePipe, single } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { numberFormatObservable } from './number-format-observable';
import { INumberFormatOptions, INumberFormatValue } from './number-format.type';

export function numberFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<INumberFormatOptions> = single({}),
): IObservablePipe<INumberFormatValue, string> {
  return (subscribe: IObservable<INumberFormatValue>): IObservable<string> => {
    return numberFormatObservable(subscribe, locales, options);
  };
}

// export function numberFormatObservablePipe(
//   locales: IObservable<ILocales>,
//   options: IObservable<INumberFormatOptions> = single({}),
// ): IObservablePipe<INumberFormatValue, string> {
//   const format: IObservable<NumberFormat> = reactiveFunction(
//     [locales, options],
//     (locales: ILocales, options: INumberFormatOptions): NumberFormat => {
//       return new Intl.NumberFormat(locales as string[], options);
//     },
//   );
//   return (subscribe: IObservable<INumberFormatValue>): IObservable<string> => {
//     return reactiveFunction(
//       [subscribe, format],
//       (value: INumberFormatValue, format: NumberFormat): string => {
//         return format.format(value);
//       },
//     );
//   };
// }


