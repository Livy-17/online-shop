import React from 'react';
import './styles.css';
import { Flex } from "@chakra-ui/react";
import Products from "./components/products/Products.js";
import Navbar from "./components/Navbar.js";
import { commerce } from "./lib/commerce";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Intro from './components/Intro';

function App() {

  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState({});
  const [order, setOrder] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState('');

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response.data);
  }

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  }

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  }
  
  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
       setErrorMessage(error.data.error.message);
    }
  }

  const refreshCart = async () => {
    const response = await commerce.cart.refresh();
    setCart(response);
  }

  React.useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <BrowserRouter>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" bg="#e9e9e9">
        <Navbar totalItems={cart.total_items} cart={cart} handleEmptyCart={handleEmptyCart} handleUpdateCartQuantity={handleUpdateCartQuantity} handleRemoveFromCart={handleRemoveFromCart} />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/products' element={<Products products={products} handleAddToCart={handleAddToCart} />} />
          <Route path='/checkout' element={<Checkout cart={cart} order={order} handleCaptureCheckout={handleCaptureCheckout} error={errorMessage} handleEmptyCart={handleEmptyCart} />} />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
