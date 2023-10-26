import React from 'react'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

function Stock({stock}: StockItem) {
  return (
    <li className= "stock">
        <b>{stock.symbol}</b> <span>${stock.price}</span>
        
        {(stock.change >= 0) ? 
            (<FontAwesomeIcon id= "trend-up" icon={faCaretUp} />) 
                : 
            (<FontAwesomeIcon  id= "trend-down" icon={faCaretDown} />)
        }
        
    </li>
  )
}

export default Stock