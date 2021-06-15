import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box, useColorModeValue } from 'native-base';
import { DashboardTheme } from './src/theme';
import { RootStack } from './src/navigators/rootNavigator';
import { Floaters } from './src/components/Floaters';
import config from './nativebase.config';

export default function App() {
	return (
		<NavigationContainer>
			<NativeBaseProvider theme={DashboardTheme} config={config}>
				<Box
					flex={1}
					bg={useColorModeValue('slateGray.50', 'blueGray.700')}
					_web={{
						overflowX: 'hidden',
					}}
				>
					<RootStack />
				</Box>
			</NativeBaseProvider>
		</NavigationContainer>
	);
}
