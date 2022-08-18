import React, { useEffect, useState } from 'react'
import '../src/styles/style.css'

import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer.js'

function App() {
  /**
   *  cart contains all the products going to be bought by the customer 
   */
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); 

  const getItem = async (id) =>{
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    const item=  await data.json();
    console.log(item);
    return item; 
    
  }

  /**
   * Checks if the product is already in the cart 
   *  if product is in the cart it increments its quantity by one
   *  if product is not in the cart it does a call to fetch the item data and add a quantity attribute
   * Then update the cart 
   * @param {int} id 
   */
  const productExists = async(id,amount) =>{
    let items = [...cart];
    let flag = false ; 

    items.forEach((item)=>{
      if(item.id === id){
        item.quantity = item.quantity +amount
        flag = true; 
      }
    })
    if(flag === false){
      let newAdd = await getItem(id)
      newAdd.quantity = amount; 
      items = [...items, newAdd];
    }
    setCart(items)
  }


  const changeCart = (event) =>{
    const id = parseInt(event.target.name)
    productExists(id,1);
  }

  const incrementItem  = (e) =>{
    let id = parseInt(e.target.name)
    let items = [...cart]

    items.forEach((item) =>{
      if(item.id === id){
        item.quantity = item.quantity+1
        return
      }

    })
    setCart(items);


  }

  const addAmount = (event) =>{
    event.preventDefault();

    const id = parseInt(event.target[0].name)
    const quant = parseInt(event.target[0].value)
    productExists(id,quant);

  }

  const decrementItem  = (e) =>{
    let id = parseInt(e.target.name)
    let items = [...cart]

    items.forEach((item) =>{
      if(item.id === id){
        if(item.quantity === 0){
          return;
        }
        item.quantity = item.quantity -1
        return
      }

    })
    setCart(items);


  }





  useEffect(()=>{
  
    let total = cart.reduce((total,item)=>{
      return total + item.quantity;
    },0)
    setQuantity(total);

    let price = cart.reduce((total,item)=>{
      return total + (item.quantity *item.price)
    },0)
    setTotalPrice(price);

  },[cart])



  return(
    <>
      <Nav quantity={quantity} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About  />} />
        <Route path="/cart" element={<Cart items={cart} total={totalPrice} down={decrementItem} up={incrementItem} />}/> 
        <Route path="/shop" element={<Shop click={changeCart}  />} /> 
        <Route path="/shop/:id" element={<ProductDetail submit={addAmount} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;

const Home = () =>(
  <div className='container'>
    <Nav/>
    <h1>Home</h1>
    <div className='rtext'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

    </div>

  </div>
)
