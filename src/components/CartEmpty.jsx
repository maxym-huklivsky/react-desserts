import React from 'react';
import { Link } from 'react-router-dom';

import emptyCartImg from '../assets/img/empty-cart-v2.png';

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>Кошик порожній 😕</h2>
      <p>
        Найімовірніше, ви не замовили ще ні один товар.
        <br />
        Щоб замовити товар, перейди на головну сторінку.
      </p>
      <img src={emptyCartImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
