import Paragraph from 'components/atoms/Paragraph';
import * as React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading';
import CardContext from './CardContext';
import { DefaultCardFooter, RadioCardFooter } from './CardFooter';
import { DefaultCardHeader, RadioCardHeader } from './CardHeader';

const StyledParagraph = styled(Paragraph)`
  max-width: 100%;
`;

const StyledWrapper = styled.article`
  display: grid;
  grid-gap: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 8px;
  padding: 32px;

  ${({ radio }) =>
    radio &&
    css`
      grid-template-columns: 20px 1fr;

      & ${StyledParagraph} {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
      }
    `}

  ${({ isChecked }) =>
    isChecked &&
    css`
      border: 3px solid ${({ theme }) => theme.color.cyan200};
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      & ${Heading} {
        color: ${({ theme }) => theme.color.gray400};
      }

      & ${StyledParagraph} {
        color: ${({ theme }) => theme.color.gray300};
      }
    `}
`;

const CardWrapper = () => {
  const { radioName, description, isChecked, isOutOfStock } = React.useContext(CardContext);

  return (
    <StyledWrapper radio={!!radioName} isChecked={isChecked} isDisabled={isOutOfStock}>
      {radioName ? <RadioCardHeader /> : <DefaultCardHeader />}
      <StyledParagraph>{description}</StyledParagraph>
      {radioName ? <RadioCardFooter /> : <DefaultCardFooter />}
    </StyledWrapper>
  );
};

export default CardWrapper;
