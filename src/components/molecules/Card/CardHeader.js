import * as React from 'react';
import Radio from 'components/atoms/Radio';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import styled from 'styled-components';
import { priceFormatter, numberFormatter } from 'helpers/numberFormatter';
import CardContext from './CardContext';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  cursor: pointer;
`;

const StyledParagraphPledge = styled(Paragraph)`
  margin-left: ${({ stick }) => (stick ? '16px' : 'auto')};
  color: ${({ theme }) => theme.color.cyan200};
`;

const StyledPledgeLeftWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-left: auto;
  grid-gap: 4px;
  align-items: center;
`;

export const DefaultCardHeader = () => {
  const { title, minPledge } = React.useContext(CardContext);

  return (
    <StyledHeader>
      <Heading level={3} size="s">
        {title}
      </Heading>
      {minPledge ? (
        <StyledParagraphPledge>Pledge {priceFormatter(minPledge)} or more</StyledParagraphPledge>
      ) : null}
    </StyledHeader>
  );
};

export const RadioCardHeader = () => {
  const { id, radioName, checkedName, handleToggle, isOutOfStock, minPledge, title, numberOfLeft } =
    React.useContext(CardContext);

  return (
    <>
      <Radio
        id={id}
        value={id}
        name={radioName}
        onChange={handleToggle}
        checked={checkedName === radioName}
        disabled={isOutOfStock}
      />
      <StyledHeader>
        <StyledHeading size="xs" as="label" htmlFor={id}>
          {title}
        </StyledHeading>
        {minPledge ? (
          <StyledParagraphPledge stick>
            Pledge {priceFormatter(minPledge)} or more
          </StyledParagraphPledge>
        ) : null}
        {isOutOfStock || numberOfLeft ? (
          <StyledPledgeLeftWrapper>
            <Heading as="strong" size="xs">
              {numberFormatter(numberOfLeft)}
            </Heading>
            <Paragraph>left</Paragraph>
          </StyledPledgeLeftWrapper>
        ) : null}
      </StyledHeader>
    </>
  );
};
