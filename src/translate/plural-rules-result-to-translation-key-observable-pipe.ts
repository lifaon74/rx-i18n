import { distinctObservablePipe, IObservablePipe, mapObservablePipe, pipeObservablePipes } from '@lifaon/rx-js-light';
import { IPluralRulesResult } from '../plural-rules/plural-rules.type';

export function pluralRulesResultToTranslationKeyObservablePipe(
  key: string,
): IObservablePipe<IPluralRulesResult, string> {
  return pipeObservablePipes([
    mapObservablePipe<IPluralRulesResult, string>((rule: IPluralRulesResult) => {
      return `${key}[${rule}]`;
    }),
    distinctObservablePipe<string>(),
  ]);
}

// export function pluralRulesForTranslationsObservablePipe(
//   key: string,
//   pluralRulesSubscribe: IObservablePipeFunction<IPluralRulesValue, IPluralRulesResult>,
// ): IObservablePipeFunction<IPluralRulesValue, string> {
//   return pipeObservablePipeFunctions([
//     pluralRulesSubscribe,
//     mapObservablePipe<IPluralRulesResult, string>((rule: IPluralRulesResult) => {
//       return `${ key }[${ rule }]`;
//     }),
//     distinctObservablePipe<string>(),
//   ]);
// }
