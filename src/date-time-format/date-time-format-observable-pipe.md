## dateTimeFormatObservablePipe or dateTimeFormat$$$

```ts
function dateTimeFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IDateTimeFormatOptions>,
): IObservablePipeFunction<IDateTimeFormatValue, string>
```

This ObservablePipe formats incoming number or date values into strings according to a locale and some configuration.

## dateTimeShortcutFormatObservablePipe or dateTimeFormatS$$$

```ts
function dateTimeShortcutFormatObservablePipe(
  locales: IObservable<ILocales>,
  format: IObservable<IDateTimeShortcutFormat>,
): IObservablePipeFunction<IDateTimeFormatValue, string>
```

Like `dateTimeFormatObservablePipe` but accepts a `IDateTimeShortcutFormat` instead.

`format` is similar to the [angular date pipe](https://angular.io/api/common/DatePipe)

### Examples

#### Display current date

```ts
const $locales$ = createLocalesSource();

const dateTimeText$ = pipe$$(interval(1000), [
  map$$$<void, number>(() => Date.now()),
  dateTimeFormatS$$$($locales$.subscribe, single<IDateTimeShortcutFormat>('medium')),
]);

dateTimeText$((value: string) => {
  console.log(value);
});
```

Output:

```text
Jan 25, 2021, 1:31:53 PM
Jan 25, 2021, 1:31:54 PM
Jan 25, 2021, 1:31:55 PM
...
```

