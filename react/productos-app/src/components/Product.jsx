import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => (

  <tr key={props.id}>
    <th scope="row"><Link to={`/productos/${props.id}`} className="router-link">{props.id}</Link></th>
    <td><Link to={`/productos/${props.id}`} className="router-link">{props.name}</Link></td>
    <td>${props.price}</td>
    <td>{props.category}</td>
    <td>{props.exp_date}</td>
  </tr>

);

export default Product