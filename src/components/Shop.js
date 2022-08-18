import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import '../styles/style.css'
import uniqid from 'uniqid'


const Shop = props  =>{
     
    const [items, setItems] = useState([]); 

    const getData = async() =>{
        const data = await fetch("https://fakestoreapi.com/products")
        const products = await data.json();

        const mapped = products.map((item)=>{
            return({
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price,
                rating: item.rating.rate,
                description: item.description
            })
        })
        setItems(mapped);
    }

    useEffect(()=>{
        getData();

    },[])

    return(
        <div className='container'>
            <h1>Checkout Our Aamazing Catalog</h1>
            <div className='cards'>

            {items.map(item =>{
                return(
                    <div key={item.id} className='card'> 
                    <Link className='linkstyles' key={uniqid()} to={`/shop/${item.id}`} >
                            <img key={uniqid()} className='cardImage' src={item.image} alt={item.title} />
                            <div key={uniqid()} className='title'>{item.title} </div>
                            <div key={uniqid()} className='price'>${item.price} </div>
                    </Link>
                            <button name={item.id} onClick={props.click} className='addCart'>Add to Cart</button>

                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default Shop