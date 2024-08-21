import { createKysely } from '@vercel/postgres-kysely';
 
export interface Persons {
  name: string,
  id: number
}

const db = createKysely<{
  about: any
}>({
  connectionString: process.env.POSTGRES_URL
});


export class PersonServices {
  getAllPersons = async (): Promise<Persons[] | undefined> => {
    return await db.selectFrom('about').selectAll().execute() as Persons[]
  }
  getPersonsByName = async (name: string): Promise<Persons[] | undefined> => {
    return await db.selectFrom('about').selectAll().where('name', '=', name).execute() as Persons[];
  }
}