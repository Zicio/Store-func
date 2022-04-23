export default class ItemModel {
  constructor(item) {
    this.brand = item.brand;
    this.title = item.title;
    this.description = item.description;
    this.descriptionFull = item.descriptionFull;
    this.price = item.price;
    this.currency = item.currency;
  }
}
