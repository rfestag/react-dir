import React, { useState } from "react";
import PropTypes from "prop-types";

export const Collapsible = ({ name, value, Open, Closed }) => {
  const [open, setOpen] = useState(false);
  return open ? (
    <Open onClick={() => setOpen(false)} name={name} value={value} />
  ) : (
    <Closed onClick={() => setOpen(true)} name={name} value={value} />
  );
};
Collapsible.propTypes = {
  Open: PropTypes.any,
  Closed: PropTypes.any,
  name: PropTypes.string,
  value: PropTypes.any
};
