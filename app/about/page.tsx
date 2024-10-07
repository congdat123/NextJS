
import { PersonServices } from '@/services/person'
import React, { useState } from 'react'

import styles from '../page.module.css'

async function page({
  params
}: { params: { user: string } }): Promise<JSX.Element> {
  const services = new PersonServices();
  // const rows = await services.getPersonsByName('Alden')
  return (
    <main className={styles.main}>

      <div>
        {/* {!!rows?.length && rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.name}
          </div>
        ))} */}
      </div>
    </main>
  )
}

export default page
