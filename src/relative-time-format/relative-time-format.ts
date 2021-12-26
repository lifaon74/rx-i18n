import { ILocales } from '../locales/locales.type';
import { IRelativeTimeFormatOptions, IRelativeTimeFormatUnit, IRelativeTimeFormatValue } from './relative-time-format.type';

export function relativeTimeFormat(
  value: IRelativeTimeFormatValue,
  unit: IRelativeTimeFormatUnit,
  locales: ILocales,
  options: IRelativeTimeFormatOptions,
): string {
  return new Intl.RelativeTimeFormat(locales as string[], options).format(value, unit);
}
