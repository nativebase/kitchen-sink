import React from 'react';
import { Icon, MoonIcon, Stack, HStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const Example = () => {
  const sizes = [
    '10',
    '50px',
    '2xl',
  ];
  return (
    <Stack space={8}>
      <HStack space={4}>
        {sizes.map((size) => (
          <MoonIcon size={size} />
        ))}
      </HStack>
      <HStack space={4}>
        {sizes.map((size) => (
          <Icon as={Ionicons} name="md-checkmark-circle" size={size} />
        ))}
      </HStack>
    </Stack>
  );
};
