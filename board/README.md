# **Gulp란?**
  
#### 💡 Node.js 기반의 웹 개발을 위한 프로세스 자동화 도구 중 하나
#### HTML, CSS, JavaScript 파일을 자동으로 컴파일하거나 최적화하고, 파일 변경을 감지하여 브라우저를 새로고침 하거나 라이브 리로드를 제공

> 코드 압축(minify), 코드 변경 감지 및 자동 새로고침(refresh), 이미지 최적화(Image Optimaization) 등
<br>

## 특징
- SASS Compile
- CSS Merge & Minify
- Javascript Merge & Minify
- 이미지 최적화
- HTML 템플릿 처리
- 자동 리로드
<br>

## 주요기능
#### 1. 태스크 실행(Task Running)
프로젝트에 정의된 여러 작업(태스크)을 실행,<br>
CSS 전처리기를 컴파일하거나 JavaScript 파일을 번들링하고 압축하는 작업을 수행할 수 있으며, 반복적이고 번거로운 작업들을 자동화하여 생산성을 높일 수 있습니다.
<br>

#### 2. 스트림 기반 처리(Stream-Based Processing)
파일 처리를 스트림으로 처리,<br>
이는 파일이 메모리에 한 번에 로드되지 않고 작은 조각으로 처리되는 것을 의미, 대규모 파일을 효율적으로 처리할 수 있게 도와줍니다.<br>
또한, 스트림을 통해 파일이 흐르는 동안 다양한 작업을 연속적으로 적용할 수 있습니다.
<br>

#### 3. 플러그인 사용
다양한 플러그인을 사용하여 기능을 확장,<br>
이러한 플러그인들은 CSS 전처리기 처리, Javascript 번들링 및 최적화, 이미지 최적화, 파일 병합 등 다양한 작업을 자동화하는데 도움이 됩니다.<br>
필요한 작업에 맞는 플러그인을 선택하여 Gulp와 통합할 수 있습니다.
<br>

#### 4. Watch 기능
파일 변경을 감지하여 자동으로 작업을 실행할 수 있는 Watch 기능을 제공,<br>
실시간으로 코드를 수정하고 테스트 할 수 있어서 개발 과정을 보다 빠르게 진행할 수 있습니다.
<br>
<br>

## Installation
        node -v (설치 확인)
        npm -v (설치 확인)
        npm install gulp-cli -g
        npm install gulp -d

## Build
        gulp dev
<br>
