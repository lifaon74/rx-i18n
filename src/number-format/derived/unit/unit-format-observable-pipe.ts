import { IObservable, IObservablePipe } from '@lifaon/rx-js-light';
import { ILocales } from '../../../locales/locales.type';
import { INumberFormatValue } from '../../number-format.type';
import { unitFormatObservable } from './unit-format-observable';
import { IUnitFormatOptions } from './unit-format-options.type';

export function unitFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IUnitFormatOptions>,
): IObservablePipe<INumberFormatValue, string> {
  return (subscribe: IObservable<INumberFormatValue>): IObservable<string> => {
    return unitFormatObservable(subscribe, locales, options);
  };
}

