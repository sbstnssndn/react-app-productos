import React from 'react';
import Main from './Main';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  fetchProducts() {
    Axios.get('http://localhost:8091/api/productos')
      .then(response => {
        console.log(response);
        this.setState({products:response.data});
      })
      .catch(function(error){
        console.log(error);
      })
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    if(!this.state.products.length){
      return(
        <p>No hay productos :(</p>
      )   
    } else {
      return (
        <Main products={this.state.products} create={this.handleCreate} add_product={this.state.add_product} />
      )
    }
  }
}

export default App;