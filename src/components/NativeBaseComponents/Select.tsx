import React from 'react';
import { Select, Box, CheckIcon } from 'native-base';

export const Example = () => {
  let [language, setLanguage] = React.useState('');

  return (
    // <Box w="100%">
    <Select
      shadow={6}
      mt={4}
      selectedValue={language}
      // minWidth={120}
      accessibilityLabel="Select "
      placeholder="Select "
      onValueChange={(itemValue) => setLanguage(itemValue)}
      _selectedItem={{
        bg: 'cyan.600',
        endIcon: <CheckIcon size={4} />,
      }}
      maxWidth="100%"
      w={{ base: 100, md: 'auto' }}
      // placeholderTextColor="white"
      // color="white"
      isDisabled
    >
      <Select.Item label="JavaScript" value="js" />
      <Select.Item label="TypeScript" value="ts" />
      <Select.Item label="C" value="c" />
      <Select.Item label="Python" value="py" />
      <Select.Item label="Java" value="java" />
    </Select>
    // </Box>
  );
};
