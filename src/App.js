import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';
import arr from './components/data';



function App() {
  return (
    <div className="wrapper clear">
        <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
             <img src="/img/loop.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
      <div className="sneakers d-flex">
        {arr.map((obj) => (
          <Card title = {obj.title} price = {obj.price} imageUrl = {obj.imageUrl} onClick = {() => console.log(obj)} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
