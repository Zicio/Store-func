import './App.scss';
import ShopItemFunc from './ShopItemFunc';
import ItemModel from './ItemModel';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: '£',
  };

  const itemModel = new ItemModel(item);
  const { host } = window.location;

  return (
    <div className="container">
      <div className="block">
        <div className="image-box">
          <img
            className="photo"
            src={`${host}${process.env.PUBLIC_URL}/image.jpeg`}
            alt="фото товара"
          />
        </div>
        <div className="window">
          <ShopItemFunc item={itemModel} />
        </div>
      </div>
    </div>
  );
}

export default App;
