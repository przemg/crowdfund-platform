import * as React from 'react';
import Box from 'components/atoms/Box';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const StyledBox = styled(Box)`
  padding: 0;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 48px;
  height: 200px;
  background-image: url(${({ photo }) => photo});
  background-color: ${({ theme }) => theme.color.gray200};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 64px -8px ${({ theme }) => theme.color.shadow};
  border-radius: 8px 8px 0 0;
`;

const StyledProjectLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ brandColor }) => brandColor};
  width: 64px;
  height: 64px;
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0 8px 32px -8px ${({ theme }) => theme.color.gray200};
`;

const StyledIMG = styled.img`
  width: 100%;
`;

const StyledWrapper = styled.div`
  padding: 32px;
`;

const StyledAction = styled.footer`
  margin-top: 32px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 16px;
`;

const ProjectCard = ({ brandLogo: BrandLogo, brandColor, photo, title, about, action }) => (
  <StyledBox as="article">
    <StyledHeader photo={photo}>
      <StyledProjectLogo brandColor={brandColor}>
        <StyledIMG src={BrandLogo} alt={title} />
      </StyledProjectLogo>
    </StyledHeader>
    <StyledWrapper>
      <StyledHeading level={3}>{title}</StyledHeading>
      <Paragraph>{about.slice(0, 147).padEnd(150, '.')}</Paragraph>
      <StyledAction>{action}</StyledAction>
    </StyledWrapper>
  </StyledBox>
);

ProjectCard.propTypes = {
  brandLogo: PropTypes.string.isRequired,
  brandColor: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  action: PropTypes.node.isRequired,
};

export default ProjectCard;
