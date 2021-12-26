import { distinctObservablePipe, IObservablePipe, mapObservablePipe, pipeObservablePipes } from '@lifaon/rx-js-light';
import { IPluralRulesResult } from '../plural-rules/plural-rules.type';

export function pluralRulesResultToTranslationKeyObservablePipe(
  key: string,
): IObservablePipe<IPluralRulesResult, string> {
  return pipeObservablePipes([
    mapObservablePipe<IPluralRulesResult, string>((rule: IPluralRulesResult): string => {
      return `${key}[${rule}]`;
    }),
    distinctObservablePipe<string>(),
  ]);
}
