import { PersonServices } from '@/services/person'
import React from 'react'
import ClientComponent from './ClientComponent';

async function Search(
  { params }: {
    params: {
      name: string
    }
  }
) {
  const services = new PersonServices();
  const rows = await services.getPersonsByName(params.name)
  return <>{rows?.map(v => <p key={v.id}>{v.id} - {v.name}</p>)}
    <ClientComponent />
  </>
}

export default Search
