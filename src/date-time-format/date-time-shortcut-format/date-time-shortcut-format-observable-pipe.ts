import { IObservable, IObservablePipe, pipeObservable } from '@lifaon/rx-js-light';
import { IDateTimeShortcutFormat } from './date-time-shortcut-format-to-date-time-format-options';
import { IDateTimeFormatOptions, IDateTimeFormatValue } from '../date-time-format.type';
import { dateTimeFormatObservablePipe } from '../date-time-format-observable-pipe/date-time-format-observable-pipe';
import { dateTimeShortcutFormatToDateTimeFormatOptionsObservablePipe } from './date-time-shortcut-format-to-date-time-format-options-observable-pipe';
import { ILocales } from '../../locales/locales.type';

export function dateTimeShortcutFormatObservablePipe(
  locales: IObservable<ILocales>,
  format: IObservable<IDateTimeShortcutFormat>,
): IObservablePipe<IDateTimeFormatValue, string> {
  return dateTimeFormatObservablePipe(locales, pipeObservable(format, [
    dateTimeShortcutFormatToDateTimeFormatOptionsObservablePipe(),
  ] as [IObservablePipe<IDateTimeShortcutFormat, IDateTimeFormatOptions>]));
}
