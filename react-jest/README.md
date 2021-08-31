
```js
npm run dev
http://127.0.0.1:3000/
```

```js
关于环境
// jest.config.js
module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'node',
};

"test": "jest --config=jest.config.js"
```

[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)

```js
- src
  -| Render      //  1. 测试组件渲染
  -| QueryDom    //  2. 测试获取DOM内容
  -| ReactLib    //  3. 使用react库测试渲染
  -| Simulating  //  4. 模拟用户交互影响
  -| Async       //  5. 测试异步代码
```