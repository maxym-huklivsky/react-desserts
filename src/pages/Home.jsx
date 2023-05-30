import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Pagination from '../components/Pagination/index.jsx';
import Dessert from '../components/Dessert';
import Skeleton from '../components/Skeleton';
import Sort from '../components/Sort';
import { categories, limit, sortArray } from '../consts';
import { setFilters } from '../redux/filter/slice';
import { useSearchParams } from 'react-router-dom';
import { selectFilter } from '../redux/filter/selectors';
import {
  selectError,
  selectIsLoading,
  selectDesserts,
} from '../redux/dessert/selectors';
import { fetchDesserts } from '../redux/dessert/operations';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, sort, search, page } = useSelector(selectFilter);
  const desserts = useSelector(selectDesserts);
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMouted = React.useRef(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const activeSort = sortArray[sort].en;
  const order = sortArray[sort].order;

  React.useEffect(() => {
    if (isMouted.current) return;
    if (!searchParams.size) return;

    const obj = Object.fromEntries([...searchParams]);
    if (obj.category)
      obj.category = Number(
        categories.findIndex(v => v.toLowerCase() === obj.category)
      );

    if (obj.sort)
      obj.sort = Number(sortArray.findIndex(v => v.uk === obj.sort));

    if (obj.page) obj.page = Number(obj.page);

    const filterObj = obj;

    dispatch(setFilters(filterObj));
    isSearch.current = true;
  }, [dispatch, searchParams]);

  React.useEffect(() => {
    if (!isSearch.current) {
      dispatch(
        fetchDesserts({
          activeSort,
          order,
          category,
          page,
          search,
        })
      );
    }

    isSearch.current = false;
  }, [category, dispatch, order, page, search, activeSort]);

  React.useEffect(() => {
    if (isMouted.current) {
      const params = {
        page: page.toString(),
        category: categories[category].toLowerCase(),
        sort: sortArray[sort].uk,
      };
      if (search) params.search = search;

      setSearchParams(params);
    }

    isMouted.current = true;
  }, [category, page, search, setSearchParams, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі десерти</h2>

      <div className="content__items">
        {isLoading ? (
          [...new Array(limit)].map((_, i) => <Skeleton key={i} />)
        ) : (
          <>
            {error ? (
              <div className="content__error-info">
                <h2>Сталася помилка 😕</h2>
                <p>Спробуйте перезавантажити сторінку</p>
              </div>
            ) : (
              <>
                {desserts.length ? (
                  desserts.map(dessert => (
                    <Dessert key={dessert.id} {...dessert} />
                  ))
                ) : (
                  <h2>За Вашим запитом нічого не знайдено 😕</h2>
                )}
              </>
            )}
          </>
        )}
      </div>

      <Pagination />
    </div>
  );
};

export default Home;
