import { Box, useColorMode } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { RootStack } from '../../navigators/rootNavigator';

export const Main = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box safeAreaTop flex={1} bg={colorMode == 'dark' ? 'black' : 'white'}>
			<StatusBar
				barStyle={colorMode == 'dark' ? 'light-content' : 'dark-content'}
				translucent={false}
			/>
			<RootStack />
		</Box>
	);
};
