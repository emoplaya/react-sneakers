function Drawer({onRemove, onCloseCart, items = []}) {
 return(
    <div className="overlay">
    <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина<img className="removeBtn cu-p" src="/img/close.svg" alt="" onClick={onCloseCart}/>
            </h2>

          {
            items.length > 0 ? 
            (
              <div className="items-block d-flex flex-column flex">
                <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src={obj.imageUrl} alt="" />
            <div className="mr-20">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} rub.</b>
            </div>
            <img 
            onClick={() => onRemove(obj.id)} 
            className="removeBtn" 
            src="/img/close.svg" 
            alt="" />
          </div>
            ))}
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
            )
          :
          (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img className="mb-20" width="120px" height="120px" src="/img/cart-empty.svg" alt=""/>
          <h2>Корзина пустая</h2>
          <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
          <button className="greenButton" onClick={onCloseCart}>
            <img src="/img/arrow.svg" alt="" />Вернуться назад
          </button>
        </div>)
          }
        </div>
        </div>
 )
}

export default Drawer;