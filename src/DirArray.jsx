import React from "react";
import PropTypes from "prop-types";
import { Dir } from "./Dir";
import { More, ListProps, Collapsed, CaretLeft, CaretDown } from "./DirCommon";

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
        {last.length ? (
          <li style={{ paddingLeft: 0, paddingRight: 8, display: "inline" }}>
            <More />
          </li>
        ) : null}
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
  return (
    <span>
      <span onClick={onClick}>
        <CaretDown />
        {name && <span>{name}: </span>}
        <Collapsed value={value} />
      </span>
      <ListProps value={value} />
    </span>
  );
};
OpenArray.propTypes = {
  value: PropTypes.array,
  onClick: PropTypes.func,
  name: PropTypes.string
};
