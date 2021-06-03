import { Fab, Icon, NativeBaseProvider, Box } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { DashboardTheme } from '../../../../theme';
import nativebaseConfig from '../../../../../nativebase.config';

export const Example = () => {
  return (
    <NativeBaseProvider theme={DashboardTheme} config={nativebaseConfig}>
      <Box position="relative" h={100}>
        <Fab
          bottom="50px"
          left="-170px"
          right="100px"
          icon={<Icon color="white" as={<AntDesign name="plus" />} />}
        />
      </Box>
    </NativeBaseProvider>
  );
};
