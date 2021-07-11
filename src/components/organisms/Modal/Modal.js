import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseModalIcon from 'assets/icons/icon-close-modal.svg';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  padding: 48px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
  max-width: 50vw;
  padding: 48px;
  border-radius: 8px;
  box-shadow: 4px 4px 48px -12px rgba(0, 0, 0, 0.24);
  background-color: ${({ theme }) => theme.color.white};
`;

const StyledButton = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  padding: 10px;
  margin: 0 -16px 0 auto;
  background-image: url(${CloseModalIcon});
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: center;
  background-color: transparent;
  opacity: 0.4;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 8px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;
`;

const Modal = ({ isOpen, setIsOpen, hasCloseButton, title, description, children }) =>
  isOpen ? (
    <StyledWrapper>
      <StyledModal>
        {hasCloseButton ? <StyledButton onClick={() => setIsOpen(false)} /> : null}
        {title ? (
          <StyledHeading level={2} size="s">
            {title}
          </StyledHeading>
        ) : null}
        {description ? <StyledParagraph>{description}</StyledParagraph> : null}
        {children}
      </StyledModal>
    </StyledWrapper>
  ) : null;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  hasCloseButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  hasCloseButton: true,
  title: '',
  description: '',
};

export default Modal;
