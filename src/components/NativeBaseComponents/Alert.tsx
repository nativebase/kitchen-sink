import React from 'react';
import { Alert, Box } from 'native-base';

export const Example = () => {
  return (
    <Alert mt={3} shadow={6}>
      <Alert.Icon />
      <Alert.Title>Alert</Alert.Title>
    </Alert>
  );
};
