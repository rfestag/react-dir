import React, { useContext } from "react";
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
export const CaretLeft = () => {
  const { caretColor: color } = useContext(DirContext);
  return (
    <span style={{ display: "inline-block", width: 8, paddingRight: 8, color }}>
      {"\u25B6"}
    </span>
  );
};
export const CaretDown = () => {
  const { caretColor: color } = useContext(DirContext);
  return (
    <span style={{ display: "inline-block", width: 8, paddingRight: 8, color }}>
      {"\u25BC"}
    </span>
  );
};
export const CaretBlank = () => (
  <span style={{ display: "inline-block", width: 8, paddingRight: 8 }} />
);
