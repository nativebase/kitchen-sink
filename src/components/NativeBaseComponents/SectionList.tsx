import React from 'react';
import { Box, VStack } from 'native-base';

export const Example = () => {
  const data = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <Box
      mt={3}
      _light={{
        bg: 'violet.400',
      }}
      _dark={{
        bg: 'violet.800',
      }}
      h={32}
      w="70%"
    >
      <Box position="absolute" w={2} h="100%" right={0} bg="gray.500">
        <Box position="absolute" w={2} h={6} right={0} top={2} bg="gray.300" borderRadius={4}/>
      </Box>
      <VStack space={2} alignItems="flex-end" m={2} mr={2}>
        <Box
          w="80%"
          _light={{
            bg: 'gray.600',
          }}
          _dark={{
            bg: 'gray.100',
          }}
          h={2}
        />
        <Box
          w="50%"
          _light={{
            bg: 'gray.600',
          }}
          _dark={{
            bg: 'gray.100',
          }}
          h={1}
        />
        <Box
          w="50%"
          _light={{
            bg: 'gray.600',
          }}
          _dark={{
            bg: 'gray.100',
          }}
          h={1}
        />
        <Box
          w="50%"
          _light={{
            bg: 'gray.600',
          }}
          _dark={{
            bg: 'gray.100',
          }}
          h={1}
        />
        <Box
          w="80%"
          _light={{
            bg: 'gray.600',
          }}
          _dark={{
            bg: 'gray.100',
          }}
          h={2}
          mt={1}
        />
        <Box
          w="50%"
          _light={{
            bg: 'gray.600',
          }}
          _dark={{
            bg: 'gray.100',
          }}
          h={1}
        />
        <Box
          w="50%"
          _light={{
            bg: 'gray.600',
          }}
          _dark={{
            bg: 'gray.100',
          }}
          h={1}
        />
        <Box
          w="50%"
          _light={{
            bg: 'gray.600',
          }}
          _dark={{
            bg: 'gray.100',
          }}
          h={1}
        />
      </VStack>
    </Box>
  );
};
