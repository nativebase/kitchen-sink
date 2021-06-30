import React from 'react';
import { ScrollView, VStack, Center, Box } from 'native-base';
export const Example = () => {
  return (
    <Box
      _light={{
        bg: 'pink.100',
      }}
      _dark={{
        bg: 'pink.200',
      }}
      h={16}
      w={100}
    >
      <Box position="absolute" w={1} h="100%" right={0} bg="gray.500">
        <Box
          position="absolute"
          w={1}
          h={6}
          right={0}
          top={2}
          bg="gray.200"
          borderRadius={4}
        ></Box>
      </Box>
    </Box>
  );
};
