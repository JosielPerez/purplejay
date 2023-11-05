import React from 'react'
import './style.css'

function Sell({closeModal, price, ownedShare, dollarAmount, setDollarAmount}:any) {
    function inputCheck (e:string | number): number {
        if (e != "") {
          if (Number(e) < 0) {
            e = 0;
          }
          if (Number(e) > ownedShare) {
            e = ownedShare;
          }
        }
        return Number(e);
    }
return (
    <div className='modal'>
        <header className='modal_header'>Sell Order</header>
                <form>
                    <label htmlFor='shares' className='modal_label'>Shares: </label>
                    <input type='number' id='shares' name='shares' placeholder='0' 
                        className='modal_input' min="0" max={ownedShare} onChange={e =>setDollarAmount(inputCheck(e.target.value)*price)}/>
                    <label htmlFor='amount'className='modal_label'>Amount: </label>
                    <input type='text' id='amount' name='amount' placeholder='$0'
                        className='modal_input' readOnly value={'$' + dollarAmount}
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