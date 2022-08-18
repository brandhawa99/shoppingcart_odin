import React from 'react'
import '../styles/style.css'
import {Link} from 'react-router-dom'

const Nav = props =>{

    const navStyle = {
        color:'white',
        textDecoration: "none",
    }
    const h1Style = {
        fontSize: '2em',
        color:'white',
        textDecoration: "none",
    }
    return(
        <nav className='sticky'>
            <Link style={h1Style} to='/'>
                <h3 className='storeName'>Baltej's Store</h3>
            </Link>
            <ul className='nav-links'>
                <Link style={navStyle} to='/about' className='navStyles'>
                    About
                </Link>
                <Link style={navStyle} to='/shop' className='navStyles'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/cart'>
                <li>
                    <img className='cart_icon' src={require('../icon/shopping-bag.png')} alt="cart"></img>
                {props.quantity > 0 && 
                    <span className='cartText'>{props.quantity}</span>
                }
                </li>
                </Link>
            </ul>

        </nav>
    )
}

export default Nav;