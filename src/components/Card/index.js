import styles from './card.module.scss';
function Card (props) {
    return (
<div className={styles.card}>
          <div className={styles.favorite}>
            <img src="/img/like_off.svg" alt="" />
          </div>
          <img width={133} height={112} src={props.imageUrl} alt="" />
          <h5>{props.title}</h5>
          <div className="cardBottom d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{props.price} rub.</b>
          </div>
          <button className="button" onClick = {props.onClick}>
            <img width={11} height={11} src="/img/plus.svg" alt="" />
          </button>
          </div>
        </div>
    )
}
export default Card;
