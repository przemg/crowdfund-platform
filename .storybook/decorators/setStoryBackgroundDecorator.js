import styled from 'styled-components';
import { mainTheme } from 'theme/mainTheme';

const avaiableBackgrounds = {
  white: mainTheme.color.white,
  gray: mainTheme.color.gray100,
  black: mainTheme.color.black,
};

const StyledBackgroundBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: ${({ currentBackground }) => currentBackground};
`;

/*
  Decorator to dynamic change story background. To use it you must set parameter
  'storyBackground' in a certain story. Sample 'storyBackground' object:

  storyBackground: {
    defaultValue: 'black',
    basedOnArg: 'color',
    values: [{ argValue: 'black', value: 'white' }],
  }
*/

const StoryBackgroundDecorator =
  () =>
  (Story, { args, parameters }) => {
    const { storyBackground = { defaultValue: null } } = parameters;
    const { defaultValue, basedOnArg, values = [] } = storyBackground;
    const basedOnArgValue = args[basedOnArg];

    if (!Array.isArray(values))
      throw new Error('Values in storyBackground object must be an array');

    const currentValue = values.reduce((current, { argValue, value }) => {
      if (argValue === basedOnArgValue) return value;

      return current;
    }, defaultValue);

    const currentBackground = avaiableBackgrounds[currentValue];

    return (
      <>
        {currentBackground ? (
          <StyledBackgroundBox currentBackground={currentBackground}>
            <Story />
          </StyledBackgroundBox>
        ) : (
          <Story />
        )}
      </>
    );
  };

export default StoryBackgroundDecorator;
