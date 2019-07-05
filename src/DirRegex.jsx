import React from "react";
import PropTypes from "prop-types";
import { CaretLeft } from "./DirCommon";

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
