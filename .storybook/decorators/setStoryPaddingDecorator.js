import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 24px;
`;

/*
  By default, padding will be added until you pass false value to the 
  storyPadding parameter.
*/

const StoryPaddingDecorator =
  () =>
  (Story, { parameters }) => {
    const { storyPadding = true } = parameters;

    if (typeof storyPadding !== 'boolean')
      throw new Error('You can only pass boolean data to storyPadding');

    return (
      <>
        {storyPadding ? (
          <StyledWrapper>
            <Story />
          </StyledWrapper>
        ) : (
          <Story />
        )}
      </>
    );
  };

export default StoryPaddingDecorator;
