import Card from '../components/Card'

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
    return (
    <div className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
      <h1 className='name'>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
      <div className="search-block d-flex">
         <img src="/img/loop.svg" alt="Search" />
         {searchValue && (
         <img onClick = {() => setSearchValue('')} 
         className="clear" 
         src="/img/close.svg" 
         alt="" />)}
        <input onChange = {onChangeSearchInput} value = {searchValue} placeholder="Search..." />
      </div>
    </div>
  <div className="sneakers d-flex flex-wrap">
    {items
    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item, index) => (
      <Card 
      key = {index}
      onFavorite = {(obj) => onAddToFavorite(obj)}
      onPlus = {(obj) => onAddToCart(obj)} 
      {...item}
      />
      
    ))}
    </div>
  </div>
)
};

export default Home;