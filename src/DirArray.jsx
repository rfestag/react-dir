import React from "react";
import PropTypes from "prop-types";
import {
  ListProps,
  InlineListProps,
  Collapsed,
  CaretLeft,
  CaretDown
} from "./DirCommon";

export const ClosedArray = ({ name, value, onClick }) => {
  return (
    <span onClick={onClick}>
      <span>
        <CaretLeft />
        {name ? `${name}: Array (${value.length}) [` : "Array ["}
      </span>
      <InlineListProps value={value} showKeys={false} />
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
