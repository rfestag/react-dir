import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Dir } from "./components/Dir";
import { DirContext, DirDefaultStyle } from "./utils/common";

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
