import { IObservable } from '@lifaon/rx-js-light';
import { ILocales } from '../../../locales/locales.type';
import { dateTimeFormatObservable } from '../../date-time-format-observable';
import { IDateTimeFormatValue } from '../../date-time-format.type';
import { IDateTimeShortcutFormat } from './date-time-shortcut-format-to-date-time-format-options';
import {
  dateTimeShortcutFormatToDateTimeFormatOptionsObservable,
} from './date-time-shortcut-format-to-date-time-format-options-observable';

export function dateTimeShortcutFormatObservable(
  value: IObservable<IDateTimeFormatValue>,
  locales: IObservable<ILocales>,
  format: IObservable<IDateTimeShortcutFormat>,
): IObservable<string> {
  return dateTimeFormatObservable(
    value,
    locales,
    dateTimeShortcutFormatToDateTimeFormatOptionsObservable(format),
  );
}
