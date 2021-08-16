import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import GenericTemplate from './GenericTemplate';

const StyledWrapper = styled.main`
  max-width: 1024px;
  margin: 40px auto 80px;
`;

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

const DashboardTemplate = ({ children }) => (
  <GenericTemplate>
    <StyledWrapper>{children}</StyledWrapper>
  </GenericTemplate>
);

const DashboardTemplateHeading = ({ children }) => <Heading level={1}>{children}</Heading>;

const DashboardTemplateSection = ({ title, children, action }) => (
  <StyledSection>
    <StyledSectionHeader>
      <StyledHeading level={2}>{title}</StyledHeading>
      <Button as={Link} to={action.to} $secondary>
        {action.label}
      </Button>
    </StyledSectionHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </StyledSection>
);

DashboardTemplateHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

DashboardTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

DashboardTemplateSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.shape({
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

DashboardTemplate.Heading = DashboardTemplateHeading;
DashboardTemplate.Section = DashboardTemplateSection;

export default DashboardTemplate;
