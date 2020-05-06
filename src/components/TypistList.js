import React from "react";
import Typist from "react-typist";

export default function TypistList() {
  return (
    <>
      <Typist.Backspace count={12} delay={200} />
      <span> React </span>
    </>
  );
}
