import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class ProductEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      nombre: '',
      precio: '',
      categoria: '',
      fechaVencimiento: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  fetchProduct() {
    const { match: {params} } = this.props;
    Axios.get(`http://localhost:8091/api/productos/${params.productId}`)
      .then(response => {
        console.log(response);
        this.setState({
          id : response.data.id,
          nombre : response.data.nombre,
          categoria : response.data.categoria,
          precio : response.data.precio,
          fechaVencimiento : response.data.fechaVencimiento,
        });
      })
      .catch(function(error){
        console.log(error);
      })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      nombre: this.state.nombre,
      precio: this.state.precio,
      categoria: this.state.categoria,
      fechaVencimiento: this.state.fechaVencimiento,
    })

    const { match: {params} } = this.props;
    Axios.put(`http://localhost:8090/spring-apirest-mingeso-0.0.1-SNAPSHOT/api/productos/${params.productId}`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((result) => {
        console.log(result)
      });
      
      
  }

  componentDidMount() {
    this.fetchProduct();
  }

  render() {
    const { id, nombre, precio, categoria, fechaVencimiento } = this.state;

    return (
      <div className="centrar-form">
        <h2>Editar producto #{id}</h2>
        <form className="form-row" onSubmit={this.onSubmit}>
          <div className="form-group col-md-6">
            <label htmlFor="inlineFormInputName2">Nombre</label>
            <input type="text" name="nombre" value={nombre} onChange={this.onChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inlineFormInputGroupUsername2">Precio</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input type="text" name="precio" value={precio} onChange={this.onChange} className="form-control" id="inlineFormInputGroupUsername2" />
            </div>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inlineFormInputName2">Categoria</label>
            <input type="text" name="categoria" value={categoria} onChange={this.onChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inlineFormInputName2">Fecha de vencimiento</label>
            <input type="text" name="fechaVencimiento" value={fechaVencimiento} onChange={this.onChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" />
          </div>

          <div className="form-group col-md-6">
            
              <button type="submit" className="btn btn-success mb-2">Editar</button>
            
            <Link to="/" className="btn btn-secondary mb-2" style={{marginLeft: '6px'}}>Volver</Link>
          </div>
        </form>
      </div>
    )
  }

}

export default ProductEditForm