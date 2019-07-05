import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DirContext, DirDefaultStyle, Collapsed } from "./DirCommon";
import { DirObject } from "./DirObject";
import { DirRegex } from "./DirRegex";
import { DirArray } from "./DirArray";
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
  } else if (value instanceof Array) {
    component = closed ? (
      <Collapsed name={name} value={value} />
    ) : (
      <DirArray name={name} value={value} />
    );
  } else if (value instanceof RegExp) {
    component = <DirRegex name={name} value={value} />;
  } else {
    component = closed ? (
      <Collapsed name={name} value={value} />
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
  const { color, fontSize, fontFamily } = useContext(DirContext);
  return (
    <div style={{ fontFamily, fontSize, color }}>
      <Dir value={value} />
    </div>
  );
};
DirRoot.propTypes = {
  value: PropTypes.any
};

export { DirContext, DirDefaultStyle };

export default DirRoot;
