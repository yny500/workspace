'use strict';

class Loader {
  constructor(args) {
    (this.opts = {
      body: 'body',
      header: 'header',
      loadingClass: '.loader',
      // loadingElements: `<span class="loader"><img src="/img/loader.gif" alt="loader"></span>`,
      dimmed: '.dimmed',
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
    // this.loadingStart();
  }
  setElements() {
    this.body = document.querySelector(this.opts.body);
    this.header = document.querySelector(this.opts.header);
    this.loadingClass = document.querySelector(this.opts.loadingClass);
    this.dimmed = document.querySelector(this.opts.dimmed);
  }
  // loadingStart() {
  //   const _this = this;
  //   const loaderContainer = $(_this.header);
  //   const loadingObj = loaderContainer.find(this.opts.loadingClass);
  //   if (loadingObj.length) return;
  //   loaderContainer.before(this.opts.loadingElements);
  //   console.log('loader start');
  // }
  loadingEnd() {
    const _this = this;

    $(this.dimmed)
      .stop(true, true)
      .fadeOut(this.opts.fadeDuration, function () {
        _this.loadingClass.remove();
      });
  }
}
