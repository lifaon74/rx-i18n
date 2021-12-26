import { IObservable, IObservablePipe } from '@lifaon/rx-js-light';
import { IDateTimeFormatOptions } from '../../date-time-format.type';
import { IDateTimeShortcutFormat } from './date-time-shortcut-format-to-date-time-format-options';
import {
  dateTimeShortcutFormatToDateTimeFormatOptionsObservable,
} from './date-time-shortcut-format-to-date-time-format-options-observable';

export function dateTimeShortcutFormatToDateTimeFormatOptionsObservablePipe(): IObservablePipe<IDateTimeShortcutFormat, IDateTimeFormatOptions> {
  return (subscribe: IObservable<IDateTimeShortcutFormat>): IObservable<IDateTimeFormatOptions> => {
    return dateTimeShortcutFormatToDateTimeFormatOptionsObservable(subscribe);
  };
}
