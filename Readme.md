
npm init : 폴더를 초기화 한다. package.json 파일을 만든다.
npm i -D electron : node_modules 에 electron 을 설치한다. 
npm install : 만들어진 어플을 실행할수 있도록 build 한다.
node_modules\.bin\election . : 만들어진 App을 실행해 본다.
npm i -D electron-builder : npm 으로 빌더를 설치한다.

package.json 가장 하단에 아래처럼 명시한다.
{
  // ..
  "build": {
    "productName": "Electron-Application",
    "appId": "myApp"
  }
}

package.json 의 npm command를 수정한다.
{
  // ..
  "scripts": {
    "start": "electron .",
    "pack": "electron-builder"
  }
}

npm run pack : npm 으로 electron 을 pack 한다. 실제로는 위에 있는 electron-builder 가 실행된다. exe 파일이 만들어진다.