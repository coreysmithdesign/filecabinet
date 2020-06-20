import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #e7e7e7;
  background-color: #fbfbfb;
  padding: 1rem;
  border-radius: 3px;
  margin: 1rem;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const CardLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.7;
  margin: 1rem 0 0.5rem;
`;

export const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardListItem = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  margin: 0.5rem 0;
`;

export const CardInfo = styled.p`
  margin: 0;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
