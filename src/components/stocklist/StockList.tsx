import React from 'react'
import Stock from '../stock/Stock'
import './style.css'


function StockList({stocks}: StockItemList) {
  return (
    <ul className= "stocklist">
        {stocks.map((stock) =>(
            <Stock
                key={stock.symbol}
                stock = {stock}
            />
        ))}
    </ul>
  )
}

export default StockList