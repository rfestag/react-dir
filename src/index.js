import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Dir as DirChild } from "./components/Dir";
import { DirContext, DirDefaultStyle } from "./utils/common";

const Dir = ({ value }) => {
  const { color, fontSize, fontFamily } = useContext(DirContext);
  return (
    <div style={{ fontFamily, fontSize, color }}>
      <DirChild value={value} />
    </div>
  );
};
Dir.propTypes = {
  value: PropTypes.any
};

export { Dir, DirContext, DirDefaultStyle };
