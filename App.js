import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from 'native-base';
import { DashboardTheme } from './src/theme';
import { Main } from './src/components/Main';
import { DashboardStack } from './src/navigators/dashboardNavigator';
import config from './nativebase.config';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={DashboardTheme} config={config}>
        {/* <Main /> */}
        {/* <Box flex={1}> */}
        <DashboardStack />
        {/* </Box> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
