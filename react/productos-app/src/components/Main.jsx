import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductsList from './ProductsList';
import ProductInfo from './ProductInfo';
import ProductAddForm from './ProductAddForm'
import ProductEditForm from './ProductEditForm'

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={ () => <ProductsList products={props.products} /> } />
      <Route exact path="/productos/agregar" component={ProductAddForm} create={props.create} add_product={props.add_product}/>
      <Route exact path="/productos/editar/:productId" component={ProductEditForm} />
      <Route path="/productos/:productId" component={ProductInfo} />      
    </Switch>
  </main>
)

export default Main