

import React, { useEffect } from 'react' 
import '../styles/style.css'

const Cart = props =>{    

    useEffect(() =>{
        

    },[props.items])
    return(
        <div className='container'>
            <h1>Your Cart</h1>
            {props.items.length <1 && (

                    <div>Cart is empty...</div>
            )}


            {props.items.length > 0 && 
                (
                    <div className='cart_container'>
                        {props.items.map(item =>(
                            <div className='cart_item' key={item.id}> 
                                <div className='cart_text'> 
                                    <h3>{item.title}</h3>
                                    <div>{item.price} </div>
                                </div>
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
                        <div className='cart_item'>
                            <h1>Total ${props.total}</h1>
                        </div>
                    </div>
                )
                    
            }

        </div>
    )

}

export default Cart; 