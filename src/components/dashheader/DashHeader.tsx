'use client';
import React from 'react'
import './style.css'

function DashHeader({search,setSearch}:any) {
  return (
    <h1 className='dash_header_bar'>
        <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
            id = 'search'
            type = 'text'
            role = 'searchbox'
            placeholder='search stock by market name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
    </h1>
  )
}

export default DashHeader