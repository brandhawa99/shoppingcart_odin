

import React from 'react' 
import '../styles/style.css'
import uniqid from 'uniqid'
import {Link} from 'react-router-dom'

const Cart = props =>{  

    const h1Style = {
        fontSize: '2em',
        color:'black',
        textDecoration: "none",
        border:'black 1px solid',
        padding: '1rem'
    }

    const refresh = (e) =>{
        e.preventDefault();
        window.location.reload()

    }



    return(
        <div key={uniqid()} className='container'>
            <h1 key={uniqid()} >Your Cart</h1>
            {props.items.length <1 && (

                    <div key={uniqid()}>Cart is empty...</div>
            )}


            {props.items.length > 0 && 
                (
                    <div key={uniqid()} className='cart_container'>

                        {props.items.map(item =>(

                            <div className='cart_item' key={uniqid()}> 
                                <div className='cart_text'> 
                                    <h3>{item.title}</h3>
                                </div>
                                    <div>${item.price} </div>
                                <img src={item.image} alt={item.name}></img>
                                
                                <div className='buttons_container'> 
                                    <button name={item.id} onClick={props.down}>-</button>
                                        <div>{item.quantity}</div>
                                    <button name={item.id} onClick={props.up}>+</button>
                                </div>
                                <div> <strong>$</strong>{(item.price*item.quantity).toFixed(2)}</div>
                            </div>
                            
                        ))

                        }
                        <div key={uniqid()} className='cart_item'>
                            <h1 key={uniqid()}>Total ${props.total}</h1>
                                <button onClick={refresh}>
                                    <Link to='/'>
                                    Check Out
                                    </Link>
                                    </button>
                        </div>
                    </div>
                )
                    
            }

        </div>
    )

}

export default Cart; 