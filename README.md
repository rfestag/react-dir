# react-dir

[![license](https://img.shields.io/github/license/rfestag/react-dir.svg)](LICENSE)
[![Build Status](https://travis-ci.com/rfestag/react-dir.svg?branch=master)](https://travis-ci.com/rfestag/react-dir)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

react-dir is a react component for rendering arbitrary JS data (strings, numbers, objects, etc), similar to `console.dir()` or `console.log()` in a browser.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

It hasn't been published yet, but once it is you will install like this:

```
npm install react-dir
```

## Usage

```
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

[ISC © Ryan Festag](LICENSE)
