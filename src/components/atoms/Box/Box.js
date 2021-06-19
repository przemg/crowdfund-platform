import styled, { css } from 'styled-components';

const Box = styled.div`
  position: relative;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 8px;

  ${({ brandLogo, brandColor }) =>
    brandLogo &&
    brandColor &&
    css`
      padding: 56px 40px 40px;

      ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: ${brandColor};
        background-image: url(${brandLogo});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    `}
`;

export default Box;
