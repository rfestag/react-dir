# react-dir

[![license](https://img.shields.io/github/license/rfestag/react-dir.svg)](LICENSE)
[![Build Status](https://travis-ci.com/rfestag/react-dir.svg?branch=master)](https://travis-ci.com/rfestag/react-dir)
[![Maintainability](https://api.codeclimate.com/v1/badges/e6f97ddf416aa738938b/maintainability)](https://codeclimate.com/github/rfestag/react-dir/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e6f97ddf416aa738938b/test_coverage)](https://codeclimate.com/github/rfestag/react-dir/test_coverage)

react-dir is a react component for rendering arbitrary JS data (strings, numbers, objects, etc), similar to `console.dir()` or `console.log()` in a browser.

## Install

It hasn't been published yet, but once it is you will install like this:

```
npm install react-dir
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Dir from "./Dir";

ReactDOM.render(
  <div>
    <Dir value={null} />
    <Dir value={undefined} />
    <Dir value={NaN} />
    <Dir value={Infinity} />
    <Dir value={true} />
    <Dir value={false} />
    <Dir value={123.0} />
    <Dir value={"A String"} />
    <Dir value={/[A-Z]{3}/} />
    <Dir value={new Date()} />
    <Dir value={[1, 2, 3]} />
    <Dir value={{ a: 1, b: 2 }} />
    <Dir value={{ a: 1, b: [2, 3] }} />
    <Dir value={[1, 2, { a: 1, b: 2 }]} />
    <Dir value={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
  </div>,
  document.getElementById("root")
);
```

## License

react-dir is [ISC](LICENSE) licensed
