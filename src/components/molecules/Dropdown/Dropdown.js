import * as React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import changeListItemFocus from 'helpers/changeListItemFocus';

const StyledWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const StyledList = styled.ul`
  display: grid;
  position: absolute;
  left: 0;
  grid-gap: 8px;
  width: fit-content;
  min-width: 200px;
  list-style: none;
  padding: 4px;
  border-radius: 8px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 8px 32px -8px ${({ theme }) => theme.color.gray200};
  transform: scaleY(0) translateY(-10%);
  transform-origin: top;
  opacity: 0;
  transition: transform 0.3s ease-in, opacity 0.15s ease-in;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      transform: scaleY(1) translateY(0);
      opacity: 1;
    `}
`;

const StyledListItem = styled(Link)`
  display: flex;
  width: 100%;
  padding: 16px;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.bodyTextS};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.gray400};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;

const DropdownContext = React.createContext();

const useDropdown = () => React.useContext(DropdownContext);

const Dropdown = ({ children }) => {
  const [expanded, setExpanded] = React.useState(false);
  const dropdownRef = React.useRef();

  React.useEffect(() => {
    // Listen to events only when it is necessary - when the dropdown is expanded
    if (!expanded) {
      return null;
    }

    const itemsList = [...dropdownRef.current.querySelectorAll(StyledListItem)];

    const handleKeyboardEvents = (e) => {
      if (e.key === 'Escape') setExpanded(false);
      if (e.key === 'ArrowDown') changeListItemFocus(itemsList).next();
      if (e.key === 'ArrowUp') changeListItemFocus(itemsList).prev();
    };

    const handleCloseByClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setExpanded(false);
      }
    };

    window.addEventListener('click', handleCloseByClickOutside);
    window.addEventListener('keyup', handleKeyboardEvents);

    return () => {
      window.removeEventListener('keyup', handleKeyboardEvents);
      window.removeEventListener('click', handleCloseByClickOutside);
    };
  }, [expanded]);

  const toggle = () => setExpanded(!expanded);

  return (
    <DropdownContext.Provider value={{ expanded, toggle }}>
      <StyledWrapper ref={dropdownRef}>{children}</StyledWrapper>
    </DropdownContext.Provider>
  );
};

const DropdownButton = ({ children }) => {
  const { toggle } = useDropdown();

  return <Button onClick={toggle}>{children}</Button>;
};

const DropdownList = ({ children }) => {
  const { expanded } = useDropdown();

  return (
    <StyledList isExpanded={expanded} ariaExpanded="false">
      {children}
    </StyledList>
  );
};

const DropdownItem = ({ type, to, children, onClick }) => (
  <li>
    {type === 'button' ? (
      <StyledListItem tabIndex="0" as="button" type="button" onClick={onClick}>
        {children}
      </StyledListItem>
    ) : (
      <StyledListItem tabIndex="0" to={to}>
        {children}
      </StyledListItem>
    )}
  </li>
);

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

DropdownButton.propTypes = {
  children: PropTypes.string.isRequired,
};

DropdownList.propTypes = {
  children: PropTypes.node.isRequired,
};

DropdownItem.propTypes = {
  type: PropTypes.oneOf(['button', 'link']).isRequired,
  to: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  to: '',
  onClick: () => {},
};

Dropdown.Button = DropdownButton;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

export default Dropdown;
