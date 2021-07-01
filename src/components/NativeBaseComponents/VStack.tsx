import React from 'react';
import { Column, Box } from 'native-base';

export const Example = () => {
  return (
    <Column mt={3} shadow={6}>
      <Box w={100} h={10} bg="tomato" />
      <Box w={100} h={10} bg="red.300" />
      <Box w={100} h={10} bg="rose.500" />
    </Column>
  );
};
