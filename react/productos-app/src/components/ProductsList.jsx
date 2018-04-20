import React from 'react';
import Product from './Product'
import { Link } from 'react-router-dom';

const ProductsList = (props) => (
  <div className="centrar-tabla">
    <h1>Lista de productos</h1>
    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Categoria</th>
        <th scope="col">Fecha de vencimiento</th>
      </tr>
    </thead>
    <tbody>
      {
          props.products.map(product => (
            <Product
              key = {product.id}
              id = {product.id}
              name = {product.nombre}
              price = {product.precio}
              category = {product.categoria}
              exp_date = {product.fechaVencimiento}
            />
          ))
        }
    </tbody>
  </table>
  <hr />
  <Link to="/productos/agregar" className="btn btn-success">Nuevo producto</Link>
</div>
);

export default ProductsList;