import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Dir } from "./Dir";
import {
  DirContext,
  More,
  Collapsed,
  Collapsible,
  CaretLeft,
  CaretDown
} from "./DirCommon";

export const CollapsedArray = ({ name }) => {
  const { moreColor: color } = useContext(DirContext);
  return (
    <Collapsed name={name}>
      {"["}
      <span style={{ color }}>&#x2026;</span>
      {"]"}
    </Collapsed>
  );
};
CollapsedArray.propTypes = {
  name: PropTypes.string
};
export const ClosedArray = ({ name, value, onClick }) => {
  const keys = Object.keys(value);
  const first = keys.slice(0, 10);
  const last = keys.slice(10);

  return (
    <span onClick={onClick}>
      <span>
        <CaretLeft />
        {name ? `${name}: Array (${keys.length}) [` : "Array ["}
      </span>
      <ul style={{ listStyleType: "none", paddingLeft: 8, display: "inline" }}>
        {first.map((k, i) => {
          return (
            <li
              key={k}
              style={{ paddingLeft: 0, paddingRight: 8, display: "inline" }}
            >
              <Dir value={value[k]} withCaret={false} closed={true} />
              {i !== first.length - 1 || last.length ? "," : null}
            </li>
          );
        })}
        {last.length ? <More /> : null}
      </ul>
      <span>{"]"}</span>
    </span>
  );
};
ClosedArray.propTypes = {
  value: PropTypes.array,
  onClick: PropTypes.func,
  name: PropTypes.string
};
export const OpenArray = ({ name, value, onClick }) => {
  const [count, setCount] = useState(10);
  const keys = Object.keys(value).sort();
  const first = keys.slice(0, count);
  const last = keys.slice(count);

  return (
    <span>
      <span onClick={onClick}>
        <CaretDown />
        {name && <span>{name}: </span>}
        <CollapsedArray />
      </span>
      <ul style={{ listStyleType: "none", margin: 0, paddingLeft: 16 }}>
        {first.map(k => (
          <li key={k}>
            <Dir value={value[k]} withCaret={true} name={k} />
          </li>
        ))}
        {last.length ? <More onClick={() => setCount(count + 10)} /> : null}
      </ul>
    </span>
  );
};
OpenArray.propTypes = {
  value: PropTypes.array,
  onClick: PropTypes.func,
  name: PropTypes.string
};

export const DirArray = ({ name, value }) => (
  <Collapsible
    Open={OpenArray}
    Closed={ClosedArray}
    name={name}
    value={value}
  />
);
DirArray.propTypes = {
  value: PropTypes.array,
  name: PropTypes.string
};
