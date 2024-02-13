function Drawer() {
 return(
    <div className="overlay">
    <div className="drawer">
          <h3 className="d-flex justify-between mb-30">Корзина<img className="removeBtn cu-p" src="/img/close.svg" alt="" /></h3>
          
          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/1.jpg" alt="" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeBtn" src="/img/close.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/1.jpg" alt="" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeBtn" src="/img/close.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/1.jpg" alt="" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeBtn" src="/img/close.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/1.jpg" alt="" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeBtn" src="/img/close.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/1.jpg" alt="" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeBtn" src="/img/close.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/1.jpg" alt="" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub.</b>
            </div>
            <img className="removeBtn" src="/img/close.svg" alt="" />
          </div>
          </div>
          <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 rub.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 rub.</b>
            </li>
          </ul>
        <button className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="" /></button>
        </div>
        </div>
        </div>
 )
}

export default Drawer;