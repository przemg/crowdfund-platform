import * as React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './CardWrapper';
import CardContext from './CardContext';

const Card = ({
  id,
  radioName,
  handleToggle,
  checkedName,
  numberOfLeft,
  title,
  minPledge,
  description,
  actionButtonLabel,
  handleCardAction,
}) => {
  const isOutOfStock = numberOfLeft === 0;
  const isChecked = radioName && checkedName && radioName === checkedName;

  const cardContextValue = {
    id,
    radioName,
    handleToggle,
    checkedName,
    numberOfLeft,
    title,
    minPledge,
    description,
    actionButtonLabel,
    handleCardAction,
    isOutOfStock,
    isChecked,
  };

  return (
    <CardContext.Provider value={cardContextValue}>
      <CardWrapper />
    </CardContext.Provider>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actionButtonLabel: PropTypes.string.isRequired,
  handleToggle: PropTypes.func,
  checkedName: PropTypes.string,
  handleCardAction: PropTypes.func,
  radioName: PropTypes.string,
  minPledge: PropTypes.number,
  numberOfLeft: PropTypes.number,
};

Card.defaultProps = {
  minPledge: null,
  numberOfLeft: null,
  radioName: '',
  handleToggle: () => {},
  handleCardAction: () => {},
  checkedName: '',
};

export default Card;
