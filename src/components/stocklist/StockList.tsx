//@ts-nocheck
import React from 'react'
import Stock from '../stock/Stock'
import './style.css'


function StockList({stocks, selectedStock, handleSelect}:any) {
  return (
    <ul className= "stocklist">
        {stocks[0] == undefined ? 'No Stocks Added':
        (stocks.map((stock) =>(
            <Stock
                key={stock.symbol}
                stock = {stock}
                selectedStock={selectedStock}
                handleSelect = {handleSelect}
            />
        )))}
    </ul>
  )
}

export default StockList