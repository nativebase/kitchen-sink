import React from 'react';
import { Pressable, Text, Box } from 'native-base';

export function Example() {
  return (
    <Pressable
      p={2}
      borderRadius={6}
      _light={{
        bg: 'green.500',
      }}
      _dark={{
        bg: 'green.200',
      }}
      w={{ base:'80%', lg:'60%'}}
      h={10}
    ></Pressable>
  );
}
