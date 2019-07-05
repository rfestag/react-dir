import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  DirContext as dirContext,
  DirDefaultStyle as defaultStyle
} from "./DirCommon";
import { DirObject, CollapsedObject } from "./DirObject";
import { DirRegex } from "./DirRegex";
import { DirArray, CollapsedArray } from "./DirArray";
import { DirAtomic } from "./DirAtomic";

export const Dir = ({ name, value, withCaret, closed }) => {
  const {
    undefinedColor,
    nullColor,
    booleanColor,
    nanColor,
    numericColor,
    stringColor
  } = useContext(dirContext);
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
  } else if (value instanceof Array) {
    component = closed ? (
      <CollapsedArray name={name} />
    ) : (
      <DirArray name={name} value={value} />
    );
  } else if (value instanceof RegExp) {
    component = <DirRegex name={name} value={value} />;
  } else {
    component = closed ? (
      <CollapsedObject name={name} />
    ) : (
      <DirObject name={name} value={value} />
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

const DirRoot = ({ value }) => {
  const { color, fontSize, fontFamily } = useContext(dirContext);
  return (
    <div style={{ fontFamily, fontSize, color }}>
      <Dir value={value} />
    </div>
  );
};
DirRoot.propTypes = {
  value: PropTypes.any
};

export const DirContext = dirContext;
export const DirDefaultStyle = defaultStyle;

export default DirRoot;
