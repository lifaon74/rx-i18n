import { IObservable, mapObservable } from '@lifaon/rx-js-light';
import { ILocales } from '../../../locales/locales.type';
import { numberFormatObservable } from '../../number-format-observable';
import { INumberFormatOptions, INumberFormatValue } from '../../number-format.type';
import { IUnitFormatOptions } from './unit-format-options.type';

export function unitFormatObservable(
  value: IObservable<INumberFormatValue>,
  locales: IObservable<ILocales>,
  options: IObservable<IUnitFormatOptions>,
): IObservable<string> {
  return numberFormatObservable(
    value,
    locales,
    mapObservable(options, (options: IUnitFormatOptions): INumberFormatOptions => {
      return {
        ...options,
        style: 'unit',
      };
    }),
  );
}
