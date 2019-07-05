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
export const More = ({ onClick }) => {
  const { moreColor: color } = useContext(DirContext);
  return (
    <li onClick={onClick} style={{ display: "inline", color }}>
      &#x2026;
    </li>
  );
};
More.propTypes = {
  onClick: PropTypes.func
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
  const open = value instanceof Array ? "[" : "{";
  const close = value instanceof Array ? "]" : "}";
  const filler = `${open}\u2026${close}`;
  return <span>{name ? `${name}: ${filler}` : filler}</span>;
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
      {last.length ? <More onClick={() => setCount(count + 10)} /> : null}
    </ul>
  );
};
ListProps.propTypes = {
  value: PropTypes.any
};
