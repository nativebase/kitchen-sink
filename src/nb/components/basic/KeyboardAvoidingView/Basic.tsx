import React from 'react';
import { Input, Box, KeyboardAvoidingView } from 'native-base';
export const Example = () => {
  return (
    <Box w="100%" justifyContent="flex-end">
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={40}>
        <Input  variant="filled" />
      </KeyboardAvoidingView>
    </Box>
  );
};
