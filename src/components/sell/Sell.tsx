import React from 'react'
import './style.css'

function Sell({closeModal}:any) {
return (
    <div className='modal'>
        <header className='modal_header'>Sell Order</header>
                <form>
                    <label htmlFor='amount' className='modal_label'>Amount: </label>
                    <input type='number' id='amount' name='amount' placeholder='$0' 
                        className='modal_input' min="0"/>
                    <label htmlFor='shares'className='modal_label'>Shares:</label>
                    <input type='number' id='shares' name='shares' placeholder='0'
                        className='modal_input' readOnly
                    />
                </form>
        <footer>
            <button className='modal_button' id='cancel_button' onClick={()=>{closeModal(false)}}>Cancel</button>
            <button className='modal_button' id='sell_button' type='submit'>Sell</button>
        </footer>
    </div>
  )
}

export default Sell