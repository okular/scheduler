import React from 'react';
import Product from './Product.jsx';

export default class ProductList extends React.Component {
	render() {
		const products = this.props.items;

		return <div className="products">{products.map(this.renderProductList)}</div>;
	}
	renderProductList(product) {
		return <Product className="hair-jordan__product" key={product.id} />;
	}
}