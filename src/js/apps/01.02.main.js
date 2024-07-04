const imgLoaded = () => {
  const bodyEl = document.querySelector('body');
  const imgs = $(bodyEl).find('img');

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
};

const videoLoaded = () => {
  const bodyEl = document.querySelector('body');
  const videos = $(bodyEl).find('video');

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

          newVideo.onloadedmetadata = () => {
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
};

// 시점 별 제어
window.addEventListener('DOMContentLoaded', () => {
  const loader = new Loader();
  loader.init();

  window.addEventListener('load', () => {
    $.when(
      imgLoaded(),
      videoLoaded().done(function () {
        // loader 제거
        loader.loadingEnd();
      })
    );
  });
});
