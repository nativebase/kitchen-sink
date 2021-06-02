import React from 'react';
import { Center } from 'native-base';
export function Example() {
  return (
    <Center
      mt={3}
      shadow={6}
      bg="green.800"
      _text={{ color: 'white', fontWeight: 'bold' }}
      height={100}
      // width={100}
      px={2}
    >
      Text Center
    </Center>
  );
}
