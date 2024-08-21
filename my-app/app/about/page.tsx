
import { getAllPersons } from '@/services/persons'
import React, { useState } from 'react'

async function page({
  params
}: { params: { user: string } }): Promise<JSX.Element> {
  const rows = await getAllPersons()
  console.log(rows)
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
