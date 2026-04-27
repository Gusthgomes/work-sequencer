
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Obra
 * 
 */
export type Obra = $Result.DefaultSelection<Prisma.$ObraPayload>
/**
 * Model Carrinho
 * 
 */
export type Carrinho = $Result.DefaultSelection<Prisma.$CarrinhoPayload>
/**
 * Model ItemSeparacao
 * 
 */
export type ItemSeparacao = $Result.DefaultSelection<Prisma.$ItemSeparacaoPayload>
/**
 * Model PendenciaSeparacao
 * 
 */
export type PendenciaSeparacao = $Result.DefaultSelection<Prisma.$PendenciaSeparacaoPayload>
/**
 * Model LogsAuditoria
 * 
 */
export type LogsAuditoria = $Result.DefaultSelection<Prisma.$LogsAuditoriaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  DALG: 'DALG',
  DPRO: 'DPRO'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusGeral: {
  pendente: 'pendente',
  em_andamento: 'em_andamento',
  separado: 'separado',
  em_montagem: 'em_montagem',
  concluido: 'concluido'
};

export type StatusGeral = (typeof StatusGeral)[keyof typeof StatusGeral]


export const Kit: {
  KIT_3B: 'KIT_3B',
  KIT_3K: 'KIT_3K'
};

export type Kit = (typeof Kit)[keyof typeof Kit]


export const StatusCarrinho: {
  em_andamento: 'em_andamento',
  pendente: 'pendente',
  concluido: 'concluido',
  em_movimentacao: 'em_movimentacao',
  em_montagem: 'em_montagem',
  montagem_concluida: 'montagem_concluida',
  montagem_pendente: 'montagem_pendente'
};

export type StatusCarrinho = (typeof StatusCarrinho)[keyof typeof StatusCarrinho]


export const StatusItem: {
  nao_iniciado: 'nao_iniciado',
  em_andamento: 'em_andamento',
  concluido: 'concluido',
  pendente: 'pendente'
};

export type StatusItem = (typeof StatusItem)[keyof typeof StatusItem]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusGeral = $Enums.StatusGeral

export const StatusGeral: typeof $Enums.StatusGeral

export type Kit = $Enums.Kit

export const Kit: typeof $Enums.Kit

export type StatusCarrinho = $Enums.StatusCarrinho

export const StatusCarrinho: typeof $Enums.StatusCarrinho

export type StatusItem = $Enums.StatusItem

export const StatusItem: typeof $Enums.StatusItem

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obra`: Exposes CRUD operations for the **Obra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obras
    * const obras = await prisma.obra.findMany()
    * ```
    */
  get obra(): Prisma.ObraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrinho`: Exposes CRUD operations for the **Carrinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carrinhos
    * const carrinhos = await prisma.carrinho.findMany()
    * ```
    */
  get carrinho(): Prisma.CarrinhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemSeparacao`: Exposes CRUD operations for the **ItemSeparacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemSeparacaos
    * const itemSeparacaos = await prisma.itemSeparacao.findMany()
    * ```
    */
  get itemSeparacao(): Prisma.ItemSeparacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendenciaSeparacao`: Exposes CRUD operations for the **PendenciaSeparacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendenciaSeparacaos
    * const pendenciaSeparacaos = await prisma.pendenciaSeparacao.findMany()
    * ```
    */
  get pendenciaSeparacao(): Prisma.PendenciaSeparacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logsAuditoria`: Exposes CRUD operations for the **LogsAuditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogsAuditorias
    * const logsAuditorias = await prisma.logsAuditoria.findMany()
    * ```
    */
  get logsAuditoria(): Prisma.LogsAuditoriaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Obra: 'Obra',
    Carrinho: 'Carrinho',
    ItemSeparacao: 'ItemSeparacao',
    PendenciaSeparacao: 'PendenciaSeparacao',
    LogsAuditoria: 'LogsAuditoria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "obra" | "carrinho" | "itemSeparacao" | "pendenciaSeparacao" | "logsAuditoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Obra: {
        payload: Prisma.$ObraPayload<ExtArgs>
        fields: Prisma.ObraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          findFirst: {
            args: Prisma.ObraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          findMany: {
            args: Prisma.ObraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          create: {
            args: Prisma.ObraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          createMany: {
            args: Prisma.ObraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          delete: {
            args: Prisma.ObraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          update: {
            args: Prisma.ObraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          deleteMany: {
            args: Prisma.ObraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          upsert: {
            args: Prisma.ObraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          aggregate: {
            args: Prisma.ObraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObra>
          }
          groupBy: {
            args: Prisma.ObraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObraCountArgs<ExtArgs>
            result: $Utils.Optional<ObraCountAggregateOutputType> | number
          }
        }
      }
      Carrinho: {
        payload: Prisma.$CarrinhoPayload<ExtArgs>
        fields: Prisma.CarrinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarrinhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarrinhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          findFirst: {
            args: Prisma.CarrinhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarrinhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          findMany: {
            args: Prisma.CarrinhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>[]
          }
          create: {
            args: Prisma.CarrinhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          createMany: {
            args: Prisma.CarrinhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarrinhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>[]
          }
          delete: {
            args: Prisma.CarrinhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          update: {
            args: Prisma.CarrinhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          deleteMany: {
            args: Prisma.CarrinhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarrinhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarrinhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>[]
          }
          upsert: {
            args: Prisma.CarrinhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrinhoPayload>
          }
          aggregate: {
            args: Prisma.CarrinhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrinho>
          }
          groupBy: {
            args: Prisma.CarrinhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrinhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarrinhoCountArgs<ExtArgs>
            result: $Utils.Optional<CarrinhoCountAggregateOutputType> | number
          }
        }
      }
      ItemSeparacao: {
        payload: Prisma.$ItemSeparacaoPayload<ExtArgs>
        fields: Prisma.ItemSeparacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemSeparacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemSeparacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>
          }
          findFirst: {
            args: Prisma.ItemSeparacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemSeparacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>
          }
          findMany: {
            args: Prisma.ItemSeparacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>[]
          }
          create: {
            args: Prisma.ItemSeparacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>
          }
          createMany: {
            args: Prisma.ItemSeparacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemSeparacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>[]
          }
          delete: {
            args: Prisma.ItemSeparacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>
          }
          update: {
            args: Prisma.ItemSeparacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>
          }
          deleteMany: {
            args: Prisma.ItemSeparacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemSeparacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemSeparacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>[]
          }
          upsert: {
            args: Prisma.ItemSeparacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSeparacaoPayload>
          }
          aggregate: {
            args: Prisma.ItemSeparacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemSeparacao>
          }
          groupBy: {
            args: Prisma.ItemSeparacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemSeparacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemSeparacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemSeparacaoCountAggregateOutputType> | number
          }
        }
      }
      PendenciaSeparacao: {
        payload: Prisma.$PendenciaSeparacaoPayload<ExtArgs>
        fields: Prisma.PendenciaSeparacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendenciaSeparacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendenciaSeparacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>
          }
          findFirst: {
            args: Prisma.PendenciaSeparacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendenciaSeparacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>
          }
          findMany: {
            args: Prisma.PendenciaSeparacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>[]
          }
          create: {
            args: Prisma.PendenciaSeparacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>
          }
          createMany: {
            args: Prisma.PendenciaSeparacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendenciaSeparacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>[]
          }
          delete: {
            args: Prisma.PendenciaSeparacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>
          }
          update: {
            args: Prisma.PendenciaSeparacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>
          }
          deleteMany: {
            args: Prisma.PendenciaSeparacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendenciaSeparacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendenciaSeparacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>[]
          }
          upsert: {
            args: Prisma.PendenciaSeparacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendenciaSeparacaoPayload>
          }
          aggregate: {
            args: Prisma.PendenciaSeparacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendenciaSeparacao>
          }
          groupBy: {
            args: Prisma.PendenciaSeparacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendenciaSeparacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendenciaSeparacaoCountArgs<ExtArgs>
            result: $Utils.Optional<PendenciaSeparacaoCountAggregateOutputType> | number
          }
        }
      }
      LogsAuditoria: {
        payload: Prisma.$LogsAuditoriaPayload<ExtArgs>
        fields: Prisma.LogsAuditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogsAuditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogsAuditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>
          }
          findFirst: {
            args: Prisma.LogsAuditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogsAuditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>
          }
          findMany: {
            args: Prisma.LogsAuditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>[]
          }
          create: {
            args: Prisma.LogsAuditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>
          }
          createMany: {
            args: Prisma.LogsAuditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogsAuditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>[]
          }
          delete: {
            args: Prisma.LogsAuditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>
          }
          update: {
            args: Prisma.LogsAuditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>
          }
          deleteMany: {
            args: Prisma.LogsAuditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogsAuditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogsAuditoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>[]
          }
          upsert: {
            args: Prisma.LogsAuditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsAuditoriaPayload>
          }
          aggregate: {
            args: Prisma.LogsAuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogsAuditoria>
          }
          groupBy: {
            args: Prisma.LogsAuditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsAuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogsAuditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<LogsAuditoriaCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    obra?: ObraOmit
    carrinho?: CarrinhoOmit
    itemSeparacao?: ItemSeparacaoOmit
    pendenciaSeparacao?: PendenciaSeparacaoOmit
    logsAuditoria?: LogsAuditoriaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UserCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogsAuditoriaWhereInput
  }


  /**
   * Count Type ObraCountOutputType
   */

  export type ObraCountOutputType = {
    carrinhos: number
  }

  export type ObraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinhos?: boolean | ObraCountOutputTypeCountCarrinhosArgs
  }

  // Custom InputTypes
  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraCountOutputType
     */
    select?: ObraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeCountCarrinhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrinhoWhereInput
  }


  /**
   * Count Type CarrinhoCountOutputType
   */

  export type CarrinhoCountOutputType = {
    itens: number
  }

  export type CarrinhoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | CarrinhoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * CarrinhoCountOutputType without action
   */
  export type CarrinhoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrinhoCountOutputType
     */
    select?: CarrinhoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarrinhoCountOutputType without action
   */
  export type CarrinhoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSeparacaoWhereInput
  }


  /**
   * Count Type ItemSeparacaoCountOutputType
   */

  export type ItemSeparacaoCountOutputType = {
    pendencias: number
  }

  export type ItemSeparacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendencias?: boolean | ItemSeparacaoCountOutputTypeCountPendenciasArgs
  }

  // Custom InputTypes
  /**
   * ItemSeparacaoCountOutputType without action
   */
  export type ItemSeparacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacaoCountOutputType
     */
    select?: ItemSeparacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemSeparacaoCountOutputType without action
   */
  export type ItemSeparacaoCountOutputTypeCountPendenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendenciaSeparacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      logs: Prisma.$LogsAuditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    where?: LogsAuditoriaWhereInput
    orderBy?: LogsAuditoriaOrderByWithRelationInput | LogsAuditoriaOrderByWithRelationInput[]
    cursor?: LogsAuditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsAuditoriaScalarFieldEnum | LogsAuditoriaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Obra
   */

  export type AggregateObra = {
    _count: ObraCountAggregateOutputType | null
    _min: ObraMinAggregateOutputType | null
    _max: ObraMaxAggregateOutputType | null
  }

  export type ObraMinAggregateOutputType = {
    id: string | null
    numeroObra: string | null
    dataObra: Date | null
    statusGeral: $Enums.StatusGeral | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObraMaxAggregateOutputType = {
    id: string | null
    numeroObra: string | null
    dataObra: Date | null
    statusGeral: $Enums.StatusGeral | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObraCountAggregateOutputType = {
    id: number
    numeroObra: number
    dataObra: number
    statusGeral: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObraMinAggregateInputType = {
    id?: true
    numeroObra?: true
    dataObra?: true
    statusGeral?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObraMaxAggregateInputType = {
    id?: true
    numeroObra?: true
    dataObra?: true
    statusGeral?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObraCountAggregateInputType = {
    id?: true
    numeroObra?: true
    dataObra?: true
    statusGeral?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obra to aggregate.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obras
    **/
    _count?: true | ObraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObraMaxAggregateInputType
  }

  export type GetObraAggregateType<T extends ObraAggregateArgs> = {
        [P in keyof T & keyof AggregateObra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObra[P]>
      : GetScalarType<T[P], AggregateObra[P]>
  }




  export type ObraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraWhereInput
    orderBy?: ObraOrderByWithAggregationInput | ObraOrderByWithAggregationInput[]
    by: ObraScalarFieldEnum[] | ObraScalarFieldEnum
    having?: ObraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObraCountAggregateInputType | true
    _min?: ObraMinAggregateInputType
    _max?: ObraMaxAggregateInputType
  }

  export type ObraGroupByOutputType = {
    id: string
    numeroObra: string
    dataObra: Date
    statusGeral: $Enums.StatusGeral
    createdAt: Date
    updatedAt: Date
    _count: ObraCountAggregateOutputType | null
    _min: ObraMinAggregateOutputType | null
    _max: ObraMaxAggregateOutputType | null
  }

  type GetObraGroupByPayload<T extends ObraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObraGroupByOutputType[P]>
            : GetScalarType<T[P], ObraGroupByOutputType[P]>
        }
      >
    >


  export type ObraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroObra?: boolean
    dataObra?: boolean
    statusGeral?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carrinhos?: boolean | Obra$carrinhosArgs<ExtArgs>
    _count?: boolean | ObraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroObra?: boolean
    dataObra?: boolean
    statusGeral?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroObra?: boolean
    dataObra?: boolean
    statusGeral?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectScalar = {
    id?: boolean
    numeroObra?: boolean
    dataObra?: boolean
    statusGeral?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroObra" | "dataObra" | "statusGeral" | "createdAt" | "updatedAt", ExtArgs["result"]["obra"]>
  export type ObraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinhos?: boolean | Obra$carrinhosArgs<ExtArgs>
    _count?: boolean | ObraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obra"
    objects: {
      carrinhos: Prisma.$CarrinhoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numeroObra: string
      dataObra: Date
      statusGeral: $Enums.StatusGeral
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["obra"]>
    composites: {}
  }

  type ObraGetPayload<S extends boolean | null | undefined | ObraDefaultArgs> = $Result.GetResult<Prisma.$ObraPayload, S>

  type ObraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObraCountAggregateInputType | true
    }

  export interface ObraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obra'], meta: { name: 'Obra' } }
    /**
     * Find zero or one Obra that matches the filter.
     * @param {ObraFindUniqueArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObraFindUniqueArgs>(args: SelectSubset<T, ObraFindUniqueArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObraFindUniqueOrThrowArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObraFindUniqueOrThrowArgs>(args: SelectSubset<T, ObraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindFirstArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObraFindFirstArgs>(args?: SelectSubset<T, ObraFindFirstArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindFirstOrThrowArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObraFindFirstOrThrowArgs>(args?: SelectSubset<T, ObraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obras
     * const obras = await prisma.obra.findMany()
     * 
     * // Get first 10 Obras
     * const obras = await prisma.obra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obraWithIdOnly = await prisma.obra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObraFindManyArgs>(args?: SelectSubset<T, ObraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obra.
     * @param {ObraCreateArgs} args - Arguments to create a Obra.
     * @example
     * // Create one Obra
     * const Obra = await prisma.obra.create({
     *   data: {
     *     // ... data to create a Obra
     *   }
     * })
     * 
     */
    create<T extends ObraCreateArgs>(args: SelectSubset<T, ObraCreateArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obras.
     * @param {ObraCreateManyArgs} args - Arguments to create many Obras.
     * @example
     * // Create many Obras
     * const obra = await prisma.obra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObraCreateManyArgs>(args?: SelectSubset<T, ObraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obras and returns the data saved in the database.
     * @param {ObraCreateManyAndReturnArgs} args - Arguments to create many Obras.
     * @example
     * // Create many Obras
     * const obra = await prisma.obra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obras and only return the `id`
     * const obraWithIdOnly = await prisma.obra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObraCreateManyAndReturnArgs>(args?: SelectSubset<T, ObraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obra.
     * @param {ObraDeleteArgs} args - Arguments to delete one Obra.
     * @example
     * // Delete one Obra
     * const Obra = await prisma.obra.delete({
     *   where: {
     *     // ... filter to delete one Obra
     *   }
     * })
     * 
     */
    delete<T extends ObraDeleteArgs>(args: SelectSubset<T, ObraDeleteArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obra.
     * @param {ObraUpdateArgs} args - Arguments to update one Obra.
     * @example
     * // Update one Obra
     * const obra = await prisma.obra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObraUpdateArgs>(args: SelectSubset<T, ObraUpdateArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obras.
     * @param {ObraDeleteManyArgs} args - Arguments to filter Obras to delete.
     * @example
     * // Delete a few Obras
     * const { count } = await prisma.obra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObraDeleteManyArgs>(args?: SelectSubset<T, ObraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obras
     * const obra = await prisma.obra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObraUpdateManyArgs>(args: SelectSubset<T, ObraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obras and returns the data updated in the database.
     * @param {ObraUpdateManyAndReturnArgs} args - Arguments to update many Obras.
     * @example
     * // Update many Obras
     * const obra = await prisma.obra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Obras and only return the `id`
     * const obraWithIdOnly = await prisma.obra.updateManyAndReturn({
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
    updateManyAndReturn<T extends ObraUpdateManyAndReturnArgs>(args: SelectSubset<T, ObraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obra.
     * @param {ObraUpsertArgs} args - Arguments to update or create a Obra.
     * @example
     * // Update or create a Obra
     * const obra = await prisma.obra.upsert({
     *   create: {
     *     // ... data to create a Obra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obra we want to update
     *   }
     * })
     */
    upsert<T extends ObraUpsertArgs>(args: SelectSubset<T, ObraUpsertArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraCountArgs} args - Arguments to filter Obras to count.
     * @example
     * // Count the number of Obras
     * const count = await prisma.obra.count({
     *   where: {
     *     // ... the filter for the Obras we want to count
     *   }
     * })
    **/
    count<T extends ObraCountArgs>(
      args?: Subset<T, ObraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObraAggregateArgs>(args: Subset<T, ObraAggregateArgs>): Prisma.PrismaPromise<GetObraAggregateType<T>>

    /**
     * Group by Obra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraGroupByArgs} args - Group by arguments.
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
      T extends ObraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObraGroupByArgs['orderBy'] }
        : { orderBy?: ObraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obra model
   */
  readonly fields: ObraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrinhos<T extends Obra$carrinhosArgs<ExtArgs> = {}>(args?: Subset<T, Obra$carrinhosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Obra model
   */
  interface ObraFieldRefs {
    readonly id: FieldRef<"Obra", 'String'>
    readonly numeroObra: FieldRef<"Obra", 'String'>
    readonly dataObra: FieldRef<"Obra", 'DateTime'>
    readonly statusGeral: FieldRef<"Obra", 'StatusGeral'>
    readonly createdAt: FieldRef<"Obra", 'DateTime'>
    readonly updatedAt: FieldRef<"Obra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Obra findUnique
   */
  export type ObraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra findUniqueOrThrow
   */
  export type ObraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra findFirst
   */
  export type ObraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra findFirstOrThrow
   */
  export type ObraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra findMany
   */
  export type ObraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obras to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra create
   */
  export type ObraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The data needed to create a Obra.
     */
    data: XOR<ObraCreateInput, ObraUncheckedCreateInput>
  }

  /**
   * Obra createMany
   */
  export type ObraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obras.
     */
    data: ObraCreateManyInput | ObraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obra createManyAndReturn
   */
  export type ObraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * The data used to create many Obras.
     */
    data: ObraCreateManyInput | ObraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obra update
   */
  export type ObraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The data needed to update a Obra.
     */
    data: XOR<ObraUpdateInput, ObraUncheckedUpdateInput>
    /**
     * Choose, which Obra to update.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra updateMany
   */
  export type ObraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obras.
     */
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyInput>
    /**
     * Filter which Obras to update
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to update.
     */
    limit?: number
  }

  /**
   * Obra updateManyAndReturn
   */
  export type ObraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * The data used to update Obras.
     */
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyInput>
    /**
     * Filter which Obras to update
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to update.
     */
    limit?: number
  }

  /**
   * Obra upsert
   */
  export type ObraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The filter to search for the Obra to update in case it exists.
     */
    where: ObraWhereUniqueInput
    /**
     * In case the Obra found by the `where` argument doesn't exist, create a new Obra with this data.
     */
    create: XOR<ObraCreateInput, ObraUncheckedCreateInput>
    /**
     * In case the Obra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObraUpdateInput, ObraUncheckedUpdateInput>
  }

  /**
   * Obra delete
   */
  export type ObraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter which Obra to delete.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra deleteMany
   */
  export type ObraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obras to delete
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to delete.
     */
    limit?: number
  }

  /**
   * Obra.carrinhos
   */
  export type Obra$carrinhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    where?: CarrinhoWhereInput
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    cursor?: CarrinhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * Obra without action
   */
  export type ObraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
  }


  /**
   * Model Carrinho
   */

  export type AggregateCarrinho = {
    _count: CarrinhoCountAggregateOutputType | null
    _min: CarrinhoMinAggregateOutputType | null
    _max: CarrinhoMaxAggregateOutputType | null
  }

  export type CarrinhoMinAggregateOutputType = {
    id: string | null
    obraId: string | null
    kit: $Enums.Kit | null
    status: $Enums.StatusCarrinho | null
    solicitado: boolean | null
    recebido: boolean | null
    updatedAt: Date | null
  }

  export type CarrinhoMaxAggregateOutputType = {
    id: string | null
    obraId: string | null
    kit: $Enums.Kit | null
    status: $Enums.StatusCarrinho | null
    solicitado: boolean | null
    recebido: boolean | null
    updatedAt: Date | null
  }

  export type CarrinhoCountAggregateOutputType = {
    id: number
    obraId: number
    kit: number
    status: number
    solicitado: number
    recebido: number
    updatedAt: number
    _all: number
  }


  export type CarrinhoMinAggregateInputType = {
    id?: true
    obraId?: true
    kit?: true
    status?: true
    solicitado?: true
    recebido?: true
    updatedAt?: true
  }

  export type CarrinhoMaxAggregateInputType = {
    id?: true
    obraId?: true
    kit?: true
    status?: true
    solicitado?: true
    recebido?: true
    updatedAt?: true
  }

  export type CarrinhoCountAggregateInputType = {
    id?: true
    obraId?: true
    kit?: true
    status?: true
    solicitado?: true
    recebido?: true
    updatedAt?: true
    _all?: true
  }

  export type CarrinhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrinho to aggregate.
     */
    where?: CarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carrinhos to fetch.
     */
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carrinhos
    **/
    _count?: true | CarrinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrinhoMaxAggregateInputType
  }

  export type GetCarrinhoAggregateType<T extends CarrinhoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrinho[P]>
      : GetScalarType<T[P], AggregateCarrinho[P]>
  }




  export type CarrinhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrinhoWhereInput
    orderBy?: CarrinhoOrderByWithAggregationInput | CarrinhoOrderByWithAggregationInput[]
    by: CarrinhoScalarFieldEnum[] | CarrinhoScalarFieldEnum
    having?: CarrinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrinhoCountAggregateInputType | true
    _min?: CarrinhoMinAggregateInputType
    _max?: CarrinhoMaxAggregateInputType
  }

  export type CarrinhoGroupByOutputType = {
    id: string
    obraId: string
    kit: $Enums.Kit
    status: $Enums.StatusCarrinho
    solicitado: boolean
    recebido: boolean
    updatedAt: Date
    _count: CarrinhoCountAggregateOutputType | null
    _min: CarrinhoMinAggregateOutputType | null
    _max: CarrinhoMaxAggregateOutputType | null
  }

  type GetCarrinhoGroupByPayload<T extends CarrinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrinhoGroupByOutputType[P]>
            : GetScalarType<T[P], CarrinhoGroupByOutputType[P]>
        }
      >
    >


  export type CarrinhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    obraId?: boolean
    kit?: boolean
    status?: boolean
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
    itens?: boolean | Carrinho$itensArgs<ExtArgs>
    _count?: boolean | CarrinhoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type CarrinhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    obraId?: boolean
    kit?: boolean
    status?: boolean
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type CarrinhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    obraId?: boolean
    kit?: boolean
    status?: boolean
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type CarrinhoSelectScalar = {
    id?: boolean
    obraId?: boolean
    kit?: boolean
    status?: boolean
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: boolean
  }

  export type CarrinhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "obraId" | "kit" | "status" | "solicitado" | "recebido" | "updatedAt", ExtArgs["result"]["carrinho"]>
  export type CarrinhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
    itens?: boolean | Carrinho$itensArgs<ExtArgs>
    _count?: boolean | CarrinhoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarrinhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type CarrinhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }

  export type $CarrinhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrinho"
    objects: {
      obra: Prisma.$ObraPayload<ExtArgs>
      itens: Prisma.$ItemSeparacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      obraId: string
      kit: $Enums.Kit
      status: $Enums.StatusCarrinho
      solicitado: boolean
      recebido: boolean
      updatedAt: Date
    }, ExtArgs["result"]["carrinho"]>
    composites: {}
  }

  type CarrinhoGetPayload<S extends boolean | null | undefined | CarrinhoDefaultArgs> = $Result.GetResult<Prisma.$CarrinhoPayload, S>

  type CarrinhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarrinhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrinhoCountAggregateInputType | true
    }

  export interface CarrinhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrinho'], meta: { name: 'Carrinho' } }
    /**
     * Find zero or one Carrinho that matches the filter.
     * @param {CarrinhoFindUniqueArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarrinhoFindUniqueArgs>(args: SelectSubset<T, CarrinhoFindUniqueArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrinho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarrinhoFindUniqueOrThrowArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarrinhoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarrinhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoFindFirstArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarrinhoFindFirstArgs>(args?: SelectSubset<T, CarrinhoFindFirstArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoFindFirstOrThrowArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarrinhoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarrinhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carrinhos
     * const carrinhos = await prisma.carrinho.findMany()
     * 
     * // Get first 10 Carrinhos
     * const carrinhos = await prisma.carrinho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarrinhoFindManyArgs>(args?: SelectSubset<T, CarrinhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrinho.
     * @param {CarrinhoCreateArgs} args - Arguments to create a Carrinho.
     * @example
     * // Create one Carrinho
     * const Carrinho = await prisma.carrinho.create({
     *   data: {
     *     // ... data to create a Carrinho
     *   }
     * })
     * 
     */
    create<T extends CarrinhoCreateArgs>(args: SelectSubset<T, CarrinhoCreateArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carrinhos.
     * @param {CarrinhoCreateManyArgs} args - Arguments to create many Carrinhos.
     * @example
     * // Create many Carrinhos
     * const carrinho = await prisma.carrinho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarrinhoCreateManyArgs>(args?: SelectSubset<T, CarrinhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carrinhos and returns the data saved in the database.
     * @param {CarrinhoCreateManyAndReturnArgs} args - Arguments to create many Carrinhos.
     * @example
     * // Create many Carrinhos
     * const carrinho = await prisma.carrinho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carrinhos and only return the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarrinhoCreateManyAndReturnArgs>(args?: SelectSubset<T, CarrinhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrinho.
     * @param {CarrinhoDeleteArgs} args - Arguments to delete one Carrinho.
     * @example
     * // Delete one Carrinho
     * const Carrinho = await prisma.carrinho.delete({
     *   where: {
     *     // ... filter to delete one Carrinho
     *   }
     * })
     * 
     */
    delete<T extends CarrinhoDeleteArgs>(args: SelectSubset<T, CarrinhoDeleteArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrinho.
     * @param {CarrinhoUpdateArgs} args - Arguments to update one Carrinho.
     * @example
     * // Update one Carrinho
     * const carrinho = await prisma.carrinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarrinhoUpdateArgs>(args: SelectSubset<T, CarrinhoUpdateArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carrinhos.
     * @param {CarrinhoDeleteManyArgs} args - Arguments to filter Carrinhos to delete.
     * @example
     * // Delete a few Carrinhos
     * const { count } = await prisma.carrinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarrinhoDeleteManyArgs>(args?: SelectSubset<T, CarrinhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carrinhos
     * const carrinho = await prisma.carrinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarrinhoUpdateManyArgs>(args: SelectSubset<T, CarrinhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinhos and returns the data updated in the database.
     * @param {CarrinhoUpdateManyAndReturnArgs} args - Arguments to update many Carrinhos.
     * @example
     * // Update many Carrinhos
     * const carrinho = await prisma.carrinho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carrinhos and only return the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarrinhoUpdateManyAndReturnArgs>(args: SelectSubset<T, CarrinhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrinho.
     * @param {CarrinhoUpsertArgs} args - Arguments to update or create a Carrinho.
     * @example
     * // Update or create a Carrinho
     * const carrinho = await prisma.carrinho.upsert({
     *   create: {
     *     // ... data to create a Carrinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrinho we want to update
     *   }
     * })
     */
    upsert<T extends CarrinhoUpsertArgs>(args: SelectSubset<T, CarrinhoUpsertArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoCountArgs} args - Arguments to filter Carrinhos to count.
     * @example
     * // Count the number of Carrinhos
     * const count = await prisma.carrinho.count({
     *   where: {
     *     // ... the filter for the Carrinhos we want to count
     *   }
     * })
    **/
    count<T extends CarrinhoCountArgs>(
      args?: Subset<T, CarrinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarrinhoAggregateArgs>(args: Subset<T, CarrinhoAggregateArgs>): Prisma.PrismaPromise<GetCarrinhoAggregateType<T>>

    /**
     * Group by Carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoGroupByArgs} args - Group by arguments.
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
      T extends CarrinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarrinhoGroupByArgs['orderBy'] }
        : { orderBy?: CarrinhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarrinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrinho model
   */
  readonly fields: CarrinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarrinhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obra<T extends ObraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraDefaultArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Carrinho$itensArgs<ExtArgs> = {}>(args?: Subset<T, Carrinho$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Carrinho model
   */
  interface CarrinhoFieldRefs {
    readonly id: FieldRef<"Carrinho", 'String'>
    readonly obraId: FieldRef<"Carrinho", 'String'>
    readonly kit: FieldRef<"Carrinho", 'Kit'>
    readonly status: FieldRef<"Carrinho", 'StatusCarrinho'>
    readonly solicitado: FieldRef<"Carrinho", 'Boolean'>
    readonly recebido: FieldRef<"Carrinho", 'Boolean'>
    readonly updatedAt: FieldRef<"Carrinho", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Carrinho findUnique
   */
  export type CarrinhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinho to fetch.
     */
    where: CarrinhoWhereUniqueInput
  }

  /**
   * Carrinho findUniqueOrThrow
   */
  export type CarrinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinho to fetch.
     */
    where: CarrinhoWhereUniqueInput
  }

  /**
   * Carrinho findFirst
   */
  export type CarrinhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinho to fetch.
     */
    where?: CarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carrinhos to fetch.
     */
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carrinhos.
     */
    cursor?: CarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * Carrinho findFirstOrThrow
   */
  export type CarrinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinho to fetch.
     */
    where?: CarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carrinhos to fetch.
     */
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carrinhos.
     */
    cursor?: CarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * Carrinho findMany
   */
  export type CarrinhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter, which Carrinhos to fetch.
     */
    where?: CarrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carrinhos to fetch.
     */
    orderBy?: CarrinhoOrderByWithRelationInput | CarrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carrinhos.
     */
    cursor?: CarrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * Carrinho create
   */
  export type CarrinhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrinho.
     */
    data: XOR<CarrinhoCreateInput, CarrinhoUncheckedCreateInput>
  }

  /**
   * Carrinho createMany
   */
  export type CarrinhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carrinhos.
     */
    data: CarrinhoCreateManyInput | CarrinhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrinho createManyAndReturn
   */
  export type CarrinhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * The data used to create many Carrinhos.
     */
    data: CarrinhoCreateManyInput | CarrinhoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrinho update
   */
  export type CarrinhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrinho.
     */
    data: XOR<CarrinhoUpdateInput, CarrinhoUncheckedUpdateInput>
    /**
     * Choose, which Carrinho to update.
     */
    where: CarrinhoWhereUniqueInput
  }

  /**
   * Carrinho updateMany
   */
  export type CarrinhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carrinhos.
     */
    data: XOR<CarrinhoUpdateManyMutationInput, CarrinhoUncheckedUpdateManyInput>
    /**
     * Filter which Carrinhos to update
     */
    where?: CarrinhoWhereInput
    /**
     * Limit how many Carrinhos to update.
     */
    limit?: number
  }

  /**
   * Carrinho updateManyAndReturn
   */
  export type CarrinhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * The data used to update Carrinhos.
     */
    data: XOR<CarrinhoUpdateManyMutationInput, CarrinhoUncheckedUpdateManyInput>
    /**
     * Filter which Carrinhos to update
     */
    where?: CarrinhoWhereInput
    /**
     * Limit how many Carrinhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrinho upsert
   */
  export type CarrinhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrinho to update in case it exists.
     */
    where: CarrinhoWhereUniqueInput
    /**
     * In case the Carrinho found by the `where` argument doesn't exist, create a new Carrinho with this data.
     */
    create: XOR<CarrinhoCreateInput, CarrinhoUncheckedCreateInput>
    /**
     * In case the Carrinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarrinhoUpdateInput, CarrinhoUncheckedUpdateInput>
  }

  /**
   * Carrinho delete
   */
  export type CarrinhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
    /**
     * Filter which Carrinho to delete.
     */
    where: CarrinhoWhereUniqueInput
  }

  /**
   * Carrinho deleteMany
   */
  export type CarrinhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrinhos to delete
     */
    where?: CarrinhoWhereInput
    /**
     * Limit how many Carrinhos to delete.
     */
    limit?: number
  }

  /**
   * Carrinho.itens
   */
  export type Carrinho$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    where?: ItemSeparacaoWhereInput
    orderBy?: ItemSeparacaoOrderByWithRelationInput | ItemSeparacaoOrderByWithRelationInput[]
    cursor?: ItemSeparacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemSeparacaoScalarFieldEnum | ItemSeparacaoScalarFieldEnum[]
  }

  /**
   * Carrinho without action
   */
  export type CarrinhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrinho
     */
    select?: CarrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrinho
     */
    omit?: CarrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrinhoInclude<ExtArgs> | null
  }


  /**
   * Model ItemSeparacao
   */

  export type AggregateItemSeparacao = {
    _count: ItemSeparacaoCountAggregateOutputType | null
    _min: ItemSeparacaoMinAggregateOutputType | null
    _max: ItemSeparacaoMaxAggregateOutputType | null
  }

  export type ItemSeparacaoMinAggregateOutputType = {
    id: string | null
    carrinhoId: string | null
    nome: string | null
    banca: string | null
    status: $Enums.StatusItem | null
    timerStart: Date | null
    timerEnd: Date | null
    montagemStatus: string | null
    montagemObservacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemSeparacaoMaxAggregateOutputType = {
    id: string | null
    carrinhoId: string | null
    nome: string | null
    banca: string | null
    status: $Enums.StatusItem | null
    timerStart: Date | null
    timerEnd: Date | null
    montagemStatus: string | null
    montagemObservacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemSeparacaoCountAggregateOutputType = {
    id: number
    carrinhoId: number
    nome: number
    banca: number
    status: number
    timerStart: number
    timerEnd: number
    montagemStatus: number
    montagemObservacao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemSeparacaoMinAggregateInputType = {
    id?: true
    carrinhoId?: true
    nome?: true
    banca?: true
    status?: true
    timerStart?: true
    timerEnd?: true
    montagemStatus?: true
    montagemObservacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemSeparacaoMaxAggregateInputType = {
    id?: true
    carrinhoId?: true
    nome?: true
    banca?: true
    status?: true
    timerStart?: true
    timerEnd?: true
    montagemStatus?: true
    montagemObservacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemSeparacaoCountAggregateInputType = {
    id?: true
    carrinhoId?: true
    nome?: true
    banca?: true
    status?: true
    timerStart?: true
    timerEnd?: true
    montagemStatus?: true
    montagemObservacao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemSeparacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSeparacao to aggregate.
     */
    where?: ItemSeparacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSeparacaos to fetch.
     */
    orderBy?: ItemSeparacaoOrderByWithRelationInput | ItemSeparacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemSeparacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSeparacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSeparacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemSeparacaos
    **/
    _count?: true | ItemSeparacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemSeparacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemSeparacaoMaxAggregateInputType
  }

  export type GetItemSeparacaoAggregateType<T extends ItemSeparacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemSeparacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemSeparacao[P]>
      : GetScalarType<T[P], AggregateItemSeparacao[P]>
  }




  export type ItemSeparacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSeparacaoWhereInput
    orderBy?: ItemSeparacaoOrderByWithAggregationInput | ItemSeparacaoOrderByWithAggregationInput[]
    by: ItemSeparacaoScalarFieldEnum[] | ItemSeparacaoScalarFieldEnum
    having?: ItemSeparacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemSeparacaoCountAggregateInputType | true
    _min?: ItemSeparacaoMinAggregateInputType
    _max?: ItemSeparacaoMaxAggregateInputType
  }

  export type ItemSeparacaoGroupByOutputType = {
    id: string
    carrinhoId: string
    nome: string
    banca: string
    status: $Enums.StatusItem
    timerStart: Date | null
    timerEnd: Date | null
    montagemStatus: string | null
    montagemObservacao: string | null
    createdAt: Date
    updatedAt: Date
    _count: ItemSeparacaoCountAggregateOutputType | null
    _min: ItemSeparacaoMinAggregateOutputType | null
    _max: ItemSeparacaoMaxAggregateOutputType | null
  }

  type GetItemSeparacaoGroupByPayload<T extends ItemSeparacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemSeparacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemSeparacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemSeparacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemSeparacaoGroupByOutputType[P]>
        }
      >
    >


  export type ItemSeparacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrinhoId?: boolean
    nome?: boolean
    banca?: boolean
    status?: boolean
    timerStart?: boolean
    timerEnd?: boolean
    montagemStatus?: boolean
    montagemObservacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
    pendencias?: boolean | ItemSeparacao$pendenciasArgs<ExtArgs>
    _count?: boolean | ItemSeparacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSeparacao"]>

  export type ItemSeparacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrinhoId?: boolean
    nome?: boolean
    banca?: boolean
    status?: boolean
    timerStart?: boolean
    timerEnd?: boolean
    montagemStatus?: boolean
    montagemObservacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSeparacao"]>

  export type ItemSeparacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrinhoId?: boolean
    nome?: boolean
    banca?: boolean
    status?: boolean
    timerStart?: boolean
    timerEnd?: boolean
    montagemStatus?: boolean
    montagemObservacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSeparacao"]>

  export type ItemSeparacaoSelectScalar = {
    id?: boolean
    carrinhoId?: boolean
    nome?: boolean
    banca?: boolean
    status?: boolean
    timerStart?: boolean
    timerEnd?: boolean
    montagemStatus?: boolean
    montagemObservacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemSeparacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carrinhoId" | "nome" | "banca" | "status" | "timerStart" | "timerEnd" | "montagemStatus" | "montagemObservacao" | "createdAt" | "updatedAt", ExtArgs["result"]["itemSeparacao"]>
  export type ItemSeparacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
    pendencias?: boolean | ItemSeparacao$pendenciasArgs<ExtArgs>
    _count?: boolean | ItemSeparacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemSeparacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
  }
  export type ItemSeparacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | CarrinhoDefaultArgs<ExtArgs>
  }

  export type $ItemSeparacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemSeparacao"
    objects: {
      carrinho: Prisma.$CarrinhoPayload<ExtArgs>
      pendencias: Prisma.$PendenciaSeparacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      carrinhoId: string
      nome: string
      banca: string
      status: $Enums.StatusItem
      timerStart: Date | null
      timerEnd: Date | null
      montagemStatus: string | null
      montagemObservacao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemSeparacao"]>
    composites: {}
  }

  type ItemSeparacaoGetPayload<S extends boolean | null | undefined | ItemSeparacaoDefaultArgs> = $Result.GetResult<Prisma.$ItemSeparacaoPayload, S>

  type ItemSeparacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemSeparacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemSeparacaoCountAggregateInputType | true
    }

  export interface ItemSeparacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemSeparacao'], meta: { name: 'ItemSeparacao' } }
    /**
     * Find zero or one ItemSeparacao that matches the filter.
     * @param {ItemSeparacaoFindUniqueArgs} args - Arguments to find a ItemSeparacao
     * @example
     * // Get one ItemSeparacao
     * const itemSeparacao = await prisma.itemSeparacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemSeparacaoFindUniqueArgs>(args: SelectSubset<T, ItemSeparacaoFindUniqueArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemSeparacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemSeparacaoFindUniqueOrThrowArgs} args - Arguments to find a ItemSeparacao
     * @example
     * // Get one ItemSeparacao
     * const itemSeparacao = await prisma.itemSeparacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemSeparacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemSeparacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSeparacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSeparacaoFindFirstArgs} args - Arguments to find a ItemSeparacao
     * @example
     * // Get one ItemSeparacao
     * const itemSeparacao = await prisma.itemSeparacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemSeparacaoFindFirstArgs>(args?: SelectSubset<T, ItemSeparacaoFindFirstArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSeparacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSeparacaoFindFirstOrThrowArgs} args - Arguments to find a ItemSeparacao
     * @example
     * // Get one ItemSeparacao
     * const itemSeparacao = await prisma.itemSeparacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemSeparacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemSeparacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemSeparacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSeparacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemSeparacaos
     * const itemSeparacaos = await prisma.itemSeparacao.findMany()
     * 
     * // Get first 10 ItemSeparacaos
     * const itemSeparacaos = await prisma.itemSeparacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemSeparacaoWithIdOnly = await prisma.itemSeparacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemSeparacaoFindManyArgs>(args?: SelectSubset<T, ItemSeparacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemSeparacao.
     * @param {ItemSeparacaoCreateArgs} args - Arguments to create a ItemSeparacao.
     * @example
     * // Create one ItemSeparacao
     * const ItemSeparacao = await prisma.itemSeparacao.create({
     *   data: {
     *     // ... data to create a ItemSeparacao
     *   }
     * })
     * 
     */
    create<T extends ItemSeparacaoCreateArgs>(args: SelectSubset<T, ItemSeparacaoCreateArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemSeparacaos.
     * @param {ItemSeparacaoCreateManyArgs} args - Arguments to create many ItemSeparacaos.
     * @example
     * // Create many ItemSeparacaos
     * const itemSeparacao = await prisma.itemSeparacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemSeparacaoCreateManyArgs>(args?: SelectSubset<T, ItemSeparacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemSeparacaos and returns the data saved in the database.
     * @param {ItemSeparacaoCreateManyAndReturnArgs} args - Arguments to create many ItemSeparacaos.
     * @example
     * // Create many ItemSeparacaos
     * const itemSeparacao = await prisma.itemSeparacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemSeparacaos and only return the `id`
     * const itemSeparacaoWithIdOnly = await prisma.itemSeparacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemSeparacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemSeparacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemSeparacao.
     * @param {ItemSeparacaoDeleteArgs} args - Arguments to delete one ItemSeparacao.
     * @example
     * // Delete one ItemSeparacao
     * const ItemSeparacao = await prisma.itemSeparacao.delete({
     *   where: {
     *     // ... filter to delete one ItemSeparacao
     *   }
     * })
     * 
     */
    delete<T extends ItemSeparacaoDeleteArgs>(args: SelectSubset<T, ItemSeparacaoDeleteArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemSeparacao.
     * @param {ItemSeparacaoUpdateArgs} args - Arguments to update one ItemSeparacao.
     * @example
     * // Update one ItemSeparacao
     * const itemSeparacao = await prisma.itemSeparacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemSeparacaoUpdateArgs>(args: SelectSubset<T, ItemSeparacaoUpdateArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemSeparacaos.
     * @param {ItemSeparacaoDeleteManyArgs} args - Arguments to filter ItemSeparacaos to delete.
     * @example
     * // Delete a few ItemSeparacaos
     * const { count } = await prisma.itemSeparacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemSeparacaoDeleteManyArgs>(args?: SelectSubset<T, ItemSeparacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSeparacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSeparacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemSeparacaos
     * const itemSeparacao = await prisma.itemSeparacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemSeparacaoUpdateManyArgs>(args: SelectSubset<T, ItemSeparacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSeparacaos and returns the data updated in the database.
     * @param {ItemSeparacaoUpdateManyAndReturnArgs} args - Arguments to update many ItemSeparacaos.
     * @example
     * // Update many ItemSeparacaos
     * const itemSeparacao = await prisma.itemSeparacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemSeparacaos and only return the `id`
     * const itemSeparacaoWithIdOnly = await prisma.itemSeparacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemSeparacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemSeparacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemSeparacao.
     * @param {ItemSeparacaoUpsertArgs} args - Arguments to update or create a ItemSeparacao.
     * @example
     * // Update or create a ItemSeparacao
     * const itemSeparacao = await prisma.itemSeparacao.upsert({
     *   create: {
     *     // ... data to create a ItemSeparacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemSeparacao we want to update
     *   }
     * })
     */
    upsert<T extends ItemSeparacaoUpsertArgs>(args: SelectSubset<T, ItemSeparacaoUpsertArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemSeparacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSeparacaoCountArgs} args - Arguments to filter ItemSeparacaos to count.
     * @example
     * // Count the number of ItemSeparacaos
     * const count = await prisma.itemSeparacao.count({
     *   where: {
     *     // ... the filter for the ItemSeparacaos we want to count
     *   }
     * })
    **/
    count<T extends ItemSeparacaoCountArgs>(
      args?: Subset<T, ItemSeparacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemSeparacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemSeparacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSeparacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemSeparacaoAggregateArgs>(args: Subset<T, ItemSeparacaoAggregateArgs>): Prisma.PrismaPromise<GetItemSeparacaoAggregateType<T>>

    /**
     * Group by ItemSeparacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSeparacaoGroupByArgs} args - Group by arguments.
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
      T extends ItemSeparacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemSeparacaoGroupByArgs['orderBy'] }
        : { orderBy?: ItemSeparacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemSeparacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemSeparacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemSeparacao model
   */
  readonly fields: ItemSeparacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemSeparacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemSeparacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrinho<T extends CarrinhoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarrinhoDefaultArgs<ExtArgs>>): Prisma__CarrinhoClient<$Result.GetResult<Prisma.$CarrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pendencias<T extends ItemSeparacao$pendenciasArgs<ExtArgs> = {}>(args?: Subset<T, ItemSeparacao$pendenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ItemSeparacao model
   */
  interface ItemSeparacaoFieldRefs {
    readonly id: FieldRef<"ItemSeparacao", 'String'>
    readonly carrinhoId: FieldRef<"ItemSeparacao", 'String'>
    readonly nome: FieldRef<"ItemSeparacao", 'String'>
    readonly banca: FieldRef<"ItemSeparacao", 'String'>
    readonly status: FieldRef<"ItemSeparacao", 'StatusItem'>
    readonly timerStart: FieldRef<"ItemSeparacao", 'DateTime'>
    readonly timerEnd: FieldRef<"ItemSeparacao", 'DateTime'>
    readonly montagemStatus: FieldRef<"ItemSeparacao", 'String'>
    readonly montagemObservacao: FieldRef<"ItemSeparacao", 'String'>
    readonly createdAt: FieldRef<"ItemSeparacao", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemSeparacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemSeparacao findUnique
   */
  export type ItemSeparacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSeparacao to fetch.
     */
    where: ItemSeparacaoWhereUniqueInput
  }

  /**
   * ItemSeparacao findUniqueOrThrow
   */
  export type ItemSeparacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSeparacao to fetch.
     */
    where: ItemSeparacaoWhereUniqueInput
  }

  /**
   * ItemSeparacao findFirst
   */
  export type ItemSeparacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSeparacao to fetch.
     */
    where?: ItemSeparacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSeparacaos to fetch.
     */
    orderBy?: ItemSeparacaoOrderByWithRelationInput | ItemSeparacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSeparacaos.
     */
    cursor?: ItemSeparacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSeparacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSeparacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSeparacaos.
     */
    distinct?: ItemSeparacaoScalarFieldEnum | ItemSeparacaoScalarFieldEnum[]
  }

  /**
   * ItemSeparacao findFirstOrThrow
   */
  export type ItemSeparacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSeparacao to fetch.
     */
    where?: ItemSeparacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSeparacaos to fetch.
     */
    orderBy?: ItemSeparacaoOrderByWithRelationInput | ItemSeparacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSeparacaos.
     */
    cursor?: ItemSeparacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSeparacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSeparacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSeparacaos.
     */
    distinct?: ItemSeparacaoScalarFieldEnum | ItemSeparacaoScalarFieldEnum[]
  }

  /**
   * ItemSeparacao findMany
   */
  export type ItemSeparacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemSeparacaos to fetch.
     */
    where?: ItemSeparacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSeparacaos to fetch.
     */
    orderBy?: ItemSeparacaoOrderByWithRelationInput | ItemSeparacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemSeparacaos.
     */
    cursor?: ItemSeparacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSeparacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSeparacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSeparacaos.
     */
    distinct?: ItemSeparacaoScalarFieldEnum | ItemSeparacaoScalarFieldEnum[]
  }

  /**
   * ItemSeparacao create
   */
  export type ItemSeparacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemSeparacao.
     */
    data: XOR<ItemSeparacaoCreateInput, ItemSeparacaoUncheckedCreateInput>
  }

  /**
   * ItemSeparacao createMany
   */
  export type ItemSeparacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemSeparacaos.
     */
    data: ItemSeparacaoCreateManyInput | ItemSeparacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemSeparacao createManyAndReturn
   */
  export type ItemSeparacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemSeparacaos.
     */
    data: ItemSeparacaoCreateManyInput | ItemSeparacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemSeparacao update
   */
  export type ItemSeparacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemSeparacao.
     */
    data: XOR<ItemSeparacaoUpdateInput, ItemSeparacaoUncheckedUpdateInput>
    /**
     * Choose, which ItemSeparacao to update.
     */
    where: ItemSeparacaoWhereUniqueInput
  }

  /**
   * ItemSeparacao updateMany
   */
  export type ItemSeparacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemSeparacaos.
     */
    data: XOR<ItemSeparacaoUpdateManyMutationInput, ItemSeparacaoUncheckedUpdateManyInput>
    /**
     * Filter which ItemSeparacaos to update
     */
    where?: ItemSeparacaoWhereInput
    /**
     * Limit how many ItemSeparacaos to update.
     */
    limit?: number
  }

  /**
   * ItemSeparacao updateManyAndReturn
   */
  export type ItemSeparacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * The data used to update ItemSeparacaos.
     */
    data: XOR<ItemSeparacaoUpdateManyMutationInput, ItemSeparacaoUncheckedUpdateManyInput>
    /**
     * Filter which ItemSeparacaos to update
     */
    where?: ItemSeparacaoWhereInput
    /**
     * Limit how many ItemSeparacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemSeparacao upsert
   */
  export type ItemSeparacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemSeparacao to update in case it exists.
     */
    where: ItemSeparacaoWhereUniqueInput
    /**
     * In case the ItemSeparacao found by the `where` argument doesn't exist, create a new ItemSeparacao with this data.
     */
    create: XOR<ItemSeparacaoCreateInput, ItemSeparacaoUncheckedCreateInput>
    /**
     * In case the ItemSeparacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemSeparacaoUpdateInput, ItemSeparacaoUncheckedUpdateInput>
  }

  /**
   * ItemSeparacao delete
   */
  export type ItemSeparacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
    /**
     * Filter which ItemSeparacao to delete.
     */
    where: ItemSeparacaoWhereUniqueInput
  }

  /**
   * ItemSeparacao deleteMany
   */
  export type ItemSeparacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSeparacaos to delete
     */
    where?: ItemSeparacaoWhereInput
    /**
     * Limit how many ItemSeparacaos to delete.
     */
    limit?: number
  }

  /**
   * ItemSeparacao.pendencias
   */
  export type ItemSeparacao$pendenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    where?: PendenciaSeparacaoWhereInput
    orderBy?: PendenciaSeparacaoOrderByWithRelationInput | PendenciaSeparacaoOrderByWithRelationInput[]
    cursor?: PendenciaSeparacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendenciaSeparacaoScalarFieldEnum | PendenciaSeparacaoScalarFieldEnum[]
  }

  /**
   * ItemSeparacao without action
   */
  export type ItemSeparacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSeparacao
     */
    select?: ItemSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSeparacao
     */
    omit?: ItemSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSeparacaoInclude<ExtArgs> | null
  }


  /**
   * Model PendenciaSeparacao
   */

  export type AggregatePendenciaSeparacao = {
    _count: PendenciaSeparacaoCountAggregateOutputType | null
    _avg: PendenciaSeparacaoAvgAggregateOutputType | null
    _sum: PendenciaSeparacaoSumAggregateOutputType | null
    _min: PendenciaSeparacaoMinAggregateOutputType | null
    _max: PendenciaSeparacaoMaxAggregateOutputType | null
  }

  export type PendenciaSeparacaoAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type PendenciaSeparacaoSumAggregateOutputType = {
    quantidade: number | null
  }

  export type PendenciaSeparacaoMinAggregateOutputType = {
    id: string | null
    itemSeparacaoId: string | null
    codigoMaterial: string | null
    quantidade: number | null
    observacao: string | null
    createdAt: Date | null
  }

  export type PendenciaSeparacaoMaxAggregateOutputType = {
    id: string | null
    itemSeparacaoId: string | null
    codigoMaterial: string | null
    quantidade: number | null
    observacao: string | null
    createdAt: Date | null
  }

  export type PendenciaSeparacaoCountAggregateOutputType = {
    id: number
    itemSeparacaoId: number
    codigoMaterial: number
    quantidade: number
    observacao: number
    createdAt: number
    _all: number
  }


  export type PendenciaSeparacaoAvgAggregateInputType = {
    quantidade?: true
  }

  export type PendenciaSeparacaoSumAggregateInputType = {
    quantidade?: true
  }

  export type PendenciaSeparacaoMinAggregateInputType = {
    id?: true
    itemSeparacaoId?: true
    codigoMaterial?: true
    quantidade?: true
    observacao?: true
    createdAt?: true
  }

  export type PendenciaSeparacaoMaxAggregateInputType = {
    id?: true
    itemSeparacaoId?: true
    codigoMaterial?: true
    quantidade?: true
    observacao?: true
    createdAt?: true
  }

  export type PendenciaSeparacaoCountAggregateInputType = {
    id?: true
    itemSeparacaoId?: true
    codigoMaterial?: true
    quantidade?: true
    observacao?: true
    createdAt?: true
    _all?: true
  }

  export type PendenciaSeparacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendenciaSeparacao to aggregate.
     */
    where?: PendenciaSeparacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendenciaSeparacaos to fetch.
     */
    orderBy?: PendenciaSeparacaoOrderByWithRelationInput | PendenciaSeparacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendenciaSeparacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendenciaSeparacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendenciaSeparacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendenciaSeparacaos
    **/
    _count?: true | PendenciaSeparacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendenciaSeparacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendenciaSeparacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendenciaSeparacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendenciaSeparacaoMaxAggregateInputType
  }

  export type GetPendenciaSeparacaoAggregateType<T extends PendenciaSeparacaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePendenciaSeparacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendenciaSeparacao[P]>
      : GetScalarType<T[P], AggregatePendenciaSeparacao[P]>
  }




  export type PendenciaSeparacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendenciaSeparacaoWhereInput
    orderBy?: PendenciaSeparacaoOrderByWithAggregationInput | PendenciaSeparacaoOrderByWithAggregationInput[]
    by: PendenciaSeparacaoScalarFieldEnum[] | PendenciaSeparacaoScalarFieldEnum
    having?: PendenciaSeparacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendenciaSeparacaoCountAggregateInputType | true
    _avg?: PendenciaSeparacaoAvgAggregateInputType
    _sum?: PendenciaSeparacaoSumAggregateInputType
    _min?: PendenciaSeparacaoMinAggregateInputType
    _max?: PendenciaSeparacaoMaxAggregateInputType
  }

  export type PendenciaSeparacaoGroupByOutputType = {
    id: string
    itemSeparacaoId: string
    codigoMaterial: string
    quantidade: number
    observacao: string | null
    createdAt: Date
    _count: PendenciaSeparacaoCountAggregateOutputType | null
    _avg: PendenciaSeparacaoAvgAggregateOutputType | null
    _sum: PendenciaSeparacaoSumAggregateOutputType | null
    _min: PendenciaSeparacaoMinAggregateOutputType | null
    _max: PendenciaSeparacaoMaxAggregateOutputType | null
  }

  type GetPendenciaSeparacaoGroupByPayload<T extends PendenciaSeparacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendenciaSeparacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendenciaSeparacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendenciaSeparacaoGroupByOutputType[P]>
            : GetScalarType<T[P], PendenciaSeparacaoGroupByOutputType[P]>
        }
      >
    >


  export type PendenciaSeparacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemSeparacaoId?: boolean
    codigoMaterial?: boolean
    quantidade?: boolean
    observacao?: boolean
    createdAt?: boolean
    item?: boolean | ItemSeparacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendenciaSeparacao"]>

  export type PendenciaSeparacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemSeparacaoId?: boolean
    codigoMaterial?: boolean
    quantidade?: boolean
    observacao?: boolean
    createdAt?: boolean
    item?: boolean | ItemSeparacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendenciaSeparacao"]>

  export type PendenciaSeparacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemSeparacaoId?: boolean
    codigoMaterial?: boolean
    quantidade?: boolean
    observacao?: boolean
    createdAt?: boolean
    item?: boolean | ItemSeparacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendenciaSeparacao"]>

  export type PendenciaSeparacaoSelectScalar = {
    id?: boolean
    itemSeparacaoId?: boolean
    codigoMaterial?: boolean
    quantidade?: boolean
    observacao?: boolean
    createdAt?: boolean
  }

  export type PendenciaSeparacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemSeparacaoId" | "codigoMaterial" | "quantidade" | "observacao" | "createdAt", ExtArgs["result"]["pendenciaSeparacao"]>
  export type PendenciaSeparacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemSeparacaoDefaultArgs<ExtArgs>
  }
  export type PendenciaSeparacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemSeparacaoDefaultArgs<ExtArgs>
  }
  export type PendenciaSeparacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemSeparacaoDefaultArgs<ExtArgs>
  }

  export type $PendenciaSeparacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendenciaSeparacao"
    objects: {
      item: Prisma.$ItemSeparacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemSeparacaoId: string
      codigoMaterial: string
      quantidade: number
      observacao: string | null
      createdAt: Date
    }, ExtArgs["result"]["pendenciaSeparacao"]>
    composites: {}
  }

  type PendenciaSeparacaoGetPayload<S extends boolean | null | undefined | PendenciaSeparacaoDefaultArgs> = $Result.GetResult<Prisma.$PendenciaSeparacaoPayload, S>

  type PendenciaSeparacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendenciaSeparacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendenciaSeparacaoCountAggregateInputType | true
    }

  export interface PendenciaSeparacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendenciaSeparacao'], meta: { name: 'PendenciaSeparacao' } }
    /**
     * Find zero or one PendenciaSeparacao that matches the filter.
     * @param {PendenciaSeparacaoFindUniqueArgs} args - Arguments to find a PendenciaSeparacao
     * @example
     * // Get one PendenciaSeparacao
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendenciaSeparacaoFindUniqueArgs>(args: SelectSubset<T, PendenciaSeparacaoFindUniqueArgs<ExtArgs>>): Prisma__PendenciaSeparacaoClient<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PendenciaSeparacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendenciaSeparacaoFindUniqueOrThrowArgs} args - Arguments to find a PendenciaSeparacao
     * @example
     * // Get one PendenciaSeparacao
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendenciaSeparacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PendenciaSeparacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendenciaSeparacaoClient<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendenciaSeparacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendenciaSeparacaoFindFirstArgs} args - Arguments to find a PendenciaSeparacao
     * @example
     * // Get one PendenciaSeparacao
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendenciaSeparacaoFindFirstArgs>(args?: SelectSubset<T, PendenciaSeparacaoFindFirstArgs<ExtArgs>>): Prisma__PendenciaSeparacaoClient<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendenciaSeparacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendenciaSeparacaoFindFirstOrThrowArgs} args - Arguments to find a PendenciaSeparacao
     * @example
     * // Get one PendenciaSeparacao
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendenciaSeparacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PendenciaSeparacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendenciaSeparacaoClient<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PendenciaSeparacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendenciaSeparacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendenciaSeparacaos
     * const pendenciaSeparacaos = await prisma.pendenciaSeparacao.findMany()
     * 
     * // Get first 10 PendenciaSeparacaos
     * const pendenciaSeparacaos = await prisma.pendenciaSeparacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendenciaSeparacaoWithIdOnly = await prisma.pendenciaSeparacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendenciaSeparacaoFindManyArgs>(args?: SelectSubset<T, PendenciaSeparacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PendenciaSeparacao.
     * @param {PendenciaSeparacaoCreateArgs} args - Arguments to create a PendenciaSeparacao.
     * @example
     * // Create one PendenciaSeparacao
     * const PendenciaSeparacao = await prisma.pendenciaSeparacao.create({
     *   data: {
     *     // ... data to create a PendenciaSeparacao
     *   }
     * })
     * 
     */
    create<T extends PendenciaSeparacaoCreateArgs>(args: SelectSubset<T, PendenciaSeparacaoCreateArgs<ExtArgs>>): Prisma__PendenciaSeparacaoClient<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PendenciaSeparacaos.
     * @param {PendenciaSeparacaoCreateManyArgs} args - Arguments to create many PendenciaSeparacaos.
     * @example
     * // Create many PendenciaSeparacaos
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendenciaSeparacaoCreateManyArgs>(args?: SelectSubset<T, PendenciaSeparacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendenciaSeparacaos and returns the data saved in the database.
     * @param {PendenciaSeparacaoCreateManyAndReturnArgs} args - Arguments to create many PendenciaSeparacaos.
     * @example
     * // Create many PendenciaSeparacaos
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendenciaSeparacaos and only return the `id`
     * const pendenciaSeparacaoWithIdOnly = await prisma.pendenciaSeparacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendenciaSeparacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PendenciaSeparacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PendenciaSeparacao.
     * @param {PendenciaSeparacaoDeleteArgs} args - Arguments to delete one PendenciaSeparacao.
     * @example
     * // Delete one PendenciaSeparacao
     * const PendenciaSeparacao = await prisma.pendenciaSeparacao.delete({
     *   where: {
     *     // ... filter to delete one PendenciaSeparacao
     *   }
     * })
     * 
     */
    delete<T extends PendenciaSeparacaoDeleteArgs>(args: SelectSubset<T, PendenciaSeparacaoDeleteArgs<ExtArgs>>): Prisma__PendenciaSeparacaoClient<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PendenciaSeparacao.
     * @param {PendenciaSeparacaoUpdateArgs} args - Arguments to update one PendenciaSeparacao.
     * @example
     * // Update one PendenciaSeparacao
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendenciaSeparacaoUpdateArgs>(args: SelectSubset<T, PendenciaSeparacaoUpdateArgs<ExtArgs>>): Prisma__PendenciaSeparacaoClient<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PendenciaSeparacaos.
     * @param {PendenciaSeparacaoDeleteManyArgs} args - Arguments to filter PendenciaSeparacaos to delete.
     * @example
     * // Delete a few PendenciaSeparacaos
     * const { count } = await prisma.pendenciaSeparacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendenciaSeparacaoDeleteManyArgs>(args?: SelectSubset<T, PendenciaSeparacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendenciaSeparacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendenciaSeparacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendenciaSeparacaos
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendenciaSeparacaoUpdateManyArgs>(args: SelectSubset<T, PendenciaSeparacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendenciaSeparacaos and returns the data updated in the database.
     * @param {PendenciaSeparacaoUpdateManyAndReturnArgs} args - Arguments to update many PendenciaSeparacaos.
     * @example
     * // Update many PendenciaSeparacaos
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PendenciaSeparacaos and only return the `id`
     * const pendenciaSeparacaoWithIdOnly = await prisma.pendenciaSeparacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends PendenciaSeparacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PendenciaSeparacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PendenciaSeparacao.
     * @param {PendenciaSeparacaoUpsertArgs} args - Arguments to update or create a PendenciaSeparacao.
     * @example
     * // Update or create a PendenciaSeparacao
     * const pendenciaSeparacao = await prisma.pendenciaSeparacao.upsert({
     *   create: {
     *     // ... data to create a PendenciaSeparacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendenciaSeparacao we want to update
     *   }
     * })
     */
    upsert<T extends PendenciaSeparacaoUpsertArgs>(args: SelectSubset<T, PendenciaSeparacaoUpsertArgs<ExtArgs>>): Prisma__PendenciaSeparacaoClient<$Result.GetResult<Prisma.$PendenciaSeparacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PendenciaSeparacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendenciaSeparacaoCountArgs} args - Arguments to filter PendenciaSeparacaos to count.
     * @example
     * // Count the number of PendenciaSeparacaos
     * const count = await prisma.pendenciaSeparacao.count({
     *   where: {
     *     // ... the filter for the PendenciaSeparacaos we want to count
     *   }
     * })
    **/
    count<T extends PendenciaSeparacaoCountArgs>(
      args?: Subset<T, PendenciaSeparacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendenciaSeparacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendenciaSeparacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendenciaSeparacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendenciaSeparacaoAggregateArgs>(args: Subset<T, PendenciaSeparacaoAggregateArgs>): Prisma.PrismaPromise<GetPendenciaSeparacaoAggregateType<T>>

    /**
     * Group by PendenciaSeparacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendenciaSeparacaoGroupByArgs} args - Group by arguments.
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
      T extends PendenciaSeparacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendenciaSeparacaoGroupByArgs['orderBy'] }
        : { orderBy?: PendenciaSeparacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendenciaSeparacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendenciaSeparacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendenciaSeparacao model
   */
  readonly fields: PendenciaSeparacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendenciaSeparacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendenciaSeparacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemSeparacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemSeparacaoDefaultArgs<ExtArgs>>): Prisma__ItemSeparacaoClient<$Result.GetResult<Prisma.$ItemSeparacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PendenciaSeparacao model
   */
  interface PendenciaSeparacaoFieldRefs {
    readonly id: FieldRef<"PendenciaSeparacao", 'String'>
    readonly itemSeparacaoId: FieldRef<"PendenciaSeparacao", 'String'>
    readonly codigoMaterial: FieldRef<"PendenciaSeparacao", 'String'>
    readonly quantidade: FieldRef<"PendenciaSeparacao", 'Int'>
    readonly observacao: FieldRef<"PendenciaSeparacao", 'String'>
    readonly createdAt: FieldRef<"PendenciaSeparacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendenciaSeparacao findUnique
   */
  export type PendenciaSeparacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which PendenciaSeparacao to fetch.
     */
    where: PendenciaSeparacaoWhereUniqueInput
  }

  /**
   * PendenciaSeparacao findUniqueOrThrow
   */
  export type PendenciaSeparacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which PendenciaSeparacao to fetch.
     */
    where: PendenciaSeparacaoWhereUniqueInput
  }

  /**
   * PendenciaSeparacao findFirst
   */
  export type PendenciaSeparacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which PendenciaSeparacao to fetch.
     */
    where?: PendenciaSeparacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendenciaSeparacaos to fetch.
     */
    orderBy?: PendenciaSeparacaoOrderByWithRelationInput | PendenciaSeparacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendenciaSeparacaos.
     */
    cursor?: PendenciaSeparacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendenciaSeparacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendenciaSeparacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendenciaSeparacaos.
     */
    distinct?: PendenciaSeparacaoScalarFieldEnum | PendenciaSeparacaoScalarFieldEnum[]
  }

  /**
   * PendenciaSeparacao findFirstOrThrow
   */
  export type PendenciaSeparacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which PendenciaSeparacao to fetch.
     */
    where?: PendenciaSeparacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendenciaSeparacaos to fetch.
     */
    orderBy?: PendenciaSeparacaoOrderByWithRelationInput | PendenciaSeparacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendenciaSeparacaos.
     */
    cursor?: PendenciaSeparacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendenciaSeparacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendenciaSeparacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendenciaSeparacaos.
     */
    distinct?: PendenciaSeparacaoScalarFieldEnum | PendenciaSeparacaoScalarFieldEnum[]
  }

  /**
   * PendenciaSeparacao findMany
   */
  export type PendenciaSeparacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * Filter, which PendenciaSeparacaos to fetch.
     */
    where?: PendenciaSeparacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendenciaSeparacaos to fetch.
     */
    orderBy?: PendenciaSeparacaoOrderByWithRelationInput | PendenciaSeparacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendenciaSeparacaos.
     */
    cursor?: PendenciaSeparacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendenciaSeparacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendenciaSeparacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendenciaSeparacaos.
     */
    distinct?: PendenciaSeparacaoScalarFieldEnum | PendenciaSeparacaoScalarFieldEnum[]
  }

  /**
   * PendenciaSeparacao create
   */
  export type PendenciaSeparacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a PendenciaSeparacao.
     */
    data: XOR<PendenciaSeparacaoCreateInput, PendenciaSeparacaoUncheckedCreateInput>
  }

  /**
   * PendenciaSeparacao createMany
   */
  export type PendenciaSeparacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendenciaSeparacaos.
     */
    data: PendenciaSeparacaoCreateManyInput | PendenciaSeparacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendenciaSeparacao createManyAndReturn
   */
  export type PendenciaSeparacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * The data used to create many PendenciaSeparacaos.
     */
    data: PendenciaSeparacaoCreateManyInput | PendenciaSeparacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendenciaSeparacao update
   */
  export type PendenciaSeparacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a PendenciaSeparacao.
     */
    data: XOR<PendenciaSeparacaoUpdateInput, PendenciaSeparacaoUncheckedUpdateInput>
    /**
     * Choose, which PendenciaSeparacao to update.
     */
    where: PendenciaSeparacaoWhereUniqueInput
  }

  /**
   * PendenciaSeparacao updateMany
   */
  export type PendenciaSeparacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendenciaSeparacaos.
     */
    data: XOR<PendenciaSeparacaoUpdateManyMutationInput, PendenciaSeparacaoUncheckedUpdateManyInput>
    /**
     * Filter which PendenciaSeparacaos to update
     */
    where?: PendenciaSeparacaoWhereInput
    /**
     * Limit how many PendenciaSeparacaos to update.
     */
    limit?: number
  }

  /**
   * PendenciaSeparacao updateManyAndReturn
   */
  export type PendenciaSeparacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * The data used to update PendenciaSeparacaos.
     */
    data: XOR<PendenciaSeparacaoUpdateManyMutationInput, PendenciaSeparacaoUncheckedUpdateManyInput>
    /**
     * Filter which PendenciaSeparacaos to update
     */
    where?: PendenciaSeparacaoWhereInput
    /**
     * Limit how many PendenciaSeparacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendenciaSeparacao upsert
   */
  export type PendenciaSeparacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the PendenciaSeparacao to update in case it exists.
     */
    where: PendenciaSeparacaoWhereUniqueInput
    /**
     * In case the PendenciaSeparacao found by the `where` argument doesn't exist, create a new PendenciaSeparacao with this data.
     */
    create: XOR<PendenciaSeparacaoCreateInput, PendenciaSeparacaoUncheckedCreateInput>
    /**
     * In case the PendenciaSeparacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendenciaSeparacaoUpdateInput, PendenciaSeparacaoUncheckedUpdateInput>
  }

  /**
   * PendenciaSeparacao delete
   */
  export type PendenciaSeparacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
    /**
     * Filter which PendenciaSeparacao to delete.
     */
    where: PendenciaSeparacaoWhereUniqueInput
  }

  /**
   * PendenciaSeparacao deleteMany
   */
  export type PendenciaSeparacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendenciaSeparacaos to delete
     */
    where?: PendenciaSeparacaoWhereInput
    /**
     * Limit how many PendenciaSeparacaos to delete.
     */
    limit?: number
  }

  /**
   * PendenciaSeparacao without action
   */
  export type PendenciaSeparacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendenciaSeparacao
     */
    select?: PendenciaSeparacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendenciaSeparacao
     */
    omit?: PendenciaSeparacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendenciaSeparacaoInclude<ExtArgs> | null
  }


  /**
   * Model LogsAuditoria
   */

  export type AggregateLogsAuditoria = {
    _count: LogsAuditoriaCountAggregateOutputType | null
    _min: LogsAuditoriaMinAggregateOutputType | null
    _max: LogsAuditoriaMaxAggregateOutputType | null
  }

  export type LogsAuditoriaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    acao: string | null
    entidade: string | null
    entidadeId: string | null
    createdAt: Date | null
  }

  export type LogsAuditoriaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    acao: string | null
    entidade: string | null
    entidadeId: string | null
    createdAt: Date | null
  }

  export type LogsAuditoriaCountAggregateOutputType = {
    id: number
    userId: number
    acao: number
    entidade: number
    entidadeId: number
    detalhes: number
    createdAt: number
    _all: number
  }


  export type LogsAuditoriaMinAggregateInputType = {
    id?: true
    userId?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    createdAt?: true
  }

  export type LogsAuditoriaMaxAggregateInputType = {
    id?: true
    userId?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    createdAt?: true
  }

  export type LogsAuditoriaCountAggregateInputType = {
    id?: true
    userId?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    detalhes?: true
    createdAt?: true
    _all?: true
  }

  export type LogsAuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogsAuditoria to aggregate.
     */
    where?: LogsAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogsAuditorias to fetch.
     */
    orderBy?: LogsAuditoriaOrderByWithRelationInput | LogsAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogsAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogsAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogsAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogsAuditorias
    **/
    _count?: true | LogsAuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsAuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsAuditoriaMaxAggregateInputType
  }

  export type GetLogsAuditoriaAggregateType<T extends LogsAuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateLogsAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogsAuditoria[P]>
      : GetScalarType<T[P], AggregateLogsAuditoria[P]>
  }




  export type LogsAuditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogsAuditoriaWhereInput
    orderBy?: LogsAuditoriaOrderByWithAggregationInput | LogsAuditoriaOrderByWithAggregationInput[]
    by: LogsAuditoriaScalarFieldEnum[] | LogsAuditoriaScalarFieldEnum
    having?: LogsAuditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsAuditoriaCountAggregateInputType | true
    _min?: LogsAuditoriaMinAggregateInputType
    _max?: LogsAuditoriaMaxAggregateInputType
  }

  export type LogsAuditoriaGroupByOutputType = {
    id: string
    userId: string
    acao: string
    entidade: string
    entidadeId: string
    detalhes: JsonValue | null
    createdAt: Date
    _count: LogsAuditoriaCountAggregateOutputType | null
    _min: LogsAuditoriaMinAggregateOutputType | null
    _max: LogsAuditoriaMaxAggregateOutputType | null
  }

  type GetLogsAuditoriaGroupByPayload<T extends LogsAuditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsAuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsAuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsAuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], LogsAuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type LogsAuditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    detalhes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logsAuditoria"]>

  export type LogsAuditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    detalhes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logsAuditoria"]>

  export type LogsAuditoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    detalhes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logsAuditoria"]>

  export type LogsAuditoriaSelectScalar = {
    id?: boolean
    userId?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    detalhes?: boolean
    createdAt?: boolean
  }

  export type LogsAuditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "acao" | "entidade" | "entidadeId" | "detalhes" | "createdAt", ExtArgs["result"]["logsAuditoria"]>
  export type LogsAuditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogsAuditoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogsAuditoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogsAuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogsAuditoria"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      acao: string
      entidade: string
      entidadeId: string
      detalhes: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["logsAuditoria"]>
    composites: {}
  }

  type LogsAuditoriaGetPayload<S extends boolean | null | undefined | LogsAuditoriaDefaultArgs> = $Result.GetResult<Prisma.$LogsAuditoriaPayload, S>

  type LogsAuditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogsAuditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsAuditoriaCountAggregateInputType | true
    }

  export interface LogsAuditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogsAuditoria'], meta: { name: 'LogsAuditoria' } }
    /**
     * Find zero or one LogsAuditoria that matches the filter.
     * @param {LogsAuditoriaFindUniqueArgs} args - Arguments to find a LogsAuditoria
     * @example
     * // Get one LogsAuditoria
     * const logsAuditoria = await prisma.logsAuditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogsAuditoriaFindUniqueArgs>(args: SelectSubset<T, LogsAuditoriaFindUniqueArgs<ExtArgs>>): Prisma__LogsAuditoriaClient<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogsAuditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogsAuditoriaFindUniqueOrThrowArgs} args - Arguments to find a LogsAuditoria
     * @example
     * // Get one LogsAuditoria
     * const logsAuditoria = await prisma.logsAuditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogsAuditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, LogsAuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogsAuditoriaClient<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogsAuditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAuditoriaFindFirstArgs} args - Arguments to find a LogsAuditoria
     * @example
     * // Get one LogsAuditoria
     * const logsAuditoria = await prisma.logsAuditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogsAuditoriaFindFirstArgs>(args?: SelectSubset<T, LogsAuditoriaFindFirstArgs<ExtArgs>>): Prisma__LogsAuditoriaClient<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogsAuditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAuditoriaFindFirstOrThrowArgs} args - Arguments to find a LogsAuditoria
     * @example
     * // Get one LogsAuditoria
     * const logsAuditoria = await prisma.logsAuditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogsAuditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, LogsAuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogsAuditoriaClient<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogsAuditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAuditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogsAuditorias
     * const logsAuditorias = await prisma.logsAuditoria.findMany()
     * 
     * // Get first 10 LogsAuditorias
     * const logsAuditorias = await prisma.logsAuditoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsAuditoriaWithIdOnly = await prisma.logsAuditoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogsAuditoriaFindManyArgs>(args?: SelectSubset<T, LogsAuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogsAuditoria.
     * @param {LogsAuditoriaCreateArgs} args - Arguments to create a LogsAuditoria.
     * @example
     * // Create one LogsAuditoria
     * const LogsAuditoria = await prisma.logsAuditoria.create({
     *   data: {
     *     // ... data to create a LogsAuditoria
     *   }
     * })
     * 
     */
    create<T extends LogsAuditoriaCreateArgs>(args: SelectSubset<T, LogsAuditoriaCreateArgs<ExtArgs>>): Prisma__LogsAuditoriaClient<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogsAuditorias.
     * @param {LogsAuditoriaCreateManyArgs} args - Arguments to create many LogsAuditorias.
     * @example
     * // Create many LogsAuditorias
     * const logsAuditoria = await prisma.logsAuditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogsAuditoriaCreateManyArgs>(args?: SelectSubset<T, LogsAuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogsAuditorias and returns the data saved in the database.
     * @param {LogsAuditoriaCreateManyAndReturnArgs} args - Arguments to create many LogsAuditorias.
     * @example
     * // Create many LogsAuditorias
     * const logsAuditoria = await prisma.logsAuditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogsAuditorias and only return the `id`
     * const logsAuditoriaWithIdOnly = await prisma.logsAuditoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogsAuditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, LogsAuditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogsAuditoria.
     * @param {LogsAuditoriaDeleteArgs} args - Arguments to delete one LogsAuditoria.
     * @example
     * // Delete one LogsAuditoria
     * const LogsAuditoria = await prisma.logsAuditoria.delete({
     *   where: {
     *     // ... filter to delete one LogsAuditoria
     *   }
     * })
     * 
     */
    delete<T extends LogsAuditoriaDeleteArgs>(args: SelectSubset<T, LogsAuditoriaDeleteArgs<ExtArgs>>): Prisma__LogsAuditoriaClient<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogsAuditoria.
     * @param {LogsAuditoriaUpdateArgs} args - Arguments to update one LogsAuditoria.
     * @example
     * // Update one LogsAuditoria
     * const logsAuditoria = await prisma.logsAuditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogsAuditoriaUpdateArgs>(args: SelectSubset<T, LogsAuditoriaUpdateArgs<ExtArgs>>): Prisma__LogsAuditoriaClient<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogsAuditorias.
     * @param {LogsAuditoriaDeleteManyArgs} args - Arguments to filter LogsAuditorias to delete.
     * @example
     * // Delete a few LogsAuditorias
     * const { count } = await prisma.logsAuditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogsAuditoriaDeleteManyArgs>(args?: SelectSubset<T, LogsAuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogsAuditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAuditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogsAuditorias
     * const logsAuditoria = await prisma.logsAuditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogsAuditoriaUpdateManyArgs>(args: SelectSubset<T, LogsAuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogsAuditorias and returns the data updated in the database.
     * @param {LogsAuditoriaUpdateManyAndReturnArgs} args - Arguments to update many LogsAuditorias.
     * @example
     * // Update many LogsAuditorias
     * const logsAuditoria = await prisma.logsAuditoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogsAuditorias and only return the `id`
     * const logsAuditoriaWithIdOnly = await prisma.logsAuditoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogsAuditoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, LogsAuditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogsAuditoria.
     * @param {LogsAuditoriaUpsertArgs} args - Arguments to update or create a LogsAuditoria.
     * @example
     * // Update or create a LogsAuditoria
     * const logsAuditoria = await prisma.logsAuditoria.upsert({
     *   create: {
     *     // ... data to create a LogsAuditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogsAuditoria we want to update
     *   }
     * })
     */
    upsert<T extends LogsAuditoriaUpsertArgs>(args: SelectSubset<T, LogsAuditoriaUpsertArgs<ExtArgs>>): Prisma__LogsAuditoriaClient<$Result.GetResult<Prisma.$LogsAuditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogsAuditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAuditoriaCountArgs} args - Arguments to filter LogsAuditorias to count.
     * @example
     * // Count the number of LogsAuditorias
     * const count = await prisma.logsAuditoria.count({
     *   where: {
     *     // ... the filter for the LogsAuditorias we want to count
     *   }
     * })
    **/
    count<T extends LogsAuditoriaCountArgs>(
      args?: Subset<T, LogsAuditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsAuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogsAuditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogsAuditoriaAggregateArgs>(args: Subset<T, LogsAuditoriaAggregateArgs>): Prisma.PrismaPromise<GetLogsAuditoriaAggregateType<T>>

    /**
     * Group by LogsAuditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAuditoriaGroupByArgs} args - Group by arguments.
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
      T extends LogsAuditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogsAuditoriaGroupByArgs['orderBy'] }
        : { orderBy?: LogsAuditoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogsAuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogsAuditoria model
   */
  readonly fields: LogsAuditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogsAuditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogsAuditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LogsAuditoria model
   */
  interface LogsAuditoriaFieldRefs {
    readonly id: FieldRef<"LogsAuditoria", 'String'>
    readonly userId: FieldRef<"LogsAuditoria", 'String'>
    readonly acao: FieldRef<"LogsAuditoria", 'String'>
    readonly entidade: FieldRef<"LogsAuditoria", 'String'>
    readonly entidadeId: FieldRef<"LogsAuditoria", 'String'>
    readonly detalhes: FieldRef<"LogsAuditoria", 'Json'>
    readonly createdAt: FieldRef<"LogsAuditoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogsAuditoria findUnique
   */
  export type LogsAuditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogsAuditoria to fetch.
     */
    where: LogsAuditoriaWhereUniqueInput
  }

  /**
   * LogsAuditoria findUniqueOrThrow
   */
  export type LogsAuditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogsAuditoria to fetch.
     */
    where: LogsAuditoriaWhereUniqueInput
  }

  /**
   * LogsAuditoria findFirst
   */
  export type LogsAuditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogsAuditoria to fetch.
     */
    where?: LogsAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogsAuditorias to fetch.
     */
    orderBy?: LogsAuditoriaOrderByWithRelationInput | LogsAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogsAuditorias.
     */
    cursor?: LogsAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogsAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogsAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogsAuditorias.
     */
    distinct?: LogsAuditoriaScalarFieldEnum | LogsAuditoriaScalarFieldEnum[]
  }

  /**
   * LogsAuditoria findFirstOrThrow
   */
  export type LogsAuditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogsAuditoria to fetch.
     */
    where?: LogsAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogsAuditorias to fetch.
     */
    orderBy?: LogsAuditoriaOrderByWithRelationInput | LogsAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogsAuditorias.
     */
    cursor?: LogsAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogsAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogsAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogsAuditorias.
     */
    distinct?: LogsAuditoriaScalarFieldEnum | LogsAuditoriaScalarFieldEnum[]
  }

  /**
   * LogsAuditoria findMany
   */
  export type LogsAuditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogsAuditorias to fetch.
     */
    where?: LogsAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogsAuditorias to fetch.
     */
    orderBy?: LogsAuditoriaOrderByWithRelationInput | LogsAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogsAuditorias.
     */
    cursor?: LogsAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogsAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogsAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogsAuditorias.
     */
    distinct?: LogsAuditoriaScalarFieldEnum | LogsAuditoriaScalarFieldEnum[]
  }

  /**
   * LogsAuditoria create
   */
  export type LogsAuditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a LogsAuditoria.
     */
    data: XOR<LogsAuditoriaCreateInput, LogsAuditoriaUncheckedCreateInput>
  }

  /**
   * LogsAuditoria createMany
   */
  export type LogsAuditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogsAuditorias.
     */
    data: LogsAuditoriaCreateManyInput | LogsAuditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogsAuditoria createManyAndReturn
   */
  export type LogsAuditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * The data used to create many LogsAuditorias.
     */
    data: LogsAuditoriaCreateManyInput | LogsAuditoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogsAuditoria update
   */
  export type LogsAuditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a LogsAuditoria.
     */
    data: XOR<LogsAuditoriaUpdateInput, LogsAuditoriaUncheckedUpdateInput>
    /**
     * Choose, which LogsAuditoria to update.
     */
    where: LogsAuditoriaWhereUniqueInput
  }

  /**
   * LogsAuditoria updateMany
   */
  export type LogsAuditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogsAuditorias.
     */
    data: XOR<LogsAuditoriaUpdateManyMutationInput, LogsAuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which LogsAuditorias to update
     */
    where?: LogsAuditoriaWhereInput
    /**
     * Limit how many LogsAuditorias to update.
     */
    limit?: number
  }

  /**
   * LogsAuditoria updateManyAndReturn
   */
  export type LogsAuditoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * The data used to update LogsAuditorias.
     */
    data: XOR<LogsAuditoriaUpdateManyMutationInput, LogsAuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which LogsAuditorias to update
     */
    where?: LogsAuditoriaWhereInput
    /**
     * Limit how many LogsAuditorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogsAuditoria upsert
   */
  export type LogsAuditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the LogsAuditoria to update in case it exists.
     */
    where: LogsAuditoriaWhereUniqueInput
    /**
     * In case the LogsAuditoria found by the `where` argument doesn't exist, create a new LogsAuditoria with this data.
     */
    create: XOR<LogsAuditoriaCreateInput, LogsAuditoriaUncheckedCreateInput>
    /**
     * In case the LogsAuditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogsAuditoriaUpdateInput, LogsAuditoriaUncheckedUpdateInput>
  }

  /**
   * LogsAuditoria delete
   */
  export type LogsAuditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
    /**
     * Filter which LogsAuditoria to delete.
     */
    where: LogsAuditoriaWhereUniqueInput
  }

  /**
   * LogsAuditoria deleteMany
   */
  export type LogsAuditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogsAuditorias to delete
     */
    where?: LogsAuditoriaWhereInput
    /**
     * Limit how many LogsAuditorias to delete.
     */
    limit?: number
  }

  /**
   * LogsAuditoria without action
   */
  export type LogsAuditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsAuditoria
     */
    select?: LogsAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsAuditoria
     */
    omit?: LogsAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsAuditoriaInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ObraScalarFieldEnum: {
    id: 'id',
    numeroObra: 'numeroObra',
    dataObra: 'dataObra',
    statusGeral: 'statusGeral',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObraScalarFieldEnum = (typeof ObraScalarFieldEnum)[keyof typeof ObraScalarFieldEnum]


  export const CarrinhoScalarFieldEnum: {
    id: 'id',
    obraId: 'obraId',
    kit: 'kit',
    status: 'status',
    solicitado: 'solicitado',
    recebido: 'recebido',
    updatedAt: 'updatedAt'
  };

  export type CarrinhoScalarFieldEnum = (typeof CarrinhoScalarFieldEnum)[keyof typeof CarrinhoScalarFieldEnum]


  export const ItemSeparacaoScalarFieldEnum: {
    id: 'id',
    carrinhoId: 'carrinhoId',
    nome: 'nome',
    banca: 'banca',
    status: 'status',
    timerStart: 'timerStart',
    timerEnd: 'timerEnd',
    montagemStatus: 'montagemStatus',
    montagemObservacao: 'montagemObservacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemSeparacaoScalarFieldEnum = (typeof ItemSeparacaoScalarFieldEnum)[keyof typeof ItemSeparacaoScalarFieldEnum]


  export const PendenciaSeparacaoScalarFieldEnum: {
    id: 'id',
    itemSeparacaoId: 'itemSeparacaoId',
    codigoMaterial: 'codigoMaterial',
    quantidade: 'quantidade',
    observacao: 'observacao',
    createdAt: 'createdAt'
  };

  export type PendenciaSeparacaoScalarFieldEnum = (typeof PendenciaSeparacaoScalarFieldEnum)[keyof typeof PendenciaSeparacaoScalarFieldEnum]


  export const LogsAuditoriaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    acao: 'acao',
    entidade: 'entidade',
    entidadeId: 'entidadeId',
    detalhes: 'detalhes',
    createdAt: 'createdAt'
  };

  export type LogsAuditoriaScalarFieldEnum = (typeof LogsAuditoriaScalarFieldEnum)[keyof typeof LogsAuditoriaScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusGeral'
   */
  export type EnumStatusGeralFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusGeral'>
    


  /**
   * Reference to a field of type 'StatusGeral[]'
   */
  export type ListEnumStatusGeralFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusGeral[]'>
    


  /**
   * Reference to a field of type 'Kit'
   */
  export type EnumKitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kit'>
    


  /**
   * Reference to a field of type 'Kit[]'
   */
  export type ListEnumKitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kit[]'>
    


  /**
   * Reference to a field of type 'StatusCarrinho'
   */
  export type EnumStatusCarrinhoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusCarrinho'>
    


  /**
   * Reference to a field of type 'StatusCarrinho[]'
   */
  export type ListEnumStatusCarrinhoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusCarrinho[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusItem'
   */
  export type EnumStatusItemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusItem'>
    


  /**
   * Reference to a field of type 'StatusItem[]'
   */
  export type ListEnumStatusItemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusItem[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    logs?: LogsAuditoriaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    logs?: LogsAuditoriaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    logs?: LogsAuditoriaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ObraWhereInput = {
    AND?: ObraWhereInput | ObraWhereInput[]
    OR?: ObraWhereInput[]
    NOT?: ObraWhereInput | ObraWhereInput[]
    id?: StringFilter<"Obra"> | string
    numeroObra?: StringFilter<"Obra"> | string
    dataObra?: DateTimeFilter<"Obra"> | Date | string
    statusGeral?: EnumStatusGeralFilter<"Obra"> | $Enums.StatusGeral
    createdAt?: DateTimeFilter<"Obra"> | Date | string
    updatedAt?: DateTimeFilter<"Obra"> | Date | string
    carrinhos?: CarrinhoListRelationFilter
  }

  export type ObraOrderByWithRelationInput = {
    id?: SortOrder
    numeroObra?: SortOrder
    dataObra?: SortOrder
    statusGeral?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    carrinhos?: CarrinhoOrderByRelationAggregateInput
  }

  export type ObraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numeroObra?: string
    AND?: ObraWhereInput | ObraWhereInput[]
    OR?: ObraWhereInput[]
    NOT?: ObraWhereInput | ObraWhereInput[]
    dataObra?: DateTimeFilter<"Obra"> | Date | string
    statusGeral?: EnumStatusGeralFilter<"Obra"> | $Enums.StatusGeral
    createdAt?: DateTimeFilter<"Obra"> | Date | string
    updatedAt?: DateTimeFilter<"Obra"> | Date | string
    carrinhos?: CarrinhoListRelationFilter
  }, "id" | "numeroObra">

  export type ObraOrderByWithAggregationInput = {
    id?: SortOrder
    numeroObra?: SortOrder
    dataObra?: SortOrder
    statusGeral?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ObraCountOrderByAggregateInput
    _max?: ObraMaxOrderByAggregateInput
    _min?: ObraMinOrderByAggregateInput
  }

  export type ObraScalarWhereWithAggregatesInput = {
    AND?: ObraScalarWhereWithAggregatesInput | ObraScalarWhereWithAggregatesInput[]
    OR?: ObraScalarWhereWithAggregatesInput[]
    NOT?: ObraScalarWhereWithAggregatesInput | ObraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Obra"> | string
    numeroObra?: StringWithAggregatesFilter<"Obra"> | string
    dataObra?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
    statusGeral?: EnumStatusGeralWithAggregatesFilter<"Obra"> | $Enums.StatusGeral
    createdAt?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
  }

  export type CarrinhoWhereInput = {
    AND?: CarrinhoWhereInput | CarrinhoWhereInput[]
    OR?: CarrinhoWhereInput[]
    NOT?: CarrinhoWhereInput | CarrinhoWhereInput[]
    id?: StringFilter<"Carrinho"> | string
    obraId?: StringFilter<"Carrinho"> | string
    kit?: EnumKitFilter<"Carrinho"> | $Enums.Kit
    status?: EnumStatusCarrinhoFilter<"Carrinho"> | $Enums.StatusCarrinho
    solicitado?: BoolFilter<"Carrinho"> | boolean
    recebido?: BoolFilter<"Carrinho"> | boolean
    updatedAt?: DateTimeFilter<"Carrinho"> | Date | string
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
    itens?: ItemSeparacaoListRelationFilter
  }

  export type CarrinhoOrderByWithRelationInput = {
    id?: SortOrder
    obraId?: SortOrder
    kit?: SortOrder
    status?: SortOrder
    solicitado?: SortOrder
    recebido?: SortOrder
    updatedAt?: SortOrder
    obra?: ObraOrderByWithRelationInput
    itens?: ItemSeparacaoOrderByRelationAggregateInput
  }

  export type CarrinhoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarrinhoWhereInput | CarrinhoWhereInput[]
    OR?: CarrinhoWhereInput[]
    NOT?: CarrinhoWhereInput | CarrinhoWhereInput[]
    obraId?: StringFilter<"Carrinho"> | string
    kit?: EnumKitFilter<"Carrinho"> | $Enums.Kit
    status?: EnumStatusCarrinhoFilter<"Carrinho"> | $Enums.StatusCarrinho
    solicitado?: BoolFilter<"Carrinho"> | boolean
    recebido?: BoolFilter<"Carrinho"> | boolean
    updatedAt?: DateTimeFilter<"Carrinho"> | Date | string
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
    itens?: ItemSeparacaoListRelationFilter
  }, "id">

  export type CarrinhoOrderByWithAggregationInput = {
    id?: SortOrder
    obraId?: SortOrder
    kit?: SortOrder
    status?: SortOrder
    solicitado?: SortOrder
    recebido?: SortOrder
    updatedAt?: SortOrder
    _count?: CarrinhoCountOrderByAggregateInput
    _max?: CarrinhoMaxOrderByAggregateInput
    _min?: CarrinhoMinOrderByAggregateInput
  }

  export type CarrinhoScalarWhereWithAggregatesInput = {
    AND?: CarrinhoScalarWhereWithAggregatesInput | CarrinhoScalarWhereWithAggregatesInput[]
    OR?: CarrinhoScalarWhereWithAggregatesInput[]
    NOT?: CarrinhoScalarWhereWithAggregatesInput | CarrinhoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Carrinho"> | string
    obraId?: StringWithAggregatesFilter<"Carrinho"> | string
    kit?: EnumKitWithAggregatesFilter<"Carrinho"> | $Enums.Kit
    status?: EnumStatusCarrinhoWithAggregatesFilter<"Carrinho"> | $Enums.StatusCarrinho
    solicitado?: BoolWithAggregatesFilter<"Carrinho"> | boolean
    recebido?: BoolWithAggregatesFilter<"Carrinho"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Carrinho"> | Date | string
  }

  export type ItemSeparacaoWhereInput = {
    AND?: ItemSeparacaoWhereInput | ItemSeparacaoWhereInput[]
    OR?: ItemSeparacaoWhereInput[]
    NOT?: ItemSeparacaoWhereInput | ItemSeparacaoWhereInput[]
    id?: StringFilter<"ItemSeparacao"> | string
    carrinhoId?: StringFilter<"ItemSeparacao"> | string
    nome?: StringFilter<"ItemSeparacao"> | string
    banca?: StringFilter<"ItemSeparacao"> | string
    status?: EnumStatusItemFilter<"ItemSeparacao"> | $Enums.StatusItem
    timerStart?: DateTimeNullableFilter<"ItemSeparacao"> | Date | string | null
    timerEnd?: DateTimeNullableFilter<"ItemSeparacao"> | Date | string | null
    montagemStatus?: StringNullableFilter<"ItemSeparacao"> | string | null
    montagemObservacao?: StringNullableFilter<"ItemSeparacao"> | string | null
    createdAt?: DateTimeFilter<"ItemSeparacao"> | Date | string
    updatedAt?: DateTimeFilter<"ItemSeparacao"> | Date | string
    carrinho?: XOR<CarrinhoScalarRelationFilter, CarrinhoWhereInput>
    pendencias?: PendenciaSeparacaoListRelationFilter
  }

  export type ItemSeparacaoOrderByWithRelationInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    nome?: SortOrder
    banca?: SortOrder
    status?: SortOrder
    timerStart?: SortOrderInput | SortOrder
    timerEnd?: SortOrderInput | SortOrder
    montagemStatus?: SortOrderInput | SortOrder
    montagemObservacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    carrinho?: CarrinhoOrderByWithRelationInput
    pendencias?: PendenciaSeparacaoOrderByRelationAggregateInput
  }

  export type ItemSeparacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemSeparacaoWhereInput | ItemSeparacaoWhereInput[]
    OR?: ItemSeparacaoWhereInput[]
    NOT?: ItemSeparacaoWhereInput | ItemSeparacaoWhereInput[]
    carrinhoId?: StringFilter<"ItemSeparacao"> | string
    nome?: StringFilter<"ItemSeparacao"> | string
    banca?: StringFilter<"ItemSeparacao"> | string
    status?: EnumStatusItemFilter<"ItemSeparacao"> | $Enums.StatusItem
    timerStart?: DateTimeNullableFilter<"ItemSeparacao"> | Date | string | null
    timerEnd?: DateTimeNullableFilter<"ItemSeparacao"> | Date | string | null
    montagemStatus?: StringNullableFilter<"ItemSeparacao"> | string | null
    montagemObservacao?: StringNullableFilter<"ItemSeparacao"> | string | null
    createdAt?: DateTimeFilter<"ItemSeparacao"> | Date | string
    updatedAt?: DateTimeFilter<"ItemSeparacao"> | Date | string
    carrinho?: XOR<CarrinhoScalarRelationFilter, CarrinhoWhereInput>
    pendencias?: PendenciaSeparacaoListRelationFilter
  }, "id">

  export type ItemSeparacaoOrderByWithAggregationInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    nome?: SortOrder
    banca?: SortOrder
    status?: SortOrder
    timerStart?: SortOrderInput | SortOrder
    timerEnd?: SortOrderInput | SortOrder
    montagemStatus?: SortOrderInput | SortOrder
    montagemObservacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemSeparacaoCountOrderByAggregateInput
    _max?: ItemSeparacaoMaxOrderByAggregateInput
    _min?: ItemSeparacaoMinOrderByAggregateInput
  }

  export type ItemSeparacaoScalarWhereWithAggregatesInput = {
    AND?: ItemSeparacaoScalarWhereWithAggregatesInput | ItemSeparacaoScalarWhereWithAggregatesInput[]
    OR?: ItemSeparacaoScalarWhereWithAggregatesInput[]
    NOT?: ItemSeparacaoScalarWhereWithAggregatesInput | ItemSeparacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemSeparacao"> | string
    carrinhoId?: StringWithAggregatesFilter<"ItemSeparacao"> | string
    nome?: StringWithAggregatesFilter<"ItemSeparacao"> | string
    banca?: StringWithAggregatesFilter<"ItemSeparacao"> | string
    status?: EnumStatusItemWithAggregatesFilter<"ItemSeparacao"> | $Enums.StatusItem
    timerStart?: DateTimeNullableWithAggregatesFilter<"ItemSeparacao"> | Date | string | null
    timerEnd?: DateTimeNullableWithAggregatesFilter<"ItemSeparacao"> | Date | string | null
    montagemStatus?: StringNullableWithAggregatesFilter<"ItemSeparacao"> | string | null
    montagemObservacao?: StringNullableWithAggregatesFilter<"ItemSeparacao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ItemSeparacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemSeparacao"> | Date | string
  }

  export type PendenciaSeparacaoWhereInput = {
    AND?: PendenciaSeparacaoWhereInput | PendenciaSeparacaoWhereInput[]
    OR?: PendenciaSeparacaoWhereInput[]
    NOT?: PendenciaSeparacaoWhereInput | PendenciaSeparacaoWhereInput[]
    id?: StringFilter<"PendenciaSeparacao"> | string
    itemSeparacaoId?: StringFilter<"PendenciaSeparacao"> | string
    codigoMaterial?: StringFilter<"PendenciaSeparacao"> | string
    quantidade?: IntFilter<"PendenciaSeparacao"> | number
    observacao?: StringNullableFilter<"PendenciaSeparacao"> | string | null
    createdAt?: DateTimeFilter<"PendenciaSeparacao"> | Date | string
    item?: XOR<ItemSeparacaoScalarRelationFilter, ItemSeparacaoWhereInput>
  }

  export type PendenciaSeparacaoOrderByWithRelationInput = {
    id?: SortOrder
    itemSeparacaoId?: SortOrder
    codigoMaterial?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    item?: ItemSeparacaoOrderByWithRelationInput
  }

  export type PendenciaSeparacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendenciaSeparacaoWhereInput | PendenciaSeparacaoWhereInput[]
    OR?: PendenciaSeparacaoWhereInput[]
    NOT?: PendenciaSeparacaoWhereInput | PendenciaSeparacaoWhereInput[]
    itemSeparacaoId?: StringFilter<"PendenciaSeparacao"> | string
    codigoMaterial?: StringFilter<"PendenciaSeparacao"> | string
    quantidade?: IntFilter<"PendenciaSeparacao"> | number
    observacao?: StringNullableFilter<"PendenciaSeparacao"> | string | null
    createdAt?: DateTimeFilter<"PendenciaSeparacao"> | Date | string
    item?: XOR<ItemSeparacaoScalarRelationFilter, ItemSeparacaoWhereInput>
  }, "id">

  export type PendenciaSeparacaoOrderByWithAggregationInput = {
    id?: SortOrder
    itemSeparacaoId?: SortOrder
    codigoMaterial?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PendenciaSeparacaoCountOrderByAggregateInput
    _avg?: PendenciaSeparacaoAvgOrderByAggregateInput
    _max?: PendenciaSeparacaoMaxOrderByAggregateInput
    _min?: PendenciaSeparacaoMinOrderByAggregateInput
    _sum?: PendenciaSeparacaoSumOrderByAggregateInput
  }

  export type PendenciaSeparacaoScalarWhereWithAggregatesInput = {
    AND?: PendenciaSeparacaoScalarWhereWithAggregatesInput | PendenciaSeparacaoScalarWhereWithAggregatesInput[]
    OR?: PendenciaSeparacaoScalarWhereWithAggregatesInput[]
    NOT?: PendenciaSeparacaoScalarWhereWithAggregatesInput | PendenciaSeparacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendenciaSeparacao"> | string
    itemSeparacaoId?: StringWithAggregatesFilter<"PendenciaSeparacao"> | string
    codigoMaterial?: StringWithAggregatesFilter<"PendenciaSeparacao"> | string
    quantidade?: IntWithAggregatesFilter<"PendenciaSeparacao"> | number
    observacao?: StringNullableWithAggregatesFilter<"PendenciaSeparacao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PendenciaSeparacao"> | Date | string
  }

  export type LogsAuditoriaWhereInput = {
    AND?: LogsAuditoriaWhereInput | LogsAuditoriaWhereInput[]
    OR?: LogsAuditoriaWhereInput[]
    NOT?: LogsAuditoriaWhereInput | LogsAuditoriaWhereInput[]
    id?: StringFilter<"LogsAuditoria"> | string
    userId?: StringFilter<"LogsAuditoria"> | string
    acao?: StringFilter<"LogsAuditoria"> | string
    entidade?: StringFilter<"LogsAuditoria"> | string
    entidadeId?: StringFilter<"LogsAuditoria"> | string
    detalhes?: JsonNullableFilter<"LogsAuditoria">
    createdAt?: DateTimeFilter<"LogsAuditoria"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LogsAuditoriaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    detalhes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogsAuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogsAuditoriaWhereInput | LogsAuditoriaWhereInput[]
    OR?: LogsAuditoriaWhereInput[]
    NOT?: LogsAuditoriaWhereInput | LogsAuditoriaWhereInput[]
    userId?: StringFilter<"LogsAuditoria"> | string
    acao?: StringFilter<"LogsAuditoria"> | string
    entidade?: StringFilter<"LogsAuditoria"> | string
    entidadeId?: StringFilter<"LogsAuditoria"> | string
    detalhes?: JsonNullableFilter<"LogsAuditoria">
    createdAt?: DateTimeFilter<"LogsAuditoria"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LogsAuditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    detalhes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LogsAuditoriaCountOrderByAggregateInput
    _max?: LogsAuditoriaMaxOrderByAggregateInput
    _min?: LogsAuditoriaMinOrderByAggregateInput
  }

  export type LogsAuditoriaScalarWhereWithAggregatesInput = {
    AND?: LogsAuditoriaScalarWhereWithAggregatesInput | LogsAuditoriaScalarWhereWithAggregatesInput[]
    OR?: LogsAuditoriaScalarWhereWithAggregatesInput[]
    NOT?: LogsAuditoriaScalarWhereWithAggregatesInput | LogsAuditoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogsAuditoria"> | string
    userId?: StringWithAggregatesFilter<"LogsAuditoria"> | string
    acao?: StringWithAggregatesFilter<"LogsAuditoria"> | string
    entidade?: StringWithAggregatesFilter<"LogsAuditoria"> | string
    entidadeId?: StringWithAggregatesFilter<"LogsAuditoria"> | string
    detalhes?: JsonNullableWithAggregatesFilter<"LogsAuditoria">
    createdAt?: DateTimeWithAggregatesFilter<"LogsAuditoria"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    logs?: LogsAuditoriaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    logs?: LogsAuditoriaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsAuditoriaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsAuditoriaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraCreateInput = {
    id?: string
    numeroObra: string
    dataObra: Date | string
    statusGeral?: $Enums.StatusGeral
    createdAt?: Date | string
    updatedAt?: Date | string
    carrinhos?: CarrinhoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateInput = {
    id?: string
    numeroObra: string
    dataObra: Date | string
    statusGeral?: $Enums.StatusGeral
    createdAt?: Date | string
    updatedAt?: Date | string
    carrinhos?: CarrinhoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroObra?: StringFieldUpdateOperationsInput | string
    dataObra?: DateTimeFieldUpdateOperationsInput | Date | string
    statusGeral?: EnumStatusGeralFieldUpdateOperationsInput | $Enums.StatusGeral
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinhos?: CarrinhoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroObra?: StringFieldUpdateOperationsInput | string
    dataObra?: DateTimeFieldUpdateOperationsInput | Date | string
    statusGeral?: EnumStatusGeralFieldUpdateOperationsInput | $Enums.StatusGeral
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinhos?: CarrinhoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraCreateManyInput = {
    id?: string
    numeroObra: string
    dataObra: Date | string
    statusGeral?: $Enums.StatusGeral
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroObra?: StringFieldUpdateOperationsInput | string
    dataObra?: DateTimeFieldUpdateOperationsInput | Date | string
    statusGeral?: EnumStatusGeralFieldUpdateOperationsInput | $Enums.StatusGeral
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroObra?: StringFieldUpdateOperationsInput | string
    dataObra?: DateTimeFieldUpdateOperationsInput | Date | string
    statusGeral?: EnumStatusGeralFieldUpdateOperationsInput | $Enums.StatusGeral
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarrinhoCreateInput = {
    id?: string
    kit: $Enums.Kit
    status?: $Enums.StatusCarrinho
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: Date | string
    obra: ObraCreateNestedOneWithoutCarrinhosInput
    itens?: ItemSeparacaoCreateNestedManyWithoutCarrinhoInput
  }

  export type CarrinhoUncheckedCreateInput = {
    id?: string
    obraId: string
    kit: $Enums.Kit
    status?: $Enums.StatusCarrinho
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: Date | string
    itens?: ItemSeparacaoUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type CarrinhoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obra?: ObraUpdateOneRequiredWithoutCarrinhosNestedInput
    itens?: ItemSeparacaoUpdateManyWithoutCarrinhoNestedInput
  }

  export type CarrinhoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    obraId?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemSeparacaoUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type CarrinhoCreateManyInput = {
    id?: string
    obraId: string
    kit: $Enums.Kit
    status?: $Enums.StatusCarrinho
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: Date | string
  }

  export type CarrinhoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarrinhoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    obraId?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSeparacaoCreateInput = {
    id?: string
    nome: string
    banca: string
    status?: $Enums.StatusItem
    timerStart?: Date | string | null
    timerEnd?: Date | string | null
    montagemStatus?: string | null
    montagemObservacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    carrinho: CarrinhoCreateNestedOneWithoutItensInput
    pendencias?: PendenciaSeparacaoCreateNestedManyWithoutItemInput
  }

  export type ItemSeparacaoUncheckedCreateInput = {
    id?: string
    carrinhoId: string
    nome: string
    banca: string
    status?: $Enums.StatusItem
    timerStart?: Date | string | null
    timerEnd?: Date | string | null
    montagemStatus?: string | null
    montagemObservacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendencias?: PendenciaSeparacaoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemSeparacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinho?: CarrinhoUpdateOneRequiredWithoutItensNestedInput
    pendencias?: PendenciaSeparacaoUpdateManyWithoutItemNestedInput
  }

  export type ItemSeparacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carrinhoId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendencias?: PendenciaSeparacaoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemSeparacaoCreateManyInput = {
    id?: string
    carrinhoId: string
    nome: string
    banca: string
    status?: $Enums.StatusItem
    timerStart?: Date | string | null
    timerEnd?: Date | string | null
    montagemStatus?: string | null
    montagemObservacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemSeparacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSeparacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    carrinhoId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendenciaSeparacaoCreateInput = {
    id?: string
    codigoMaterial: string
    quantidade: number
    observacao?: string | null
    createdAt?: Date | string
    item: ItemSeparacaoCreateNestedOneWithoutPendenciasInput
  }

  export type PendenciaSeparacaoUncheckedCreateInput = {
    id?: string
    itemSeparacaoId: string
    codigoMaterial: string
    quantidade: number
    observacao?: string | null
    createdAt?: Date | string
  }

  export type PendenciaSeparacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigoMaterial?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemSeparacaoUpdateOneRequiredWithoutPendenciasNestedInput
  }

  export type PendenciaSeparacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemSeparacaoId?: StringFieldUpdateOperationsInput | string
    codigoMaterial?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendenciaSeparacaoCreateManyInput = {
    id?: string
    itemSeparacaoId: string
    codigoMaterial: string
    quantidade: number
    observacao?: string | null
    createdAt?: Date | string
  }

  export type PendenciaSeparacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigoMaterial?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendenciaSeparacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemSeparacaoId?: StringFieldUpdateOperationsInput | string
    codigoMaterial?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsAuditoriaCreateInput = {
    id?: string
    acao: string
    entidade: string
    entidadeId: string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type LogsAuditoriaUncheckedCreateInput = {
    id?: string
    userId: string
    acao: string
    entidade: string
    entidadeId: string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogsAuditoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogsAuditoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsAuditoriaCreateManyInput = {
    id?: string
    userId: string
    acao: string
    entidade: string
    entidadeId: string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogsAuditoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsAuditoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LogsAuditoriaListRelationFilter = {
    every?: LogsAuditoriaWhereInput
    some?: LogsAuditoriaWhereInput
    none?: LogsAuditoriaWhereInput
  }

  export type LogsAuditoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusGeralFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusGeral | EnumStatusGeralFieldRefInput<$PrismaModel>
    in?: $Enums.StatusGeral[] | ListEnumStatusGeralFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusGeral[] | ListEnumStatusGeralFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusGeralFilter<$PrismaModel> | $Enums.StatusGeral
  }

  export type CarrinhoListRelationFilter = {
    every?: CarrinhoWhereInput
    some?: CarrinhoWhereInput
    none?: CarrinhoWhereInput
  }

  export type CarrinhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObraCountOrderByAggregateInput = {
    id?: SortOrder
    numeroObra?: SortOrder
    dataObra?: SortOrder
    statusGeral?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObraMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroObra?: SortOrder
    dataObra?: SortOrder
    statusGeral?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObraMinOrderByAggregateInput = {
    id?: SortOrder
    numeroObra?: SortOrder
    dataObra?: SortOrder
    statusGeral?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusGeralWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusGeral | EnumStatusGeralFieldRefInput<$PrismaModel>
    in?: $Enums.StatusGeral[] | ListEnumStatusGeralFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusGeral[] | ListEnumStatusGeralFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusGeralWithAggregatesFilter<$PrismaModel> | $Enums.StatusGeral
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusGeralFilter<$PrismaModel>
    _max?: NestedEnumStatusGeralFilter<$PrismaModel>
  }

  export type EnumKitFilter<$PrismaModel = never> = {
    equals?: $Enums.Kit | EnumKitFieldRefInput<$PrismaModel>
    in?: $Enums.Kit[] | ListEnumKitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kit[] | ListEnumKitFieldRefInput<$PrismaModel>
    not?: NestedEnumKitFilter<$PrismaModel> | $Enums.Kit
  }

  export type EnumStatusCarrinhoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCarrinho | EnumStatusCarrinhoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCarrinho[] | ListEnumStatusCarrinhoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCarrinho[] | ListEnumStatusCarrinhoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCarrinhoFilter<$PrismaModel> | $Enums.StatusCarrinho
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ObraScalarRelationFilter = {
    is?: ObraWhereInput
    isNot?: ObraWhereInput
  }

  export type ItemSeparacaoListRelationFilter = {
    every?: ItemSeparacaoWhereInput
    some?: ItemSeparacaoWhereInput
    none?: ItemSeparacaoWhereInput
  }

  export type ItemSeparacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarrinhoCountOrderByAggregateInput = {
    id?: SortOrder
    obraId?: SortOrder
    kit?: SortOrder
    status?: SortOrder
    solicitado?: SortOrder
    recebido?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarrinhoMaxOrderByAggregateInput = {
    id?: SortOrder
    obraId?: SortOrder
    kit?: SortOrder
    status?: SortOrder
    solicitado?: SortOrder
    recebido?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarrinhoMinOrderByAggregateInput = {
    id?: SortOrder
    obraId?: SortOrder
    kit?: SortOrder
    status?: SortOrder
    solicitado?: SortOrder
    recebido?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumKitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kit | EnumKitFieldRefInput<$PrismaModel>
    in?: $Enums.Kit[] | ListEnumKitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kit[] | ListEnumKitFieldRefInput<$PrismaModel>
    not?: NestedEnumKitWithAggregatesFilter<$PrismaModel> | $Enums.Kit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKitFilter<$PrismaModel>
    _max?: NestedEnumKitFilter<$PrismaModel>
  }

  export type EnumStatusCarrinhoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCarrinho | EnumStatusCarrinhoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCarrinho[] | ListEnumStatusCarrinhoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCarrinho[] | ListEnumStatusCarrinhoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCarrinhoWithAggregatesFilter<$PrismaModel> | $Enums.StatusCarrinho
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusCarrinhoFilter<$PrismaModel>
    _max?: NestedEnumStatusCarrinhoFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusItemFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusItem | EnumStatusItemFieldRefInput<$PrismaModel>
    in?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusItemFilter<$PrismaModel> | $Enums.StatusItem
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type CarrinhoScalarRelationFilter = {
    is?: CarrinhoWhereInput
    isNot?: CarrinhoWhereInput
  }

  export type PendenciaSeparacaoListRelationFilter = {
    every?: PendenciaSeparacaoWhereInput
    some?: PendenciaSeparacaoWhereInput
    none?: PendenciaSeparacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PendenciaSeparacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemSeparacaoCountOrderByAggregateInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    nome?: SortOrder
    banca?: SortOrder
    status?: SortOrder
    timerStart?: SortOrder
    timerEnd?: SortOrder
    montagemStatus?: SortOrder
    montagemObservacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSeparacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    nome?: SortOrder
    banca?: SortOrder
    status?: SortOrder
    timerStart?: SortOrder
    timerEnd?: SortOrder
    montagemStatus?: SortOrder
    montagemObservacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSeparacaoMinOrderByAggregateInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    nome?: SortOrder
    banca?: SortOrder
    status?: SortOrder
    timerStart?: SortOrder
    timerEnd?: SortOrder
    montagemStatus?: SortOrder
    montagemObservacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusItemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusItem | EnumStatusItemFieldRefInput<$PrismaModel>
    in?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusItemWithAggregatesFilter<$PrismaModel> | $Enums.StatusItem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusItemFilter<$PrismaModel>
    _max?: NestedEnumStatusItemFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ItemSeparacaoScalarRelationFilter = {
    is?: ItemSeparacaoWhereInput
    isNot?: ItemSeparacaoWhereInput
  }

  export type PendenciaSeparacaoCountOrderByAggregateInput = {
    id?: SortOrder
    itemSeparacaoId?: SortOrder
    codigoMaterial?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
  }

  export type PendenciaSeparacaoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type PendenciaSeparacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    itemSeparacaoId?: SortOrder
    codigoMaterial?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
  }

  export type PendenciaSeparacaoMinOrderByAggregateInput = {
    id?: SortOrder
    itemSeparacaoId?: SortOrder
    codigoMaterial?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
  }

  export type PendenciaSeparacaoSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LogsAuditoriaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    detalhes?: SortOrder
    createdAt?: SortOrder
  }

  export type LogsAuditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    createdAt?: SortOrder
  }

  export type LogsAuditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    createdAt?: SortOrder
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

  export type LogsAuditoriaCreateNestedManyWithoutUserInput = {
    create?: XOR<LogsAuditoriaCreateWithoutUserInput, LogsAuditoriaUncheckedCreateWithoutUserInput> | LogsAuditoriaCreateWithoutUserInput[] | LogsAuditoriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogsAuditoriaCreateOrConnectWithoutUserInput | LogsAuditoriaCreateOrConnectWithoutUserInput[]
    createMany?: LogsAuditoriaCreateManyUserInputEnvelope
    connect?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
  }

  export type LogsAuditoriaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogsAuditoriaCreateWithoutUserInput, LogsAuditoriaUncheckedCreateWithoutUserInput> | LogsAuditoriaCreateWithoutUserInput[] | LogsAuditoriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogsAuditoriaCreateOrConnectWithoutUserInput | LogsAuditoriaCreateOrConnectWithoutUserInput[]
    createMany?: LogsAuditoriaCreateManyUserInputEnvelope
    connect?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LogsAuditoriaUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogsAuditoriaCreateWithoutUserInput, LogsAuditoriaUncheckedCreateWithoutUserInput> | LogsAuditoriaCreateWithoutUserInput[] | LogsAuditoriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogsAuditoriaCreateOrConnectWithoutUserInput | LogsAuditoriaCreateOrConnectWithoutUserInput[]
    upsert?: LogsAuditoriaUpsertWithWhereUniqueWithoutUserInput | LogsAuditoriaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogsAuditoriaCreateManyUserInputEnvelope
    set?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
    disconnect?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
    delete?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
    connect?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
    update?: LogsAuditoriaUpdateWithWhereUniqueWithoutUserInput | LogsAuditoriaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogsAuditoriaUpdateManyWithWhereWithoutUserInput | LogsAuditoriaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogsAuditoriaScalarWhereInput | LogsAuditoriaScalarWhereInput[]
  }

  export type LogsAuditoriaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogsAuditoriaCreateWithoutUserInput, LogsAuditoriaUncheckedCreateWithoutUserInput> | LogsAuditoriaCreateWithoutUserInput[] | LogsAuditoriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogsAuditoriaCreateOrConnectWithoutUserInput | LogsAuditoriaCreateOrConnectWithoutUserInput[]
    upsert?: LogsAuditoriaUpsertWithWhereUniqueWithoutUserInput | LogsAuditoriaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogsAuditoriaCreateManyUserInputEnvelope
    set?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
    disconnect?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
    delete?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
    connect?: LogsAuditoriaWhereUniqueInput | LogsAuditoriaWhereUniqueInput[]
    update?: LogsAuditoriaUpdateWithWhereUniqueWithoutUserInput | LogsAuditoriaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogsAuditoriaUpdateManyWithWhereWithoutUserInput | LogsAuditoriaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogsAuditoriaScalarWhereInput | LogsAuditoriaScalarWhereInput[]
  }

  export type CarrinhoCreateNestedManyWithoutObraInput = {
    create?: XOR<CarrinhoCreateWithoutObraInput, CarrinhoUncheckedCreateWithoutObraInput> | CarrinhoCreateWithoutObraInput[] | CarrinhoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: CarrinhoCreateOrConnectWithoutObraInput | CarrinhoCreateOrConnectWithoutObraInput[]
    createMany?: CarrinhoCreateManyObraInputEnvelope
    connect?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
  }

  export type CarrinhoUncheckedCreateNestedManyWithoutObraInput = {
    create?: XOR<CarrinhoCreateWithoutObraInput, CarrinhoUncheckedCreateWithoutObraInput> | CarrinhoCreateWithoutObraInput[] | CarrinhoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: CarrinhoCreateOrConnectWithoutObraInput | CarrinhoCreateOrConnectWithoutObraInput[]
    createMany?: CarrinhoCreateManyObraInputEnvelope
    connect?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
  }

  export type EnumStatusGeralFieldUpdateOperationsInput = {
    set?: $Enums.StatusGeral
  }

  export type CarrinhoUpdateManyWithoutObraNestedInput = {
    create?: XOR<CarrinhoCreateWithoutObraInput, CarrinhoUncheckedCreateWithoutObraInput> | CarrinhoCreateWithoutObraInput[] | CarrinhoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: CarrinhoCreateOrConnectWithoutObraInput | CarrinhoCreateOrConnectWithoutObraInput[]
    upsert?: CarrinhoUpsertWithWhereUniqueWithoutObraInput | CarrinhoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: CarrinhoCreateManyObraInputEnvelope
    set?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
    disconnect?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
    delete?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
    connect?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
    update?: CarrinhoUpdateWithWhereUniqueWithoutObraInput | CarrinhoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: CarrinhoUpdateManyWithWhereWithoutObraInput | CarrinhoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: CarrinhoScalarWhereInput | CarrinhoScalarWhereInput[]
  }

  export type CarrinhoUncheckedUpdateManyWithoutObraNestedInput = {
    create?: XOR<CarrinhoCreateWithoutObraInput, CarrinhoUncheckedCreateWithoutObraInput> | CarrinhoCreateWithoutObraInput[] | CarrinhoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: CarrinhoCreateOrConnectWithoutObraInput | CarrinhoCreateOrConnectWithoutObraInput[]
    upsert?: CarrinhoUpsertWithWhereUniqueWithoutObraInput | CarrinhoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: CarrinhoCreateManyObraInputEnvelope
    set?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
    disconnect?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
    delete?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
    connect?: CarrinhoWhereUniqueInput | CarrinhoWhereUniqueInput[]
    update?: CarrinhoUpdateWithWhereUniqueWithoutObraInput | CarrinhoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: CarrinhoUpdateManyWithWhereWithoutObraInput | CarrinhoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: CarrinhoScalarWhereInput | CarrinhoScalarWhereInput[]
  }

  export type ObraCreateNestedOneWithoutCarrinhosInput = {
    create?: XOR<ObraCreateWithoutCarrinhosInput, ObraUncheckedCreateWithoutCarrinhosInput>
    connectOrCreate?: ObraCreateOrConnectWithoutCarrinhosInput
    connect?: ObraWhereUniqueInput
  }

  export type ItemSeparacaoCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<ItemSeparacaoCreateWithoutCarrinhoInput, ItemSeparacaoUncheckedCreateWithoutCarrinhoInput> | ItemSeparacaoCreateWithoutCarrinhoInput[] | ItemSeparacaoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: ItemSeparacaoCreateOrConnectWithoutCarrinhoInput | ItemSeparacaoCreateOrConnectWithoutCarrinhoInput[]
    createMany?: ItemSeparacaoCreateManyCarrinhoInputEnvelope
    connect?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
  }

  export type ItemSeparacaoUncheckedCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<ItemSeparacaoCreateWithoutCarrinhoInput, ItemSeparacaoUncheckedCreateWithoutCarrinhoInput> | ItemSeparacaoCreateWithoutCarrinhoInput[] | ItemSeparacaoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: ItemSeparacaoCreateOrConnectWithoutCarrinhoInput | ItemSeparacaoCreateOrConnectWithoutCarrinhoInput[]
    createMany?: ItemSeparacaoCreateManyCarrinhoInputEnvelope
    connect?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
  }

  export type EnumKitFieldUpdateOperationsInput = {
    set?: $Enums.Kit
  }

  export type EnumStatusCarrinhoFieldUpdateOperationsInput = {
    set?: $Enums.StatusCarrinho
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ObraUpdateOneRequiredWithoutCarrinhosNestedInput = {
    create?: XOR<ObraCreateWithoutCarrinhosInput, ObraUncheckedCreateWithoutCarrinhosInput>
    connectOrCreate?: ObraCreateOrConnectWithoutCarrinhosInput
    upsert?: ObraUpsertWithoutCarrinhosInput
    connect?: ObraWhereUniqueInput
    update?: XOR<XOR<ObraUpdateToOneWithWhereWithoutCarrinhosInput, ObraUpdateWithoutCarrinhosInput>, ObraUncheckedUpdateWithoutCarrinhosInput>
  }

  export type ItemSeparacaoUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<ItemSeparacaoCreateWithoutCarrinhoInput, ItemSeparacaoUncheckedCreateWithoutCarrinhoInput> | ItemSeparacaoCreateWithoutCarrinhoInput[] | ItemSeparacaoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: ItemSeparacaoCreateOrConnectWithoutCarrinhoInput | ItemSeparacaoCreateOrConnectWithoutCarrinhoInput[]
    upsert?: ItemSeparacaoUpsertWithWhereUniqueWithoutCarrinhoInput | ItemSeparacaoUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: ItemSeparacaoCreateManyCarrinhoInputEnvelope
    set?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
    disconnect?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
    delete?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
    connect?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
    update?: ItemSeparacaoUpdateWithWhereUniqueWithoutCarrinhoInput | ItemSeparacaoUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: ItemSeparacaoUpdateManyWithWhereWithoutCarrinhoInput | ItemSeparacaoUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: ItemSeparacaoScalarWhereInput | ItemSeparacaoScalarWhereInput[]
  }

  export type ItemSeparacaoUncheckedUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<ItemSeparacaoCreateWithoutCarrinhoInput, ItemSeparacaoUncheckedCreateWithoutCarrinhoInput> | ItemSeparacaoCreateWithoutCarrinhoInput[] | ItemSeparacaoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: ItemSeparacaoCreateOrConnectWithoutCarrinhoInput | ItemSeparacaoCreateOrConnectWithoutCarrinhoInput[]
    upsert?: ItemSeparacaoUpsertWithWhereUniqueWithoutCarrinhoInput | ItemSeparacaoUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: ItemSeparacaoCreateManyCarrinhoInputEnvelope
    set?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
    disconnect?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
    delete?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
    connect?: ItemSeparacaoWhereUniqueInput | ItemSeparacaoWhereUniqueInput[]
    update?: ItemSeparacaoUpdateWithWhereUniqueWithoutCarrinhoInput | ItemSeparacaoUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: ItemSeparacaoUpdateManyWithWhereWithoutCarrinhoInput | ItemSeparacaoUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: ItemSeparacaoScalarWhereInput | ItemSeparacaoScalarWhereInput[]
  }

  export type CarrinhoCreateNestedOneWithoutItensInput = {
    create?: XOR<CarrinhoCreateWithoutItensInput, CarrinhoUncheckedCreateWithoutItensInput>
    connectOrCreate?: CarrinhoCreateOrConnectWithoutItensInput
    connect?: CarrinhoWhereUniqueInput
  }

  export type PendenciaSeparacaoCreateNestedManyWithoutItemInput = {
    create?: XOR<PendenciaSeparacaoCreateWithoutItemInput, PendenciaSeparacaoUncheckedCreateWithoutItemInput> | PendenciaSeparacaoCreateWithoutItemInput[] | PendenciaSeparacaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PendenciaSeparacaoCreateOrConnectWithoutItemInput | PendenciaSeparacaoCreateOrConnectWithoutItemInput[]
    createMany?: PendenciaSeparacaoCreateManyItemInputEnvelope
    connect?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
  }

  export type PendenciaSeparacaoUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<PendenciaSeparacaoCreateWithoutItemInput, PendenciaSeparacaoUncheckedCreateWithoutItemInput> | PendenciaSeparacaoCreateWithoutItemInput[] | PendenciaSeparacaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PendenciaSeparacaoCreateOrConnectWithoutItemInput | PendenciaSeparacaoCreateOrConnectWithoutItemInput[]
    createMany?: PendenciaSeparacaoCreateManyItemInputEnvelope
    connect?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
  }

  export type EnumStatusItemFieldUpdateOperationsInput = {
    set?: $Enums.StatusItem
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CarrinhoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<CarrinhoCreateWithoutItensInput, CarrinhoUncheckedCreateWithoutItensInput>
    connectOrCreate?: CarrinhoCreateOrConnectWithoutItensInput
    upsert?: CarrinhoUpsertWithoutItensInput
    connect?: CarrinhoWhereUniqueInput
    update?: XOR<XOR<CarrinhoUpdateToOneWithWhereWithoutItensInput, CarrinhoUpdateWithoutItensInput>, CarrinhoUncheckedUpdateWithoutItensInput>
  }

  export type PendenciaSeparacaoUpdateManyWithoutItemNestedInput = {
    create?: XOR<PendenciaSeparacaoCreateWithoutItemInput, PendenciaSeparacaoUncheckedCreateWithoutItemInput> | PendenciaSeparacaoCreateWithoutItemInput[] | PendenciaSeparacaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PendenciaSeparacaoCreateOrConnectWithoutItemInput | PendenciaSeparacaoCreateOrConnectWithoutItemInput[]
    upsert?: PendenciaSeparacaoUpsertWithWhereUniqueWithoutItemInput | PendenciaSeparacaoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: PendenciaSeparacaoCreateManyItemInputEnvelope
    set?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
    disconnect?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
    delete?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
    connect?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
    update?: PendenciaSeparacaoUpdateWithWhereUniqueWithoutItemInput | PendenciaSeparacaoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: PendenciaSeparacaoUpdateManyWithWhereWithoutItemInput | PendenciaSeparacaoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: PendenciaSeparacaoScalarWhereInput | PendenciaSeparacaoScalarWhereInput[]
  }

  export type PendenciaSeparacaoUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<PendenciaSeparacaoCreateWithoutItemInput, PendenciaSeparacaoUncheckedCreateWithoutItemInput> | PendenciaSeparacaoCreateWithoutItemInput[] | PendenciaSeparacaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PendenciaSeparacaoCreateOrConnectWithoutItemInput | PendenciaSeparacaoCreateOrConnectWithoutItemInput[]
    upsert?: PendenciaSeparacaoUpsertWithWhereUniqueWithoutItemInput | PendenciaSeparacaoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: PendenciaSeparacaoCreateManyItemInputEnvelope
    set?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
    disconnect?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
    delete?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
    connect?: PendenciaSeparacaoWhereUniqueInput | PendenciaSeparacaoWhereUniqueInput[]
    update?: PendenciaSeparacaoUpdateWithWhereUniqueWithoutItemInput | PendenciaSeparacaoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: PendenciaSeparacaoUpdateManyWithWhereWithoutItemInput | PendenciaSeparacaoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: PendenciaSeparacaoScalarWhereInput | PendenciaSeparacaoScalarWhereInput[]
  }

  export type ItemSeparacaoCreateNestedOneWithoutPendenciasInput = {
    create?: XOR<ItemSeparacaoCreateWithoutPendenciasInput, ItemSeparacaoUncheckedCreateWithoutPendenciasInput>
    connectOrCreate?: ItemSeparacaoCreateOrConnectWithoutPendenciasInput
    connect?: ItemSeparacaoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemSeparacaoUpdateOneRequiredWithoutPendenciasNestedInput = {
    create?: XOR<ItemSeparacaoCreateWithoutPendenciasInput, ItemSeparacaoUncheckedCreateWithoutPendenciasInput>
    connectOrCreate?: ItemSeparacaoCreateOrConnectWithoutPendenciasInput
    upsert?: ItemSeparacaoUpsertWithoutPendenciasInput
    connect?: ItemSeparacaoWhereUniqueInput
    update?: XOR<XOR<ItemSeparacaoUpdateToOneWithWhereWithoutPendenciasInput, ItemSeparacaoUpdateWithoutPendenciasInput>, ItemSeparacaoUncheckedUpdateWithoutPendenciasInput>
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusGeralFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusGeral | EnumStatusGeralFieldRefInput<$PrismaModel>
    in?: $Enums.StatusGeral[] | ListEnumStatusGeralFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusGeral[] | ListEnumStatusGeralFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusGeralFilter<$PrismaModel> | $Enums.StatusGeral
  }

  export type NestedEnumStatusGeralWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusGeral | EnumStatusGeralFieldRefInput<$PrismaModel>
    in?: $Enums.StatusGeral[] | ListEnumStatusGeralFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusGeral[] | ListEnumStatusGeralFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusGeralWithAggregatesFilter<$PrismaModel> | $Enums.StatusGeral
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusGeralFilter<$PrismaModel>
    _max?: NestedEnumStatusGeralFilter<$PrismaModel>
  }

  export type NestedEnumKitFilter<$PrismaModel = never> = {
    equals?: $Enums.Kit | EnumKitFieldRefInput<$PrismaModel>
    in?: $Enums.Kit[] | ListEnumKitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kit[] | ListEnumKitFieldRefInput<$PrismaModel>
    not?: NestedEnumKitFilter<$PrismaModel> | $Enums.Kit
  }

  export type NestedEnumStatusCarrinhoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCarrinho | EnumStatusCarrinhoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCarrinho[] | ListEnumStatusCarrinhoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCarrinho[] | ListEnumStatusCarrinhoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCarrinhoFilter<$PrismaModel> | $Enums.StatusCarrinho
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumKitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kit | EnumKitFieldRefInput<$PrismaModel>
    in?: $Enums.Kit[] | ListEnumKitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kit[] | ListEnumKitFieldRefInput<$PrismaModel>
    not?: NestedEnumKitWithAggregatesFilter<$PrismaModel> | $Enums.Kit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKitFilter<$PrismaModel>
    _max?: NestedEnumKitFilter<$PrismaModel>
  }

  export type NestedEnumStatusCarrinhoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCarrinho | EnumStatusCarrinhoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCarrinho[] | ListEnumStatusCarrinhoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCarrinho[] | ListEnumStatusCarrinhoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCarrinhoWithAggregatesFilter<$PrismaModel> | $Enums.StatusCarrinho
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusCarrinhoFilter<$PrismaModel>
    _max?: NestedEnumStatusCarrinhoFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusItemFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusItem | EnumStatusItemFieldRefInput<$PrismaModel>
    in?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusItemFilter<$PrismaModel> | $Enums.StatusItem
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumStatusItemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusItem | EnumStatusItemFieldRefInput<$PrismaModel>
    in?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusItemWithAggregatesFilter<$PrismaModel> | $Enums.StatusItem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusItemFilter<$PrismaModel>
    _max?: NestedEnumStatusItemFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type LogsAuditoriaCreateWithoutUserInput = {
    id?: string
    acao: string
    entidade: string
    entidadeId: string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogsAuditoriaUncheckedCreateWithoutUserInput = {
    id?: string
    acao: string
    entidade: string
    entidadeId: string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogsAuditoriaCreateOrConnectWithoutUserInput = {
    where: LogsAuditoriaWhereUniqueInput
    create: XOR<LogsAuditoriaCreateWithoutUserInput, LogsAuditoriaUncheckedCreateWithoutUserInput>
  }

  export type LogsAuditoriaCreateManyUserInputEnvelope = {
    data: LogsAuditoriaCreateManyUserInput | LogsAuditoriaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LogsAuditoriaUpsertWithWhereUniqueWithoutUserInput = {
    where: LogsAuditoriaWhereUniqueInput
    update: XOR<LogsAuditoriaUpdateWithoutUserInput, LogsAuditoriaUncheckedUpdateWithoutUserInput>
    create: XOR<LogsAuditoriaCreateWithoutUserInput, LogsAuditoriaUncheckedCreateWithoutUserInput>
  }

  export type LogsAuditoriaUpdateWithWhereUniqueWithoutUserInput = {
    where: LogsAuditoriaWhereUniqueInput
    data: XOR<LogsAuditoriaUpdateWithoutUserInput, LogsAuditoriaUncheckedUpdateWithoutUserInput>
  }

  export type LogsAuditoriaUpdateManyWithWhereWithoutUserInput = {
    where: LogsAuditoriaScalarWhereInput
    data: XOR<LogsAuditoriaUpdateManyMutationInput, LogsAuditoriaUncheckedUpdateManyWithoutUserInput>
  }

  export type LogsAuditoriaScalarWhereInput = {
    AND?: LogsAuditoriaScalarWhereInput | LogsAuditoriaScalarWhereInput[]
    OR?: LogsAuditoriaScalarWhereInput[]
    NOT?: LogsAuditoriaScalarWhereInput | LogsAuditoriaScalarWhereInput[]
    id?: StringFilter<"LogsAuditoria"> | string
    userId?: StringFilter<"LogsAuditoria"> | string
    acao?: StringFilter<"LogsAuditoria"> | string
    entidade?: StringFilter<"LogsAuditoria"> | string
    entidadeId?: StringFilter<"LogsAuditoria"> | string
    detalhes?: JsonNullableFilter<"LogsAuditoria">
    createdAt?: DateTimeFilter<"LogsAuditoria"> | Date | string
  }

  export type CarrinhoCreateWithoutObraInput = {
    id?: string
    kit: $Enums.Kit
    status?: $Enums.StatusCarrinho
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: Date | string
    itens?: ItemSeparacaoCreateNestedManyWithoutCarrinhoInput
  }

  export type CarrinhoUncheckedCreateWithoutObraInput = {
    id?: string
    kit: $Enums.Kit
    status?: $Enums.StatusCarrinho
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: Date | string
    itens?: ItemSeparacaoUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type CarrinhoCreateOrConnectWithoutObraInput = {
    where: CarrinhoWhereUniqueInput
    create: XOR<CarrinhoCreateWithoutObraInput, CarrinhoUncheckedCreateWithoutObraInput>
  }

  export type CarrinhoCreateManyObraInputEnvelope = {
    data: CarrinhoCreateManyObraInput | CarrinhoCreateManyObraInput[]
    skipDuplicates?: boolean
  }

  export type CarrinhoUpsertWithWhereUniqueWithoutObraInput = {
    where: CarrinhoWhereUniqueInput
    update: XOR<CarrinhoUpdateWithoutObraInput, CarrinhoUncheckedUpdateWithoutObraInput>
    create: XOR<CarrinhoCreateWithoutObraInput, CarrinhoUncheckedCreateWithoutObraInput>
  }

  export type CarrinhoUpdateWithWhereUniqueWithoutObraInput = {
    where: CarrinhoWhereUniqueInput
    data: XOR<CarrinhoUpdateWithoutObraInput, CarrinhoUncheckedUpdateWithoutObraInput>
  }

  export type CarrinhoUpdateManyWithWhereWithoutObraInput = {
    where: CarrinhoScalarWhereInput
    data: XOR<CarrinhoUpdateManyMutationInput, CarrinhoUncheckedUpdateManyWithoutObraInput>
  }

  export type CarrinhoScalarWhereInput = {
    AND?: CarrinhoScalarWhereInput | CarrinhoScalarWhereInput[]
    OR?: CarrinhoScalarWhereInput[]
    NOT?: CarrinhoScalarWhereInput | CarrinhoScalarWhereInput[]
    id?: StringFilter<"Carrinho"> | string
    obraId?: StringFilter<"Carrinho"> | string
    kit?: EnumKitFilter<"Carrinho"> | $Enums.Kit
    status?: EnumStatusCarrinhoFilter<"Carrinho"> | $Enums.StatusCarrinho
    solicitado?: BoolFilter<"Carrinho"> | boolean
    recebido?: BoolFilter<"Carrinho"> | boolean
    updatedAt?: DateTimeFilter<"Carrinho"> | Date | string
  }

  export type ObraCreateWithoutCarrinhosInput = {
    id?: string
    numeroObra: string
    dataObra: Date | string
    statusGeral?: $Enums.StatusGeral
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObraUncheckedCreateWithoutCarrinhosInput = {
    id?: string
    numeroObra: string
    dataObra: Date | string
    statusGeral?: $Enums.StatusGeral
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObraCreateOrConnectWithoutCarrinhosInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutCarrinhosInput, ObraUncheckedCreateWithoutCarrinhosInput>
  }

  export type ItemSeparacaoCreateWithoutCarrinhoInput = {
    id?: string
    nome: string
    banca: string
    status?: $Enums.StatusItem
    timerStart?: Date | string | null
    timerEnd?: Date | string | null
    montagemStatus?: string | null
    montagemObservacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendencias?: PendenciaSeparacaoCreateNestedManyWithoutItemInput
  }

  export type ItemSeparacaoUncheckedCreateWithoutCarrinhoInput = {
    id?: string
    nome: string
    banca: string
    status?: $Enums.StatusItem
    timerStart?: Date | string | null
    timerEnd?: Date | string | null
    montagemStatus?: string | null
    montagemObservacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendencias?: PendenciaSeparacaoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemSeparacaoCreateOrConnectWithoutCarrinhoInput = {
    where: ItemSeparacaoWhereUniqueInput
    create: XOR<ItemSeparacaoCreateWithoutCarrinhoInput, ItemSeparacaoUncheckedCreateWithoutCarrinhoInput>
  }

  export type ItemSeparacaoCreateManyCarrinhoInputEnvelope = {
    data: ItemSeparacaoCreateManyCarrinhoInput | ItemSeparacaoCreateManyCarrinhoInput[]
    skipDuplicates?: boolean
  }

  export type ObraUpsertWithoutCarrinhosInput = {
    update: XOR<ObraUpdateWithoutCarrinhosInput, ObraUncheckedUpdateWithoutCarrinhosInput>
    create: XOR<ObraCreateWithoutCarrinhosInput, ObraUncheckedCreateWithoutCarrinhosInput>
    where?: ObraWhereInput
  }

  export type ObraUpdateToOneWithWhereWithoutCarrinhosInput = {
    where?: ObraWhereInput
    data: XOR<ObraUpdateWithoutCarrinhosInput, ObraUncheckedUpdateWithoutCarrinhosInput>
  }

  export type ObraUpdateWithoutCarrinhosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroObra?: StringFieldUpdateOperationsInput | string
    dataObra?: DateTimeFieldUpdateOperationsInput | Date | string
    statusGeral?: EnumStatusGeralFieldUpdateOperationsInput | $Enums.StatusGeral
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraUncheckedUpdateWithoutCarrinhosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroObra?: StringFieldUpdateOperationsInput | string
    dataObra?: DateTimeFieldUpdateOperationsInput | Date | string
    statusGeral?: EnumStatusGeralFieldUpdateOperationsInput | $Enums.StatusGeral
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSeparacaoUpsertWithWhereUniqueWithoutCarrinhoInput = {
    where: ItemSeparacaoWhereUniqueInput
    update: XOR<ItemSeparacaoUpdateWithoutCarrinhoInput, ItemSeparacaoUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<ItemSeparacaoCreateWithoutCarrinhoInput, ItemSeparacaoUncheckedCreateWithoutCarrinhoInput>
  }

  export type ItemSeparacaoUpdateWithWhereUniqueWithoutCarrinhoInput = {
    where: ItemSeparacaoWhereUniqueInput
    data: XOR<ItemSeparacaoUpdateWithoutCarrinhoInput, ItemSeparacaoUncheckedUpdateWithoutCarrinhoInput>
  }

  export type ItemSeparacaoUpdateManyWithWhereWithoutCarrinhoInput = {
    where: ItemSeparacaoScalarWhereInput
    data: XOR<ItemSeparacaoUpdateManyMutationInput, ItemSeparacaoUncheckedUpdateManyWithoutCarrinhoInput>
  }

  export type ItemSeparacaoScalarWhereInput = {
    AND?: ItemSeparacaoScalarWhereInput | ItemSeparacaoScalarWhereInput[]
    OR?: ItemSeparacaoScalarWhereInput[]
    NOT?: ItemSeparacaoScalarWhereInput | ItemSeparacaoScalarWhereInput[]
    id?: StringFilter<"ItemSeparacao"> | string
    carrinhoId?: StringFilter<"ItemSeparacao"> | string
    nome?: StringFilter<"ItemSeparacao"> | string
    banca?: StringFilter<"ItemSeparacao"> | string
    status?: EnumStatusItemFilter<"ItemSeparacao"> | $Enums.StatusItem
    timerStart?: DateTimeNullableFilter<"ItemSeparacao"> | Date | string | null
    timerEnd?: DateTimeNullableFilter<"ItemSeparacao"> | Date | string | null
    montagemStatus?: StringNullableFilter<"ItemSeparacao"> | string | null
    montagemObservacao?: StringNullableFilter<"ItemSeparacao"> | string | null
    createdAt?: DateTimeFilter<"ItemSeparacao"> | Date | string
    updatedAt?: DateTimeFilter<"ItemSeparacao"> | Date | string
  }

  export type CarrinhoCreateWithoutItensInput = {
    id?: string
    kit: $Enums.Kit
    status?: $Enums.StatusCarrinho
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: Date | string
    obra: ObraCreateNestedOneWithoutCarrinhosInput
  }

  export type CarrinhoUncheckedCreateWithoutItensInput = {
    id?: string
    obraId: string
    kit: $Enums.Kit
    status?: $Enums.StatusCarrinho
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: Date | string
  }

  export type CarrinhoCreateOrConnectWithoutItensInput = {
    where: CarrinhoWhereUniqueInput
    create: XOR<CarrinhoCreateWithoutItensInput, CarrinhoUncheckedCreateWithoutItensInput>
  }

  export type PendenciaSeparacaoCreateWithoutItemInput = {
    id?: string
    codigoMaterial: string
    quantidade: number
    observacao?: string | null
    createdAt?: Date | string
  }

  export type PendenciaSeparacaoUncheckedCreateWithoutItemInput = {
    id?: string
    codigoMaterial: string
    quantidade: number
    observacao?: string | null
    createdAt?: Date | string
  }

  export type PendenciaSeparacaoCreateOrConnectWithoutItemInput = {
    where: PendenciaSeparacaoWhereUniqueInput
    create: XOR<PendenciaSeparacaoCreateWithoutItemInput, PendenciaSeparacaoUncheckedCreateWithoutItemInput>
  }

  export type PendenciaSeparacaoCreateManyItemInputEnvelope = {
    data: PendenciaSeparacaoCreateManyItemInput | PendenciaSeparacaoCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type CarrinhoUpsertWithoutItensInput = {
    update: XOR<CarrinhoUpdateWithoutItensInput, CarrinhoUncheckedUpdateWithoutItensInput>
    create: XOR<CarrinhoCreateWithoutItensInput, CarrinhoUncheckedCreateWithoutItensInput>
    where?: CarrinhoWhereInput
  }

  export type CarrinhoUpdateToOneWithWhereWithoutItensInput = {
    where?: CarrinhoWhereInput
    data: XOR<CarrinhoUpdateWithoutItensInput, CarrinhoUncheckedUpdateWithoutItensInput>
  }

  export type CarrinhoUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obra?: ObraUpdateOneRequiredWithoutCarrinhosNestedInput
  }

  export type CarrinhoUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    obraId?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendenciaSeparacaoUpsertWithWhereUniqueWithoutItemInput = {
    where: PendenciaSeparacaoWhereUniqueInput
    update: XOR<PendenciaSeparacaoUpdateWithoutItemInput, PendenciaSeparacaoUncheckedUpdateWithoutItemInput>
    create: XOR<PendenciaSeparacaoCreateWithoutItemInput, PendenciaSeparacaoUncheckedCreateWithoutItemInput>
  }

  export type PendenciaSeparacaoUpdateWithWhereUniqueWithoutItemInput = {
    where: PendenciaSeparacaoWhereUniqueInput
    data: XOR<PendenciaSeparacaoUpdateWithoutItemInput, PendenciaSeparacaoUncheckedUpdateWithoutItemInput>
  }

  export type PendenciaSeparacaoUpdateManyWithWhereWithoutItemInput = {
    where: PendenciaSeparacaoScalarWhereInput
    data: XOR<PendenciaSeparacaoUpdateManyMutationInput, PendenciaSeparacaoUncheckedUpdateManyWithoutItemInput>
  }

  export type PendenciaSeparacaoScalarWhereInput = {
    AND?: PendenciaSeparacaoScalarWhereInput | PendenciaSeparacaoScalarWhereInput[]
    OR?: PendenciaSeparacaoScalarWhereInput[]
    NOT?: PendenciaSeparacaoScalarWhereInput | PendenciaSeparacaoScalarWhereInput[]
    id?: StringFilter<"PendenciaSeparacao"> | string
    itemSeparacaoId?: StringFilter<"PendenciaSeparacao"> | string
    codigoMaterial?: StringFilter<"PendenciaSeparacao"> | string
    quantidade?: IntFilter<"PendenciaSeparacao"> | number
    observacao?: StringNullableFilter<"PendenciaSeparacao"> | string | null
    createdAt?: DateTimeFilter<"PendenciaSeparacao"> | Date | string
  }

  export type ItemSeparacaoCreateWithoutPendenciasInput = {
    id?: string
    nome: string
    banca: string
    status?: $Enums.StatusItem
    timerStart?: Date | string | null
    timerEnd?: Date | string | null
    montagemStatus?: string | null
    montagemObservacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    carrinho: CarrinhoCreateNestedOneWithoutItensInput
  }

  export type ItemSeparacaoUncheckedCreateWithoutPendenciasInput = {
    id?: string
    carrinhoId: string
    nome: string
    banca: string
    status?: $Enums.StatusItem
    timerStart?: Date | string | null
    timerEnd?: Date | string | null
    montagemStatus?: string | null
    montagemObservacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemSeparacaoCreateOrConnectWithoutPendenciasInput = {
    where: ItemSeparacaoWhereUniqueInput
    create: XOR<ItemSeparacaoCreateWithoutPendenciasInput, ItemSeparacaoUncheckedCreateWithoutPendenciasInput>
  }

  export type ItemSeparacaoUpsertWithoutPendenciasInput = {
    update: XOR<ItemSeparacaoUpdateWithoutPendenciasInput, ItemSeparacaoUncheckedUpdateWithoutPendenciasInput>
    create: XOR<ItemSeparacaoCreateWithoutPendenciasInput, ItemSeparacaoUncheckedCreateWithoutPendenciasInput>
    where?: ItemSeparacaoWhereInput
  }

  export type ItemSeparacaoUpdateToOneWithWhereWithoutPendenciasInput = {
    where?: ItemSeparacaoWhereInput
    data: XOR<ItemSeparacaoUpdateWithoutPendenciasInput, ItemSeparacaoUncheckedUpdateWithoutPendenciasInput>
  }

  export type ItemSeparacaoUpdateWithoutPendenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinho?: CarrinhoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemSeparacaoUncheckedUpdateWithoutPendenciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    carrinhoId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsAuditoriaCreateManyUserInput = {
    id?: string
    acao: string
    entidade: string
    entidadeId: string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogsAuditoriaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsAuditoriaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsAuditoriaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    detalhes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarrinhoCreateManyObraInput = {
    id?: string
    kit: $Enums.Kit
    status?: $Enums.StatusCarrinho
    solicitado?: boolean
    recebido?: boolean
    updatedAt?: Date | string
  }

  export type CarrinhoUpdateWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemSeparacaoUpdateManyWithoutCarrinhoNestedInput
  }

  export type CarrinhoUncheckedUpdateWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemSeparacaoUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type CarrinhoUncheckedUpdateManyWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    kit?: EnumKitFieldUpdateOperationsInput | $Enums.Kit
    status?: EnumStatusCarrinhoFieldUpdateOperationsInput | $Enums.StatusCarrinho
    solicitado?: BoolFieldUpdateOperationsInput | boolean
    recebido?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemSeparacaoCreateManyCarrinhoInput = {
    id?: string
    nome: string
    banca: string
    status?: $Enums.StatusItem
    timerStart?: Date | string | null
    timerEnd?: Date | string | null
    montagemStatus?: string | null
    montagemObservacao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemSeparacaoUpdateWithoutCarrinhoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendencias?: PendenciaSeparacaoUpdateManyWithoutItemNestedInput
  }

  export type ItemSeparacaoUncheckedUpdateWithoutCarrinhoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendencias?: PendenciaSeparacaoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemSeparacaoUncheckedUpdateManyWithoutCarrinhoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    banca?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    timerStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timerEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montagemStatus?: NullableStringFieldUpdateOperationsInput | string | null
    montagemObservacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendenciaSeparacaoCreateManyItemInput = {
    id?: string
    codigoMaterial: string
    quantidade: number
    observacao?: string | null
    createdAt?: Date | string
  }

  export type PendenciaSeparacaoUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigoMaterial?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendenciaSeparacaoUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigoMaterial?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendenciaSeparacaoUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigoMaterial?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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