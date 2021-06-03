import React from 'react';
import {
  Menu,
  Button,
  VStack,
  Radio,
  Select,
  CheckIcon,
  Text,
  useBreakpointValue,
} from 'native-base';

export function Example() {
  const [shouldOverlapWithTrigger, setShouldOverlapWithTrigger] =
    React.useState(false);
  const isTabletScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
  });
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

      {isTabletScreen ? (
        <Select
          selectedValue={position}
          mx="auto"
          accessibilityLabel="Select your favorite programming language"
          placeholder="Select your favorite programming language"
          onValueChange={(nextValue) => setPosition(nextValue)}
          _selectedItem={{
            bg: 'cyan.600',
            endIcon: <CheckIcon size={4} />,
          }}
        >
          <Select.Item label="auto" value="auto" />
          <Select.Item label="Top Left" value="top left" />
          <Select.Item label="Top" value="top" />
          <Select.Item label="Top Right" value="top right" />
          <Select.Item label="Right Top" value="right top" />
          <Select.Item label="Right" value="right" />
          <Select.Item label="Right Bottom" value="right bottom" />
          <Select.Item label="Bottom Left" value="bottom left" />
          <Select.Item label="Bottom" value="bottom" />
          <Select.Item label="Bottom Right" value="bottom right" />
          <Select.Item label="Left Top" value="left top" />
          <Select.Item label="Left" value="left" />
          <Select.Item label="Left Bottom" value="left bottom" />
        </Select>
      ) : (
        <Radio.Group
          name="exampleGroup"
          mt={4}
          value={position}
          onChange={(nextValue) => setPosition(nextValue)}
        >
          <Radio
            value="auto"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Auto
          </Radio>
          <Radio
            value="top left"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Top Left
          </Radio>
          <Radio
            value="top"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Top
          </Radio>
          <Radio
            value="top right"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Top Right
          </Radio>
          <Radio
            value="right top"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Right Top
          </Radio>
          <Radio
            value="right"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Right
          </Radio>
          <Radio
            value="right bottom"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Right Bottom
          </Radio>
          <Radio
            value="bottom left"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Bottom Left
          </Radio>
          <Radio
            value="bottom"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Bottom
          </Radio>
          <Radio
            value="bottom right"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Bottom Right
          </Radio>
          <Radio
            value="left top"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Left Top
          </Radio>
          <Radio
            value="left"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Left
          </Radio>
          <Radio
            value="left bottom"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Left Bottom
          </Radio>
        </Radio.Group>
      )}
    </VStack>
  );
}
