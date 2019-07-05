import React, { useState } from "react";
import PropTypes from "prop-types";
import { CaretLeft, CaretDown } from "./DirCommon";
import { ListProps } from "./DirObject";

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

export const DirRegex = ({ name, value }) => {
  const [open, setOpen] = useState(false);
  return open ? (
    <OpenRegex onClick={() => setOpen(false)} name={name} value={value} />
  ) : (
    <ClosedRegex onClick={() => setOpen(true)} name={name} value={value} />
  );
};
DirRegex.propTypes = {
  value: PropTypes.object,
  name: PropTypes.string
};
