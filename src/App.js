import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="block">
        <div className="image-box">
          <img className="photo" src="/image.jpeg" alt="фото товара" />
        </div>
        <div className="window">{/* <ShopItemFunc item={item} /> */}</div>
      </div>
    </div>
  );
}

export default App;
