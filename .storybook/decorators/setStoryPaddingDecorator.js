import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
`;

/*
  Decorator to dynamic set story padding. To use it you must set parameter
  'storyPadding' in a certain story. By default, padding will be added until 
  you pass true value to the disable key in storyPadding object.
  Sample 'storyPadding' objects:

  Example 1:
  storyPadding: {
    customPadding: {
      paddingTop: '32px',
      paddingLeft: '0px',
    }
  }

  Example 2:
  storyPadding: {
    disable: true
  }
*/

const StoryPaddingDecorator =
  () =>
  (Story, { parameters }) => {
    const { storyPadding = {} } = parameters;
    const { disable = false, customPadding = {} } = storyPadding;
    const {
      paddingTop = '24px',
      paddingBottom = '24px',
      paddingLeft = '24px',
      paddingRight = '24px',
    } = customPadding;

    if (typeof storyPadding !== 'object')
      throw new Error('You can only pass object as storyPadding value');

    if (typeof disable !== 'boolean')
      throw new Error('You can only pass boolean data to disable key in storyPadding object');

    if (
      typeof paddingTop !== 'string' ||
      typeof paddingBottom !== 'string' ||
      typeof paddingLeft !== 'string' ||
      typeof paddingRight !== 'string'
    )
      throw new Error(
        'You can only pass string data to keys: paddingTop, paddingBottom, paddingLeft, paddingRight in storyPadding.customPadding object',
      );

    return (
      <>
        {!disable ? (
          <StyledWrapper
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
          >
            <Story />
          </StyledWrapper>
        ) : (
          <Story />
        )}
      </>
    );
  };

export default StoryPaddingDecorator;
