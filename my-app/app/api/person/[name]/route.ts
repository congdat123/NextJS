// import { createKysely } from '@vercel/postgres-kysely';

// export interface Persons {
//     name: string,
//     id: number
// }

// const db = createKysely<any>();

// export async function GET(request: Request, context: any) {
//   console.log(context)
//   const res = await db.selectFrom('about').selectAll().where('name', '~', context.params.name).execute() as Persons[];
//   return Response.json(res)
// }
