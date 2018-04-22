import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class ProductAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      precio: '',
      categoria: '',
      fechaVencimiento: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

    Axios.post('http://localhost:8091/api/productos', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((result) => {
        console.log(result)
      });
      
    window.location.href="/";
  }

  render() {
    const { nombre, precio, categoria, fechaVencimiento } = this.state;

    return (
      <div className="centrar-form">
        <h2>Agregar producto</h2>
        <form className="form-row" onSubmit={this.onSubmit}>
          <div className="form-group col-md-6">
            <label htmlFor="inlineFormInputName2">Nombre</label>
            <input type="text" name="nombre" value={nombre} onChange={this.onChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="HD Vision Aviators" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inlineFormInputGroupUsername2">Precio</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input type="text" name="precio" value={precio} onChange={this.onChange} className="form-control" id="inlineFormInputGroupUsername2" placeholder="25000" />
            </div>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inlineFormInputName2">Categoria</label>
            <input type="text" name="categoria" value={categoria} onChange={this.onChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Lentes" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inlineFormInputName2">Fecha de vencimiento</label>
            <input type="text" name="fechaVencimiento" value={fechaVencimiento} onChange={this.onChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="20-11-3033" />
          </div>

          <div className="form-group col-md-6">
            <a href="/">
              <button type="submit" className="btn btn-success mb-2">Agregar</button>
            </a>
            <Link to="/" className="btn btn-secondary mb-2" style={{marginLeft: '6px'}}>Volver</Link>
          </div>
        </form>
      </div>
    )
  }

}
export default ProductAddForm