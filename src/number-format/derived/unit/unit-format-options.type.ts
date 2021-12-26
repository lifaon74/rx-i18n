import { INumberFormatOptions } from '../../number-format.type';

export interface IUnitFormatOptions extends Omit<INumberFormatOptions, 'style' | 'unit'>, Required<Pick<INumberFormatOptions, 'unit'>> {
}
