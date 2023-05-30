import { TiInfoOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { maxDessertsCount } from '../consts';
import { selectAmountItems, selectItems } from '../redux/cart/selectors';
import { addDessert } from '../redux/cart/slice';

const Dessert = ({ id, imageUrl, title, portion, price }) => {
  const items = useSelector(selectItems);
  const allDessertsCount = useSelector(selectAmountItems);
  const dispatch = useDispatch();

  const notify = () =>
    toast('Це максимальна кількість товарів!', {
      className: 'toast-message',
      icon: <TiInfoOutline />,
    });

  const onAddDessert = () => {
    if (allDessertsCount === maxDessertsCount) {
      notify();
      toast.clearWaitingQueue();
      return;
    }

    dispatch(addDessert({ id, title, imageUrl, price, portion }));
  };

  const desserts = items.filter((item) => item.id === id);
  const count = desserts.reduce((count, dessert) => dessert.count + count, 0);

  return (
    <div className="dessert-block" key={id}>
      <img className="dessert-block__image" src={imageUrl} alt={title} width="260" height="260" />
      <h4 className="dessert-block__title">{title}</h4>
      <div className="dessert-block__bottom">
        <div className="dessert-block__price">
          {price} <span className="dessert-block__price-portion">грн. за {portion}</span>
        </div>
        <div className="button button--outline button--add" onClick={onAddDessert}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Додати</span>
          {count !== 0 && <i>{count}</i>}
        </div>
      </div>
    </div>
  );
};

export default Dessert;
