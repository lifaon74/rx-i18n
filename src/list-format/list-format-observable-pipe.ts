import { IObservable, IObservablePipe, reactiveFunction, single } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { IListFormatOptions, IListFormatResult, IListFormatValue } from './list-format.type';

type ListFormat = any; // TODO

export function listFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IListFormatOptions> = single({}),
): IObservablePipe<IListFormatValue, IListFormatResult> {
  const format: IObservable<ListFormat> = reactiveFunction(
    [locales, options], (locales: ILocales, options: IListFormatOptions): ListFormat => {
      return new (Intl as any).ListFormat(locales as string[], options); // TODO
    },
  );
  return (subscribe: IObservable<IListFormatValue>): IObservable<IListFormatResult> => {
    return reactiveFunction(
      [subscribe, format],
      (value: IListFormatValue, format: ListFormat): IListFormatResult => {
        return format.format(value);
      },
    );
  };
}
