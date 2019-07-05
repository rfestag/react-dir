import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Dir } from "./Dir";
import { DirContext, More, CaretLeft, CaretDown } from "./DirCommon";

export const CollapsedObject = ({ name }) => {
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
export const ListProps = ({ value }) => {
  const [count, setCount] = useState(10);
  const keys = Object.getOwnPropertyNames(value);
  const first = keys.slice(0, count);
  const last = keys.slice(count);

  return (
    <ul style={{ listStyleType: "none", margin: 0, paddingLeft: 16 }}>
      {first.map(k => {
        try {
          return (
            <li key={k}>
              <Dir value={value[k]} withCaret={true} name={k} />
            </li>
          );
        } catch (e) {
          return null;
        }
      })}
      <li>
        <Dir name="prototype" value={Object.getPrototypeOf(value)} />
      </li>
      {last.length ? <More onClick={() => setCount(count + 10)} /> : null}
    </ul>
  );
};
ListProps.propTypes = {
  value: PropTypes.any
};
export const ClosedObject = ({ name, value, onClick }) => {
  const keys = Object.keys(value);
  const first = keys.slice(0, 10);
  const last = keys.slice(10);

  return (
    <span onClick={onClick}>
      <span>
        <CaretLeft />
        {name
          ? `${name}: ${value.constructor.name} {`
          : `${value.constructor.name} {`}
      </span>
      <span>
        <ul
          style={{ listStyleType: "none", paddingLeft: 8, display: "inline" }}
        >
          {first.map((k, i) => {
            return (
              <li
                key={k}
                style={{ paddingLeft: 0, paddingRight: 8, display: "inline" }}
              >
                <Dir
                  value={value[k]}
                  name={k}
                  withCaret={false}
                  closed={true}
                />
                {i !== first.length - 1 || last.length ? "," : null}
              </li>
            );
          })}
          {last.length ? <More /> : null}
        </ul>

        <span>{"}"}</span>
      </span>
    </span>
  );
};
ClosedObject.propTypes = {
  value: PropTypes.object,
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
          <CollapsedObject />
        </span>
      </span>
      <ListProps value={value} />
    </span>
  );
};
OpenObject.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
  name: PropTypes.string
};

export const DirObject = ({ name, value }) => {
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
