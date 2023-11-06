//@ts-check
import React from 'react'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

function Stock({stock, setTickerStock}: any) {
  return (
    <li className= "stock" onClick={() =>setTickerStock(stock)}>
        <b>{stock.symbol}</b> <span>{(stock.shares_owned).toFixed(2) + ' shares'}</span>
        
        {(stock.change >= 0) ? 
            (<FontAwesomeIcon className= "trend-up" icon={faCaretUp} />) 
                : 
            (<FontAwesomeIcon  className= "trend-down" icon={faCaretDown} />)
        }
        
    </li>
  )
}

export default Stock