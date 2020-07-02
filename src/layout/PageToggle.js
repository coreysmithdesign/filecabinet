import React, { useState } from "react";
import styled from "styled-components";
import { icon } from "../global/globals";

export default function PageToggle(props) {
  const [open, setOpen] = useState(false);
  console.log("this toggle", open);

  return (
    <>
      <ToggleForm onClick={() => setOpen(!open)}>{icon.form}</ToggleForm>
    </>
  );
}

const ToggleForm = styled.button`
  all: unset;
  position: absolute;
  bottom: 80px;
  left: 10px;
  background: white;
  border-radius: 100%;
  padding: 1rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
`;
