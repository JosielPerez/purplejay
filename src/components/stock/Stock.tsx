//@ts-nocheck
import React from 'react'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

function Stock({stock, setStocks, selectedStock,setSelectedStock, setTickerStock, handleSelect}: any) {
  
  let stocks:any = JSON.parse(localStorage.getItem('watchlist'))
  let newWatchlist:any = [];
  let newTickerStock:any;

  function handleDelete()
  {
    for (let element of stocks)
    {
      if(element.symbol != stock.symbol)
      {
        newWatchlist.push(element)
      }
      if(element.symbol == selectedStock)
      {
        newTickerStock = element
      }
    }
    setStocks(newWatchlist)
    if(selectedStock === stock.symbol || newWatchlist.length <= 1)
    {
      if(newWatchlist[0] != undefined )
      {
        console.log(newWatchlist[0])
        setSelectedStock(newWatchlist[0].symbol)
        setTickerStock(newWatchlist[0]);

      }
      else
      {
        setSelectedStock('')
        setTickerStock([]);
      }
    }
    else
    {
      setSelectedStock(selectedStock)
      setTickerStock(newTickerStock)
    }
    
    localStorage.setItem('watchlist',JSON.stringify(newWatchlist))
  }
  
  return (
    <li
    className = {selectedStock === stock.symbol ? 'active_stock': 'stock'}>
        <b onClick={() =>handleSelect(stock)}>{stock.symbol}</b> <span onClick={() =>handleSelect(stock)}>{(stock.shares_owned).toFixed(2) + ' shares'}</span>
        {(stock.change >= 0) ? 
            (
              <FontAwesomeIcon id= "trend-up" icon={faCaretUp} onClick={() =>handleSelect(stock)}/>
            ) 
                : 
            (
              <FontAwesomeIcon  id= "trend-down" icon={faCaretDown} onClick={() =>handleSelect(stock)}/>

            )
        }
        {(stock.shares_owned > 0.00) ? 
            (
              <FontAwesomeIcon id = "normal" icon={faMinus}/>
            ) 
                : 
            (
              <FontAwesomeIcon id = "delete" icon={faMinus} onClick={()=>handleDelete()}/>
            )
        }
    </li>
  )
}

export default Stock