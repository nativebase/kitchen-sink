import React from 'react';
import { Switch, HStack, Text } from 'native-base';

export const Example = () => {
  return (
    <HStack alignItems="center" space={8} mt={4}>
      <Text bold fontSize="lg" color="white">
        On/Off
      </Text>
      <Switch />
    </HStack>
  );
};
