import React from 'react';

import Product from './Product';

const list = [
  {
    name: 'Chair',
    price: 30,
  },
  {
    name: 'Bed',
    price: 150,
  },
  {
    name: 'Couch',
    price: 550,
  },
];

const Products = () => {
  const renderedProducts = list.map((product, i) => (
    <Product {...product} key={i} />
  ));

  return <ul>{renderedProducts}</ul>;
};

export default Products;
