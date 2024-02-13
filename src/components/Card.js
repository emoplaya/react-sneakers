function Card () {
    return (
<div className="card">
          <div className="favorite">
            <img src="/img/like_off.svg" alt="" />
          </div>
          <img width={133} height={112} src="/img/1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 rub.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="" />
          </button>
          </div>
        </div>
    )
}
export default Card;
