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
        this.innerHTML = `<p style="text-align:center;font-family:"Times New Roman", Times, serif; font-weight: 300;">${this.welcomeMsg} &ensp; Welcome to AMARKT!</p>`;
    }
}

customElements.define('main-page', MainPage);
