import React from "react";
import styled from "styled-components";

const CardGroup = styled.div`
  border: 1px solid #555;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.1);
  margin: 1rem;
`;

export default function Card(props) {
  return <CardGroup>{props.children}</CardGroup>;
}
