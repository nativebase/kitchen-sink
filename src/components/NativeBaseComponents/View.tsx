import React from 'react';
import { Box } from 'native-base';
export const Example = () => {
  return (
    <Box
      size={12}
      w="80%"
      h={20}
      _light={{
        bg: 'darkBlue.100',
      }}
      _dark={{
        bg: 'darkBlue.600',
      }}
    />
  );
};
