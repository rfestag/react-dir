import React from "react";
import PropTypes from "prop-types";
import { CaretBlank } from "./Caret";

export const DirComponent = ({ name, withCaret, value }) => {
  return (
    <span>
      {withCaret && <CaretBlank />}
      {name && <span style={{ paddingRight: 4 }}>{name}:</span>}
      {value}
    </span>
  );
};
DirComponent.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  withCaret: PropTypes.bool
};
