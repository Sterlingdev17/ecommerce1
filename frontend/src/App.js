import React from 'react';
import data from "./data"
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import HomeScreen from "./displayScreens/homeScreen";
import ProductScreen from "./displayScreens/productScreen";
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
      <div>
        <header class="header">
          <div class="brand">
            <button onClick={openMenu}>
              &#9776;
                </button>
            <a href="index.html"> Guiacciu </a>
          </div>
          <div class="header-link">
            <a href="cart.html"> cart </a>
            <a href="login.html"> login </a>
          </div>
        </header>

        <aside class="sidebar">
          <h3>Categories</h3>
          <button class="sidebar-close" onClick={closeMenu}>X</button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirt</a>

            </li>
            <li>
              <a href="index.html">Denim</a>
            </li>

            <li>
              <a href="index.html">Jackets</a>
            </li>
          </ul>
        </aside>

        <main class="main">
          <div class="content">
            
            <Route path="/products/:id" component={ProductScreen} />   
            <Route path="/" exact={true} component={HomeScreen} />
            <ul class="products">

              {
                data.products.map(product =>
                  <li>
                    <div class="product">
                      <img className="product-img" src={product.image} alt="" />
                      <div class="product-name">
                        <a href="product.hrml">{product.name} </a>
                      </div>
                      <div class="product-brand">{product.brand}</div>
                      <div class="product-price"> {product.price} </div>

                      <div class="product-rating"> {product.rating} starts {product.numReviews} </div>

                    </div>
                  </li>
                )
              }


            </ul>
          </div>
        </main>

        <footer class="footer">
          all right resever for Sterling Yves Etienne
        </footer>






      </div>
    </BrowserRouter>
  )
}

export default App;
