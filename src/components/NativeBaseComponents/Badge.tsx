import React from 'react';
import { Badge } from 'native-base';

export function Example() {
  return (
    <Badge
      mt={3}
      bg="gray.400"
      shadow={6}
      fontSize="xl"
      p={2}
      _text={{ color: 'white' }}
    >
      NEW FEATURE
    </Badge>
  );
}
