// Copyright (c) 2022 GuanRan Tai
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// Copyright (c) 2022 GuanRan Tai
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

class MainPage extends HTMLElement {
    constructor() {
      super();
      this.judgeLogin();
    }
    judgeLogin(){
        const userName = localStorage.getItem('userName');
        if (userName === null) {
            this.welcomeMsg=`Hi, Guest!`;
        }else{
            this.welcomeMsg="Hi, "+userName+"! ";
        }
    };
    connectedCallback() {
        this.innerHTML = `<p style="color:red;text-align:center;">${this.welcomeMsg}</p><p>Welcome to AMARKT! This is the main Page</p>`;
    }
}

customElements.define('main-page', MainPage);
