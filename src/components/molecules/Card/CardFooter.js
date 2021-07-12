import * as React from 'react';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import styled, { css } from 'styled-components';
import { numberFormatter, priceFormatter } from 'helpers/numberFormatter';
import Button from 'components/atoms/Button';
import { useForm } from 'react-hook-form';
import InputField from 'components/molecules/InputField';
import CardContext from './CardContext';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ radio }) =>
    radio &&
    css`
      border-top: 1px solid ${({ theme }) => theme.color.gray200};
      padding: 32px 32px 0;
      margin: 16px -32px 0;
      grid-column: 1 / 3;
    `}
`;

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 16px;
`;

const StyledPledgeLeftWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 8px;
  align-items: center;
`;

export const DefaultCardFooter = () => {
  const { isOutOfStock, numberOfLeft, actionButtonLabel, handleCardAction } =
    React.useContext(CardContext);

  return (
    <StyledFooter>
      {isOutOfStock || numberOfLeft ? (
        <StyledPledgeLeftWrapper>
          <Heading as="strong" size="xl">
            {numberFormatter(numberOfLeft)}
          </Heading>
          <Paragraph>left</Paragraph>
        </StyledPledgeLeftWrapper>
      ) : null}
      <Button disabled={isOutOfStock} onClick={handleCardAction}>
        {isOutOfStock ? 'Out of stock' : actionButtonLabel}
      </Button>
    </StyledFooter>
  );
};

export const RadioCardFooter = () => {
  const { isChecked, actionButtonLabel, minPledge, handleCardAction } =
    React.useContext(CardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return isChecked ? (
    <StyledFooter radio>
      <StyledForm onSubmit={handleSubmit(handleCardAction)}>
        <InputField
          singleColumn
          priceLeadingIcon
          id="pledge"
          type="number"
          label="Enter your pledge"
          inputWidth={120}
          error={errors.pledge?.message}
          defaultValue={minPledge || 1}
          {...register('pledge', {
            required: { value: true, message: 'Pledge is required' },
            min: {
              value: minPledge || 1,
              message: `Pledge must be greater or equal ${priceFormatter(minPledge)}`,
            },
            valueAsNumber: true,
          })}
        />

        <Button type="submit">{actionButtonLabel}</Button>
      </StyledForm>
    </StyledFooter>
  ) : null;
};
