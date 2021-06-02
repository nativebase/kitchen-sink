import React from 'react';
import { ZStack, Box } from 'native-base';

export const Example = () => {
  return (
    <Box h="40" mx="auto">
      <ZStack mt={10} ml={-10}>
        <Box bg="primary.400" ml={-5} size={20} rounded="lg" shadow={3} />
        <Box bg="gray.400" mt={5} ml={0} size={20} rounded="lg" shadow={5} />
        <Box
          bg="emerald.400"
          mt={10}
          ml={5}
          size={20}
          rounded="lg"
          shadow={7}
        />
      </ZStack>
    </Box>
  );
};
