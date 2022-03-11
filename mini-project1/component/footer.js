// Copyright (c) 2022 Guanran Tai
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            <span>Contact number:&nbsp; 5025 5962 </span>
            <span>&nbsp;&nbsp;</span>
            <span><a href="mailto:taiguanran@gmail.com">Email To US: taiguanran@gmail.com</a></span>
          </p>
          <p class="m-0 text-center text-white">
            Copyright &copy; AMARKT GROUP 2022
          </p>
        </div>
      </footer>`;
  }
}

customElements.define("my-footer", Footer);
