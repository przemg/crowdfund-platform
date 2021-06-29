import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.h1.attrs(({ level, size: sizeProps }) => {
  const { length, ...sizesSortedByLevel } = ['xl', 'l', 'm', 's', 'xs', 'xs'];
  const size = sizeProps || sizesSortedByLevel[level - 1];

  return {
    as: `h${level}`,
    size: size.toUpperCase(),
  };
})`
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.black};
  line-height: 1.8;
  margin: 0;
  max-width: 60ch;
  font-size: ${({ size, theme }) => theme.font[`heading${size}`]};
`;

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
