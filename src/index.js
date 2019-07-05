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
    <Dir
      value={{
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12
      }}
    />
  </div>,
  document.getElementById("root")
);
