import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DirContext } from "../utils/common";
import { Collapsible } from "./Collapsible";
import { Collapsed } from "./Collapsed";
import { OpenObject, ClosedObject } from "./DirObject";
import { ClosedArray } from "./DirArray";
import { DirAtomic } from "./DirAtomic";

export const Dir = ({ name, value, withCaret, closed }) => {
  const {
    undefinedColor,
    nullColor,
    booleanColor,
    nanColor,
    numericColor,
    stringColor
  } = useContext(DirContext);
  let component;
  if (value === undefined) {
    component = (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value="undefined"
        color={undefinedColor}
      />
    );
  } else if (value === null) {
    component = (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value="null"
        color={nullColor}
      />
    );
  } else if (typeof value === "boolean") {
    component = (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value={value.toString()}
        color={booleanColor}
      />
    );
  } else if (typeof value === "number") {
    component = (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value={value.toString()}
        color={isNaN(value) ? nanColor : numericColor}
      />
    );
  } else if (typeof value === "string") {
    component = (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value={`"${value}"`}
        color={stringColor}
      />
    );
  } else {
    let Open, Closed;
    if (value instanceof Array) {
      Open = OpenObject;
      Closed = ClosedArray;
    } else {
      Open = OpenObject;
      Closed = ClosedObject;
    }
    component = closed ? (
      <Collapsed name={name} value={value} />
    ) : (
      <Collapsible Open={Open} Closed={Closed} name={name} value={value} />
    );
  }
  return component;
};
Dir.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  withCaret: PropTypes.bool,
  closed: PropTypes.bool
};
