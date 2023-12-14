import React from 'react'
import'./style.css'

function StockStats( {stock}:StockItem) {
  return (
            <div className='stats'>
                <header className='stats_header'>Stats:</header>
                { stock == undefined ? 'Add a stock to watchlist for stats'
                    :
                <form className='stats_form'>
                    <label htmlFor='open' className='stats_label'>OPEN
                    <input type='text' id='open' name='open' value={stock.open}
                        className='stats_input' readOnly/> 
                    </label>
                    <label htmlFor='high'className='stats_label'>HIGH
                    <input type='text' id='high' name='high'
                        className='stats_input' value={stock.high} readOnly
                    />
                    </label>
                    <label htmlFor='low' className='stats_label'>LOW 
                    <input type='text' id='low' name='low' value={stock.low}
                        className='stats_input' readOnly/>
                    </label>
                    <label htmlFor='volume' className='stats_label'>VOLUME 
                    <input type='text' id='volume' name='volume' value={stock.volume}
                        className='stats_input' readOnly/>
                    </label>
                    <label htmlFor='change' className='modal_label'>CHANGE 
                    <input type='text' id='change' name='change' value={stock.change}
                        className='stats_input' readOnly/>
                    </label>
                    <label htmlFor='change_percent' className='stats_label'>CHG % 
                    <input type='text' id='change_percent' name='change_percent' value={stock.change_percent}
                        className='stats_input' readOnly/>
                    </label>
                </form>
                }
            </div>
        )
}

export default StockStats