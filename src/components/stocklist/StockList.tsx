//@ts-nocheck
import React from 'react'
import Stock from '../stock/Stock'
import './style.css'


function StockList({stocks, selectedStock, handleSelect}:any) {
  return (
    <ul className= "stocklist">
        {stocks ? stocks.map((stock) =>(
            <Stock
                key={stock.symbol}
                stock = {stock}
                selectedStock={selectedStock}
                handleSelect = {handleSelect}
            />
        )) : 'No Stocks Added'}
    </ul>
  )
}

export default StockList