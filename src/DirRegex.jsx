import React from "react";
import PropTypes from "prop-types";
import { ListProps, Collapsible, CaretLeft, CaretDown } from "./DirCommon";

export const ClosedRegex = ({ name, value, onClick }) => {
  return (
    <span onClick={onClick}>
      <span>
        <CaretLeft />
        {name ? `${name}: ${value}` : value.toString()}
      </span>
    </span>
  );
};
ClosedRegex.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
  name: PropTypes.string
};
export const OpenRegex = ({ name, value, onClick }) => {
  return (
    <span>
      <span onClick={onClick}>
        <CaretDown />
        {name ? `${name}: ${value}` : value.toString()}
      </span>
      <ListProps value={value} />
    </span>
  );
};
OpenRegex.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
  name: PropTypes.string
};

export const DirRegex = ({ name, value }) => (
  <Collapsible
    Open={OpenRegex}
    Closed={ClosedRegex}
    name={name}
    value={value}
  />
);
DirRegex.propTypes = {
  value: PropTypes.object,
  name: PropTypes.string
};
