import axios from "axios"

const context = axios.create({
    baseURL: 'http://localhost:3000'
})

export class PersonServices {
    // getAllPersons = async (): Promise<Persons[] | undefined> => {
    //     return await db.selectFrom('about').selectAll().execute() as Persons[]
    // }
    getPersonsByName = (name: string): Promise<any[]> => {
        // console.log(context.getUri())
        return context.get(`/api/person/${name}`).then(res => res.data)
    }
}