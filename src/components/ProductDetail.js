
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/style.css'


const ProductDetail = (props)  =>{
     
    const [item, setItem] = useState([]);
    const [count , setCount] =  useState(1);
    let params = useParams();

    const getData = async () =>{
        const Item = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const itemDet = await Item.json();
        setItem(itemDet)
    }

    const change = (e) =>{
        let num = e.target.value
        setCount(num);
        console.log(count);

    }

    useEffect(()=>{
        getData();

    },[]);



    return(
        <div className='container'>
            <div className='cards'>
                {
                    <div className='product'> 
                        <h1>{item.title}</h1>
                        <img src={item.image} alt={item.title} />
                        <div> {item.description} </div>
                        <h3>${item.price}</h3>
                        <div>
                            <form onSubmit={props.submit}>
                                <input name={item.id} min={1} value={count} onChange={change} type='number'></input>
                                <button type='submit' name={item.id} >Add To Cart </button>
                            </form>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default ProductDetail