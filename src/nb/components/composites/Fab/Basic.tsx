import { Fab, Icon, Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { DashboardTheme } from '../../../../theme';
import nativebaseConfig from '../../../../../nativebase.config';

export const Example = () => {
  return (
    <NativeBaseProvider theme={DashboardTheme} config={nativebaseConfig}>
      <Box position="relative" h={100}>
        <Fab
          position="absolute"
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        />
      </Box>
    </NativeBaseProvider>
  );
};
