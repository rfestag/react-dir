import React from "react";
import PropTypes from "prop-types";
import {
  Collapsed,
  ListProps,
  InlineListProps,
  CaretLeft,
  CaretDown
} from "./DirCommon";

export const ClosedObject = ({ name, value, onClick }) => {
  return (
    <span onClick={onClick}>
      <span>
        <CaretLeft />
        {name
          ? `${name}: ${value.constructor.name} {`
          : `${value.constructor.name} {`}
      </span>
      <span>
        <InlineListProps value={value} />
        <span>{"}"}</span>
      </span>
    </span>
  );
};
ClosedObject.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func,
  name: PropTypes.string
};
export const OpenObject = ({ name, value, onClick }) => {
  return (
    <span>
      <span onClick={onClick}>
        <CaretDown />
        <span>
          {name && <span>{name}: </span>}
          <Collapsed value={value} />
        </span>
      </span>
      <ListProps value={value} />
    </span>
  );
};
OpenObject.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func,
  name: PropTypes.string
};
