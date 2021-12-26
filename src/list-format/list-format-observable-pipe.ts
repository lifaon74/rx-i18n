import { IObservable, IObservablePipe, single } from '@lifaon/rx-js-light';
import { ILocales } from '../locales/locales.type';
import { listFormatObservable } from './list-format-observable';
import { IListFormatOptions, IListFormatResult, IListFormatValue } from './list-format.type';

export function listFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IListFormatOptions> = single({}),
): IObservablePipe<IListFormatValue, IListFormatResult> {
  return (subscribe: IObservable<IListFormatValue>): IObservable<IListFormatResult> => {
    return listFormatObservable(
      subscribe,
      locales,
      options,
    );
  };
}

