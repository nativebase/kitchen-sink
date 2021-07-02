import React from 'react';
import { Column, Box } from 'native-base';

export const Example = () => {
  return (
    <Column mt={6} shadow={6}>
      <Box w={100} h={10} bg="red.50" />
      <Box w={100} h={10} bg="red.300" />
      <Box w={100} h={10} bg="rose.500" />
    </Column>
  );
};
