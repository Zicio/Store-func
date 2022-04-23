import PropTypes from 'prop-types';
import ItemModel from './ItemModel';

function ShopItemFunc(props) {
  const { item } = props;
  let validPrice = String(item.price);
  if (!(validPrice % 1)) {
    validPrice = validPrice.concat('.', '00');
  }

  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="purchase-info">
        <div className="price">
          {item.currency}
          {validPrice}
        </div>
        <button type="button">Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ItemModel).isRequired,
};

export default ShopItemFunc;
