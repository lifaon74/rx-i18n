import { IObservable, reactiveFunction, single } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { IListFormatOptions, IListFormatResult, IListFormatValue } from './list-format.type';

export function listFormatObservable(
  value: IObservable<IListFormatValue>,
  locales: IObservable<ILocales>,
  options: IObservable<IListFormatOptions> = single({}),
): IObservable<IListFormatResult> {
  return reactiveFunction(
    [
      value,
      locales,
      options,
    ],
    (
      value: IListFormatValue,
      locales: ILocales,
      options: IListFormatOptions,
    ): IListFormatResult => {
      return new (Intl as any).ListFormat(locales as string[], options).format(value);
    },
  );
}
