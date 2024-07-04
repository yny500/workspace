'use strict';

class Main {
  constructor(args) {
    this.opts = {
      body: 'body',
      header: 'header',
      container: '.container',
      loader: '.loader',
      dimmed: '.dimmed',
      video: '.video__item video',
      fadeDuration: 100,
      classes: {
        show: 'is-show'
      },
      ...args
    };
    this.container = document.querySelector(this.opts.container);
  }

  init() {
    this.setElements();
    this.bindEvents();
  }

  setElements() {
    this.body = document.querySelector(this.opts.body);
    this.header = document.querySelector(this.opts.header);
    this.loader = document.querySelector(this.opts.loader);
    this.dimmed = document.querySelector(this.opts.dimmed);
    this.video = document.querySelectorAll(this.opts.video);
  }

  bindEvents() {
    window.addEventListener('DOMContentLoaded', this.loadingStart.bind(this));
    window.addEventListener('load', this.loadingEnd.bind(this));
  }

  imgLoaded() {
    const imgs = $(this.body).find('img');
    const deferred = $.Deferred();

    if (imgs.length) {
      let minLength = 0;
      const maxLength = imgs.length;

      const completeFunc = function () {
        if (minLength === maxLength) {
          deferred.resolve();
        }
      };
      if (!maxLength) {
        completeFunc();
      } else {
        for (let i = 0, max = maxLength; i < max; i++) {
          (function (index) {
            const image = imgs.eq(index);
            const imageSrc = image[0].getAttribute('src');
            const newImage = document.createElement('img');
            newImage.onload = () => {
              minLength++; // 이미지 카운트
              if (minLength === maxLength) {
                // console.log('이미지 로드 완료');
                deferred.resolve();
              }
            };
            newImage.src = imageSrc; // 새로 생성한 img에 src를 치환(카운트 세기)
          })(i);
        }
      }
    } else {
      deferred.resolve();
    }
    return deferred.promise();
  }

  videoLoaded() {
    const videos = $(this.body).find('video');
    const deferred = $.Deferred();
    if (videos.length) {
      let minLength = 0;
      const maxLength = videos.length;

      const completeFunc = function () {
        if (minLength === maxLength) {
          deferred.resolve();
        }
      };
      if (!maxLength) {
        completeFunc();
      } else {
        for (let i = 0, max = maxLength; i < max; i++) {
          (function (index) {
            const video = videos.eq(index);
            const videoSourceSrc = video[0].children[0].getAttribute('src');
            const newVideo = document.createElement('video');

            newVideo.oncanplay = () => {
              minLength++;
              if (minLength === maxLength) {
                // console.log('비디오 로드 완료');
                deferred.resolve();
              }
            };
            newVideo.src = videoSourceSrc;
          })(i);
        }
      }
    } else {
      deferred.resolve();
    }
    return deferred.promise();
  }

  loadingStart() {
    const _this = this;
    const loaderContainer = $(_this.header);
    const loadingObj = loaderContainer.find(this.opts.loader);
    if (loadingObj.length) return;
    loaderContainer.before(this.opts.loadingElements);
  }

  loadingEnd() {
    const _this = this;

    $.when(
      this.imgLoaded(),
      this.videoLoaded().done(() => {
        // loader 제거
        _this.removeLoader();
      })
    );
  }
  removeLoader() {
    const _this = this;

    $(this.dimmed)
      .stop(true, true)
      .fadeOut(this.opts.fadeDuration, function () {
        _this.loader.remove();
      });
  }
}
