import * as React from 'react';
import GenericTemplate from 'templates/GenericTemplate';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import Card from 'components/molecules/Card';
import styled from 'styled-components';
import { useAuth } from 'context/AuthContext';

const StyledSection = styled.section`
  display: grid;
  grid-template-rows: repeat(2, fit-content);
  grid-gap: 24px;
  margin-bottom: 32px;

  &:first-of-type {
    margin-top: 40px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledSectionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.gray400};
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const DashboardView = () => {
  const { account } = useAuth();

  return (
    <GenericTemplate>
      <Heading level={1}>
        Welcome {`${account.name}! `}
        <span role="img" aria-label="Waving hand icon">
          👋
        </span>
      </Heading>
      <StyledSection>
        <StyledSectionHeader>
          <StyledHeading level={2}>Your leatest projects</StyledHeading>
          <Button secondary>See all your projects</Button>
        </StyledSectionHeader>
        <StyledGridWrapper>
          <Card
            id="default-card"
            title="Title of default card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
            actionButtonLabel="Default action"
          />
          <Card
            id="default-card"
            title="Title of default card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
            actionButtonLabel="Default action"
          />
          <Card
            id="default-card"
            title="Title of default card"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, odio sed tincidunt sollicitudin, felis metus sagittis mi, vitae tristique ex ligula ut risus. Phasellus nec faucibus turpis."
            actionButtonLabel="Default action"
          />
        </StyledGridWrapper>
      </StyledSection>
    </GenericTemplate>
  );
};

export default DashboardView;
