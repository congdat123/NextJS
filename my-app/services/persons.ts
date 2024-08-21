import { createKysely } from '@vercel/postgres-kysely';
 
interface Persons {
  name: string,
  id: number
}

const db = createKysely<any>();

export const getAllPersons = async (): Promise<Persons[] | undefined> => {
  return await db.selectFrom('about').selectAll().execute() as Persons[]
}