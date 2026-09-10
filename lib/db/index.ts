import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

let pool: any
let db: any

if (process.env.DATABASE_URL) {
  try {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
    db = drizzle(pool, { schema })
  } catch (e) {
    console.warn("[AI Studio] Database connection error — using mock", e)
  }
}

if (!db) {
  console.warn("[AI Studio] Database not connected — using mock")
  pool = {
    query: async () => ({ rows: [] }),
    connect: async () => ({ query: async () => ({ rows: [] }), release: () => {} }),
    on: () => {},
    end: async () => {},
  }

  const createChainable = (): any => {
    const chain: any = () => chain
    const promise = Promise.resolve([])
    chain.then = (fn?: any) => promise.then(fn)
    chain.catch = (fn?: any) => promise.catch(fn)
    chain.finally = (fn?: any) => promise.finally(fn)
    return new Proxy(chain, {
      get: (_, prop) => {
        if (prop === "then" || prop === "catch" || prop === "finally") {
          return (promise as any)[prop].bind(promise)
        }
        return createChainable()
      },
      apply: () => createChainable(),
    })
  }

  const noOp = {
    findMany: async () => [],
    findFirst: async () => null,
    findUnique: async () => null,
    create: async (d: any) => d?.data ?? {},
    update: async (d: any) => d?.data ?? {},
    delete: async () => ({}),
  }

  db = new Proxy(
    {},
    {
      get: (_, prop) => {
        if (prop === "query") {
          return new Proxy({}, { get: () => noOp })
        }
        return createChainable()
      },
    }
  )
}

export { pool, db }

