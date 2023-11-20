//@ts-check
import React from 'react'
import './style.css'

function Transaction({transaction}: any) {
  
  return (
    <tr className='transaction_row'>
        <td>{transaction.type}</td> 
        <td>{transaction.symbol}</td>
        <td>{(transaction.shares).toFixed(2)}</td>
        <td>{(transaction.amount).toFixed(2)}</td>
        <td>{(transaction.price).toFixed(2)}</td>
        <td>{transaction.time}</td>
    </tr>
  )
}

export default Transaction