import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

const More = ({ onClick }) => {
  const { moreColor: color } = useContext(DirContext);
  return (
    <li onClick={onClick} style={{ display: "inline", color }}>
      &#x2026;
    </li>
  );
};
More.propTypes = {
  onClick: PropTypes.func
};
const CaretLeft = () => {
  const { caretColor: color } = useContext(DirContext);
  return (
    <span style={{ display: "inline-block", width: 8, paddingRight: 8, color }}>
      {"\u25B6"}
    </span>
  );
};
const CaretDown = () => {
  const { caretColor: color } = useContext(DirContext);
  return (
    <span style={{ display: "inline-block", width: 8, paddingRight: 8, color }}>
      {"\u25BC"}
    </span>
  );
};
const CaretBlank = () => (
  <span style={{ display: "inline-block", width: 8, paddingRight: 8 }} />
);
const CollapsedObject = ({ name }) => {
  const { moreColor: color } = useContext(DirContext);
  return (
    <span>
      {name ? `${name}:` : ""}
      <span>
        {"{"}
        <span style={{ color }}>&#x2026;</span>
        {"}"}
      </span>
    </span>
  );
};
CollapsedObject.propTypes = {
  name: PropTypes.string
};
const CollapsedArray = ({ name }) => {
  const { moreColor: color } = useContext(DirContext);
  return (
    <span>
      {name ? `${name}:` : ""}
      <span>
        {"["}
        <span style={{ color }}>&#x2026;</span>
        {"]"}
      </span>
    </span>
  );
};
CollapsedArray.propTypes = {
  name: PropTypes.string
};
const DirObject = ({ name, value }) => {
  const [open, setOpen] = useState(false);
  return open ? (
    <OpenObject onClick={() => setOpen(false)} name={name} value={value} />
  ) : (
    <ClosedObject onClick={() => setOpen(true)} name={name} value={value} />
  );
};
DirObject.propTypes = {
  value: PropTypes.object,
  name: PropTypes.string
};
const ClosedObject = ({ name, value, onClick }) => {
  const keys = Object.keys(value);
  const first = keys.slice(0, 10);
  const last = keys.slice(10);

  return (
    <span onClick={onClick}>
      <span>
        <CaretLeft />
        {name ? `${name}: Object {` : "Object {"}
      </span>
      <ul style={{ listStyleType: "none", paddingLeft: 8, display: "inline" }}>
        {first.map((k, i) => {
          return (
            <li
              key={k}
              style={{ paddingLeft: 0, paddingRight: 8, display: "inline" }}
            >
              <Dir value={value[k]} name={k} withCaret={false} closed={true} />
              {i !== first.length - 1 || last.length ? "," : null}
            </li>
          );
        })}
        {last.length ? <More /> : null}
      </ul>
      <span>{"}"}</span>
    </span>
  );
};
ClosedObject.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
  name: PropTypes.string
};
const OpenObject = ({ name, value, onClick }) => {
  const [count, setCount] = useState(10);
  const keys = Object.keys(value).sort();
  const first = keys.slice(0, count);
  const last = keys.slice(count);

  return (
    <span>
      <span onClick={onClick}>
        <CaretDown />
        {name && <span>{name}: </span>}
        <CollapsedObject />
      </span>
      <ul style={{ listStyleType: "none", margin: 0, paddingLeft: 16 }}>
        {first.map(k => (
          <li key={k}>
            <Dir value={value[k]} withCaret={true} name={k} />
          </li>
        ))}
        {last.length ? <More onClick={() => setCount(count + 10)} /> : null}
      </ul>
    </span>
  );
};
OpenObject.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
  name: PropTypes.string
};
const DirArray = ({ name, value }) => {
  const [open, setOpen] = useState(false);
  return open ? (
    <OpenArray onClick={() => setOpen(false)} name={name} value={value} />
  ) : (
    <ClosedArray onClick={() => setOpen(true)} name={name} value={value} />
  );
};
DirArray.propTypes = {
  value: PropTypes.array,
  name: PropTypes.string
};
const ClosedArray = ({ name, value, onClick }) => {
  const keys = Object.keys(value);
  const first = keys.slice(0, 10);
  const last = keys.slice(10);

  return (
    <span onClick={onClick}>
      <span>
        <CaretLeft />
        {name ? `${name}: Array (${keys.length}) [` : "Array ["}
      </span>
      <ul style={{ listStyleType: "none", paddingLeft: 8, display: "inline" }}>
        {first.map((k, i) => {
          return (
            <li
              key={k}
              style={{ paddingLeft: 0, paddingRight: 8, display: "inline" }}
            >
              <Dir value={value[k]} withCaret={false} closed={true} />
              {i !== first.length - 1 || last.length ? "," : null}
            </li>
          );
        })}
        {last.length ? <More /> : null}
      </ul>
      <span>{"]"}</span>
    </span>
  );
};
ClosedArray.propTypes = {
  value: PropTypes.array,
  onClick: PropTypes.func,
  name: PropTypes.string
};
const OpenArray = ({ name, value, onClick }) => {
  const [count, setCount] = useState(10);
  const keys = Object.keys(value).sort();
  const first = keys.slice(0, count);
  const last = keys.slice(count);

  return (
    <span>
      <span onClick={onClick}>
        <CaretDown />
        {name && <span>{name}: </span>}
        <CollapsedArray />
      </span>
      <ul style={{ listStyleType: "none", margin: 0, paddingLeft: 16 }}>
        {first.map(k => (
          <li key={k}>
            <Dir value={value[k]} withCaret={true} name={k} />
          </li>
        ))}
        {last.length ? <More onClick={() => setCount(count + 10)} /> : null}
      </ul>
    </span>
  );
};
OpenArray.propTypes = {
  value: PropTypes.array,
  onClick: PropTypes.func,
  name: PropTypes.string
};

const DirAtomic = ({ name, color, withCaret, value }) => {
  return (
    <span>
      {withCaret && <CaretBlank />}
      {name && <span style={{ paddingRight: 4 }}>{name}:</span>}
      <span style={{ color }}>{value}</span>
    </span>
  );
};
DirAtomic.propTypes = {
  value: PropTypes.any,
  color: PropTypes.string,
  name: PropTypes.string,
  withCaret: PropTypes.bool
};

const Dir = ({ name, value, withCaret, closed }) => {
  const {
    undefinedColor,
    nullColor,
    booleanColor,
    nanColor,
    numericColor,
    stringColor
  } = useContext(DirContext);
  if (value === undefined) {
    return (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value="undefined"
        color={undefinedColor}
      />
    );
  } else if (value === null) {
    return (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value="null"
        color={nullColor}
      />
    );
  } else if (typeof value === "boolean") {
    return (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value={value.toString()}
        color={booleanColor}
      />
    );
  } else if (typeof value === "number") {
    return (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value={value.toString()}
        color={isNaN(value) ? nanColor : numericColor}
      />
    );
  } else if (typeof value === "string") {
    return (
      <DirAtomic
        name={name}
        withCaret={withCaret}
        value={`"${value}"`}
        color={stringColor}
      />
    );
  } else if (value instanceof Array) {
    return closed ? (
      <CollapsedArray name={name} />
    ) : (
      <DirArray name={name} value={value} />
    );
  } else {
    return closed ? (
      <CollapsedObject name={name} />
    ) : (
      <DirObject name={name} value={value} />
    );
  }
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

export const DirDefaultStyle = {
  color: "dodgerblue",
  moreColor: "darkgray",
  caretColor: "darkgray",
  ellipseColor: "darkgray",
  undefinedColor: "darkgray",
  nullColor: "darkgray",
  nanColor: "darkgrey",
  booleanColor: "green",
  numericColor: "green",
  stringColor: "magenta",
  fontFamily: "monospace",
  fontSize: 12
};
export const DirContext = React.createContext(DirDefaultStyle);

export default DirRoot;
