import { useColorMode, Row, Column, Pressable } from 'native-base';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import { StoryBook } from '../StoryBook';

export const MasonWeb = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { width, height } = Dimensions.get('window');

  return (
    <Row
      space={6}
      m={4}
      alignSelf={width > 1152 ? 'center' : 'strech'}
      width={width > 1152 ? 1152 : 'auto'}
    >
      <Column flex={1} space={6}>
        <StoryBook
          navigation={navigation}
          name="Alert"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Box"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="CheckBox"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Fab"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="Flex"
          colors={['blue.400', 'purple.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Image"
          colors={['fuchsia.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Menu"
          colors={['rose.500', 'amber.500']}
        />
        <StoryBook
          navigation={navigation}
          name="Popover"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Slider"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Tabs"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="TextArea"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="ZStack"
          colors={['blue.400', 'purple.400']}
        />
      </Column>

      <Column flex={1} space={6}>
        <StoryBook
          navigation={navigation}
          name="Avatar"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="Button"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Column"
          colors={['fuchsia.400', 'pink.600']}
        />
        <StoryBook
          navigation={navigation}
          name="HStack"
          colors={['rose.500', 'amber.500']}
        />
        <StoryBook
          navigation={navigation}
          name="Icon"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Link"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Progress"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Radio"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="Spinner"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Text"
          colors={['fuchsia.400', 'pink.600']}
        />
        <StoryBook
          navigation={navigation}
          name="Transitions"
          colors={['rose.500', 'amber.500']}
        />
      </Column>

      <Column flex={1} space={6}>
        <StoryBook
          navigation={navigation}
          name="Badge"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Center"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Divider"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Heading"
          colors={['green.700', 'lime.200']}
        />
        <StoryBook
          navigation={navigation}
          name="IconButton"
          colors={['blue.400', 'purple.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Input"
          colors={['fuchsia.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Modal"
          colors={['rose.500', 'amber.500']}
        />
        <StoryBook
          navigation={navigation}
          name="Select"
          colors={['cyan.500', 'emerald.300']}
        />
        <StoryBook
          navigation={navigation}
          name="Switch"
          colors={['red.400', 'amber.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Toast"
          colors={['blue.400', 'pink.400']}
        />
        <StoryBook
          navigation={navigation}
          name="Tooltip"
          colors={['green.700', 'lime.200']}
        />
      </Column>
    </Row>
  );
};
