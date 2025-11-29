
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tradeAnalyzerData
 * 
 */
export type tradeAnalyzerData = $Result.DefaultSelection<Prisma.$tradeAnalyzerDataPayload>
/**
 * Model SleeperPlayer
 * 
 */
export type SleeperPlayer = $Result.DefaultSelection<Prisma.$SleeperPlayerPayload>
/**
 * Model AllPlayerData
 * 
 */
export type AllPlayerData = $Result.DefaultSelection<Prisma.$AllPlayerDataPayload>
/**
 * Model UNScorePlayer
 * 
 */
export type UNScorePlayer = $Result.DefaultSelection<Prisma.$UNScorePlayerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TradeAnalyzerData
 * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TradeAnalyzerData
   * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tradeAnalyzerData`: Exposes CRUD operations for the **tradeAnalyzerData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradeAnalyzerData
    * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany()
    * ```
    */
  get tradeAnalyzerData(): Prisma.tradeAnalyzerDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sleeperPlayer`: Exposes CRUD operations for the **SleeperPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SleeperPlayers
    * const sleeperPlayers = await prisma.sleeperPlayer.findMany()
    * ```
    */
  get sleeperPlayer(): Prisma.SleeperPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allPlayerData`: Exposes CRUD operations for the **AllPlayerData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllPlayerData
    * const allPlayerData = await prisma.allPlayerData.findMany()
    * ```
    */
  get allPlayerData(): Prisma.AllPlayerDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uNScorePlayer`: Exposes CRUD operations for the **UNScorePlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UNScorePlayers
    * const uNScorePlayers = await prisma.uNScorePlayer.findMany()
    * ```
    */
  get uNScorePlayer(): Prisma.UNScorePlayerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tradeAnalyzerData: 'tradeAnalyzerData',
    SleeperPlayer: 'SleeperPlayer',
    AllPlayerData: 'AllPlayerData',
    UNScorePlayer: 'UNScorePlayer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tradeAnalyzerData" | "sleeperPlayer" | "allPlayerData" | "uNScorePlayer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tradeAnalyzerData: {
        payload: Prisma.$tradeAnalyzerDataPayload<ExtArgs>
        fields: Prisma.tradeAnalyzerDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tradeAnalyzerDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tradeAnalyzerDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          findFirst: {
            args: Prisma.tradeAnalyzerDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tradeAnalyzerDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          findMany: {
            args: Prisma.tradeAnalyzerDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>[]
          }
          create: {
            args: Prisma.tradeAnalyzerDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          createMany: {
            args: Prisma.tradeAnalyzerDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tradeAnalyzerDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>[]
          }
          delete: {
            args: Prisma.tradeAnalyzerDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          update: {
            args: Prisma.tradeAnalyzerDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          deleteMany: {
            args: Prisma.tradeAnalyzerDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tradeAnalyzerDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tradeAnalyzerDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>[]
          }
          upsert: {
            args: Prisma.tradeAnalyzerDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeAnalyzerDataPayload>
          }
          aggregate: {
            args: Prisma.TradeAnalyzerDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradeAnalyzerData>
          }
          groupBy: {
            args: Prisma.tradeAnalyzerDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeAnalyzerDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.tradeAnalyzerDataCountArgs<ExtArgs>
            result: $Utils.Optional<TradeAnalyzerDataCountAggregateOutputType> | number
          }
        }
      }
      SleeperPlayer: {
        payload: Prisma.$SleeperPlayerPayload<ExtArgs>
        fields: Prisma.SleeperPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SleeperPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SleeperPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>
          }
          findFirst: {
            args: Prisma.SleeperPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SleeperPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>
          }
          findMany: {
            args: Prisma.SleeperPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>[]
          }
          create: {
            args: Prisma.SleeperPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>
          }
          createMany: {
            args: Prisma.SleeperPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SleeperPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>[]
          }
          delete: {
            args: Prisma.SleeperPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>
          }
          update: {
            args: Prisma.SleeperPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>
          }
          deleteMany: {
            args: Prisma.SleeperPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SleeperPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SleeperPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>[]
          }
          upsert: {
            args: Prisma.SleeperPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleeperPlayerPayload>
          }
          aggregate: {
            args: Prisma.SleeperPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSleeperPlayer>
          }
          groupBy: {
            args: Prisma.SleeperPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SleeperPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SleeperPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<SleeperPlayerCountAggregateOutputType> | number
          }
        }
      }
      AllPlayerData: {
        payload: Prisma.$AllPlayerDataPayload<ExtArgs>
        fields: Prisma.AllPlayerDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllPlayerDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllPlayerDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>
          }
          findFirst: {
            args: Prisma.AllPlayerDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllPlayerDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>
          }
          findMany: {
            args: Prisma.AllPlayerDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>[]
          }
          create: {
            args: Prisma.AllPlayerDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>
          }
          createMany: {
            args: Prisma.AllPlayerDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllPlayerDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>[]
          }
          delete: {
            args: Prisma.AllPlayerDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>
          }
          update: {
            args: Prisma.AllPlayerDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>
          }
          deleteMany: {
            args: Prisma.AllPlayerDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllPlayerDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllPlayerDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>[]
          }
          upsert: {
            args: Prisma.AllPlayerDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllPlayerDataPayload>
          }
          aggregate: {
            args: Prisma.AllPlayerDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllPlayerData>
          }
          groupBy: {
            args: Prisma.AllPlayerDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllPlayerDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllPlayerDataCountArgs<ExtArgs>
            result: $Utils.Optional<AllPlayerDataCountAggregateOutputType> | number
          }
        }
      }
      UNScorePlayer: {
        payload: Prisma.$UNScorePlayerPayload<ExtArgs>
        fields: Prisma.UNScorePlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UNScorePlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UNScorePlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>
          }
          findFirst: {
            args: Prisma.UNScorePlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UNScorePlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>
          }
          findMany: {
            args: Prisma.UNScorePlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>[]
          }
          create: {
            args: Prisma.UNScorePlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>
          }
          createMany: {
            args: Prisma.UNScorePlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UNScorePlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>[]
          }
          delete: {
            args: Prisma.UNScorePlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>
          }
          update: {
            args: Prisma.UNScorePlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>
          }
          deleteMany: {
            args: Prisma.UNScorePlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UNScorePlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UNScorePlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>[]
          }
          upsert: {
            args: Prisma.UNScorePlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UNScorePlayerPayload>
          }
          aggregate: {
            args: Prisma.UNScorePlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUNScorePlayer>
          }
          groupBy: {
            args: Prisma.UNScorePlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UNScorePlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UNScorePlayerCountArgs<ExtArgs>
            result: $Utils.Optional<UNScorePlayerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tradeAnalyzerData?: tradeAnalyzerDataOmit
    sleeperPlayer?: SleeperPlayerOmit
    allPlayerData?: AllPlayerDataOmit
    uNScorePlayer?: UNScorePlayerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model tradeAnalyzerData
   */

  export type AggregateTradeAnalyzerData = {
    _count: TradeAnalyzerDataCountAggregateOutputType | null
    _avg: TradeAnalyzerDataAvgAggregateOutputType | null
    _sum: TradeAnalyzerDataSumAggregateOutputType | null
    _min: TradeAnalyzerDataMinAggregateOutputType | null
    _max: TradeAnalyzerDataMaxAggregateOutputType | null
  }

  export type TradeAnalyzerDataAvgAggregateOutputType = {
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
    consensusVsMarketValueDiff: number | null
  }

  export type TradeAnalyzerDataSumAggregateOutputType = {
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
    consensusVsMarketValueDiff: number | null
  }

  export type TradeAnalyzerDataMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    team: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
    consensusVsMarketValueDiff: number | null
  }

  export type TradeAnalyzerDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    team: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
    consensusVsMarketValueDiff: number | null
  }

  export type TradeAnalyzerDataCountAggregateOutputType = {
    id: number
    name: number
    position: number
    team: number
    marketValue: number
    myValue: number
    valueDiffBetweenMyValueAndMarketValue: number
    PRPScore: number
    projectedNextOffseasonDynastyValue: number
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number
    PNODVScore: number
    RVSScore: number
    jaxValue: number
    travValue: number
    joeValue: number
    consensusValue: number
    consensusVsMarketValueDiff: number
    _all: number
  }


  export type TradeAnalyzerDataAvgAggregateInputType = {
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
    consensusVsMarketValueDiff?: true
  }

  export type TradeAnalyzerDataSumAggregateInputType = {
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
    consensusVsMarketValueDiff?: true
  }

  export type TradeAnalyzerDataMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    team?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
    consensusVsMarketValueDiff?: true
  }

  export type TradeAnalyzerDataMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    team?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
    consensusVsMarketValueDiff?: true
  }

  export type TradeAnalyzerDataCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    team?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    projectedNextOffseasonDynastyValue?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    jaxValue?: true
    travValue?: true
    joeValue?: true
    consensusValue?: true
    consensusVsMarketValueDiff?: true
    _all?: true
  }

  export type TradeAnalyzerDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tradeAnalyzerData to aggregate.
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tradeAnalyzerData to fetch.
     */
    orderBy?: tradeAnalyzerDataOrderByWithRelationInput | tradeAnalyzerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tradeAnalyzerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tradeAnalyzerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tradeAnalyzerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tradeAnalyzerData
    **/
    _count?: true | TradeAnalyzerDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAnalyzerDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeAnalyzerDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeAnalyzerDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeAnalyzerDataMaxAggregateInputType
  }

  export type GetTradeAnalyzerDataAggregateType<T extends TradeAnalyzerDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTradeAnalyzerData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradeAnalyzerData[P]>
      : GetScalarType<T[P], AggregateTradeAnalyzerData[P]>
  }




  export type tradeAnalyzerDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tradeAnalyzerDataWhereInput
    orderBy?: tradeAnalyzerDataOrderByWithAggregationInput | tradeAnalyzerDataOrderByWithAggregationInput[]
    by: TradeAnalyzerDataScalarFieldEnum[] | TradeAnalyzerDataScalarFieldEnum
    having?: tradeAnalyzerDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeAnalyzerDataCountAggregateInputType | true
    _avg?: TradeAnalyzerDataAvgAggregateInputType
    _sum?: TradeAnalyzerDataSumAggregateInputType
    _min?: TradeAnalyzerDataMinAggregateInputType
    _max?: TradeAnalyzerDataMaxAggregateInputType
  }

  export type TradeAnalyzerDataGroupByOutputType = {
    id: string
    name: string | null
    position: string | null
    team: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    projectedNextOffseasonDynastyValue: JsonValue | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    jaxValue: number | null
    travValue: number | null
    joeValue: number | null
    consensusValue: number | null
    consensusVsMarketValueDiff: number | null
    _count: TradeAnalyzerDataCountAggregateOutputType | null
    _avg: TradeAnalyzerDataAvgAggregateOutputType | null
    _sum: TradeAnalyzerDataSumAggregateOutputType | null
    _min: TradeAnalyzerDataMinAggregateOutputType | null
    _max: TradeAnalyzerDataMaxAggregateOutputType | null
  }

  type GetTradeAnalyzerDataGroupByPayload<T extends tradeAnalyzerDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeAnalyzerDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeAnalyzerDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeAnalyzerDataGroupByOutputType[P]>
            : GetScalarType<T[P], TradeAnalyzerDataGroupByOutputType[P]>
        }
      >
    >


  export type tradeAnalyzerDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    jaxValue?: boolean
    travValue?: boolean
    joeValue?: boolean
    consensusValue?: boolean
    consensusVsMarketValueDiff?: boolean
  }, ExtArgs["result"]["tradeAnalyzerData"]>

  export type tradeAnalyzerDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    jaxValue?: boolean
    travValue?: boolean
    joeValue?: boolean
    consensusValue?: boolean
    consensusVsMarketValueDiff?: boolean
  }, ExtArgs["result"]["tradeAnalyzerData"]>

  export type tradeAnalyzerDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    jaxValue?: boolean
    travValue?: boolean
    joeValue?: boolean
    consensusValue?: boolean
    consensusVsMarketValueDiff?: boolean
  }, ExtArgs["result"]["tradeAnalyzerData"]>

  export type tradeAnalyzerDataSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    jaxValue?: boolean
    travValue?: boolean
    joeValue?: boolean
    consensusValue?: boolean
    consensusVsMarketValueDiff?: boolean
  }

  export type tradeAnalyzerDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position" | "team" | "marketValue" | "myValue" | "valueDiffBetweenMyValueAndMarketValue" | "PRPScore" | "projectedNextOffseasonDynastyValue" | "valueDifferenceBetweenCurrentMarketValueAndPNODV" | "PNODVScore" | "RVSScore" | "jaxValue" | "travValue" | "joeValue" | "consensusValue" | "consensusVsMarketValueDiff", ExtArgs["result"]["tradeAnalyzerData"]>

  export type $tradeAnalyzerDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tradeAnalyzerData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      position: string | null
      team: string | null
      marketValue: number | null
      myValue: number | null
      valueDiffBetweenMyValueAndMarketValue: number | null
      PRPScore: number | null
      projectedNextOffseasonDynastyValue: Prisma.JsonValue | null
      valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
      PNODVScore: number | null
      RVSScore: number | null
      jaxValue: number | null
      travValue: number | null
      joeValue: number | null
      consensusValue: number | null
      consensusVsMarketValueDiff: number | null
    }, ExtArgs["result"]["tradeAnalyzerData"]>
    composites: {}
  }

  type tradeAnalyzerDataGetPayload<S extends boolean | null | undefined | tradeAnalyzerDataDefaultArgs> = $Result.GetResult<Prisma.$tradeAnalyzerDataPayload, S>

  type tradeAnalyzerDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tradeAnalyzerDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeAnalyzerDataCountAggregateInputType | true
    }

  export interface tradeAnalyzerDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tradeAnalyzerData'], meta: { name: 'tradeAnalyzerData' } }
    /**
     * Find zero or one TradeAnalyzerData that matches the filter.
     * @param {tradeAnalyzerDataFindUniqueArgs} args - Arguments to find a TradeAnalyzerData
     * @example
     * // Get one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tradeAnalyzerDataFindUniqueArgs>(args: SelectSubset<T, tradeAnalyzerDataFindUniqueArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradeAnalyzerData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tradeAnalyzerDataFindUniqueOrThrowArgs} args - Arguments to find a TradeAnalyzerData
     * @example
     * // Get one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tradeAnalyzerDataFindUniqueOrThrowArgs>(args: SelectSubset<T, tradeAnalyzerDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeAnalyzerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataFindFirstArgs} args - Arguments to find a TradeAnalyzerData
     * @example
     * // Get one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tradeAnalyzerDataFindFirstArgs>(args?: SelectSubset<T, tradeAnalyzerDataFindFirstArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeAnalyzerData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataFindFirstOrThrowArgs} args - Arguments to find a TradeAnalyzerData
     * @example
     * // Get one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tradeAnalyzerDataFindFirstOrThrowArgs>(args?: SelectSubset<T, tradeAnalyzerDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradeAnalyzerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany()
     * 
     * // Get first 10 TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeAnalyzerDataWithIdOnly = await prisma.tradeAnalyzerData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tradeAnalyzerDataFindManyArgs>(args?: SelectSubset<T, tradeAnalyzerDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradeAnalyzerData.
     * @param {tradeAnalyzerDataCreateArgs} args - Arguments to create a TradeAnalyzerData.
     * @example
     * // Create one TradeAnalyzerData
     * const TradeAnalyzerData = await prisma.tradeAnalyzerData.create({
     *   data: {
     *     // ... data to create a TradeAnalyzerData
     *   }
     * })
     * 
     */
    create<T extends tradeAnalyzerDataCreateArgs>(args: SelectSubset<T, tradeAnalyzerDataCreateArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradeAnalyzerData.
     * @param {tradeAnalyzerDataCreateManyArgs} args - Arguments to create many TradeAnalyzerData.
     * @example
     * // Create many TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tradeAnalyzerDataCreateManyArgs>(args?: SelectSubset<T, tradeAnalyzerDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradeAnalyzerData and returns the data saved in the database.
     * @param {tradeAnalyzerDataCreateManyAndReturnArgs} args - Arguments to create many TradeAnalyzerData.
     * @example
     * // Create many TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradeAnalyzerData and only return the `id`
     * const tradeAnalyzerDataWithIdOnly = await prisma.tradeAnalyzerData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tradeAnalyzerDataCreateManyAndReturnArgs>(args?: SelectSubset<T, tradeAnalyzerDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradeAnalyzerData.
     * @param {tradeAnalyzerDataDeleteArgs} args - Arguments to delete one TradeAnalyzerData.
     * @example
     * // Delete one TradeAnalyzerData
     * const TradeAnalyzerData = await prisma.tradeAnalyzerData.delete({
     *   where: {
     *     // ... filter to delete one TradeAnalyzerData
     *   }
     * })
     * 
     */
    delete<T extends tradeAnalyzerDataDeleteArgs>(args: SelectSubset<T, tradeAnalyzerDataDeleteArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradeAnalyzerData.
     * @param {tradeAnalyzerDataUpdateArgs} args - Arguments to update one TradeAnalyzerData.
     * @example
     * // Update one TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tradeAnalyzerDataUpdateArgs>(args: SelectSubset<T, tradeAnalyzerDataUpdateArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradeAnalyzerData.
     * @param {tradeAnalyzerDataDeleteManyArgs} args - Arguments to filter TradeAnalyzerData to delete.
     * @example
     * // Delete a few TradeAnalyzerData
     * const { count } = await prisma.tradeAnalyzerData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tradeAnalyzerDataDeleteManyArgs>(args?: SelectSubset<T, tradeAnalyzerDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeAnalyzerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tradeAnalyzerDataUpdateManyArgs>(args: SelectSubset<T, tradeAnalyzerDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeAnalyzerData and returns the data updated in the database.
     * @param {tradeAnalyzerDataUpdateManyAndReturnArgs} args - Arguments to update many TradeAnalyzerData.
     * @example
     * // Update many TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradeAnalyzerData and only return the `id`
     * const tradeAnalyzerDataWithIdOnly = await prisma.tradeAnalyzerData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tradeAnalyzerDataUpdateManyAndReturnArgs>(args: SelectSubset<T, tradeAnalyzerDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradeAnalyzerData.
     * @param {tradeAnalyzerDataUpsertArgs} args - Arguments to update or create a TradeAnalyzerData.
     * @example
     * // Update or create a TradeAnalyzerData
     * const tradeAnalyzerData = await prisma.tradeAnalyzerData.upsert({
     *   create: {
     *     // ... data to create a TradeAnalyzerData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradeAnalyzerData we want to update
     *   }
     * })
     */
    upsert<T extends tradeAnalyzerDataUpsertArgs>(args: SelectSubset<T, tradeAnalyzerDataUpsertArgs<ExtArgs>>): Prisma__tradeAnalyzerDataClient<$Result.GetResult<Prisma.$tradeAnalyzerDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradeAnalyzerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataCountArgs} args - Arguments to filter TradeAnalyzerData to count.
     * @example
     * // Count the number of TradeAnalyzerData
     * const count = await prisma.tradeAnalyzerData.count({
     *   where: {
     *     // ... the filter for the TradeAnalyzerData we want to count
     *   }
     * })
    **/
    count<T extends tradeAnalyzerDataCountArgs>(
      args?: Subset<T, tradeAnalyzerDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeAnalyzerDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradeAnalyzerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAnalyzerDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAnalyzerDataAggregateArgs>(args: Subset<T, TradeAnalyzerDataAggregateArgs>): Prisma.PrismaPromise<GetTradeAnalyzerDataAggregateType<T>>

    /**
     * Group by TradeAnalyzerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeAnalyzerDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tradeAnalyzerDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tradeAnalyzerDataGroupByArgs['orderBy'] }
        : { orderBy?: tradeAnalyzerDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tradeAnalyzerDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeAnalyzerDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tradeAnalyzerData model
   */
  readonly fields: tradeAnalyzerDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tradeAnalyzerData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tradeAnalyzerDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tradeAnalyzerData model
   */
  interface tradeAnalyzerDataFieldRefs {
    readonly id: FieldRef<"tradeAnalyzerData", 'String'>
    readonly name: FieldRef<"tradeAnalyzerData", 'String'>
    readonly position: FieldRef<"tradeAnalyzerData", 'String'>
    readonly team: FieldRef<"tradeAnalyzerData", 'String'>
    readonly marketValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly myValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly valueDiffBetweenMyValueAndMarketValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly PRPScore: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly projectedNextOffseasonDynastyValue: FieldRef<"tradeAnalyzerData", 'Json'>
    readonly valueDifferenceBetweenCurrentMarketValueAndPNODV: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly PNODVScore: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly RVSScore: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly jaxValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly travValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly joeValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly consensusValue: FieldRef<"tradeAnalyzerData", 'Float'>
    readonly consensusVsMarketValueDiff: FieldRef<"tradeAnalyzerData", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * tradeAnalyzerData findUnique
   */
  export type tradeAnalyzerDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where: tradeAnalyzerDataWhereUniqueInput
  }

  /**
   * tradeAnalyzerData findUniqueOrThrow
   */
  export type tradeAnalyzerDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where: tradeAnalyzerDataWhereUniqueInput
  }

  /**
   * tradeAnalyzerData findFirst
   */
  export type tradeAnalyzerDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tradeAnalyzerData to fetch.
     */
    orderBy?: tradeAnalyzerDataOrderByWithRelationInput | tradeAnalyzerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tradeAnalyzerData.
     */
    cursor?: tradeAnalyzerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tradeAnalyzerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tradeAnalyzerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tradeAnalyzerData.
     */
    distinct?: TradeAnalyzerDataScalarFieldEnum | TradeAnalyzerDataScalarFieldEnum[]
  }

  /**
   * tradeAnalyzerData findFirstOrThrow
   */
  export type tradeAnalyzerDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tradeAnalyzerData to fetch.
     */
    orderBy?: tradeAnalyzerDataOrderByWithRelationInput | tradeAnalyzerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tradeAnalyzerData.
     */
    cursor?: tradeAnalyzerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tradeAnalyzerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tradeAnalyzerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tradeAnalyzerData.
     */
    distinct?: TradeAnalyzerDataScalarFieldEnum | TradeAnalyzerDataScalarFieldEnum[]
  }

  /**
   * tradeAnalyzerData findMany
   */
  export type tradeAnalyzerDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter, which tradeAnalyzerData to fetch.
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tradeAnalyzerData to fetch.
     */
    orderBy?: tradeAnalyzerDataOrderByWithRelationInput | tradeAnalyzerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tradeAnalyzerData.
     */
    cursor?: tradeAnalyzerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tradeAnalyzerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tradeAnalyzerData.
     */
    skip?: number
    distinct?: TradeAnalyzerDataScalarFieldEnum | TradeAnalyzerDataScalarFieldEnum[]
  }

  /**
   * tradeAnalyzerData create
   */
  export type tradeAnalyzerDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The data needed to create a tradeAnalyzerData.
     */
    data?: XOR<tradeAnalyzerDataCreateInput, tradeAnalyzerDataUncheckedCreateInput>
  }

  /**
   * tradeAnalyzerData createMany
   */
  export type tradeAnalyzerDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tradeAnalyzerData.
     */
    data: tradeAnalyzerDataCreateManyInput | tradeAnalyzerDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tradeAnalyzerData createManyAndReturn
   */
  export type tradeAnalyzerDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The data used to create many tradeAnalyzerData.
     */
    data: tradeAnalyzerDataCreateManyInput | tradeAnalyzerDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tradeAnalyzerData update
   */
  export type tradeAnalyzerDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The data needed to update a tradeAnalyzerData.
     */
    data: XOR<tradeAnalyzerDataUpdateInput, tradeAnalyzerDataUncheckedUpdateInput>
    /**
     * Choose, which tradeAnalyzerData to update.
     */
    where: tradeAnalyzerDataWhereUniqueInput
  }

  /**
   * tradeAnalyzerData updateMany
   */
  export type tradeAnalyzerDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tradeAnalyzerData.
     */
    data: XOR<tradeAnalyzerDataUpdateManyMutationInput, tradeAnalyzerDataUncheckedUpdateManyInput>
    /**
     * Filter which tradeAnalyzerData to update
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * Limit how many tradeAnalyzerData to update.
     */
    limit?: number
  }

  /**
   * tradeAnalyzerData updateManyAndReturn
   */
  export type tradeAnalyzerDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The data used to update tradeAnalyzerData.
     */
    data: XOR<tradeAnalyzerDataUpdateManyMutationInput, tradeAnalyzerDataUncheckedUpdateManyInput>
    /**
     * Filter which tradeAnalyzerData to update
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * Limit how many tradeAnalyzerData to update.
     */
    limit?: number
  }

  /**
   * tradeAnalyzerData upsert
   */
  export type tradeAnalyzerDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * The filter to search for the tradeAnalyzerData to update in case it exists.
     */
    where: tradeAnalyzerDataWhereUniqueInput
    /**
     * In case the tradeAnalyzerData found by the `where` argument doesn't exist, create a new tradeAnalyzerData with this data.
     */
    create: XOR<tradeAnalyzerDataCreateInput, tradeAnalyzerDataUncheckedCreateInput>
    /**
     * In case the tradeAnalyzerData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tradeAnalyzerDataUpdateInput, tradeAnalyzerDataUncheckedUpdateInput>
  }

  /**
   * tradeAnalyzerData delete
   */
  export type tradeAnalyzerDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
    /**
     * Filter which tradeAnalyzerData to delete.
     */
    where: tradeAnalyzerDataWhereUniqueInput
  }

  /**
   * tradeAnalyzerData deleteMany
   */
  export type tradeAnalyzerDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tradeAnalyzerData to delete
     */
    where?: tradeAnalyzerDataWhereInput
    /**
     * Limit how many tradeAnalyzerData to delete.
     */
    limit?: number
  }

  /**
   * tradeAnalyzerData without action
   */
  export type tradeAnalyzerDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tradeAnalyzerData
     */
    select?: tradeAnalyzerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeAnalyzerData
     */
    omit?: tradeAnalyzerDataOmit<ExtArgs> | null
  }


  /**
   * Model SleeperPlayer
   */

  export type AggregateSleeperPlayer = {
    _count: SleeperPlayerCountAggregateOutputType | null
    _min: SleeperPlayerMinAggregateOutputType | null
    _max: SleeperPlayerMaxAggregateOutputType | null
  }

  export type SleeperPlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    team: string | null
    position: string | null
  }

  export type SleeperPlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    team: string | null
    position: string | null
  }

  export type SleeperPlayerCountAggregateOutputType = {
    id: number
    name: number
    team: number
    position: number
    _all: number
  }


  export type SleeperPlayerMinAggregateInputType = {
    id?: true
    name?: true
    team?: true
    position?: true
  }

  export type SleeperPlayerMaxAggregateInputType = {
    id?: true
    name?: true
    team?: true
    position?: true
  }

  export type SleeperPlayerCountAggregateInputType = {
    id?: true
    name?: true
    team?: true
    position?: true
    _all?: true
  }

  export type SleeperPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SleeperPlayer to aggregate.
     */
    where?: SleeperPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleeperPlayers to fetch.
     */
    orderBy?: SleeperPlayerOrderByWithRelationInput | SleeperPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SleeperPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleeperPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleeperPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SleeperPlayers
    **/
    _count?: true | SleeperPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SleeperPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SleeperPlayerMaxAggregateInputType
  }

  export type GetSleeperPlayerAggregateType<T extends SleeperPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateSleeperPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSleeperPlayer[P]>
      : GetScalarType<T[P], AggregateSleeperPlayer[P]>
  }




  export type SleeperPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SleeperPlayerWhereInput
    orderBy?: SleeperPlayerOrderByWithAggregationInput | SleeperPlayerOrderByWithAggregationInput[]
    by: SleeperPlayerScalarFieldEnum[] | SleeperPlayerScalarFieldEnum
    having?: SleeperPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SleeperPlayerCountAggregateInputType | true
    _min?: SleeperPlayerMinAggregateInputType
    _max?: SleeperPlayerMaxAggregateInputType
  }

  export type SleeperPlayerGroupByOutputType = {
    id: string
    name: string
    team: string | null
    position: string | null
    _count: SleeperPlayerCountAggregateOutputType | null
    _min: SleeperPlayerMinAggregateOutputType | null
    _max: SleeperPlayerMaxAggregateOutputType | null
  }

  type GetSleeperPlayerGroupByPayload<T extends SleeperPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SleeperPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SleeperPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SleeperPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], SleeperPlayerGroupByOutputType[P]>
        }
      >
    >


  export type SleeperPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    team?: boolean
    position?: boolean
  }, ExtArgs["result"]["sleeperPlayer"]>

  export type SleeperPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    team?: boolean
    position?: boolean
  }, ExtArgs["result"]["sleeperPlayer"]>

  export type SleeperPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    team?: boolean
    position?: boolean
  }, ExtArgs["result"]["sleeperPlayer"]>

  export type SleeperPlayerSelectScalar = {
    id?: boolean
    name?: boolean
    team?: boolean
    position?: boolean
  }

  export type SleeperPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "team" | "position", ExtArgs["result"]["sleeperPlayer"]>

  export type $SleeperPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SleeperPlayer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      team: string | null
      position: string | null
    }, ExtArgs["result"]["sleeperPlayer"]>
    composites: {}
  }

  type SleeperPlayerGetPayload<S extends boolean | null | undefined | SleeperPlayerDefaultArgs> = $Result.GetResult<Prisma.$SleeperPlayerPayload, S>

  type SleeperPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SleeperPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SleeperPlayerCountAggregateInputType | true
    }

  export interface SleeperPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SleeperPlayer'], meta: { name: 'SleeperPlayer' } }
    /**
     * Find zero or one SleeperPlayer that matches the filter.
     * @param {SleeperPlayerFindUniqueArgs} args - Arguments to find a SleeperPlayer
     * @example
     * // Get one SleeperPlayer
     * const sleeperPlayer = await prisma.sleeperPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SleeperPlayerFindUniqueArgs>(args: SelectSubset<T, SleeperPlayerFindUniqueArgs<ExtArgs>>): Prisma__SleeperPlayerClient<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SleeperPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SleeperPlayerFindUniqueOrThrowArgs} args - Arguments to find a SleeperPlayer
     * @example
     * // Get one SleeperPlayer
     * const sleeperPlayer = await prisma.sleeperPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SleeperPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, SleeperPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SleeperPlayerClient<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SleeperPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleeperPlayerFindFirstArgs} args - Arguments to find a SleeperPlayer
     * @example
     * // Get one SleeperPlayer
     * const sleeperPlayer = await prisma.sleeperPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SleeperPlayerFindFirstArgs>(args?: SelectSubset<T, SleeperPlayerFindFirstArgs<ExtArgs>>): Prisma__SleeperPlayerClient<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SleeperPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleeperPlayerFindFirstOrThrowArgs} args - Arguments to find a SleeperPlayer
     * @example
     * // Get one SleeperPlayer
     * const sleeperPlayer = await prisma.sleeperPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SleeperPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, SleeperPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SleeperPlayerClient<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SleeperPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleeperPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SleeperPlayers
     * const sleeperPlayers = await prisma.sleeperPlayer.findMany()
     * 
     * // Get first 10 SleeperPlayers
     * const sleeperPlayers = await prisma.sleeperPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sleeperPlayerWithIdOnly = await prisma.sleeperPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SleeperPlayerFindManyArgs>(args?: SelectSubset<T, SleeperPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SleeperPlayer.
     * @param {SleeperPlayerCreateArgs} args - Arguments to create a SleeperPlayer.
     * @example
     * // Create one SleeperPlayer
     * const SleeperPlayer = await prisma.sleeperPlayer.create({
     *   data: {
     *     // ... data to create a SleeperPlayer
     *   }
     * })
     * 
     */
    create<T extends SleeperPlayerCreateArgs>(args: SelectSubset<T, SleeperPlayerCreateArgs<ExtArgs>>): Prisma__SleeperPlayerClient<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SleeperPlayers.
     * @param {SleeperPlayerCreateManyArgs} args - Arguments to create many SleeperPlayers.
     * @example
     * // Create many SleeperPlayers
     * const sleeperPlayer = await prisma.sleeperPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SleeperPlayerCreateManyArgs>(args?: SelectSubset<T, SleeperPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SleeperPlayers and returns the data saved in the database.
     * @param {SleeperPlayerCreateManyAndReturnArgs} args - Arguments to create many SleeperPlayers.
     * @example
     * // Create many SleeperPlayers
     * const sleeperPlayer = await prisma.sleeperPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SleeperPlayers and only return the `id`
     * const sleeperPlayerWithIdOnly = await prisma.sleeperPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SleeperPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, SleeperPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SleeperPlayer.
     * @param {SleeperPlayerDeleteArgs} args - Arguments to delete one SleeperPlayer.
     * @example
     * // Delete one SleeperPlayer
     * const SleeperPlayer = await prisma.sleeperPlayer.delete({
     *   where: {
     *     // ... filter to delete one SleeperPlayer
     *   }
     * })
     * 
     */
    delete<T extends SleeperPlayerDeleteArgs>(args: SelectSubset<T, SleeperPlayerDeleteArgs<ExtArgs>>): Prisma__SleeperPlayerClient<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SleeperPlayer.
     * @param {SleeperPlayerUpdateArgs} args - Arguments to update one SleeperPlayer.
     * @example
     * // Update one SleeperPlayer
     * const sleeperPlayer = await prisma.sleeperPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SleeperPlayerUpdateArgs>(args: SelectSubset<T, SleeperPlayerUpdateArgs<ExtArgs>>): Prisma__SleeperPlayerClient<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SleeperPlayers.
     * @param {SleeperPlayerDeleteManyArgs} args - Arguments to filter SleeperPlayers to delete.
     * @example
     * // Delete a few SleeperPlayers
     * const { count } = await prisma.sleeperPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SleeperPlayerDeleteManyArgs>(args?: SelectSubset<T, SleeperPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SleeperPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleeperPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SleeperPlayers
     * const sleeperPlayer = await prisma.sleeperPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SleeperPlayerUpdateManyArgs>(args: SelectSubset<T, SleeperPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SleeperPlayers and returns the data updated in the database.
     * @param {SleeperPlayerUpdateManyAndReturnArgs} args - Arguments to update many SleeperPlayers.
     * @example
     * // Update many SleeperPlayers
     * const sleeperPlayer = await prisma.sleeperPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SleeperPlayers and only return the `id`
     * const sleeperPlayerWithIdOnly = await prisma.sleeperPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SleeperPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, SleeperPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SleeperPlayer.
     * @param {SleeperPlayerUpsertArgs} args - Arguments to update or create a SleeperPlayer.
     * @example
     * // Update or create a SleeperPlayer
     * const sleeperPlayer = await prisma.sleeperPlayer.upsert({
     *   create: {
     *     // ... data to create a SleeperPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SleeperPlayer we want to update
     *   }
     * })
     */
    upsert<T extends SleeperPlayerUpsertArgs>(args: SelectSubset<T, SleeperPlayerUpsertArgs<ExtArgs>>): Prisma__SleeperPlayerClient<$Result.GetResult<Prisma.$SleeperPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SleeperPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleeperPlayerCountArgs} args - Arguments to filter SleeperPlayers to count.
     * @example
     * // Count the number of SleeperPlayers
     * const count = await prisma.sleeperPlayer.count({
     *   where: {
     *     // ... the filter for the SleeperPlayers we want to count
     *   }
     * })
    **/
    count<T extends SleeperPlayerCountArgs>(
      args?: Subset<T, SleeperPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SleeperPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SleeperPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleeperPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SleeperPlayerAggregateArgs>(args: Subset<T, SleeperPlayerAggregateArgs>): Prisma.PrismaPromise<GetSleeperPlayerAggregateType<T>>

    /**
     * Group by SleeperPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleeperPlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SleeperPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SleeperPlayerGroupByArgs['orderBy'] }
        : { orderBy?: SleeperPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SleeperPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSleeperPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SleeperPlayer model
   */
  readonly fields: SleeperPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SleeperPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SleeperPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SleeperPlayer model
   */
  interface SleeperPlayerFieldRefs {
    readonly id: FieldRef<"SleeperPlayer", 'String'>
    readonly name: FieldRef<"SleeperPlayer", 'String'>
    readonly team: FieldRef<"SleeperPlayer", 'String'>
    readonly position: FieldRef<"SleeperPlayer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SleeperPlayer findUnique
   */
  export type SleeperPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * Filter, which SleeperPlayer to fetch.
     */
    where: SleeperPlayerWhereUniqueInput
  }

  /**
   * SleeperPlayer findUniqueOrThrow
   */
  export type SleeperPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * Filter, which SleeperPlayer to fetch.
     */
    where: SleeperPlayerWhereUniqueInput
  }

  /**
   * SleeperPlayer findFirst
   */
  export type SleeperPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * Filter, which SleeperPlayer to fetch.
     */
    where?: SleeperPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleeperPlayers to fetch.
     */
    orderBy?: SleeperPlayerOrderByWithRelationInput | SleeperPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SleeperPlayers.
     */
    cursor?: SleeperPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleeperPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleeperPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SleeperPlayers.
     */
    distinct?: SleeperPlayerScalarFieldEnum | SleeperPlayerScalarFieldEnum[]
  }

  /**
   * SleeperPlayer findFirstOrThrow
   */
  export type SleeperPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * Filter, which SleeperPlayer to fetch.
     */
    where?: SleeperPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleeperPlayers to fetch.
     */
    orderBy?: SleeperPlayerOrderByWithRelationInput | SleeperPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SleeperPlayers.
     */
    cursor?: SleeperPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleeperPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleeperPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SleeperPlayers.
     */
    distinct?: SleeperPlayerScalarFieldEnum | SleeperPlayerScalarFieldEnum[]
  }

  /**
   * SleeperPlayer findMany
   */
  export type SleeperPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * Filter, which SleeperPlayers to fetch.
     */
    where?: SleeperPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleeperPlayers to fetch.
     */
    orderBy?: SleeperPlayerOrderByWithRelationInput | SleeperPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SleeperPlayers.
     */
    cursor?: SleeperPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleeperPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleeperPlayers.
     */
    skip?: number
    distinct?: SleeperPlayerScalarFieldEnum | SleeperPlayerScalarFieldEnum[]
  }

  /**
   * SleeperPlayer create
   */
  export type SleeperPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * The data needed to create a SleeperPlayer.
     */
    data: XOR<SleeperPlayerCreateInput, SleeperPlayerUncheckedCreateInput>
  }

  /**
   * SleeperPlayer createMany
   */
  export type SleeperPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SleeperPlayers.
     */
    data: SleeperPlayerCreateManyInput | SleeperPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SleeperPlayer createManyAndReturn
   */
  export type SleeperPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many SleeperPlayers.
     */
    data: SleeperPlayerCreateManyInput | SleeperPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SleeperPlayer update
   */
  export type SleeperPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * The data needed to update a SleeperPlayer.
     */
    data: XOR<SleeperPlayerUpdateInput, SleeperPlayerUncheckedUpdateInput>
    /**
     * Choose, which SleeperPlayer to update.
     */
    where: SleeperPlayerWhereUniqueInput
  }

  /**
   * SleeperPlayer updateMany
   */
  export type SleeperPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SleeperPlayers.
     */
    data: XOR<SleeperPlayerUpdateManyMutationInput, SleeperPlayerUncheckedUpdateManyInput>
    /**
     * Filter which SleeperPlayers to update
     */
    where?: SleeperPlayerWhereInput
    /**
     * Limit how many SleeperPlayers to update.
     */
    limit?: number
  }

  /**
   * SleeperPlayer updateManyAndReturn
   */
  export type SleeperPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * The data used to update SleeperPlayers.
     */
    data: XOR<SleeperPlayerUpdateManyMutationInput, SleeperPlayerUncheckedUpdateManyInput>
    /**
     * Filter which SleeperPlayers to update
     */
    where?: SleeperPlayerWhereInput
    /**
     * Limit how many SleeperPlayers to update.
     */
    limit?: number
  }

  /**
   * SleeperPlayer upsert
   */
  export type SleeperPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * The filter to search for the SleeperPlayer to update in case it exists.
     */
    where: SleeperPlayerWhereUniqueInput
    /**
     * In case the SleeperPlayer found by the `where` argument doesn't exist, create a new SleeperPlayer with this data.
     */
    create: XOR<SleeperPlayerCreateInput, SleeperPlayerUncheckedCreateInput>
    /**
     * In case the SleeperPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SleeperPlayerUpdateInput, SleeperPlayerUncheckedUpdateInput>
  }

  /**
   * SleeperPlayer delete
   */
  export type SleeperPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
    /**
     * Filter which SleeperPlayer to delete.
     */
    where: SleeperPlayerWhereUniqueInput
  }

  /**
   * SleeperPlayer deleteMany
   */
  export type SleeperPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SleeperPlayers to delete
     */
    where?: SleeperPlayerWhereInput
    /**
     * Limit how many SleeperPlayers to delete.
     */
    limit?: number
  }

  /**
   * SleeperPlayer without action
   */
  export type SleeperPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleeperPlayer
     */
    select?: SleeperPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleeperPlayer
     */
    omit?: SleeperPlayerOmit<ExtArgs> | null
  }


  /**
   * Model AllPlayerData
   */

  export type AggregateAllPlayerData = {
    _count: AllPlayerDataCountAggregateOutputType | null
    _avg: AllPlayerDataAvgAggregateOutputType | null
    _sum: AllPlayerDataSumAggregateOutputType | null
    _min: AllPlayerDataMinAggregateOutputType | null
    _max: AllPlayerDataMaxAggregateOutputType | null
  }

  export type AllPlayerDataAvgAggregateOutputType = {
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
  }

  export type AllPlayerDataSumAggregateOutputType = {
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
  }

  export type AllPlayerDataMinAggregateOutputType = {
    id: string | null
    name: string | null
    team: string | null
    position: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
  }

  export type AllPlayerDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    team: string | null
    position: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
  }

  export type AllPlayerDataCountAggregateOutputType = {
    id: number
    name: number
    team: number
    position: number
    marketValue: number
    myValue: number
    valueDiffBetweenMyValueAndMarketValue: number
    PRPScore: number
    projectedNextOffseasonDynastyValue: number
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number
    PNODVScore: number
    RVSScore: number
    tradeAnalyzerDataObjectsArray: number
    rawData: number
    _all: number
  }


  export type AllPlayerDataAvgAggregateInputType = {
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
  }

  export type AllPlayerDataSumAggregateInputType = {
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
  }

  export type AllPlayerDataMinAggregateInputType = {
    id?: true
    name?: true
    team?: true
    position?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
  }

  export type AllPlayerDataMaxAggregateInputType = {
    id?: true
    name?: true
    team?: true
    position?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
  }

  export type AllPlayerDataCountAggregateInputType = {
    id?: true
    name?: true
    team?: true
    position?: true
    marketValue?: true
    myValue?: true
    valueDiffBetweenMyValueAndMarketValue?: true
    PRPScore?: true
    projectedNextOffseasonDynastyValue?: true
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: true
    PNODVScore?: true
    RVSScore?: true
    tradeAnalyzerDataObjectsArray?: true
    rawData?: true
    _all?: true
  }

  export type AllPlayerDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllPlayerData to aggregate.
     */
    where?: AllPlayerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllPlayerData to fetch.
     */
    orderBy?: AllPlayerDataOrderByWithRelationInput | AllPlayerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllPlayerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllPlayerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllPlayerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllPlayerData
    **/
    _count?: true | AllPlayerDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllPlayerDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllPlayerDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllPlayerDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllPlayerDataMaxAggregateInputType
  }

  export type GetAllPlayerDataAggregateType<T extends AllPlayerDataAggregateArgs> = {
        [P in keyof T & keyof AggregateAllPlayerData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllPlayerData[P]>
      : GetScalarType<T[P], AggregateAllPlayerData[P]>
  }




  export type AllPlayerDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllPlayerDataWhereInput
    orderBy?: AllPlayerDataOrderByWithAggregationInput | AllPlayerDataOrderByWithAggregationInput[]
    by: AllPlayerDataScalarFieldEnum[] | AllPlayerDataScalarFieldEnum
    having?: AllPlayerDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllPlayerDataCountAggregateInputType | true
    _avg?: AllPlayerDataAvgAggregateInputType
    _sum?: AllPlayerDataSumAggregateInputType
    _min?: AllPlayerDataMinAggregateInputType
    _max?: AllPlayerDataMaxAggregateInputType
  }

  export type AllPlayerDataGroupByOutputType = {
    id: string
    name: string | null
    team: string | null
    position: string | null
    marketValue: number | null
    myValue: number | null
    valueDiffBetweenMyValueAndMarketValue: number | null
    PRPScore: number | null
    projectedNextOffseasonDynastyValue: JsonValue | null
    valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
    PNODVScore: number | null
    RVSScore: number | null
    tradeAnalyzerDataObjectsArray: JsonValue | null
    rawData: JsonValue | null
    _count: AllPlayerDataCountAggregateOutputType | null
    _avg: AllPlayerDataAvgAggregateOutputType | null
    _sum: AllPlayerDataSumAggregateOutputType | null
    _min: AllPlayerDataMinAggregateOutputType | null
    _max: AllPlayerDataMaxAggregateOutputType | null
  }

  type GetAllPlayerDataGroupByPayload<T extends AllPlayerDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllPlayerDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllPlayerDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllPlayerDataGroupByOutputType[P]>
            : GetScalarType<T[P], AllPlayerDataGroupByOutputType[P]>
        }
      >
    >


  export type AllPlayerDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    team?: boolean
    position?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    tradeAnalyzerDataObjectsArray?: boolean
    rawData?: boolean
  }, ExtArgs["result"]["allPlayerData"]>

  export type AllPlayerDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    team?: boolean
    position?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    tradeAnalyzerDataObjectsArray?: boolean
    rawData?: boolean
  }, ExtArgs["result"]["allPlayerData"]>

  export type AllPlayerDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    team?: boolean
    position?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    tradeAnalyzerDataObjectsArray?: boolean
    rawData?: boolean
  }, ExtArgs["result"]["allPlayerData"]>

  export type AllPlayerDataSelectScalar = {
    id?: boolean
    name?: boolean
    team?: boolean
    position?: boolean
    marketValue?: boolean
    myValue?: boolean
    valueDiffBetweenMyValueAndMarketValue?: boolean
    PRPScore?: boolean
    projectedNextOffseasonDynastyValue?: boolean
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: boolean
    PNODVScore?: boolean
    RVSScore?: boolean
    tradeAnalyzerDataObjectsArray?: boolean
    rawData?: boolean
  }

  export type AllPlayerDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "team" | "position" | "marketValue" | "myValue" | "valueDiffBetweenMyValueAndMarketValue" | "PRPScore" | "projectedNextOffseasonDynastyValue" | "valueDifferenceBetweenCurrentMarketValueAndPNODV" | "PNODVScore" | "RVSScore" | "tradeAnalyzerDataObjectsArray" | "rawData", ExtArgs["result"]["allPlayerData"]>

  export type $AllPlayerDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllPlayerData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      team: string | null
      position: string | null
      marketValue: number | null
      myValue: number | null
      valueDiffBetweenMyValueAndMarketValue: number | null
      PRPScore: number | null
      projectedNextOffseasonDynastyValue: Prisma.JsonValue | null
      valueDifferenceBetweenCurrentMarketValueAndPNODV: number | null
      PNODVScore: number | null
      RVSScore: number | null
      tradeAnalyzerDataObjectsArray: Prisma.JsonValue | null
      rawData: Prisma.JsonValue | null
    }, ExtArgs["result"]["allPlayerData"]>
    composites: {}
  }

  type AllPlayerDataGetPayload<S extends boolean | null | undefined | AllPlayerDataDefaultArgs> = $Result.GetResult<Prisma.$AllPlayerDataPayload, S>

  type AllPlayerDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllPlayerDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllPlayerDataCountAggregateInputType | true
    }

  export interface AllPlayerDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllPlayerData'], meta: { name: 'AllPlayerData' } }
    /**
     * Find zero or one AllPlayerData that matches the filter.
     * @param {AllPlayerDataFindUniqueArgs} args - Arguments to find a AllPlayerData
     * @example
     * // Get one AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllPlayerDataFindUniqueArgs>(args: SelectSubset<T, AllPlayerDataFindUniqueArgs<ExtArgs>>): Prisma__AllPlayerDataClient<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AllPlayerData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllPlayerDataFindUniqueOrThrowArgs} args - Arguments to find a AllPlayerData
     * @example
     * // Get one AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllPlayerDataFindUniqueOrThrowArgs>(args: SelectSubset<T, AllPlayerDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllPlayerDataClient<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllPlayerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllPlayerDataFindFirstArgs} args - Arguments to find a AllPlayerData
     * @example
     * // Get one AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllPlayerDataFindFirstArgs>(args?: SelectSubset<T, AllPlayerDataFindFirstArgs<ExtArgs>>): Prisma__AllPlayerDataClient<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllPlayerData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllPlayerDataFindFirstOrThrowArgs} args - Arguments to find a AllPlayerData
     * @example
     * // Get one AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllPlayerDataFindFirstOrThrowArgs>(args?: SelectSubset<T, AllPlayerDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllPlayerDataClient<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AllPlayerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllPlayerDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.findMany()
     * 
     * // Get first 10 AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allPlayerDataWithIdOnly = await prisma.allPlayerData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllPlayerDataFindManyArgs>(args?: SelectSubset<T, AllPlayerDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AllPlayerData.
     * @param {AllPlayerDataCreateArgs} args - Arguments to create a AllPlayerData.
     * @example
     * // Create one AllPlayerData
     * const AllPlayerData = await prisma.allPlayerData.create({
     *   data: {
     *     // ... data to create a AllPlayerData
     *   }
     * })
     * 
     */
    create<T extends AllPlayerDataCreateArgs>(args: SelectSubset<T, AllPlayerDataCreateArgs<ExtArgs>>): Prisma__AllPlayerDataClient<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AllPlayerData.
     * @param {AllPlayerDataCreateManyArgs} args - Arguments to create many AllPlayerData.
     * @example
     * // Create many AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllPlayerDataCreateManyArgs>(args?: SelectSubset<T, AllPlayerDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AllPlayerData and returns the data saved in the database.
     * @param {AllPlayerDataCreateManyAndReturnArgs} args - Arguments to create many AllPlayerData.
     * @example
     * // Create many AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AllPlayerData and only return the `id`
     * const allPlayerDataWithIdOnly = await prisma.allPlayerData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllPlayerDataCreateManyAndReturnArgs>(args?: SelectSubset<T, AllPlayerDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AllPlayerData.
     * @param {AllPlayerDataDeleteArgs} args - Arguments to delete one AllPlayerData.
     * @example
     * // Delete one AllPlayerData
     * const AllPlayerData = await prisma.allPlayerData.delete({
     *   where: {
     *     // ... filter to delete one AllPlayerData
     *   }
     * })
     * 
     */
    delete<T extends AllPlayerDataDeleteArgs>(args: SelectSubset<T, AllPlayerDataDeleteArgs<ExtArgs>>): Prisma__AllPlayerDataClient<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AllPlayerData.
     * @param {AllPlayerDataUpdateArgs} args - Arguments to update one AllPlayerData.
     * @example
     * // Update one AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllPlayerDataUpdateArgs>(args: SelectSubset<T, AllPlayerDataUpdateArgs<ExtArgs>>): Prisma__AllPlayerDataClient<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AllPlayerData.
     * @param {AllPlayerDataDeleteManyArgs} args - Arguments to filter AllPlayerData to delete.
     * @example
     * // Delete a few AllPlayerData
     * const { count } = await prisma.allPlayerData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllPlayerDataDeleteManyArgs>(args?: SelectSubset<T, AllPlayerDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllPlayerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllPlayerDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllPlayerDataUpdateManyArgs>(args: SelectSubset<T, AllPlayerDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllPlayerData and returns the data updated in the database.
     * @param {AllPlayerDataUpdateManyAndReturnArgs} args - Arguments to update many AllPlayerData.
     * @example
     * // Update many AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AllPlayerData and only return the `id`
     * const allPlayerDataWithIdOnly = await prisma.allPlayerData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllPlayerDataUpdateManyAndReturnArgs>(args: SelectSubset<T, AllPlayerDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AllPlayerData.
     * @param {AllPlayerDataUpsertArgs} args - Arguments to update or create a AllPlayerData.
     * @example
     * // Update or create a AllPlayerData
     * const allPlayerData = await prisma.allPlayerData.upsert({
     *   create: {
     *     // ... data to create a AllPlayerData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllPlayerData we want to update
     *   }
     * })
     */
    upsert<T extends AllPlayerDataUpsertArgs>(args: SelectSubset<T, AllPlayerDataUpsertArgs<ExtArgs>>): Prisma__AllPlayerDataClient<$Result.GetResult<Prisma.$AllPlayerDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AllPlayerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllPlayerDataCountArgs} args - Arguments to filter AllPlayerData to count.
     * @example
     * // Count the number of AllPlayerData
     * const count = await prisma.allPlayerData.count({
     *   where: {
     *     // ... the filter for the AllPlayerData we want to count
     *   }
     * })
    **/
    count<T extends AllPlayerDataCountArgs>(
      args?: Subset<T, AllPlayerDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllPlayerDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllPlayerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllPlayerDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllPlayerDataAggregateArgs>(args: Subset<T, AllPlayerDataAggregateArgs>): Prisma.PrismaPromise<GetAllPlayerDataAggregateType<T>>

    /**
     * Group by AllPlayerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllPlayerDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllPlayerDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllPlayerDataGroupByArgs['orderBy'] }
        : { orderBy?: AllPlayerDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllPlayerDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllPlayerDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllPlayerData model
   */
  readonly fields: AllPlayerDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllPlayerData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllPlayerDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AllPlayerData model
   */
  interface AllPlayerDataFieldRefs {
    readonly id: FieldRef<"AllPlayerData", 'String'>
    readonly name: FieldRef<"AllPlayerData", 'String'>
    readonly team: FieldRef<"AllPlayerData", 'String'>
    readonly position: FieldRef<"AllPlayerData", 'String'>
    readonly marketValue: FieldRef<"AllPlayerData", 'Float'>
    readonly myValue: FieldRef<"AllPlayerData", 'Float'>
    readonly valueDiffBetweenMyValueAndMarketValue: FieldRef<"AllPlayerData", 'Float'>
    readonly PRPScore: FieldRef<"AllPlayerData", 'Float'>
    readonly projectedNextOffseasonDynastyValue: FieldRef<"AllPlayerData", 'Json'>
    readonly valueDifferenceBetweenCurrentMarketValueAndPNODV: FieldRef<"AllPlayerData", 'Float'>
    readonly PNODVScore: FieldRef<"AllPlayerData", 'Float'>
    readonly RVSScore: FieldRef<"AllPlayerData", 'Float'>
    readonly tradeAnalyzerDataObjectsArray: FieldRef<"AllPlayerData", 'Json'>
    readonly rawData: FieldRef<"AllPlayerData", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AllPlayerData findUnique
   */
  export type AllPlayerDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * Filter, which AllPlayerData to fetch.
     */
    where: AllPlayerDataWhereUniqueInput
  }

  /**
   * AllPlayerData findUniqueOrThrow
   */
  export type AllPlayerDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * Filter, which AllPlayerData to fetch.
     */
    where: AllPlayerDataWhereUniqueInput
  }

  /**
   * AllPlayerData findFirst
   */
  export type AllPlayerDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * Filter, which AllPlayerData to fetch.
     */
    where?: AllPlayerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllPlayerData to fetch.
     */
    orderBy?: AllPlayerDataOrderByWithRelationInput | AllPlayerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllPlayerData.
     */
    cursor?: AllPlayerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllPlayerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllPlayerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllPlayerData.
     */
    distinct?: AllPlayerDataScalarFieldEnum | AllPlayerDataScalarFieldEnum[]
  }

  /**
   * AllPlayerData findFirstOrThrow
   */
  export type AllPlayerDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * Filter, which AllPlayerData to fetch.
     */
    where?: AllPlayerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllPlayerData to fetch.
     */
    orderBy?: AllPlayerDataOrderByWithRelationInput | AllPlayerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllPlayerData.
     */
    cursor?: AllPlayerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllPlayerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllPlayerData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllPlayerData.
     */
    distinct?: AllPlayerDataScalarFieldEnum | AllPlayerDataScalarFieldEnum[]
  }

  /**
   * AllPlayerData findMany
   */
  export type AllPlayerDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * Filter, which AllPlayerData to fetch.
     */
    where?: AllPlayerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllPlayerData to fetch.
     */
    orderBy?: AllPlayerDataOrderByWithRelationInput | AllPlayerDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllPlayerData.
     */
    cursor?: AllPlayerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllPlayerData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllPlayerData.
     */
    skip?: number
    distinct?: AllPlayerDataScalarFieldEnum | AllPlayerDataScalarFieldEnum[]
  }

  /**
   * AllPlayerData create
   */
  export type AllPlayerDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * The data needed to create a AllPlayerData.
     */
    data?: XOR<AllPlayerDataCreateInput, AllPlayerDataUncheckedCreateInput>
  }

  /**
   * AllPlayerData createMany
   */
  export type AllPlayerDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllPlayerData.
     */
    data: AllPlayerDataCreateManyInput | AllPlayerDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllPlayerData createManyAndReturn
   */
  export type AllPlayerDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * The data used to create many AllPlayerData.
     */
    data: AllPlayerDataCreateManyInput | AllPlayerDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllPlayerData update
   */
  export type AllPlayerDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * The data needed to update a AllPlayerData.
     */
    data: XOR<AllPlayerDataUpdateInput, AllPlayerDataUncheckedUpdateInput>
    /**
     * Choose, which AllPlayerData to update.
     */
    where: AllPlayerDataWhereUniqueInput
  }

  /**
   * AllPlayerData updateMany
   */
  export type AllPlayerDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllPlayerData.
     */
    data: XOR<AllPlayerDataUpdateManyMutationInput, AllPlayerDataUncheckedUpdateManyInput>
    /**
     * Filter which AllPlayerData to update
     */
    where?: AllPlayerDataWhereInput
    /**
     * Limit how many AllPlayerData to update.
     */
    limit?: number
  }

  /**
   * AllPlayerData updateManyAndReturn
   */
  export type AllPlayerDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * The data used to update AllPlayerData.
     */
    data: XOR<AllPlayerDataUpdateManyMutationInput, AllPlayerDataUncheckedUpdateManyInput>
    /**
     * Filter which AllPlayerData to update
     */
    where?: AllPlayerDataWhereInput
    /**
     * Limit how many AllPlayerData to update.
     */
    limit?: number
  }

  /**
   * AllPlayerData upsert
   */
  export type AllPlayerDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * The filter to search for the AllPlayerData to update in case it exists.
     */
    where: AllPlayerDataWhereUniqueInput
    /**
     * In case the AllPlayerData found by the `where` argument doesn't exist, create a new AllPlayerData with this data.
     */
    create: XOR<AllPlayerDataCreateInput, AllPlayerDataUncheckedCreateInput>
    /**
     * In case the AllPlayerData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllPlayerDataUpdateInput, AllPlayerDataUncheckedUpdateInput>
  }

  /**
   * AllPlayerData delete
   */
  export type AllPlayerDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
    /**
     * Filter which AllPlayerData to delete.
     */
    where: AllPlayerDataWhereUniqueInput
  }

  /**
   * AllPlayerData deleteMany
   */
  export type AllPlayerDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllPlayerData to delete
     */
    where?: AllPlayerDataWhereInput
    /**
     * Limit how many AllPlayerData to delete.
     */
    limit?: number
  }

  /**
   * AllPlayerData without action
   */
  export type AllPlayerDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllPlayerData
     */
    select?: AllPlayerDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllPlayerData
     */
    omit?: AllPlayerDataOmit<ExtArgs> | null
  }


  /**
   * Model UNScorePlayer
   */

  export type AggregateUNScorePlayer = {
    _count: UNScorePlayerCountAggregateOutputType | null
    _avg: UNScorePlayerAvgAggregateOutputType | null
    _sum: UNScorePlayerSumAggregateOutputType | null
    _min: UNScorePlayerMinAggregateOutputType | null
    _max: UNScorePlayerMaxAggregateOutputType | null
  }

  export type UNScorePlayerAvgAggregateOutputType = {
    unScore: number | null
    height: number | null
    weight: number | null
    draftRound: number | null
    draftPick: number | null
    careerSlotPercentage: number | null
    careerWidePercentage: number | null
    highestContestedTargetPercent: number | null
  }

  export type UNScorePlayerSumAggregateOutputType = {
    unScore: number | null
    height: number | null
    weight: number | null
    draftRound: number | null
    draftPick: number | null
    careerSlotPercentage: number | null
    careerWidePercentage: number | null
    highestContestedTargetPercent: number | null
  }

  export type UNScorePlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    class: string | null
    unScore: number | null
    height: number | null
    weight: number | null
    draftRound: number | null
    draftPick: number | null
    careerSlotPercentage: number | null
    careerWidePercentage: number | null
    highestContestedTargetPercent: number | null
  }

  export type UNScorePlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    class: string | null
    unScore: number | null
    height: number | null
    weight: number | null
    draftRound: number | null
    draftPick: number | null
    careerSlotPercentage: number | null
    careerWidePercentage: number | null
    highestContestedTargetPercent: number | null
  }

  export type UNScorePlayerCountAggregateOutputType = {
    id: number
    name: number
    class: number
    unScore: number
    height: number
    weight: number
    draftRound: number
    draftPick: number
    careerSlotPercentage: number
    careerWidePercentage: number
    highestContestedTargetPercent: number
    careerAveragedStats: number
    topModelComps: number
    rawData: number
    _all: number
  }


  export type UNScorePlayerAvgAggregateInputType = {
    unScore?: true
    height?: true
    weight?: true
    draftRound?: true
    draftPick?: true
    careerSlotPercentage?: true
    careerWidePercentage?: true
    highestContestedTargetPercent?: true
  }

  export type UNScorePlayerSumAggregateInputType = {
    unScore?: true
    height?: true
    weight?: true
    draftRound?: true
    draftPick?: true
    careerSlotPercentage?: true
    careerWidePercentage?: true
    highestContestedTargetPercent?: true
  }

  export type UNScorePlayerMinAggregateInputType = {
    id?: true
    name?: true
    class?: true
    unScore?: true
    height?: true
    weight?: true
    draftRound?: true
    draftPick?: true
    careerSlotPercentage?: true
    careerWidePercentage?: true
    highestContestedTargetPercent?: true
  }

  export type UNScorePlayerMaxAggregateInputType = {
    id?: true
    name?: true
    class?: true
    unScore?: true
    height?: true
    weight?: true
    draftRound?: true
    draftPick?: true
    careerSlotPercentage?: true
    careerWidePercentage?: true
    highestContestedTargetPercent?: true
  }

  export type UNScorePlayerCountAggregateInputType = {
    id?: true
    name?: true
    class?: true
    unScore?: true
    height?: true
    weight?: true
    draftRound?: true
    draftPick?: true
    careerSlotPercentage?: true
    careerWidePercentage?: true
    highestContestedTargetPercent?: true
    careerAveragedStats?: true
    topModelComps?: true
    rawData?: true
    _all?: true
  }

  export type UNScorePlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UNScorePlayer to aggregate.
     */
    where?: UNScorePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UNScorePlayers to fetch.
     */
    orderBy?: UNScorePlayerOrderByWithRelationInput | UNScorePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UNScorePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UNScorePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UNScorePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UNScorePlayers
    **/
    _count?: true | UNScorePlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UNScorePlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UNScorePlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UNScorePlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UNScorePlayerMaxAggregateInputType
  }

  export type GetUNScorePlayerAggregateType<T extends UNScorePlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateUNScorePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUNScorePlayer[P]>
      : GetScalarType<T[P], AggregateUNScorePlayer[P]>
  }




  export type UNScorePlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UNScorePlayerWhereInput
    orderBy?: UNScorePlayerOrderByWithAggregationInput | UNScorePlayerOrderByWithAggregationInput[]
    by: UNScorePlayerScalarFieldEnum[] | UNScorePlayerScalarFieldEnum
    having?: UNScorePlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UNScorePlayerCountAggregateInputType | true
    _avg?: UNScorePlayerAvgAggregateInputType
    _sum?: UNScorePlayerSumAggregateInputType
    _min?: UNScorePlayerMinAggregateInputType
    _max?: UNScorePlayerMaxAggregateInputType
  }

  export type UNScorePlayerGroupByOutputType = {
    id: string
    name: string
    class: string | null
    unScore: number | null
    height: number | null
    weight: number | null
    draftRound: number | null
    draftPick: number | null
    careerSlotPercentage: number | null
    careerWidePercentage: number | null
    highestContestedTargetPercent: number | null
    careerAveragedStats: JsonValue | null
    topModelComps: JsonValue | null
    rawData: JsonValue | null
    _count: UNScorePlayerCountAggregateOutputType | null
    _avg: UNScorePlayerAvgAggregateOutputType | null
    _sum: UNScorePlayerSumAggregateOutputType | null
    _min: UNScorePlayerMinAggregateOutputType | null
    _max: UNScorePlayerMaxAggregateOutputType | null
  }

  type GetUNScorePlayerGroupByPayload<T extends UNScorePlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UNScorePlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UNScorePlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UNScorePlayerGroupByOutputType[P]>
            : GetScalarType<T[P], UNScorePlayerGroupByOutputType[P]>
        }
      >
    >


  export type UNScorePlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    unScore?: boolean
    height?: boolean
    weight?: boolean
    draftRound?: boolean
    draftPick?: boolean
    careerSlotPercentage?: boolean
    careerWidePercentage?: boolean
    highestContestedTargetPercent?: boolean
    careerAveragedStats?: boolean
    topModelComps?: boolean
    rawData?: boolean
  }, ExtArgs["result"]["uNScorePlayer"]>

  export type UNScorePlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    unScore?: boolean
    height?: boolean
    weight?: boolean
    draftRound?: boolean
    draftPick?: boolean
    careerSlotPercentage?: boolean
    careerWidePercentage?: boolean
    highestContestedTargetPercent?: boolean
    careerAveragedStats?: boolean
    topModelComps?: boolean
    rawData?: boolean
  }, ExtArgs["result"]["uNScorePlayer"]>

  export type UNScorePlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    unScore?: boolean
    height?: boolean
    weight?: boolean
    draftRound?: boolean
    draftPick?: boolean
    careerSlotPercentage?: boolean
    careerWidePercentage?: boolean
    highestContestedTargetPercent?: boolean
    careerAveragedStats?: boolean
    topModelComps?: boolean
    rawData?: boolean
  }, ExtArgs["result"]["uNScorePlayer"]>

  export type UNScorePlayerSelectScalar = {
    id?: boolean
    name?: boolean
    class?: boolean
    unScore?: boolean
    height?: boolean
    weight?: boolean
    draftRound?: boolean
    draftPick?: boolean
    careerSlotPercentage?: boolean
    careerWidePercentage?: boolean
    highestContestedTargetPercent?: boolean
    careerAveragedStats?: boolean
    topModelComps?: boolean
    rawData?: boolean
  }

  export type UNScorePlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "class" | "unScore" | "height" | "weight" | "draftRound" | "draftPick" | "careerSlotPercentage" | "careerWidePercentage" | "highestContestedTargetPercent" | "careerAveragedStats" | "topModelComps" | "rawData", ExtArgs["result"]["uNScorePlayer"]>

  export type $UNScorePlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UNScorePlayer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      class: string | null
      unScore: number | null
      height: number | null
      weight: number | null
      draftRound: number | null
      draftPick: number | null
      careerSlotPercentage: number | null
      careerWidePercentage: number | null
      highestContestedTargetPercent: number | null
      careerAveragedStats: Prisma.JsonValue | null
      topModelComps: Prisma.JsonValue | null
      rawData: Prisma.JsonValue | null
    }, ExtArgs["result"]["uNScorePlayer"]>
    composites: {}
  }

  type UNScorePlayerGetPayload<S extends boolean | null | undefined | UNScorePlayerDefaultArgs> = $Result.GetResult<Prisma.$UNScorePlayerPayload, S>

  type UNScorePlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UNScorePlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UNScorePlayerCountAggregateInputType | true
    }

  export interface UNScorePlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UNScorePlayer'], meta: { name: 'UNScorePlayer' } }
    /**
     * Find zero or one UNScorePlayer that matches the filter.
     * @param {UNScorePlayerFindUniqueArgs} args - Arguments to find a UNScorePlayer
     * @example
     * // Get one UNScorePlayer
     * const uNScorePlayer = await prisma.uNScorePlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UNScorePlayerFindUniqueArgs>(args: SelectSubset<T, UNScorePlayerFindUniqueArgs<ExtArgs>>): Prisma__UNScorePlayerClient<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UNScorePlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UNScorePlayerFindUniqueOrThrowArgs} args - Arguments to find a UNScorePlayer
     * @example
     * // Get one UNScorePlayer
     * const uNScorePlayer = await prisma.uNScorePlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UNScorePlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, UNScorePlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UNScorePlayerClient<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UNScorePlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UNScorePlayerFindFirstArgs} args - Arguments to find a UNScorePlayer
     * @example
     * // Get one UNScorePlayer
     * const uNScorePlayer = await prisma.uNScorePlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UNScorePlayerFindFirstArgs>(args?: SelectSubset<T, UNScorePlayerFindFirstArgs<ExtArgs>>): Prisma__UNScorePlayerClient<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UNScorePlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UNScorePlayerFindFirstOrThrowArgs} args - Arguments to find a UNScorePlayer
     * @example
     * // Get one UNScorePlayer
     * const uNScorePlayer = await prisma.uNScorePlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UNScorePlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, UNScorePlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UNScorePlayerClient<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UNScorePlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UNScorePlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UNScorePlayers
     * const uNScorePlayers = await prisma.uNScorePlayer.findMany()
     * 
     * // Get first 10 UNScorePlayers
     * const uNScorePlayers = await prisma.uNScorePlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uNScorePlayerWithIdOnly = await prisma.uNScorePlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UNScorePlayerFindManyArgs>(args?: SelectSubset<T, UNScorePlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UNScorePlayer.
     * @param {UNScorePlayerCreateArgs} args - Arguments to create a UNScorePlayer.
     * @example
     * // Create one UNScorePlayer
     * const UNScorePlayer = await prisma.uNScorePlayer.create({
     *   data: {
     *     // ... data to create a UNScorePlayer
     *   }
     * })
     * 
     */
    create<T extends UNScorePlayerCreateArgs>(args: SelectSubset<T, UNScorePlayerCreateArgs<ExtArgs>>): Prisma__UNScorePlayerClient<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UNScorePlayers.
     * @param {UNScorePlayerCreateManyArgs} args - Arguments to create many UNScorePlayers.
     * @example
     * // Create many UNScorePlayers
     * const uNScorePlayer = await prisma.uNScorePlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UNScorePlayerCreateManyArgs>(args?: SelectSubset<T, UNScorePlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UNScorePlayers and returns the data saved in the database.
     * @param {UNScorePlayerCreateManyAndReturnArgs} args - Arguments to create many UNScorePlayers.
     * @example
     * // Create many UNScorePlayers
     * const uNScorePlayer = await prisma.uNScorePlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UNScorePlayers and only return the `id`
     * const uNScorePlayerWithIdOnly = await prisma.uNScorePlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UNScorePlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, UNScorePlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UNScorePlayer.
     * @param {UNScorePlayerDeleteArgs} args - Arguments to delete one UNScorePlayer.
     * @example
     * // Delete one UNScorePlayer
     * const UNScorePlayer = await prisma.uNScorePlayer.delete({
     *   where: {
     *     // ... filter to delete one UNScorePlayer
     *   }
     * })
     * 
     */
    delete<T extends UNScorePlayerDeleteArgs>(args: SelectSubset<T, UNScorePlayerDeleteArgs<ExtArgs>>): Prisma__UNScorePlayerClient<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UNScorePlayer.
     * @param {UNScorePlayerUpdateArgs} args - Arguments to update one UNScorePlayer.
     * @example
     * // Update one UNScorePlayer
     * const uNScorePlayer = await prisma.uNScorePlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UNScorePlayerUpdateArgs>(args: SelectSubset<T, UNScorePlayerUpdateArgs<ExtArgs>>): Prisma__UNScorePlayerClient<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UNScorePlayers.
     * @param {UNScorePlayerDeleteManyArgs} args - Arguments to filter UNScorePlayers to delete.
     * @example
     * // Delete a few UNScorePlayers
     * const { count } = await prisma.uNScorePlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UNScorePlayerDeleteManyArgs>(args?: SelectSubset<T, UNScorePlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UNScorePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UNScorePlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UNScorePlayers
     * const uNScorePlayer = await prisma.uNScorePlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UNScorePlayerUpdateManyArgs>(args: SelectSubset<T, UNScorePlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UNScorePlayers and returns the data updated in the database.
     * @param {UNScorePlayerUpdateManyAndReturnArgs} args - Arguments to update many UNScorePlayers.
     * @example
     * // Update many UNScorePlayers
     * const uNScorePlayer = await prisma.uNScorePlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UNScorePlayers and only return the `id`
     * const uNScorePlayerWithIdOnly = await prisma.uNScorePlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UNScorePlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, UNScorePlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UNScorePlayer.
     * @param {UNScorePlayerUpsertArgs} args - Arguments to update or create a UNScorePlayer.
     * @example
     * // Update or create a UNScorePlayer
     * const uNScorePlayer = await prisma.uNScorePlayer.upsert({
     *   create: {
     *     // ... data to create a UNScorePlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UNScorePlayer we want to update
     *   }
     * })
     */
    upsert<T extends UNScorePlayerUpsertArgs>(args: SelectSubset<T, UNScorePlayerUpsertArgs<ExtArgs>>): Prisma__UNScorePlayerClient<$Result.GetResult<Prisma.$UNScorePlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UNScorePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UNScorePlayerCountArgs} args - Arguments to filter UNScorePlayers to count.
     * @example
     * // Count the number of UNScorePlayers
     * const count = await prisma.uNScorePlayer.count({
     *   where: {
     *     // ... the filter for the UNScorePlayers we want to count
     *   }
     * })
    **/
    count<T extends UNScorePlayerCountArgs>(
      args?: Subset<T, UNScorePlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UNScorePlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UNScorePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UNScorePlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UNScorePlayerAggregateArgs>(args: Subset<T, UNScorePlayerAggregateArgs>): Prisma.PrismaPromise<GetUNScorePlayerAggregateType<T>>

    /**
     * Group by UNScorePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UNScorePlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UNScorePlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UNScorePlayerGroupByArgs['orderBy'] }
        : { orderBy?: UNScorePlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UNScorePlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUNScorePlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UNScorePlayer model
   */
  readonly fields: UNScorePlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UNScorePlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UNScorePlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UNScorePlayer model
   */
  interface UNScorePlayerFieldRefs {
    readonly id: FieldRef<"UNScorePlayer", 'String'>
    readonly name: FieldRef<"UNScorePlayer", 'String'>
    readonly class: FieldRef<"UNScorePlayer", 'String'>
    readonly unScore: FieldRef<"UNScorePlayer", 'Float'>
    readonly height: FieldRef<"UNScorePlayer", 'Float'>
    readonly weight: FieldRef<"UNScorePlayer", 'Float'>
    readonly draftRound: FieldRef<"UNScorePlayer", 'Float'>
    readonly draftPick: FieldRef<"UNScorePlayer", 'Float'>
    readonly careerSlotPercentage: FieldRef<"UNScorePlayer", 'Float'>
    readonly careerWidePercentage: FieldRef<"UNScorePlayer", 'Float'>
    readonly highestContestedTargetPercent: FieldRef<"UNScorePlayer", 'Float'>
    readonly careerAveragedStats: FieldRef<"UNScorePlayer", 'Json'>
    readonly topModelComps: FieldRef<"UNScorePlayer", 'Json'>
    readonly rawData: FieldRef<"UNScorePlayer", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UNScorePlayer findUnique
   */
  export type UNScorePlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * Filter, which UNScorePlayer to fetch.
     */
    where: UNScorePlayerWhereUniqueInput
  }

  /**
   * UNScorePlayer findUniqueOrThrow
   */
  export type UNScorePlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * Filter, which UNScorePlayer to fetch.
     */
    where: UNScorePlayerWhereUniqueInput
  }

  /**
   * UNScorePlayer findFirst
   */
  export type UNScorePlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * Filter, which UNScorePlayer to fetch.
     */
    where?: UNScorePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UNScorePlayers to fetch.
     */
    orderBy?: UNScorePlayerOrderByWithRelationInput | UNScorePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UNScorePlayers.
     */
    cursor?: UNScorePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UNScorePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UNScorePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UNScorePlayers.
     */
    distinct?: UNScorePlayerScalarFieldEnum | UNScorePlayerScalarFieldEnum[]
  }

  /**
   * UNScorePlayer findFirstOrThrow
   */
  export type UNScorePlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * Filter, which UNScorePlayer to fetch.
     */
    where?: UNScorePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UNScorePlayers to fetch.
     */
    orderBy?: UNScorePlayerOrderByWithRelationInput | UNScorePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UNScorePlayers.
     */
    cursor?: UNScorePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UNScorePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UNScorePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UNScorePlayers.
     */
    distinct?: UNScorePlayerScalarFieldEnum | UNScorePlayerScalarFieldEnum[]
  }

  /**
   * UNScorePlayer findMany
   */
  export type UNScorePlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * Filter, which UNScorePlayers to fetch.
     */
    where?: UNScorePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UNScorePlayers to fetch.
     */
    orderBy?: UNScorePlayerOrderByWithRelationInput | UNScorePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UNScorePlayers.
     */
    cursor?: UNScorePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UNScorePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UNScorePlayers.
     */
    skip?: number
    distinct?: UNScorePlayerScalarFieldEnum | UNScorePlayerScalarFieldEnum[]
  }

  /**
   * UNScorePlayer create
   */
  export type UNScorePlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * The data needed to create a UNScorePlayer.
     */
    data: XOR<UNScorePlayerCreateInput, UNScorePlayerUncheckedCreateInput>
  }

  /**
   * UNScorePlayer createMany
   */
  export type UNScorePlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UNScorePlayers.
     */
    data: UNScorePlayerCreateManyInput | UNScorePlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UNScorePlayer createManyAndReturn
   */
  export type UNScorePlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * The data used to create many UNScorePlayers.
     */
    data: UNScorePlayerCreateManyInput | UNScorePlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UNScorePlayer update
   */
  export type UNScorePlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * The data needed to update a UNScorePlayer.
     */
    data: XOR<UNScorePlayerUpdateInput, UNScorePlayerUncheckedUpdateInput>
    /**
     * Choose, which UNScorePlayer to update.
     */
    where: UNScorePlayerWhereUniqueInput
  }

  /**
   * UNScorePlayer updateMany
   */
  export type UNScorePlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UNScorePlayers.
     */
    data: XOR<UNScorePlayerUpdateManyMutationInput, UNScorePlayerUncheckedUpdateManyInput>
    /**
     * Filter which UNScorePlayers to update
     */
    where?: UNScorePlayerWhereInput
    /**
     * Limit how many UNScorePlayers to update.
     */
    limit?: number
  }

  /**
   * UNScorePlayer updateManyAndReturn
   */
  export type UNScorePlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * The data used to update UNScorePlayers.
     */
    data: XOR<UNScorePlayerUpdateManyMutationInput, UNScorePlayerUncheckedUpdateManyInput>
    /**
     * Filter which UNScorePlayers to update
     */
    where?: UNScorePlayerWhereInput
    /**
     * Limit how many UNScorePlayers to update.
     */
    limit?: number
  }

  /**
   * UNScorePlayer upsert
   */
  export type UNScorePlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * The filter to search for the UNScorePlayer to update in case it exists.
     */
    where: UNScorePlayerWhereUniqueInput
    /**
     * In case the UNScorePlayer found by the `where` argument doesn't exist, create a new UNScorePlayer with this data.
     */
    create: XOR<UNScorePlayerCreateInput, UNScorePlayerUncheckedCreateInput>
    /**
     * In case the UNScorePlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UNScorePlayerUpdateInput, UNScorePlayerUncheckedUpdateInput>
  }

  /**
   * UNScorePlayer delete
   */
  export type UNScorePlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
    /**
     * Filter which UNScorePlayer to delete.
     */
    where: UNScorePlayerWhereUniqueInput
  }

  /**
   * UNScorePlayer deleteMany
   */
  export type UNScorePlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UNScorePlayers to delete
     */
    where?: UNScorePlayerWhereInput
    /**
     * Limit how many UNScorePlayers to delete.
     */
    limit?: number
  }

  /**
   * UNScorePlayer without action
   */
  export type UNScorePlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UNScorePlayer
     */
    select?: UNScorePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UNScorePlayer
     */
    omit?: UNScorePlayerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TradeAnalyzerDataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    team: 'team',
    marketValue: 'marketValue',
    myValue: 'myValue',
    valueDiffBetweenMyValueAndMarketValue: 'valueDiffBetweenMyValueAndMarketValue',
    PRPScore: 'PRPScore',
    projectedNextOffseasonDynastyValue: 'projectedNextOffseasonDynastyValue',
    valueDifferenceBetweenCurrentMarketValueAndPNODV: 'valueDifferenceBetweenCurrentMarketValueAndPNODV',
    PNODVScore: 'PNODVScore',
    RVSScore: 'RVSScore',
    jaxValue: 'jaxValue',
    travValue: 'travValue',
    joeValue: 'joeValue',
    consensusValue: 'consensusValue',
    consensusVsMarketValueDiff: 'consensusVsMarketValueDiff'
  };

  export type TradeAnalyzerDataScalarFieldEnum = (typeof TradeAnalyzerDataScalarFieldEnum)[keyof typeof TradeAnalyzerDataScalarFieldEnum]


  export const SleeperPlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    team: 'team',
    position: 'position'
  };

  export type SleeperPlayerScalarFieldEnum = (typeof SleeperPlayerScalarFieldEnum)[keyof typeof SleeperPlayerScalarFieldEnum]


  export const AllPlayerDataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    team: 'team',
    position: 'position',
    marketValue: 'marketValue',
    myValue: 'myValue',
    valueDiffBetweenMyValueAndMarketValue: 'valueDiffBetweenMyValueAndMarketValue',
    PRPScore: 'PRPScore',
    projectedNextOffseasonDynastyValue: 'projectedNextOffseasonDynastyValue',
    valueDifferenceBetweenCurrentMarketValueAndPNODV: 'valueDifferenceBetweenCurrentMarketValueAndPNODV',
    PNODVScore: 'PNODVScore',
    RVSScore: 'RVSScore',
    tradeAnalyzerDataObjectsArray: 'tradeAnalyzerDataObjectsArray',
    rawData: 'rawData'
  };

  export type AllPlayerDataScalarFieldEnum = (typeof AllPlayerDataScalarFieldEnum)[keyof typeof AllPlayerDataScalarFieldEnum]


  export const UNScorePlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    class: 'class',
    unScore: 'unScore',
    height: 'height',
    weight: 'weight',
    draftRound: 'draftRound',
    draftPick: 'draftPick',
    careerSlotPercentage: 'careerSlotPercentage',
    careerWidePercentage: 'careerWidePercentage',
    highestContestedTargetPercent: 'highestContestedTargetPercent',
    careerAveragedStats: 'careerAveragedStats',
    topModelComps: 'topModelComps',
    rawData: 'rawData'
  };

  export type UNScorePlayerScalarFieldEnum = (typeof UNScorePlayerScalarFieldEnum)[keyof typeof UNScorePlayerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type tradeAnalyzerDataWhereInput = {
    AND?: tradeAnalyzerDataWhereInput | tradeAnalyzerDataWhereInput[]
    OR?: tradeAnalyzerDataWhereInput[]
    NOT?: tradeAnalyzerDataWhereInput | tradeAnalyzerDataWhereInput[]
    id?: StringFilter<"tradeAnalyzerData"> | string
    name?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    position?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    team?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    marketValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    myValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    PRPScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableFilter<"tradeAnalyzerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    PNODVScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    RVSScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    jaxValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    travValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    joeValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    consensusValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    consensusVsMarketValueDiff?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
  }

  export type tradeAnalyzerDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    marketValue?: SortOrderInput | SortOrder
    myValue?: SortOrderInput | SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrderInput | SortOrder
    PRPScore?: SortOrderInput | SortOrder
    projectedNextOffseasonDynastyValue?: SortOrderInput | SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrderInput | SortOrder
    PNODVScore?: SortOrderInput | SortOrder
    RVSScore?: SortOrderInput | SortOrder
    jaxValue?: SortOrderInput | SortOrder
    travValue?: SortOrderInput | SortOrder
    joeValue?: SortOrderInput | SortOrder
    consensusValue?: SortOrderInput | SortOrder
    consensusVsMarketValueDiff?: SortOrderInput | SortOrder
  }

  export type tradeAnalyzerDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tradeAnalyzerDataWhereInput | tradeAnalyzerDataWhereInput[]
    OR?: tradeAnalyzerDataWhereInput[]
    NOT?: tradeAnalyzerDataWhereInput | tradeAnalyzerDataWhereInput[]
    name?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    position?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    team?: StringNullableFilter<"tradeAnalyzerData"> | string | null
    marketValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    myValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    PRPScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableFilter<"tradeAnalyzerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    PNODVScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    RVSScore?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    jaxValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    travValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    joeValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    consensusValue?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
    consensusVsMarketValueDiff?: FloatNullableFilter<"tradeAnalyzerData"> | number | null
  }, "id">

  export type tradeAnalyzerDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    marketValue?: SortOrderInput | SortOrder
    myValue?: SortOrderInput | SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrderInput | SortOrder
    PRPScore?: SortOrderInput | SortOrder
    projectedNextOffseasonDynastyValue?: SortOrderInput | SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrderInput | SortOrder
    PNODVScore?: SortOrderInput | SortOrder
    RVSScore?: SortOrderInput | SortOrder
    jaxValue?: SortOrderInput | SortOrder
    travValue?: SortOrderInput | SortOrder
    joeValue?: SortOrderInput | SortOrder
    consensusValue?: SortOrderInput | SortOrder
    consensusVsMarketValueDiff?: SortOrderInput | SortOrder
    _count?: tradeAnalyzerDataCountOrderByAggregateInput
    _avg?: tradeAnalyzerDataAvgOrderByAggregateInput
    _max?: tradeAnalyzerDataMaxOrderByAggregateInput
    _min?: tradeAnalyzerDataMinOrderByAggregateInput
    _sum?: tradeAnalyzerDataSumOrderByAggregateInput
  }

  export type tradeAnalyzerDataScalarWhereWithAggregatesInput = {
    AND?: tradeAnalyzerDataScalarWhereWithAggregatesInput | tradeAnalyzerDataScalarWhereWithAggregatesInput[]
    OR?: tradeAnalyzerDataScalarWhereWithAggregatesInput[]
    NOT?: tradeAnalyzerDataScalarWhereWithAggregatesInput | tradeAnalyzerDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tradeAnalyzerData"> | string
    name?: StringNullableWithAggregatesFilter<"tradeAnalyzerData"> | string | null
    position?: StringNullableWithAggregatesFilter<"tradeAnalyzerData"> | string | null
    team?: StringNullableWithAggregatesFilter<"tradeAnalyzerData"> | string | null
    marketValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    myValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    PRPScore?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableWithAggregatesFilter<"tradeAnalyzerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    PNODVScore?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    RVSScore?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    jaxValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    travValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    joeValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    consensusValue?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
    consensusVsMarketValueDiff?: FloatNullableWithAggregatesFilter<"tradeAnalyzerData"> | number | null
  }

  export type SleeperPlayerWhereInput = {
    AND?: SleeperPlayerWhereInput | SleeperPlayerWhereInput[]
    OR?: SleeperPlayerWhereInput[]
    NOT?: SleeperPlayerWhereInput | SleeperPlayerWhereInput[]
    id?: StringFilter<"SleeperPlayer"> | string
    name?: StringFilter<"SleeperPlayer"> | string
    team?: StringNullableFilter<"SleeperPlayer"> | string | null
    position?: StringNullableFilter<"SleeperPlayer"> | string | null
  }

  export type SleeperPlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    team?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
  }

  export type SleeperPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SleeperPlayerWhereInput | SleeperPlayerWhereInput[]
    OR?: SleeperPlayerWhereInput[]
    NOT?: SleeperPlayerWhereInput | SleeperPlayerWhereInput[]
    name?: StringFilter<"SleeperPlayer"> | string
    team?: StringNullableFilter<"SleeperPlayer"> | string | null
    position?: StringNullableFilter<"SleeperPlayer"> | string | null
  }, "id">

  export type SleeperPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    team?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    _count?: SleeperPlayerCountOrderByAggregateInput
    _max?: SleeperPlayerMaxOrderByAggregateInput
    _min?: SleeperPlayerMinOrderByAggregateInput
  }

  export type SleeperPlayerScalarWhereWithAggregatesInput = {
    AND?: SleeperPlayerScalarWhereWithAggregatesInput | SleeperPlayerScalarWhereWithAggregatesInput[]
    OR?: SleeperPlayerScalarWhereWithAggregatesInput[]
    NOT?: SleeperPlayerScalarWhereWithAggregatesInput | SleeperPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SleeperPlayer"> | string
    name?: StringWithAggregatesFilter<"SleeperPlayer"> | string
    team?: StringNullableWithAggregatesFilter<"SleeperPlayer"> | string | null
    position?: StringNullableWithAggregatesFilter<"SleeperPlayer"> | string | null
  }

  export type AllPlayerDataWhereInput = {
    AND?: AllPlayerDataWhereInput | AllPlayerDataWhereInput[]
    OR?: AllPlayerDataWhereInput[]
    NOT?: AllPlayerDataWhereInput | AllPlayerDataWhereInput[]
    id?: StringFilter<"AllPlayerData"> | string
    name?: StringNullableFilter<"AllPlayerData"> | string | null
    team?: StringNullableFilter<"AllPlayerData"> | string | null
    position?: StringNullableFilter<"AllPlayerData"> | string | null
    marketValue?: FloatNullableFilter<"AllPlayerData"> | number | null
    myValue?: FloatNullableFilter<"AllPlayerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableFilter<"AllPlayerData"> | number | null
    PRPScore?: FloatNullableFilter<"AllPlayerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableFilter<"AllPlayerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableFilter<"AllPlayerData"> | number | null
    PNODVScore?: FloatNullableFilter<"AllPlayerData"> | number | null
    RVSScore?: FloatNullableFilter<"AllPlayerData"> | number | null
    tradeAnalyzerDataObjectsArray?: JsonNullableFilter<"AllPlayerData">
    rawData?: JsonNullableFilter<"AllPlayerData">
  }

  export type AllPlayerDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    marketValue?: SortOrderInput | SortOrder
    myValue?: SortOrderInput | SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrderInput | SortOrder
    PRPScore?: SortOrderInput | SortOrder
    projectedNextOffseasonDynastyValue?: SortOrderInput | SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrderInput | SortOrder
    PNODVScore?: SortOrderInput | SortOrder
    RVSScore?: SortOrderInput | SortOrder
    tradeAnalyzerDataObjectsArray?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
  }

  export type AllPlayerDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AllPlayerDataWhereInput | AllPlayerDataWhereInput[]
    OR?: AllPlayerDataWhereInput[]
    NOT?: AllPlayerDataWhereInput | AllPlayerDataWhereInput[]
    name?: StringNullableFilter<"AllPlayerData"> | string | null
    team?: StringNullableFilter<"AllPlayerData"> | string | null
    position?: StringNullableFilter<"AllPlayerData"> | string | null
    marketValue?: FloatNullableFilter<"AllPlayerData"> | number | null
    myValue?: FloatNullableFilter<"AllPlayerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableFilter<"AllPlayerData"> | number | null
    PRPScore?: FloatNullableFilter<"AllPlayerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableFilter<"AllPlayerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableFilter<"AllPlayerData"> | number | null
    PNODVScore?: FloatNullableFilter<"AllPlayerData"> | number | null
    RVSScore?: FloatNullableFilter<"AllPlayerData"> | number | null
    tradeAnalyzerDataObjectsArray?: JsonNullableFilter<"AllPlayerData">
    rawData?: JsonNullableFilter<"AllPlayerData">
  }, "id">

  export type AllPlayerDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    marketValue?: SortOrderInput | SortOrder
    myValue?: SortOrderInput | SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrderInput | SortOrder
    PRPScore?: SortOrderInput | SortOrder
    projectedNextOffseasonDynastyValue?: SortOrderInput | SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrderInput | SortOrder
    PNODVScore?: SortOrderInput | SortOrder
    RVSScore?: SortOrderInput | SortOrder
    tradeAnalyzerDataObjectsArray?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    _count?: AllPlayerDataCountOrderByAggregateInput
    _avg?: AllPlayerDataAvgOrderByAggregateInput
    _max?: AllPlayerDataMaxOrderByAggregateInput
    _min?: AllPlayerDataMinOrderByAggregateInput
    _sum?: AllPlayerDataSumOrderByAggregateInput
  }

  export type AllPlayerDataScalarWhereWithAggregatesInput = {
    AND?: AllPlayerDataScalarWhereWithAggregatesInput | AllPlayerDataScalarWhereWithAggregatesInput[]
    OR?: AllPlayerDataScalarWhereWithAggregatesInput[]
    NOT?: AllPlayerDataScalarWhereWithAggregatesInput | AllPlayerDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AllPlayerData"> | string
    name?: StringNullableWithAggregatesFilter<"AllPlayerData"> | string | null
    team?: StringNullableWithAggregatesFilter<"AllPlayerData"> | string | null
    position?: StringNullableWithAggregatesFilter<"AllPlayerData"> | string | null
    marketValue?: FloatNullableWithAggregatesFilter<"AllPlayerData"> | number | null
    myValue?: FloatNullableWithAggregatesFilter<"AllPlayerData"> | number | null
    valueDiffBetweenMyValueAndMarketValue?: FloatNullableWithAggregatesFilter<"AllPlayerData"> | number | null
    PRPScore?: FloatNullableWithAggregatesFilter<"AllPlayerData"> | number | null
    projectedNextOffseasonDynastyValue?: JsonNullableWithAggregatesFilter<"AllPlayerData">
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: FloatNullableWithAggregatesFilter<"AllPlayerData"> | number | null
    PNODVScore?: FloatNullableWithAggregatesFilter<"AllPlayerData"> | number | null
    RVSScore?: FloatNullableWithAggregatesFilter<"AllPlayerData"> | number | null
    tradeAnalyzerDataObjectsArray?: JsonNullableWithAggregatesFilter<"AllPlayerData">
    rawData?: JsonNullableWithAggregatesFilter<"AllPlayerData">
  }

  export type UNScorePlayerWhereInput = {
    AND?: UNScorePlayerWhereInput | UNScorePlayerWhereInput[]
    OR?: UNScorePlayerWhereInput[]
    NOT?: UNScorePlayerWhereInput | UNScorePlayerWhereInput[]
    id?: StringFilter<"UNScorePlayer"> | string
    name?: StringFilter<"UNScorePlayer"> | string
    class?: StringNullableFilter<"UNScorePlayer"> | string | null
    unScore?: FloatNullableFilter<"UNScorePlayer"> | number | null
    height?: FloatNullableFilter<"UNScorePlayer"> | number | null
    weight?: FloatNullableFilter<"UNScorePlayer"> | number | null
    draftRound?: FloatNullableFilter<"UNScorePlayer"> | number | null
    draftPick?: FloatNullableFilter<"UNScorePlayer"> | number | null
    careerSlotPercentage?: FloatNullableFilter<"UNScorePlayer"> | number | null
    careerWidePercentage?: FloatNullableFilter<"UNScorePlayer"> | number | null
    highestContestedTargetPercent?: FloatNullableFilter<"UNScorePlayer"> | number | null
    careerAveragedStats?: JsonNullableFilter<"UNScorePlayer">
    topModelComps?: JsonNullableFilter<"UNScorePlayer">
    rawData?: JsonNullableFilter<"UNScorePlayer">
  }

  export type UNScorePlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrderInput | SortOrder
    unScore?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    draftRound?: SortOrderInput | SortOrder
    draftPick?: SortOrderInput | SortOrder
    careerSlotPercentage?: SortOrderInput | SortOrder
    careerWidePercentage?: SortOrderInput | SortOrder
    highestContestedTargetPercent?: SortOrderInput | SortOrder
    careerAveragedStats?: SortOrderInput | SortOrder
    topModelComps?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
  }

  export type UNScorePlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UNScorePlayerWhereInput | UNScorePlayerWhereInput[]
    OR?: UNScorePlayerWhereInput[]
    NOT?: UNScorePlayerWhereInput | UNScorePlayerWhereInput[]
    name?: StringFilter<"UNScorePlayer"> | string
    class?: StringNullableFilter<"UNScorePlayer"> | string | null
    unScore?: FloatNullableFilter<"UNScorePlayer"> | number | null
    height?: FloatNullableFilter<"UNScorePlayer"> | number | null
    weight?: FloatNullableFilter<"UNScorePlayer"> | number | null
    draftRound?: FloatNullableFilter<"UNScorePlayer"> | number | null
    draftPick?: FloatNullableFilter<"UNScorePlayer"> | number | null
    careerSlotPercentage?: FloatNullableFilter<"UNScorePlayer"> | number | null
    careerWidePercentage?: FloatNullableFilter<"UNScorePlayer"> | number | null
    highestContestedTargetPercent?: FloatNullableFilter<"UNScorePlayer"> | number | null
    careerAveragedStats?: JsonNullableFilter<"UNScorePlayer">
    topModelComps?: JsonNullableFilter<"UNScorePlayer">
    rawData?: JsonNullableFilter<"UNScorePlayer">
  }, "id">

  export type UNScorePlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrderInput | SortOrder
    unScore?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    draftRound?: SortOrderInput | SortOrder
    draftPick?: SortOrderInput | SortOrder
    careerSlotPercentage?: SortOrderInput | SortOrder
    careerWidePercentage?: SortOrderInput | SortOrder
    highestContestedTargetPercent?: SortOrderInput | SortOrder
    careerAveragedStats?: SortOrderInput | SortOrder
    topModelComps?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    _count?: UNScorePlayerCountOrderByAggregateInput
    _avg?: UNScorePlayerAvgOrderByAggregateInput
    _max?: UNScorePlayerMaxOrderByAggregateInput
    _min?: UNScorePlayerMinOrderByAggregateInput
    _sum?: UNScorePlayerSumOrderByAggregateInput
  }

  export type UNScorePlayerScalarWhereWithAggregatesInput = {
    AND?: UNScorePlayerScalarWhereWithAggregatesInput | UNScorePlayerScalarWhereWithAggregatesInput[]
    OR?: UNScorePlayerScalarWhereWithAggregatesInput[]
    NOT?: UNScorePlayerScalarWhereWithAggregatesInput | UNScorePlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UNScorePlayer"> | string
    name?: StringWithAggregatesFilter<"UNScorePlayer"> | string
    class?: StringNullableWithAggregatesFilter<"UNScorePlayer"> | string | null
    unScore?: FloatNullableWithAggregatesFilter<"UNScorePlayer"> | number | null
    height?: FloatNullableWithAggregatesFilter<"UNScorePlayer"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"UNScorePlayer"> | number | null
    draftRound?: FloatNullableWithAggregatesFilter<"UNScorePlayer"> | number | null
    draftPick?: FloatNullableWithAggregatesFilter<"UNScorePlayer"> | number | null
    careerSlotPercentage?: FloatNullableWithAggregatesFilter<"UNScorePlayer"> | number | null
    careerWidePercentage?: FloatNullableWithAggregatesFilter<"UNScorePlayer"> | number | null
    highestContestedTargetPercent?: FloatNullableWithAggregatesFilter<"UNScorePlayer"> | number | null
    careerAveragedStats?: JsonNullableWithAggregatesFilter<"UNScorePlayer">
    topModelComps?: JsonNullableWithAggregatesFilter<"UNScorePlayer">
    rawData?: JsonNullableWithAggregatesFilter<"UNScorePlayer">
  }

  export type tradeAnalyzerDataCreateInput = {
    id?: string
    name?: string | null
    position?: string | null
    team?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    jaxValue?: number | null
    travValue?: number | null
    joeValue?: number | null
    consensusValue?: number | null
    consensusVsMarketValueDiff?: number | null
  }

  export type tradeAnalyzerDataUncheckedCreateInput = {
    id?: string
    name?: string | null
    position?: string | null
    team?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    jaxValue?: number | null
    travValue?: number | null
    joeValue?: number | null
    consensusValue?: number | null
    consensusVsMarketValueDiff?: number | null
  }

  export type tradeAnalyzerDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    jaxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    travValue?: NullableFloatFieldUpdateOperationsInput | number | null
    joeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusVsMarketValueDiff?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tradeAnalyzerDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    jaxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    travValue?: NullableFloatFieldUpdateOperationsInput | number | null
    joeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusVsMarketValueDiff?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tradeAnalyzerDataCreateManyInput = {
    id?: string
    name?: string | null
    position?: string | null
    team?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    jaxValue?: number | null
    travValue?: number | null
    joeValue?: number | null
    consensusValue?: number | null
    consensusVsMarketValueDiff?: number | null
  }

  export type tradeAnalyzerDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    jaxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    travValue?: NullableFloatFieldUpdateOperationsInput | number | null
    joeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusVsMarketValueDiff?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tradeAnalyzerDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    jaxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    travValue?: NullableFloatFieldUpdateOperationsInput | number | null
    joeValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusValue?: NullableFloatFieldUpdateOperationsInput | number | null
    consensusVsMarketValueDiff?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SleeperPlayerCreateInput = {
    id?: string
    name: string
    team?: string | null
    position?: string | null
  }

  export type SleeperPlayerUncheckedCreateInput = {
    id?: string
    name: string
    team?: string | null
    position?: string | null
  }

  export type SleeperPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SleeperPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SleeperPlayerCreateManyInput = {
    id?: string
    name: string
    team?: string | null
    position?: string | null
  }

  export type SleeperPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SleeperPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AllPlayerDataCreateInput = {
    id?: string
    name?: string | null
    team?: string | null
    position?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    tradeAnalyzerDataObjectsArray?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AllPlayerDataUncheckedCreateInput = {
    id?: string
    name?: string | null
    team?: string | null
    position?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    tradeAnalyzerDataObjectsArray?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AllPlayerDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tradeAnalyzerDataObjectsArray?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AllPlayerDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tradeAnalyzerDataObjectsArray?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AllPlayerDataCreateManyInput = {
    id?: string
    name?: string | null
    team?: string | null
    position?: string | null
    marketValue?: number | null
    myValue?: number | null
    valueDiffBetweenMyValueAndMarketValue?: number | null
    PRPScore?: number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: number | null
    PNODVScore?: number | null
    RVSScore?: number | null
    tradeAnalyzerDataObjectsArray?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AllPlayerDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tradeAnalyzerDataObjectsArray?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AllPlayerDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    marketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    myValue?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDiffBetweenMyValueAndMarketValue?: NullableFloatFieldUpdateOperationsInput | number | null
    PRPScore?: NullableFloatFieldUpdateOperationsInput | number | null
    projectedNextOffseasonDynastyValue?: NullableJsonNullValueInput | InputJsonValue
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: NullableFloatFieldUpdateOperationsInput | number | null
    PNODVScore?: NullableFloatFieldUpdateOperationsInput | number | null
    RVSScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tradeAnalyzerDataObjectsArray?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UNScorePlayerCreateInput = {
    id?: string
    name: string
    class?: string | null
    unScore?: number | null
    height?: number | null
    weight?: number | null
    draftRound?: number | null
    draftPick?: number | null
    careerSlotPercentage?: number | null
    careerWidePercentage?: number | null
    highestContestedTargetPercent?: number | null
    careerAveragedStats?: NullableJsonNullValueInput | InputJsonValue
    topModelComps?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UNScorePlayerUncheckedCreateInput = {
    id?: string
    name: string
    class?: string | null
    unScore?: number | null
    height?: number | null
    weight?: number | null
    draftRound?: number | null
    draftPick?: number | null
    careerSlotPercentage?: number | null
    careerWidePercentage?: number | null
    highestContestedTargetPercent?: number | null
    careerAveragedStats?: NullableJsonNullValueInput | InputJsonValue
    topModelComps?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UNScorePlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    unScore?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    draftRound?: NullableFloatFieldUpdateOperationsInput | number | null
    draftPick?: NullableFloatFieldUpdateOperationsInput | number | null
    careerSlotPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    careerWidePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestContestedTargetPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    careerAveragedStats?: NullableJsonNullValueInput | InputJsonValue
    topModelComps?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UNScorePlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    unScore?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    draftRound?: NullableFloatFieldUpdateOperationsInput | number | null
    draftPick?: NullableFloatFieldUpdateOperationsInput | number | null
    careerSlotPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    careerWidePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestContestedTargetPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    careerAveragedStats?: NullableJsonNullValueInput | InputJsonValue
    topModelComps?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UNScorePlayerCreateManyInput = {
    id?: string
    name: string
    class?: string | null
    unScore?: number | null
    height?: number | null
    weight?: number | null
    draftRound?: number | null
    draftPick?: number | null
    careerSlotPercentage?: number | null
    careerWidePercentage?: number | null
    highestContestedTargetPercent?: number | null
    careerAveragedStats?: NullableJsonNullValueInput | InputJsonValue
    topModelComps?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UNScorePlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    unScore?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    draftRound?: NullableFloatFieldUpdateOperationsInput | number | null
    draftPick?: NullableFloatFieldUpdateOperationsInput | number | null
    careerSlotPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    careerWidePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestContestedTargetPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    careerAveragedStats?: NullableJsonNullValueInput | InputJsonValue
    topModelComps?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UNScorePlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    unScore?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    draftRound?: NullableFloatFieldUpdateOperationsInput | number | null
    draftPick?: NullableFloatFieldUpdateOperationsInput | number | null
    careerSlotPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    careerWidePercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestContestedTargetPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    careerAveragedStats?: NullableJsonNullValueInput | InputJsonValue
    topModelComps?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tradeAnalyzerDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    projectedNextOffseasonDynastyValue?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
    consensusVsMarketValueDiff?: SortOrder
  }

  export type tradeAnalyzerDataAvgOrderByAggregateInput = {
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
    consensusVsMarketValueDiff?: SortOrder
  }

  export type tradeAnalyzerDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
    consensusVsMarketValueDiff?: SortOrder
  }

  export type tradeAnalyzerDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
    consensusVsMarketValueDiff?: SortOrder
  }

  export type tradeAnalyzerDataSumOrderByAggregateInput = {
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    jaxValue?: SortOrder
    travValue?: SortOrder
    joeValue?: SortOrder
    consensusValue?: SortOrder
    consensusVsMarketValueDiff?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SleeperPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    team?: SortOrder
    position?: SortOrder
  }

  export type SleeperPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    team?: SortOrder
    position?: SortOrder
  }

  export type SleeperPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    team?: SortOrder
    position?: SortOrder
  }

  export type AllPlayerDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    team?: SortOrder
    position?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    projectedNextOffseasonDynastyValue?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
    tradeAnalyzerDataObjectsArray?: SortOrder
    rawData?: SortOrder
  }

  export type AllPlayerDataAvgOrderByAggregateInput = {
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
  }

  export type AllPlayerDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    team?: SortOrder
    position?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
  }

  export type AllPlayerDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    team?: SortOrder
    position?: SortOrder
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
  }

  export type AllPlayerDataSumOrderByAggregateInput = {
    marketValue?: SortOrder
    myValue?: SortOrder
    valueDiffBetweenMyValueAndMarketValue?: SortOrder
    PRPScore?: SortOrder
    valueDifferenceBetweenCurrentMarketValueAndPNODV?: SortOrder
    PNODVScore?: SortOrder
    RVSScore?: SortOrder
  }

  export type UNScorePlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    unScore?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    draftRound?: SortOrder
    draftPick?: SortOrder
    careerSlotPercentage?: SortOrder
    careerWidePercentage?: SortOrder
    highestContestedTargetPercent?: SortOrder
    careerAveragedStats?: SortOrder
    topModelComps?: SortOrder
    rawData?: SortOrder
  }

  export type UNScorePlayerAvgOrderByAggregateInput = {
    unScore?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    draftRound?: SortOrder
    draftPick?: SortOrder
    careerSlotPercentage?: SortOrder
    careerWidePercentage?: SortOrder
    highestContestedTargetPercent?: SortOrder
  }

  export type UNScorePlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    unScore?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    draftRound?: SortOrder
    draftPick?: SortOrder
    careerSlotPercentage?: SortOrder
    careerWidePercentage?: SortOrder
    highestContestedTargetPercent?: SortOrder
  }

  export type UNScorePlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    unScore?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    draftRound?: SortOrder
    draftPick?: SortOrder
    careerSlotPercentage?: SortOrder
    careerWidePercentage?: SortOrder
    highestContestedTargetPercent?: SortOrder
  }

  export type UNScorePlayerSumOrderByAggregateInput = {
    unScore?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    draftRound?: SortOrder
    draftPick?: SortOrder
    careerSlotPercentage?: SortOrder
    careerWidePercentage?: SortOrder
    highestContestedTargetPercent?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}