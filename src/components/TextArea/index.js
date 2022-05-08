import React from "react";
import { CharactersRemainingText, CustomTextArea } from "./styles";

export function TextArea({ onChange, value }) {
  return (
    <>
      <CustomTextArea maxLength={777} onKeyUp={onChange} defaultValue={value} />
      <CharactersRemainingText>{value.length}/777</CharactersRemainingText>
    </>
  );
}
