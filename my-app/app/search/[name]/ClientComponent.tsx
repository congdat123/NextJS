'use client'

import { PersonServices } from '@/services/person'
import React, { useEffect } from 'react'

function ClientComponent() {
  useEffect(() => {
    console.log('asdasd')
  }, [])

  const handleClick = async (): Promise<void> => {
    const services = new PersonServices();
    // const rows = await services.getPersonsByName('Alden')
    const res = await services.getPersonsByName('Alden')
    console.log('rows', res)
  }

  return (
    <div>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  )
}

export default ClientComponent
