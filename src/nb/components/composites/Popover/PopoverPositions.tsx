import React, { useState } from 'react';
import { Popover, Button, VStack, Stack, Radio } from 'native-base';

export function Example() {
  const [position, setPosition] = useState('top left');
  return (
    <VStack space={6} alignSelf="flex-start" w="100%">
      <Popover
        placement={position == 'auto' ? undefined : position}
        trigger={(triggerProps) => {
          return (
            <Button alignSelf="center" {...triggerProps}>
              Trigger
            </Button>
          );
        }}
      >
        <Popover.Content>
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Data Saved</Popover.Header>
          <Popover.Body>Your changes has been saved.</Popover.Body>
        </Popover.Content>
      </Popover>
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

      {/*  */}
      {/* <Popover
        trigger={(triggerProps) => {
          return <Button {...triggerProps}>Auto</Button>;
        }}
      >
        <Popover.Content>
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Data Saved</Popover.Header>
          <Popover.Body>Your changes has been saved.</Popover.Body>
        </Popover.Content>
      </Popover>

      <Stack direction={{ base: 'column', md: 'row' }} space={2}>
        <Popover
          placement="top left"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Top Left</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="top"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Top</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="top right"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Top right</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} space={2}>
        <Popover
          placement="right top"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Right top</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="right"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Right</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="right bottom"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Right bottom</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} space={2}>
        <Popover
          placement="bottom left"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Bottom left</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="bottom"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Bottom</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="bottom right"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Bottom right</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} space={2}>
        <Popover
          placement="left top"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Left top</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
        <Popover
          placement="left"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Left</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="left bottom"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Left bottom</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
      </Stack> */}
    </VStack>
  );
}
