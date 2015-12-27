import React from 'react';
import Product from './Product.jsx';

export default class ProductDetailPage extends React.Component {
  render() {
    const notes = this.props.items;

    return <ul className="notes">{notes.map(this.renderProduct, this)}</ul>;
  }
  renderProduct(product) {
    return (
      <li className="product" key={note.id}>
        <Product
          id={product.id} />
      </li>
    );
  }
}