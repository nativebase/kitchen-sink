import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Box, useColorModeValue, useToken } from 'native-base';
import { RootStack } from '../../src/navigators/rootNavigator';

export const Root = () => {
	const [lightBg, darkBg] = useToken(
		'colors',
		['coolGray.50', 'blueGray.900'],
		'blueGray.900',
	);
	const bgColor = useColorModeValue(lightBg, darkBg);

	return (
		<NavigationContainer
			theme={{
				colors: { background: bgColor },
			}}
		>
			<Box
				flex={1}
				w="100%"
				_light={{
					bg: 'coolGray.50',
				}}
				_dark={{
					bg: 'blueGray.900',
				}}
				// bg={useColorModeValue('', 'blueGray.900')}
				_web={{
					overflowX: 'hidden',
				}}
			>
				<RootStack />
			</Box>
		</NavigationContainer>
	);
};
