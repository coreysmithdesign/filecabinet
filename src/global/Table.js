import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "./globals";

export const Table = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TableHeader = styled.div`
  display: none;
  padding: 1rem;
  position: sticky;
  top: 0px;
  font-weight: bold;
  font-size: 0.875rem;
  border-bottom: 1px solid #e1e1e8;
  @media (min-width: 600px) {
    padding: 0;
    display: table;
    table-layout: fixed;
    width: 100%;
  }
`;

export const TableRow = styled.p`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  &&:nth-of-type(odd) {
    background-color: #ebebf1;
  }
  @media (min-width: 600px) {
    padding: 0;
    flex-direction: inherit;
    display: table;
    table-layout: fixed;
    width: 100%;
  }
`;

export const TableRowLink = styled(Link)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${color.text};
  border-bottom: 1px solid #e1e1e8;
  &&:hover {
    text-decoration: none;
    background-color: rgba(41, 49, 59, 0.2);
  }
  :visited {
    text-decoration: none;
    color: ${color.text};
  }
  &&:nth-of-type(odd) {
    background-color: #ebebf1;
  }
  &&:nth-of-type(odd):hover {
    text-decoration: none;
    background-color: rgba(41, 49, 59, 0.2);
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
