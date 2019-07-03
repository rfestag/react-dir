import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import {
  LiveContext,
  LiveProvider,
  LiveError,
  LivePreview,
  withLive
} from "react-live";
import { transform } from "buble";
import { UnControlled as CodeMirror } from "react-codemirror2";
import Dir, { DirContext } from "./Dir";
import { DirDefaultStyle } from "./DirCommon";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";

const style = { ...DirDefaultStyle };

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
}`;

const scope = { Dir };
const options = {
  mode: "javascript",
  theme: "material",
  lineNumbers: true
};
/*
const transformCode = code => {
  try {
    let transpiled = transform(code);
    return `
const code = \`${transpiled.code.trim()}\`
const value = new Function(code)
render(<Dir value={value()} />)
`;
  } catch (e) {
    return `render(<div>${e}</div>)`;
  }
};

const MyError = props => {
  return (
    <LiveContext.Consumer>
      {state => {
        const { error, exception } = state;
        if (exception) {
          console.log(exception);
          let line = exception.stack
            .split("\n")
            .find(e => e.includes("<anonymous>:") || e.includes("Function:"));
          if (line) {
            let lineIndex =
              (line.includes("<anonymous>:") &&
                line.indexOf("<anonymous>:") + "<anonymous>:".length) ||
              (line.includes("Function:") &&
                line.indexOf("Function:") + "Function:".length);
            console.log(+line.substring(lineIndex, lineIndex + 1) - 2);
          }
        }
        return error ? <pre {...props}>{error.toString()}</pre> : null;
      }}
    </LiveContext.Consumer>
  );
};
*/
const LiveCodeMirror = ({ options }) => {
  return (
    <LiveContext.Consumer>
      {({ code, onChange, onError }) => {
        const handleChange = (editor, data, value) => {
          try {
            const script = `
              const code = \`${transform(value).code.trim()}\`
              const value = new Function(code)
              render(<Dir value={value()} />)
            `;
            //let transpiled = transform(value)
            onChange(script);
          } catch (e) {
            onError(e);
          }
        };

        return (
          <div>
            <CodeMirror
              value={code}
              options={options}
              onChange={handleChange}
            />
          </div>
        );
      }}
    </LiveContext.Consumer>
  );
};
LiveCodeMirror.propTypes = {
  options: PropTypes.object
};
const Editor = withLive(({ code = "", options, scope }) => {
  try {
    code = `
      const code = \`${transform(code).code.trim()}\`
      const value = new Function(code)
      render(<Dir value={value()} />)
    `;
  } catch (e) {
    code = "render(<div></div>)";
  }
  return (
    <div>
      <LiveProvider code={code} scope={scope} noInline={true}>
        <LiveCodeMirror options={options} />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
});

ReactDOM.render(
  <DirContext.Provider value={style}>
    <Editor code={test} scope={scope} options={options} />
    <Dir value={style} />
  </DirContext.Provider>,
  document.getElementById("root")
);
