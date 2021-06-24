//@ts-nocheck
import React from 'react';
import { Stack, Center, Heading, Button } from 'native-base';

export function Example() {
  const [direction, setDirection] = React.useState('column');
  return (
    
      <Stack direction={direction} space={3} mb={3} alignItems="center">
        <Center
          size={16}
          bg="primary.400"
          rounded="md"
          _text={{ color: 'white' }}
          shadow={3}
        >
          Box 1
        </Center>
        <Center
          bg="secondary.400"
          size={16}
          rounded="md"
          _text={{ color: 'white' }}
          shadow={3}
        >
          Box 2
        </Center>
      </Stack>
     
  );
}
