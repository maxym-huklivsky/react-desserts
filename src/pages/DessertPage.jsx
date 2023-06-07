import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';
import { useParams, useNavigate } from 'react-router-dom';
import { notify } from 'helpers/notify';
import { categories } from '../consts';

const DessertPage = () => {
  const [dessert, setDessert] = React.useState();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`desserts/${id}`);
        setDessert(data);
      } catch (error) {
        notify('Помилка при отриманні десерта!');
        navigate('/');
      }
    }

    fetchPizza();
  }, [id, navigate]);

  if (!dessert) {
    return <>Завантаження...</>;
  }

  return (
    <div className="container">
      <div className="dessert-page__block">
        <img
          src={dessert.imageUrl}
          alt={dessert.title}
          width="200"
          height="200"
        />
        <div className="dessert-page__info-block">
          <h2 className="dessert-page__title">{dessert.title}</h2>
          <p className="dessert-page__info">Ціна: {dessert.price} грн.</p>
          <p className="dessert-page__info">
            Категорія: {categories[dessert.category].toLowerCase()}
          </p>
          <p className="dessert-page__info">Рейтинг: {dessert.rating}/10</p>
          <p>
            <b>Опис:</b> {dessert.comments}
          </p>
        </div>
      </div>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default DessertPage;
