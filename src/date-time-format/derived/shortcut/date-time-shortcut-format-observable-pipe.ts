import { IObservable, IObservablePipe } from '@lifaon/rx-js-light';
import { ILocales } from '../../../locales/locales.type';
import { IDateTimeFormatValue } from '../../date-time-format.type';
import { dateTimeShortcutFormatObservable } from './date-time-shortcut-format-observable';
import { IDateTimeShortcutFormat } from './date-time-shortcut-format-to-date-time-format-options';

export function dateTimeShortcutFormatObservablePipe(
  locales: IObservable<ILocales>,
  format: IObservable<IDateTimeShortcutFormat>,
): IObservablePipe<IDateTimeFormatValue, string> {
  return (subscribe: IObservable<IDateTimeFormatValue>): IObservable<string> => {
    return dateTimeShortcutFormatObservable(
      subscribe,
      locales,
      format,
    );
  };
}

