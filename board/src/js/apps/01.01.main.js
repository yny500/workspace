'use strict';

class Main {
  constructor(args) {
    (this.opts = {
      body: 'body',
      container: '.container',
      ...args
    }),
      (this.container = document.querySelector(this.opts.container));
  }
  init() {
    this.setElements();
    console.log(this.container);
  }
  setElements() {
    this.body = document.querySelector(this.opts.body);
    this.container = document.querySelector(this.opts.container);
  }
}
