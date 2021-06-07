import { useColorMode, Row, Column } from 'native-base';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { mapping } from '../../config/map';
import { StoryBook } from '../StoryBook';

export const MasonMobile = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Row space={4} m={4}>
      <Column flex={1} space={4}>
        <StoryBook
          navigation={navigation}
          name="Alert"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Badge"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Button"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="CheckBox"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="Divider"
          colors={['blue.400', 'purple.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Flex"
          colors={['fuchsia.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="HStack"
          colors={['rose.500', 'amber.500']}
        />
        <StoryBook
          navigation={navigation}
          name="IconButton"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Input"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Link"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Modal"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="Progress"
          colors={['blue.400', 'purple.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Select"
          colors={['fuchsia.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Spinner"
          colors={['rose.500', 'amber.500']}
        />
        <StoryBook
          navigation={navigation}
          name="Tabs"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Toast"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Transitions"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="ZStack"
          colors={['green.700', 'lime.200']}
        />
      </Column>
      <Column flex={1} space={4}>
        <StoryBook
          navigation={navigation}
          name="Avatar"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="Box"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Center"
          colors={['fuchsia.400', 'pink.600']}
        />
        <StoryBook
          navigation={navigation}
          name="Column"
          colors={['rose.500', 'amber.500']}
        />
        <StoryBook
          navigation={navigation}
          name="Fab"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Heading"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Icon"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Image"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="Menu"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Popover"
          colors={['fuchsia.400', 'pink.600']}
        />
        <StoryBook
          navigation={navigation}
          name="Radio"
          colors={['rose.500', 'amber.500']}
        />
        <StoryBook
          navigation={navigation}
          name="Slider"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Switch"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Text"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="TextArea"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="Tooltip"
          colors={['blue.400', 'pink.400']}
        />
      </Column>
    </Row>
  );
};
