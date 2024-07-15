'use strict';

class Main {
  constructor(args) {
    (this.opts = {
      body: 'body',
      container: '.container',
      form: '.input__box form',
      inputText: '.input__box input',
      ...args
    }),
      (this.container = document.querySelector(this.opts.container));
  }
  init() {
    this.setElements();
    this.initOpts();
    this.bindEvents();
  }
  setElements() {
    this.body = document.querySelector(this.opts.body);
    this.container = document.querySelector(this.opts.container);
    this.form = document.querySelector(this.opts.form);
    this.inputText = document.querySelector(this.opts.inputText);
  }
  initOpts() {
    this.text;

    // this.apiUrl = 'https://openapi.naver.com/v1/search/news.json?query=' + text;
  }
  bindEvents() {
    this.form.addEventListener('submit', this.searchFunc.bind(this));
  }
  searchFunc() {
    const inputValue = this.inputText.value;
    const apiUrl = 'https://openapi.naver.com/v1/search/news.json?query=' + inputValue;
    const data = {
      query: inputValue
    };

    const result = axios
      .get(apiUrl)
      .then(response => {
        console.log(response);
      })
      .catch(() => {
        console.log('fail');
      });

    // this.fetchData({
    //   apiUrl,
    //   data,
    //   successFunc: this.afterFetchData.bind(this)
    // });
  }
  // fetchData(param) {
  //   const _this = this;
  //   const { apiUrl, data, successFunc, failFunc } = param;
  //   console.log(param);

  //   const result = axios({
  //     method: 'get',
  //     apiUrl,
  //     params: data
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       // successFunc && console.log(successFunc(response));
  //     })
  //     .catch(error => {
  //       if (failFunc) {
  //         failFunc();
  //       } else {
  //         console.error('Error: ', error);
  //         return false;
  //       }
  //     });
  // }
  // afterFetchData(response) {
  //   console.log(response);
  // }
}
