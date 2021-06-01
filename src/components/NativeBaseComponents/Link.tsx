import React from 'react';
import { Link } from 'native-base';

export const Example = () => {
  return (
    <Link
      mt={4}
      fontSize="xl"
      href="https://nativebase.io"
      shadow={8}
      _text={{ color: 'white' }}
    >
      Default Link
    </Link>
  );
};
