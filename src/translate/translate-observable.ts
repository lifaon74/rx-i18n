import {
  IObservable,
  IReactiveStringParameters, mergeAllSingleObservablePipe,
  of,
  pipeObservable,
  reactiveFunction,
  reactiveString,
  single,
} from '@lifaon/rx-js-light';
import { ITranslations } from './translations.type';

export function translateObservable(
  translations: IObservable<ITranslations>,
  key: IObservable<string>,
  options: IObservable<IReactiveStringParameters> = single({}),
): IObservable<string> {
  const translation: IObservable<IObservable<string>> = reactiveFunction(
    [translations, key, options],
    reactiveTranslation,
  );
  return pipeObservable(translation, [
    mergeAllSingleObservablePipe(),
  ]);
}

export function reactiveTranslation(
  translations: ITranslations,
  key: string,
  options?: IReactiveStringParameters,
): IObservable<string> {
  if (translations.has(key)) {
    return reactiveString(translations.get(key) as any, options);
  } else {
    return of(key);
  }
}

/*----------------------*/

/*----------------------*/

// export interface ITranslateOptions {
//   [key: string]: any;
// }
//
// export function translateObservable(
//   translations: IObservable<ITranslations>,
//   key: IObservable<string>,
//   options: IObservable<ITranslateOptions> = single({}),
// ): IObservable<string> {
//   return reactiveFunction(
//     translate,
//     [translations, key, options],
//   );
// }
//
//
// const TRANSLATE_VARIABLE_PATTERN: string = '{{(.*?)}}';
// const TRANSLATE_VARIABLE_REGEXP: RegExp = new RegExp(TRANSLATE_VARIABLE_PATTERN, 'g');
//
// /**
//  * Replace everything inside {{ }} with a variable
//  */
// export function translate(
//   translations: ITranslations,
//   key: string,
//   options: ITranslateOptions = {},
// ): string {
//   if (translations.has(key)) {
//     TRANSLATE_VARIABLE_REGEXP.lastIndex = 0;
//     return (translations.get(key) as string).replace(TRANSLATE_VARIABLE_REGEXP, (substring: string, variableName: string): string => {
//       variableName = variableName.trim();
//       return (variableName in options)
//         ? String(options[variableName])
//         : substring;
//     });
//   } else {
//     return key;
//   }
// }
