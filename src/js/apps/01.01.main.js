'use strict';

class Loader {
  constructor(args) {
    (this.opts = {
      body: 'body',
      header: 'header',
      loadingClass: '.loading',
      loadingElements: `<span class="loader"><img src="/img/loader.gif" alt="loader"></span>`,
      fadeDuration: 100,
      classes: {
        show: 'is-show'
      },
      ...args
    }),
      (this.container = document.querySelector(this.opts.container));
  }
  init() {
    this.setElements();
    this.loadingStart();
  }
  setElements() {
    this.body = document.querySelector(this.opts.body);
    this.header = document.querySelector(this.opts.header);
  }
  loadingStart() {
    const _this = this;
    const loaderContainer = $(_this.header);
    const loadingObj = loaderContainer.find(this.opts.loadingClass);
    console.log(loadingObj);
    if (loadingObj.length) return;
    loaderContainer.before(this.opts.loadingElements);
  }
}
