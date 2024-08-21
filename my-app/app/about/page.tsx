
import { PersonServices } from '@/services/person'
import React, { useState } from 'react'

async function page({
  params
}: { params: { user: string } }): Promise<JSX.Element> {
  const services = new PersonServices();
  const rows = await services.getPersonsByName('Alden')
  return (
    <div>
      {!!rows?.length && rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.name}
        </div>
      ))}
    </div>
  )
}

export default page
