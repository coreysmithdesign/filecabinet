import React from "react";
import styled from "styled-components";

const TableGroup = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TableHeader = styled.li`
  display: none;
  padding: 1rem;
  position: sticky;
  top: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #636363;
  font-weight: bold;
  @media (min-width: 600px) {
    padding: 0;
    display: table;
    table-layout: fixed;
    width: 100%;
  }
`;

export const TableRow = styled.li`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  &&:nth-of-type(odd) {
    background-color: #504f4f;
  }
  @media (min-width: 600px) {
    padding: 0;
    flex-direction: inherit;
    display: table;
    table-layout: fixed;
    width: 100%;
  }
`;

export const TableCell = styled.span`
  @media (min-width: 600px) {
    display: table-cell;
    padding: 0.5rem 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default function Table(props) {
  return <TableGroup>{props.children}</TableGroup>;
}
