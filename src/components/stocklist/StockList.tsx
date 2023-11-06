//@ts-nocheck
import React from 'react'
import Stock from '../stock/Stock'
import './style.css'


function StockList({stocks, setTickerStock}:any) {
  return (
    <ul className= "stocklist">
        {stocks.map((stock) =>(
            <Stock
                key={stock.symbol}
                stock = {stock}
                setTickerStock = {setTickerStock}
            />
        ))}
    </ul>
  )
}

export default StockList