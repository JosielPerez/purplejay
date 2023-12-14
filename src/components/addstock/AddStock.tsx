import React from 'react'
import './style.css'

function AddStock({newStock, setNewStock, handleSubmit}:any) {
  return (
    <form className='searchForm' onSubmit={handleSubmit}>
        <label htmlFor='addStock'>Add Stock</label>
        <input 
            autoFocus
            id='addStock'
            type='text'
            placeholder='search by stock or market name'
            required
            value={newStock}
            onChange={(e)=>setNewStock(e.target.value)}
        />
    </form>
  )
}

export default AddStock