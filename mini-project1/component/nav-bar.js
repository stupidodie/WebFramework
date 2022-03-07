// Copyright (c) 2022 GuanRan Tai
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

class Header extends HTMLElement {
    constructor() {
      super();
      this.judgeLogin();
    }
    judgeLogin(){
        const userName = localStorage.getItem('userName');
        if (userName === null) {
            this.loginText="Login";
            this.loginTarget="./login.html";
        }else{
            this.loginText="Logout";
            this.loginTarget="#";
        }
    };
    connectedCallback() {
        this.innerHTML=`<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #ff5001">
        <div class="container-fluid" >
          <a class="navbar-brand" href="#">AMARKT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html ">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown" >
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="show_products.html">milk tea</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav" style="margin-left: auto;>
              <li class="nav-item">
                <a class="nav-link" href="cart.html">cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=${this.loginTarget} id="loginText" onclick="handleLogin()">${this.loginText}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`;
    }
}

customElements.define('nav-bar', Header);;