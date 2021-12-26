import { IObservable, IObservablePipe } from '@lifaon/rx-js-light';
import { ILocales } from '../../../locales/locales.type';
import { INumberFormatValue } from '../../number-format.type';
import { currencyFormatObservable } from './currency-format-observable';
import { ICurrencyFormatOptions } from './currency-format-options.type';

export function currencyFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<ICurrencyFormatOptions>,
): IObservablePipe<INumberFormatValue, string> {
  return (subscribe: IObservable<INumberFormatValue>): IObservable<string> => {
    return currencyFormatObservable(subscribe, locales, options);
  };
}

