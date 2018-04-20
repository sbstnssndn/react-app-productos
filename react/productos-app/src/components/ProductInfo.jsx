import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      nombre: '',
      precio: '',
      categoria: '',
      fechaVencimiento: ''
    }

    this.fetchProduct = this.fetchProduct.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  fetchProduct() {
    const { match: {params} } = this.props;
    Axios.get(`http://localhost:8080/api/productos/${params.productId}`)
      .then(response => {
        console.log(response);
        this.setState({product:response.data});
      })
      .catch(function(error){
        console.log(error);
      })
  }
/*
  handleUpdate() {
    const { match: {params} } = this.props;
    const contenido = {
      nombre: "Updated",
      precio: "999",
      categoria: "catupdt",
      fechaVencimiento: "2015-01-02"
    }
    Axios.put(`http://localhost:8080/api/productos/${params.productId}`, contenido)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }
*/
  handleUpdate = (e) => {
    const { match: {params} } = this.props;

    e.preventDefault();
    let data = JSON.stringify({
      nombre: this.state.nombre,
      precio: this.state.precio,
      categoria: this.state.categoria,
      fechaVencimiento: this.state.fechaVencimiento,
    })

    Axios.put(`http://localhost:8080/api/productos/${params.productId}`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((result) => {
        console.log(result)
      });
      
    window.location.href=`http://localhost:8080/api/productos/${params.productId}`;
  }

  handleDelete() {
    const { match: {params} } = this.props;

    Axios.delete(`http://localhost:8080/api/productos/${params.productId}`)
      .then(response => {
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  componentDidMount() {
    this.fetchProduct();
  }

  render() {
    return (
      <div key={this.state.product.id} className="centrar-tabla">
        <h1>#{this.state.product.id} {this.state.product.nombre}</h1>
        <p>${this.state.product.precio}</p>
        <p>{this.state.product.categoria}</p>
        <p>{this.state.product.fechaVencimiento}</p>
        <p>
          <Link to={`/productos/editar/${this.state.product.id}`} className="btn btn-primary" style={{marginRight: '5px'}} handleUpdate={this.handleUpdate} product={this.state.product}>Editar</Link>
          <a href="/" onClick={this.handleDelete} className="btn btn-danger" style={{marginRight: '5px'}}>Eliminar</a>
          <Link to="/" className="btn btn-secondary">Volver</Link>
        </p>
      </div>
    );
  }
}

export default ProductInfo;

