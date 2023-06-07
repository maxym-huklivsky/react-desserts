import { CART } from 'consts';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectItems } from 'redux/cart/selectors';
import { setCart } from 'redux/cart/slice';

import Layout from './components/Layout';
import Cart from './pages/Cart';
import DessertPage from 'pages/DessertPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const cartItems = useSelector(selectItems);
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (!isMounted.current) {
      const cart = localStorage.getItem(CART);
      if (cart !== null) {
        dispatch(setCart(JSON.parse(cart)));
      }
    }
    localStorage.setItem(CART, JSON.stringify(cartItems));
    isMounted.current = true;
  }, [cartItems, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<DessertPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;
