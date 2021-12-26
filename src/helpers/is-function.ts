export function isFunction<GFunction extends (...args: any[]) => any>(
  value: unknown,
): value is GFunction {
  return (typeof value === 'function');
}
