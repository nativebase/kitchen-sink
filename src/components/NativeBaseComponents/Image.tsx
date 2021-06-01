import React from 'react';
import { Image } from 'native-base';
export function Example() {
  return (
    <Image
      shadow={6}
      mt={4}
      source={{
        uri: 'https://wallpaperaccess.com/full/317501.jpg',
      }}
      alt="Alternate Text"
      w={100}
      h={100}
    />
  );
}
