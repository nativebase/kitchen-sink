import React from 'react';
import { Input } from 'native-base';

export const Example = () => {
  return (
    <Input
      mt={4}
      placeholder="Type"
      // color="white"
      w={{ base: '100px', md: 'auto' }}
      shadow={6}
      // placeholderTextColor="white"
      // borderColor="white"
      _onPress={{
        borderColor: 'white',
      }}
      isDisabled
    />
  );
};
