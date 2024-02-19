function Header(props) {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="" />
        <div className="headerInfo">
          <h2 className="text-uppercase">React Sneakers</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="cu-p" onClick={props.onClickCart}><img width={18} height={18} src="img/cart.svg" alt=""/><span>1205 rub.</span></li>
          <li><img width={18} height={18} src="img/heart.svg" alt=""/>Закладки</li>
          <li><img width={18} height={18} src="img/profile.svg" alt=""/>Профиль</li>
        </ul>
      </header>
    )
}
export default Header;