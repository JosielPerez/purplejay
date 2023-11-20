//@ts-check
import React from 'react'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

function Stock({stock, selectedStock, handleSelect}: any) {
  
  return (
    <li onClick={() =>handleSelect(stock)} 
    className = {selectedStock === stock.symbol ? 'active_stock': 'stock'}>
        <b>{stock.symbol}</b> <span>{(stock.shares_owned).toFixed(2) + ' shares'}</span>
        
        {(stock.change >= 0) ? 
            (<FontAwesomeIcon id= "trend-up" icon={faCaretUp} />) 
                : 
            (<FontAwesomeIcon  id= "trend-down" icon={faCaretDown} />)
        }
        
    </li>
  )
}

export default Stock