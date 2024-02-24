import styles from './card.module.scss';
import React from 'react';
function Card ({id, title, imageUrl, price, onFavorite, onPlus, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited); //метод который будет говорить что мы нажали на иконку heart

  function onClickPlus () {
    onPlus({id, title, imageUrl, price});
    setIsAdded(!isAdded);
  }

function onClickFavorite () {
  onFavorite({id, title, imageUrl, price})
  setIsFavorite(!isFavorite);
}
    return (
<div className={styles.card}>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isFavorite ? '/img/like_on.svg' : '/img/like_off.svg'} alt="" />
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
