# react-dir

[![license](https://img.shields.io/github/license/rfestag/react-dir.svg)](LICENSE)
[![Build Status](https://travis-ci.com/rfestag/react-dir.svg?branch=master)](https://travis-ci.com/rfestag/react-dir)
[![Maintainability](https://api.codeclimate.com/v1/badges/e6f97ddf416aa738938b/maintainability)](https://codeclimate.com/github/rfestag/react-dir/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e6f97ddf416aa738938b/test_coverage)](https://codeclimate.com/github/rfestag/react-dir/test_coverage)

react-dir is a react component for rendering arbitrary JS data (strings, numbers, objects, etc), similar to `console.dir()` or `console.log()` in a browser.

## Install

It hasn't been published yet, but once it is you will install like this:

```bash
npm install react-dir
```

## Usage

`react-dir` provides a `Dir` component that receives some value to render. More examples can be found in the documentation page.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Dir from "./Dir";

ReactDOM.render(
  <Dir value={{a: 1, b: "String", c: [1,2,3]}}>,
  document.getElementById("root")
);
```

## TODO

- [x] Support constant values (null, NaN, undefined)
- [x] Support primitive types (Strings, numbers, booleans)
- [x] Support nested objects and arrays
- [x] Support custom coloring
- [ ] Support React components (pass through)
- [ ] Support Promises
- [ ] Support Observables (RxJS)
