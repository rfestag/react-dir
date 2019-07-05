import React from "react";
import PropTypes from "prop-types";
import { InlineListProps, CaretLeft } from "./DirCommon";

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
