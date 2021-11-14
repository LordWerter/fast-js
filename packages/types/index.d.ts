/// <reference path="./data-structures.d.ts" />
/// <reference path="./images.d.ts" />
/// <reference path="./jwt.d.ts" />
/// <reference path="./react-component.d.ts" />
/// <reference path="./redux-store.d.ts" />
/// <reference path="./request.d.ts" />
/// <reference path="./response.d.ts" />
/// <reference path="./universe.d.ts" />

/**
 * Nominal type
 * For example `type Foo = `Nominal<'Foo', string>` - string subtype when:
 *   - может быть использован, кок строка (можно передать `let x: Foo` в функцию `function(arg:string){...}`)
 *   - не принимает произвольную строку (нельзя передать `let x: string` в функцию `function(arg:Foo){...}`)
 *   - не совместим с `type Bar = Nominal<'Bar', string>`
 * Важно:
 *   - поле __TYPE__ - это хак, позволяющий достичь такого поведения. На самом деле никакого поля `__TYPE_` нет
 */
export type Nominal<Name extends string, Supertype> = Supertype & {
    readonly __TYPE__: Name;
  };
  
  /** Full URL (e.g. 'https://example.com/logo.png') */
  export type URLLink = Nominal<"URLLink", string>;
  
  /** Readable string, that can be used in a URL path and must match /^[a-z](-[a-z])*$/
   *  (e.g. '123', 'product/123') */
  export type URLSlug = Nominal<"URLSlug", string>;
  
  /** Any valid css color (e.g. '#000', 'magenta', 'hsla(0, 50%, 20%, 0.1)', etc) */
  export type CSSColor = Nominal<"CSSColor", string>;
  
  /** Number as string (e.g. '2020', '1.23') */
  export type NumberAsString = Nominal<"NumberAsString", string>;
  
  /** Date in ISO-8601 format (YYYY-MM-DD) (e.g. '2021-11-30') */
  export type ISODate = Nominal<"ISODate", string>;
  
  /** Timestamp in ISO-8601 format (YYYY-MM-DDThh:mm:ss[.sss][Z])
   * (e.g. '2020-12-31T22:34:56.000Z', '1984-01-01T00:00:00', '2000-12-01T10:00:00+03') */
  export type ISODateTime = Nominal<"ISODateeTime", string>;
  
  /** null | undefined | T */
  export type Maybe<T> = null | undefined | T;
  
  export type int = number;
  export type float = number;
