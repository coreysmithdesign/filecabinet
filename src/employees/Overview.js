import React from "react";
import styled from "styled-components";
import { icon } from "../global/Interface";
import {
  Card,
  CardTitle,
  CardLabel,
  CardList,
  CardListItem,
  CardInfo,
} from "../global/Card";

const Verify = styled.span`
  display: inline-block;
  width: 1rem;
`;

export default function Overview() {
  return (
    <>
      <Card>
        <CardTitle>Employment Seasonal</CardTitle>
        <CardLabel>Required</CardLabel>
        <CardList>
          <CardListItem>
            <Verify>{icon.check}</Verify> ECO (Employee Coding Options)
          </CardListItem>
          <CardListItem>
            <Verify>{icon.check}</Verify> W-4 Income Tax Withholding
          </CardListItem>
          <CardListItem>
            <Verify>{icon.times}</Verify> I-9 Employment Eligibility
          </CardListItem>
        </CardList>
        <CardLabel>Recommended</CardLabel>
        <CardList>
          <CardListItem>
            <Verify>{icon.times}</Verify> Direct Deposit
          </CardListItem>
        </CardList>
      </Card>
      <Card>
        <CardTitle>Position</CardTitle>
        <CardLabel>Title</CardLabel>
        <CardInfo>Outside Plan Technician</CardInfo>
      </Card>
      <Card>
        <CardTitle>Contact</CardTitle>
        <CardLabel>Phone</CardLabel>
        <CardInfo>208-555-5555</CardInfo>
        <CardLabel>Email</CardLabel>
        <CardInfo>roger4537@gmail.com</CardInfo>
        <CardLabel>Address</CardLabel>
        <CardInfo>555 5th Street, Coeur d'Alene, ID 83841</CardInfo>
      </Card>
    </>
  );
}
