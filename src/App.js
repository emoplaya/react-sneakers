function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="headerRight d-flex">
          <li><img width={18} height={18} src="img/cart.svg" alt=""/><span>1205 rub.</span></li>
          <li><img width={18} height={18} src="img/heart.svg" alt=""/>Закладки</li>
          <li><img width={18} height={18} src="img/profile.svg" alt=""/>Профиль</li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
      <div className="sneakers d-flex">
        <div className="card">
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
        <div className="card">
          <img width={133} height={112} src="/img/2.jpg" alt="" />
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
        <div className="card">
          <img width={133} height={112} src="/img/3.jpg" alt="" />
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
        <div className="card">
          <img width={133} height={112} src="/img/4.jpg" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
