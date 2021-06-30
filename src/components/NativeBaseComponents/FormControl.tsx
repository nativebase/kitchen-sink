import React from 'react';
import { Input, VStack, Box } from 'native-base';

export const Example = () => {
  return (
    <VStack
      justifyContent="center"
      w="80%"
      p={3}
      _light={{
        bg: 'lightBlue.400',
      }}
      _dark={{
        bg: 'lightBlue.500',
      }}
    >
      <Box
        _light={{
          bg: 'cyan.300',
        }}
        _dark={{
          bg: 'cyan.200',
        }}
        h="8px"
        rounded="pill"
        mx={4}
        w="40%"
        mb={2}
      />
      <Box
        _light={{
          bg: 'cyan.300',
        }}
        _dark={{
          bg: 'cyan.200',
        }}
        h="16px"
        rounded="pill"
        mx={4}
        w="40%"
        mb={1}
      />
      <Box
        _light={{
          bg: 'red.300',
        }}
        _dark={{
          bg: 'red.200',
        }}
        h="4px"
        rounded="pill"
        mx={5}
        w="37%"
        mb={4}
      />
      <Box
        _light={{
          bg: 'cyan.500',
        }}
        _dark={{
          bg: 'cyan.400',
        }}
        h="16px"
        rounded="pill"
         w="27%"
         mx={4}
      />
    </VStack>
  );
};
