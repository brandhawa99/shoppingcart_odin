
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/style.css'


const ProductDetail = ()  =>{
     
    const [item, setItem] = useState([]); 
    let params = useParams();

    const getData = async () =>{
        const Item = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const itemDet = await Item.json();
        setItem(itemDet)
    }

    useEffect(()=>{
        getData();

    },[])

    return(
        <div className='container'>
            <div className='cards'>
                {
                    <div className='product'> 
                        <h1>{item.title}</h1>
                        <img src={item.image} alt={item.title} />
                        <div> {item.description} </div>
                        <h3>${item.price}</h3>
                    </div>
                }

            </div>
        </div>
    )
}

export default ProductDetail