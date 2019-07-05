import React from "react";
import PropTypes from "prop-types";
import { More } from "./More";

export const Collapsed = ({ name, value }) => {
  if (value instanceof RegExp || value instanceof Date) {
    return (
      <span>
        {name && `${name} : `}
        {value.toString()}
      </span>
    );
  } else {
    const open = value instanceof Array ? "[" : "{";
    const close = value instanceof Array ? "]" : "}";
    return (
      <span>
        {name && `${name} : `}
        {open}
        <span>
          <More />
        </span>
        {close}
      </span>
    );
  }
};
Collapsed.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any
};
