import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dir } from "./Dir";
import { More } from "./More";
import { CaretBlank } from "./Caret";

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
      {last.length ? (
        <li onClick={() => setCount(count + 10)}>
          <CaretBlank />
          <More />
        </li>
      ) : null}
    </ul>
  );
};
ListProps.propTypes = {
  value: PropTypes.any
};
