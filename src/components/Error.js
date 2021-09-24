import React from "react";
import PropTypes from "prop-types";
const Error = ({ title, styleClass }) => {
  let classes = `red darken-4 ${styleClass}`;
  return <p className={classes}>{title}</p>;
};
Error.propTypes = {
  title: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
};
export default Error;
