import { IObservable, IObservablePipe, reactiveFunction } from '@lifaon/rx-js-light';
import { ILocales } from '../../locales/locales.type';
import {
  IRelativeTimeFormatOptions, IRelativeTimeFormatUnit, IRelativeTimeFormatValue, IRelativeTimeFormatValueAndUnit,
} from '../relative-time-format.type';
import { relativeTimeFormatObservablePipe } from '../relative-time-format-observable-pipe';

export function relativeTimeFormatWithUnitObservablePipe(
  locales: IObservable<ILocales>,
  unit: IObservable<IRelativeTimeFormatUnit>,
  options?: IObservable<IRelativeTimeFormatOptions>,
): IObservablePipe<IRelativeTimeFormatValue, string> {
  const _relativeTimeFormatObservablePipe: IObservablePipe<IRelativeTimeFormatValueAndUnit, string> = relativeTimeFormatObservablePipe(locales, options);
  return (subscribe: IObservable<IRelativeTimeFormatValue>): IObservable<string> => {
    return _relativeTimeFormatObservablePipe(
      reactiveFunction(
        [subscribe, unit],
        (value: IRelativeTimeFormatValue, unit: IRelativeTimeFormatUnit): IRelativeTimeFormatValueAndUnit => {
          return { value, unit };
        },
      ),
    );
  };
}

// export function relativeTimeFormatWithUnitObservablePipe(
//   locales: IObservable<ILocales>,
//   unit: IObservable<IRelativeTimeFormatUnit>,
//   options: IObservable<IRelativeTimeFormatOptions>
// ): IObservablePipeFunction<IRelativeTimeFormatValue, string> {
//   const format: IObservable<RelativeTimeFormat> = reactiveFunction(
//     [locales, options],
//     (locales: ILocales, options: IRelativeTimeFormatOptions): RelativeTimeFormat => {
//       return new Intl.RelativeTimeFormat(locales as any, options);
//     },
//   );
//   return (subscribe: IObservable<IRelativeTimeFormatValue>): IObservable<string> => {
//     return reactiveFunction(
//       [subscribe, unit, format],
//       (value: IRelativeTimeFormatValue, unit: IRelativeTimeFormatUnit, format: RelativeTimeFormat): string => {
//         return format.format(value, unit);
//       },
//     );
//   };
// }



