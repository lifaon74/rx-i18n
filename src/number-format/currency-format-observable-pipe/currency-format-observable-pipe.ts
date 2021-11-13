import { IObservable, IObservablePipe, mapObservablePipe, pipeObservable } from '@lifaon//rx-js-light';
import { numberFormatObservablePipe } from '../number-format-observable-pipe/number-format-observable-pipe';
import { INumberFormatOptions } from '../number-format.type';
import { ILocales } from '../../locales/locales.type';

export interface ICurrencyFormatOptions extends Omit<INumberFormatOptions, 'style' | 'currency'>, Required<Pick<INumberFormatOptions, 'currency'>> {
}

export function currencyFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<ICurrencyFormatOptions>,
): IObservablePipe<number, string> {
  return numberFormatObservablePipe(locales, pipeObservable(options, [
    mapObservablePipe<ICurrencyFormatOptions, INumberFormatOptions>((options: ICurrencyFormatOptions): INumberFormatOptions => {
      return {
        currencyDisplay: 'narrowSymbol',
        ...options,
        style: 'currency',
      };
    }),
  ]));
}
