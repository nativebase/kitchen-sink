import React from 'react';
import { Alert, Box, VStack } from 'native-base';

export const Example = () => {
  return (
    <Alert>
      <Alert.Icon />
      <Alert.Title>Alert Title</Alert.Title>
      <Alert.Description>
        Alert Description should be a brief about the Alert Message.
      </Alert.Description>
    </Alert>
  );
};
