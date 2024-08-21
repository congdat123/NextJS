import { PersonServices } from '@/services/person'
import React from 'react'

async function Search(
  { params }: {
    params: {
      name: string
    }
  }
) {
  const services = new PersonServices();
  console.log(params)
  const rows = await services.getPersonsByName(params.name)
  console.log(rows)
  return <>{rows?.map(v => <p>{v.id} - {v.name}</p>)}</>
}

export default Search
