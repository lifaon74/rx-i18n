import { INumberFormatOptions } from '../../number-format.type';

export interface ICurrencyFormatOptions extends Omit<INumberFormatOptions, 'style' | 'currency'>, Required<Pick<INumberFormatOptions, 'currency'>> {
}
