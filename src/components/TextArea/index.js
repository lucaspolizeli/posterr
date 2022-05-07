import propTypes from "prop-types";
import React from "react";
import { CustomTextArea } from "./styles";

export function TextArea({ onChange, value, placeholder }) {
  return (
    <CustomTextArea
      maxLength={777}
      onKeyUp={onChange}
      defaultValue={value}
      placeholder={placeholder}
    />
  );
}

TextArea.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  placeholder: propTypes.string,
};
