import styles from './styles.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.block}>
      <h1>Помилка!</h1>
      <p>За вашим запитом сторінки не знайдено</p>
    </div>
  );
};

export default NotFoundBlock;
