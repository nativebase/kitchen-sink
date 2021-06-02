import React from 'react';
import { Badge, HStack, Box } from 'native-base';

export function Example() {
  return (
    <HStack
      space={2}
      mx={{ base: 'auto', md: 0 }}
      // flex={1} flexWrap="wrap"
      flexShrink={1}
    >
      {/* <Box> */}
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="info">INFO</Badge>
      <Badge colorScheme="dark">DARK</Badge>
      {/* </Box> */}
    </HStack>
  );
}
