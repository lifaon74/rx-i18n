import { IRelativeTimeFormatValueAndUnit } from './relative-time-format-with-value-and-unit.type';
import { IObservable, mapObservable } from '@lifaon/rx-js-light';
import { ILocales } from '../../../locales/locales.type';
import { relativeTimeFormatObservable } from '../../relative-time-format-observable';
import { IRelativeTimeFormatOptions} from '../../relative-time-format.type';

export function relativeTimeFormatWithValueAndUnitObservable(
  valueAndUnit: IObservable<IRelativeTimeFormatValueAndUnit>,
  locales: IObservable<ILocales>,
  options?: IObservable<IRelativeTimeFormatOptions>,
): IObservable<string> {
  return relativeTimeFormatObservable(
    mapObservable(valueAndUnit, ({ value }) => value),
    mapObservable(valueAndUnit, ({ unit }) => unit),
    locales,
    options,
  );
}
