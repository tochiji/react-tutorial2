import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

const d = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
]

function FilterableProductTable(props) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  )
}

function SearchBar() {
  return (
    <div>
      <input type="text" />
      <br />
      <input type="checkbox" value="show" />
      Only show products in stock
    </div>
  )
}

function ProductTable(props) {
  console.log(props.products)
  const categories = Array.from(
    new Set(
      props.products.map(v => {
        return v.category
      })
    )
  )
  const categoryList = categories.map(c => (
    <div key={c}>
      <ProductCategoryRow name={c} />
      <ProductRow category={c} products={props.products} />
    </div>
  ))
  return (
    <div>
      Name price
      {categoryList}
    </div>
  )
}

function ProductCategoryRow(props) {
  return <div>{props.name}</div>
}

function ProductRow(props) {
  const category = props.category
  const products = props.products
    .filter(p => {
      return p.category === category
    })
    .map(v => (
      <div key={category}>
        <span>{v.name}</span>
        <span>{v.price}</span>
      </div>
    ))
  return products
}

const mount = document.getElementById('root')
ReactDOM.render(<FilterableProductTable products={d} />, mount)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
