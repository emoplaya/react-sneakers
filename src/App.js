import React from 'react';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  

  React.useEffect(() => {
    fetch('https://65cf33b5bdb50d5e5f5ab9ff.mockapi.io/items')
    .then(response => {
      return response.json();
    }).then(json => {
      setItems(json);
    },);
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper clear">
        {cartOpened ? <Drawer items = {cartItems} onCloseCart = {() => setCartOpened(false)}/> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
             <img src="/img/loop.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
      <div className="sneakers d-flex flex-wrap">
        {items.map((item) => (
          <Card 
          title = {item.title} 
          price = {item.price} 
          imageUrl = {item.imageUrl} 
          onFavorite = {() => console.log(item.title)}
          onPlus = {(obj) => onAddToCart(obj)} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
