import React, { useEffect, useState } from 'react'
import '../src/styles/style.css'

import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'


function App() {
  const [cart, setCart] = useState([]);
  const [quantity,setQuant] = useState(0);
  const [total,setTotal] = useState(0); 

  const getItem = async (id) =>{
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    const item = await data.json();
    item.quantity = 1; 
    setCart([...cart,item])
  }

  const productExists = (id) =>{
    let items = cart;
    let flag = false ; 

    items.forEach((item)=>{
      if(item.id === id){
        item.quantity = item.quantity +1
        flag = true; 
      }
    })
    if(flag === false){
      getItem(id)
      return;
    }
    setCart(items)
  }


  const changeCart = (event) =>{
    event.preventDefault();
    const id = parseInt(event.target.name)
    productExists(id);
    cartQuantity();
  }


  const incrementValue = (e) =>{
    e.preventDefault(); 
    const id = parseInt(e.target.name)

    let update = cart
    update.forEach(item =>{
      if(item.id === id){
        item.quantity = item.quantity+1
      }
    })
    
    setCart(update);
  }


  const decrementValue = (e) =>{
    e.preventDefault(); 

    let update = cart
    const id = parseInt(e.target.name)
    update.forEach(item =>{
      if(item.id === id){
        item.quantity = item.quantity-1
      }
    })
    setCart(update);

  }


  const cartQuantity = () =>{
    const total = cart.reduce((count, item)=>{
      return count + (item.quantity)
    },0)
    setQuant(total)
    cartTotal();
  }
  const cartTotal = () =>{
    const total = cart.reduce((count, item)=>{
      return count + (item.quantity*item.price);
    },0)
    setTotal(total);
  }
  useEffect(() =>{

  },[cart])
  useEffect(() =>{
    setQuant(quantity)


  },[quantity])

  return(
    <Router>
      <div>
        <Nav length={quantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About  />} />
          <Route path="/cart" element={<Cart up={incrementValue} down={decrementValue} total={total} items={cart} />}/> 
          <Route path="/shop" element={<Shop click={changeCart}  />} /> 
          <Route path="/shop/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

const Home = () =>(
  <div className='container'>
    <h1>Home</h1>
    <div className='rtext'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

    </div>

  </div>
)
