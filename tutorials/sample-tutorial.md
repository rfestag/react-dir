# Listing JS Objects

## Default Behavior
You can pass any JS object to a `Dir` component in react-dir, and get a listing

```javascript
import React from 'react';
import Dir from 'react-dir';

const test = `return {
  str: "String",
  n: null,
  u: undefined,
  num: 123.34,
  inf: Infinity,
  nan: NaN,
  t: true,
  f: false,
  obj: {
    a: 1,
    b: {c: 'd'}
  },
  array: [
    1,
    2,
    {a: 2}
  ],
  blah: 'Foo',
  bar: 'Foo',
  baz: 'Foo',
}`

return (<Dir value={test} />)
```

## Styling
You can even control how you want the components to look by optionally wrapping the Dir in a context provider

```javascript
import React from 'react';
import Dir, {DirContext, DirDefaultStyle} from 'react-dir';
const style = {...DirDefaultStyle, moreColor: 'red' }

const test = `return {
  str: "String",
  n: null,
  u: undefined,
  num: 123.34,
  inf: Infinity,
  nan: NaN,
  t: true,
  f: false,
  obj: {
    a: 1,
    b: {c: 'd'}
  },
  array: [
    1,
    2,
    {a: 2}
  ],
  blah: 'Foo',
  bar: 'Foo',
  baz: 'Foo',
}`

return (
  <DirContext.Provider value={style}>
    <Dir value={style} />
    <Dir value={test} />
  </DirContext.Provider>
)
```
