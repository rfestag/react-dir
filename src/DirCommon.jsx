import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Dir } from "./Dir";

export const DirDefaultStyle = {
  color: "dodgerblue",
  moreColor: "darkgray",
  caretColor: "darkgray",
  ellipseColor: "darkgray",
  undefinedColor: "darkgray",
  nullColor: "darkgray",
  nanColor: "darkgrey",
  booleanColor: "green",
  numericColor: "green",
  stringColor: "magenta",
  fontFamily: "monospace",
  fontSize: 12
};
export const DirContext = React.createContext(DirDefaultStyle);
export const More = () => {
  const { moreColor: color } = useContext(DirContext);
  return <span style={{ display: "inline", color }}>&#x2026;</span>;
};
export const Caret = ({ children }) => {
  const { caretColor: color } = useContext(DirContext);
  return (
    <span style={{ display: "inline-block", width: 8, paddingRight: 8, color }}>
      {children ? children : null}
    </span>
  );
};
Caret.propTypes = {
  children: PropTypes.any
};
export const CaretLeft = () => <Caret>&#x25B6;</Caret>;
export const CaretDown = () => <Caret>&#x25BC;</Caret>;
export const CaretBlank = () => <Caret />;
export const Collapsible = ({ name, value, Open, Closed }) => {
  const [open, setOpen] = useState(false);
  return open ? (
    <Open onClick={() => setOpen(false)} name={name} value={value} />
  ) : (
    <Closed onClick={() => setOpen(true)} name={name} value={value} />
  );
};
Collapsible.propTypes = {
  Open: PropTypes.any,
  Closed: PropTypes.any,
  name: PropTypes.string,
  value: PropTypes.any
};

export const Collapsed = ({ name, value }) => {
  if (value instanceof RegExp || value instanceof Date) {
    return (
      <span>
        {name && `${name} : `}
        {value.toString()}
      </span>
    );
  } else {
    const open = value instanceof Array ? "[" : "{";
    const close = value instanceof Array ? "]" : "}";
    return (
      <span>
        {name && `${name} : `}
        {open}
        <span>
          <More />
        </span>
        {close}
      </span>
    );
  }
};
Collapsed.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any
};
export const ListProps = ({ value }) => {
  const [count, setCount] = useState(10);
  const keys = Object.getOwnPropertyNames(value);
  const first = keys.slice(0, count);
  const last = keys.slice(count);

  return (
    <ul style={{ listStyleType: "none", margin: 0, paddingLeft: 16 }}>
      {first.map(k => {
        try {
          return (
            <li key={k}>
              <Dir value={value[k]} withCaret={true} name={k} />
            </li>
          );
        } catch (e) {
          return null;
        }
      })}
      <li>
        <Dir name="prototype" value={Object.getPrototypeOf(value)} />
      </li>
      {last.length ? (
        <li onClick={() => setCount(count + 10)}>
          <CaretBlank />
          <More />
        </li>
      ) : null}
    </ul>
  );
};
ListProps.propTypes = {
  value: PropTypes.any
};
export const InlineListProps = ({ value, showKeys = true, size = 10 }) => {
  const keys = Object.keys(value);
  const first = keys.slice(0, size);
  const last = keys.slice(size);

  return (
    <ul style={{ listStyleType: "none", paddingLeft: 8, display: "inline" }}>
      {first.map((k, i) => {
        return (
          <li
            key={k}
            style={{ paddingLeft: 0, paddingRight: 8, display: "inline" }}
          >
            <Dir
              value={value[k]}
              name={showKeys ? k : undefined}
              withCaret={false}
              closed={true}
            />
            {i !== first.length - 1 || last.length ? "," : null}
          </li>
        );
      })}
      {last.length ? (
        <li style={{ paddingLeft: 0, paddingRight: 8, display: "inline" }}>
          <More />
        </li>
      ) : null}
    </ul>
  );
};
InlineListProps.propTypes = {
  value: PropTypes.any,
  showKeys: PropTypes.bool,
  size: PropTypes.number
};
export const simpleObject = value => {
  return value instanceof RegExp || value instanceof Date;
};
