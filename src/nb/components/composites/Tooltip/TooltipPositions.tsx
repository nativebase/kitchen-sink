import React from 'react';
import { Tooltip, Button, VStack, HStack, Radio } from 'native-base';

export function Example() {
  const [position, setPosition] = React.useState('top left');
  return (
    <VStack space={6} alignSelf="flex-start" w="100%">
      <Tooltip label={position}>
        <Button alignSelf="center">ToolTip</Button>
      </Tooltip>

      <Radio.Group
        name="exampleGroup"
        mt={4}
        value={position}
        onChange={(nextValue) => setPosition(nextValue)}
      >
        <Radio
          value="top left"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Top Left
        </Radio>
        <Radio
          value="top"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Top
        </Radio>
        <Radio
          value="top right"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Top Right
        </Radio>
        <Radio
          value="right top"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Right Top
        </Radio>
        <Radio
          value="right"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Right
        </Radio>
        <Radio
          value="right bottom"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Right Bottom
        </Radio>
        <Radio
          value="bottom left"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Bottom Left
        </Radio>
        <Radio
          value="bottom"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Bottom
        </Radio>
        <Radio
          value="bottom right"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Bottom Right
        </Radio>
        <Radio
          value="left top"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Left Top
        </Radio>
        <Radio
          value="left"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Left
        </Radio>
        <Radio
          value="left bottom"
          colorScheme="green"
          mb={2}
          _text={{ fontWeight: 600 }}
        >
          Left Bottom
        </Radio>
      </Radio.Group>
    </VStack>
  );
}
