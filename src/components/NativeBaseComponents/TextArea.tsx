import React from 'react';
import { TextArea, Stack } from 'native-base';

export const Example = () => {
  return (
    <TextArea
      mt={4}
      w={{ base: '100px', md: 200 }}
      h={20}
      placeholder="Type here.."
      isDisabled
    />
  );
};
