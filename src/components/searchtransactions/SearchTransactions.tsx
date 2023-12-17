import React from 'react'
import './style.css'

function SearchTransactions({searchTransactions, setSearchTransactions}:any) {
  return (
    <form className='search_transactions' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search_transactions'>Search</label>
        <input
          id = 'search_transactions'
          type='text'
          role='searchbox'
          placeholder='Seach Transaction By Market Name'
          value={searchTransactions}
          onChange={(e)=>setSearchTransactions(e.target.value)}
        />
    </form>
  )
}

export default SearchTransactions