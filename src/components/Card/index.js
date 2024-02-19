import styles from './card.module.scss';
import React from 'react';
function Card ({title, imageUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  function onClickPlus () {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }
    return (
<div className={styles.card}>
          <div className={styles.favorite} onClick={onFavorite}>
            <img src="/img/like_off.svg" alt="" />
          </div>
          <img width={133} height={112} src={imageUrl} alt="" />
          <h5>{title}</h5>
          <div className="cardBottom d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} rub.</b>
          </div>
          <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/checked.svg' : '/img/plus.svg'} alt="" />
          </div>
        </div>
    )
}
export default Card;
