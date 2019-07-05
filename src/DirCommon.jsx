import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

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

export const Collapsed = ({ name, children }) => {
  return (
    <span>
      {name ? `${name}:` : ""}
      {children}
    </span>
  );
};
Collapsed.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any
};
