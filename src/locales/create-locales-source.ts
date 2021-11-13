import {
  createMulticastReplayLastSource,
  ICreateMulticastReplayLastSourceOptions,
  IMulticastReplayLastSource,
} from '@lifaon/rx-js-light';
import { getNavigatorLanguages } from './get-navigator-languages';
import { ILocales } from './locales.type';

export function createLocalesSource(
  options: ICreateMulticastReplayLastSourceOptions<ILocales> = { initialValue: getNavigatorLanguages() },
): IMulticastReplayLastSource<ILocales> {
  return createMulticastReplayLastSource<ILocales>(options);
}
