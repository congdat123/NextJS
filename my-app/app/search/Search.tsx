'use client'

import { Persons, PersonServices } from '@/services/persons'
import React, { useState } from 'react'

function Search() {
  const [val, setVal] = useState('')
  const [res, setRes] = useState<Persons[]>([])
  const services = new PersonServices()
  const handleSearch = async (name: string): Promise<void> => {
    const res = await services.getAllPersons()
    console.log(res, name)
    setRes(res ?? [])
  }
  return (
    <div>
      <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => handleSearch(val)}>Search</button>

    </div>
  )
}

export default Search
