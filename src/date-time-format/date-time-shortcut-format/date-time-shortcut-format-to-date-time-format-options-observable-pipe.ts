
import { IObservablePipe, mapObservablePipe } from '@lifaon/rx-js-light';
import { IDateTimeFormatOptions } from '../date-time-format.type';
import {
  dateTimeShortcutFormatToDateTimeFormatOptions, IDateTimeShortcutFormat,
} from './date-time-shortcut-format-to-date-time-format-options';

export function dateTimeShortcutFormatToDateTimeFormatOptionsObservablePipe(): IObservablePipe<IDateTimeShortcutFormat, IDateTimeFormatOptions> {
  return mapObservablePipe<IDateTimeShortcutFormat, IDateTimeFormatOptions>(dateTimeShortcutFormatToDateTimeFormatOptions);
}
