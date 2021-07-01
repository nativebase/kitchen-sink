//@ts-nocheck
import React from 'react';
import { Stack, Box } from 'native-base';
import { VStack } from '../../nb/NativeBase/src';

export function Example() {
  const [direction, setDirection] = React.useState('column');
  return (
    <Box>
      <Stack direction="row" mt={3} shadow={6}>
        <Box w={100} h={3} bg="tomato" />
        <Box w={100} h={3} bg="red.300" />
        <Box w={100} h={3} bg="purple.500" />
      </Stack>
      <Stack direction="column" mt={3} shadow={6} w={100} alignSelf="center">
        <Box w={100} h={3} bg="tomato" />
        <Box w={100} h={3} bg="red.300" />
        <Box w={100} h={3} bg="purple.500" />
      </Stack>
    </Box>
  );
}
