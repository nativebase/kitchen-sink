import React from 'react';
import { Column, Box } from 'native-base';

export const Example = () => {
  return (
    <Column h="10">
      <Box w="100" h={'5'} flexGrow={1} bg="orange.100" />
      <Box bg="orange.400" h={'5'} flexGrow={2} w="100" />
      <Box flexGrow={1} w="100" h={'5'} bg="orange.500" />
    </Column>
  );
};
