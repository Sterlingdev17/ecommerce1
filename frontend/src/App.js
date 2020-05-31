import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open")
 }

 const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open")
 }

  return (
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
          <ul class="products">
            <li>
              <div class="product">
                <img className="product-img" src="/images/pant.jpg" alt="" />
                <div class="product-name">
                  <a href="product.hrml">pants </a>
                </div>
                <div class="product-brand">Guiacciu</div>
                <div class="product-price"> 50 </div>

                <div class="product-rating"> 4.5 starts (10 reviews) </div>

              </div>
            </li>

            <li>
              <div class="product">
                <img className="product-img" src="/images/pant.jpg" alt="" />
                <div class="product-name">
                  <a href="product.hrml">pants </a>
                </div>
                <div class="product-brand">Guiacciu</div>
                <div class="product-price"> 50 </div>

                <div class="product-rating"> 4.5 starts (10 reviews) </div>

              </div>
            </li>

            <li>
              <div class="product">
                <img className="product-img" src="/images/pant.jpg" alt="" />
                <div class="product-name">
                  <a href="product.hrml">pants </a>
                </div>
                <div class="product-brand">Guiacciu</div>
                <div class="product-price"> 50 </div>

                <div class="product-rating"> 4.5 starts (10 reviews) </div>

              </div>
            </li>

            <li>
              <div class="product">
                <img className="product-img" src="/images/pant.jpg" alt="" />
                <div class="product-name">
                  <a href="product.hrml">pants </a>
                </div>
                <div class="product-brand">Guiacciu</div>
                <div class="product-price"> 50 </div>

                <div class="product-rating"> 4.5 starts (10 reviews) </div>

              </div>
            </li>

            <li>
              <div class="product">
                <img className="product-img" src="/images/pant.jpg" alt="" />
                <div class="product-name">
                  <a href="product.hrml">pants </a>
                </div>
                <div class="product-brand">Guiacciu</div>
                <div class="product-price"> 50 </div>

                <div class="product-rating"> 4.5 starts (10 reviews) </div>

              </div>
            </li>

            <li>
              <div class="product">
                <img className="product-img" src="/images/pant.jpg" alt="" />
                <div class="product-name">
                  <a href="product.hrml">pants </a>
                </div>
                <div class="product-brand">Guiacciu</div>
                <div class="product-price"> 50 </div>

                <div class="product-rating"> 4.5 starts (10 reviews) </div>

              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer class="footer">
        all right resever for Sterling Yves Etienne
        </footer>






    </div>
  )
}

export default App;
