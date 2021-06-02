import React from 'react';
import {
  Menu,
  Button,
  VStack,
  HStack,
  Checkbox,
  Radio,
  Pressable,
  HamburgerIcon,
} from 'native-base';

export function Example() {
  const [shouldOverlapWithTrigger, setShouldOverlapWithTrigger] =
    React.useState(false);
  const [position, setPosition] = React.useState('auto');
  return (
    <VStack space={6} alignSelf="flex-start" w="100%">
      <Menu
        shouldOverlapWithTrigger={shouldOverlapWithTrigger}
        placement={position == 'auto' ? undefined : position}
        trigger={(triggerProps) => {
          return (
            <Button alignSelf="center" variant="solid" {...triggerProps}>
              Menu
            </Button>
          );
        }}
      >
        <Menu.Item>Large Menu item 1</Menu.Item>
        <Menu.Item>Large Menu item 2</Menu.Item>
        <Menu.Item>Large Menu item 3</Menu.Item>
      </Menu>

      <Radio.Group
        name="exampleGroup"
        mt={4}
        value={position}
        onChange={(nextValue) => setPosition(nextValue)}
      >
        <Radio
          value="auto"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Auto
        </Radio>
        <Radio
          value="top left"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Top Left
        </Radio>
        <Radio
          value="top"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Top
        </Radio>
        <Radio
          value="top right"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Top Right
        </Radio>
        <Radio
          value="right top"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Right Top
        </Radio>
        <Radio
          value="right"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Right
        </Radio>
        <Radio
          value="right bottom"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Right Bottom
        </Radio>
        <Radio
          value="bottom left"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Bottom Left
        </Radio>
        <Radio
          value="bottom"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Bottom
        </Radio>
        <Radio
          value="bottom right"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Bottom Right
        </Radio>
        <Radio
          value="left top"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Left Top
        </Radio>
        <Radio
          value="left"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Left
        </Radio>
        <Radio
          value="left bottom"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 700 }}
        >
          Left Bottom
        </Radio>
      </Radio.Group>
    </VStack>
  );
}
