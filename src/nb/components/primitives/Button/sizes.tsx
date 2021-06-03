import React from 'react';
import { Button, Stack, Box } from 'native-base';

export const Example = () => {
  return (
    <Stack
      alignSelf={{ base: 'center', md: 'flex-start' }}
      direction={{ base: 'column', md: 'row' }}
      space={1}
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Box>
          <Button key={size} size={size}>
            BUTTON
          </Button>
        </Box>
      ))}
    </Stack>
  );
};
