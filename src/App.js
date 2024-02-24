import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'


import Header from './components/Header'
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';



function App() {
  const [items, setItems] = React.useState([]); //массив для вывода товаров на экран
  const [cartItems, setCartItems] = React.useState([]); //массив для сохранения товаров в корзине (Drawer)
  const [favorites, setFavorites] = React.useState([]); //массив для сохранения закладок

  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');



  React.useEffect(() => {
    axios.get('https://65cf33b5bdb50d5e5f5ab9ff.mockapi.io/items') //запрос на получение items из mockapi
    .then(response => { //получение ответа с сервера
     setItems(response.data) //рендер items на странице
    })

    axios.get('https://65cf33b5bdb50d5e5f5ab9ff.mockapi.io/cart') //запрос на получение cart из mockapi
    .then((response) => setCartItems(response.data)); //рендер cart в drawer

    axios.get('https://65d5c4f9f6967ba8e3bc7f76.mockapi.io/favorites')
    .then((response)=> {
      setFavorites(response.data);
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://65cf33b5bdb50d5e5f5ab9ff.mockapi.io/cart', obj) //передаем в cart на mockapi объект
    setCartItems((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://65cf33b5bdb50d5e5f5ab9ff.mockapi.io/cart/${id}`) 
    setCartItems((prev) => prev.filter(item=>item.id !== id)); //дай мне предыдущий массив, возьми всё что в нем есть и отфильтруй тот элемент, который 
    //я передал в функцию onRemoveItem
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://65d5c4f9f6967ba8e3bc7f76.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://65d5c4f9f6967ba8e3bc7f76.mockapi.io/favorites', obj) //запрос на передачу объекта obj в favorites
        setFavorites((prev) => [...prev, data]) //визуально отображаем favorites
      }

    } catch {
      alert('Error!') //оборачиваем в try catch чтобы отловить ошибку при вызове запроса
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
        {cartOpened ? <Drawer items = {cartItems} onCloseCart = {() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
    
      <Routes>
      <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
          ></Route>
        <Route
          path="/favorites"
          exact
          element={
            <Favorites
              items={favorites}
              onAddToFavorite={onAddToFavorite}
            />
          }
          >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
