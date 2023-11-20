//@ts-nocheck
import React from 'react'
import Transaction from '../transaction/Transaction'
import './style.css'


function TransactionList({transactions}:any) {
  return (
    <table className= "transactionlist">
        <tr>
            <th scope="col">Type</th>
            <th scope="col">Stock</th>
            <th scope="col">Shares</th>
            <th scope="col">Amount($)</th>
            <th scope="col">Price($)</th>
            <th scope="col">Time/Date</th>
        </tr>
        {transactions ? transactions.map((transaction) =>(
            <Transaction
                key={transaction.time}
                transaction = {transaction}
            />
        )) : 'No Transactions'}
    </table>
  )
}

export default TransactionList