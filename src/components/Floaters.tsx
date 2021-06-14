import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Fab, useColorMode, Icon } from 'native-base';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Floaters = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<StatusBar
				style={colorMode === 'dark' ? 'light' : 'dark'}
				backgroundColor={colorMode == 'dark' ? '#27272a' : '#f3f2f2'}
				translucent={false}
			/>
			<Fab
				shadow={7}
				_light={{
					bg: 'orange.100',
					_hover: {
						bg: 'orange.200',
					},
					_pressed: {
						bg: 'orange.300',
					},
				}}
				_dark={{
					bg: 'violet.100',
					_hover: {
						bg: 'violet.200',
					},
					_pressed: {
						bg: 'violet.300',
					},
				}}
				p={3}
				icon={
					<Icon
						as={Ionicons}
						_light={{ name: 'sunny', color: 'orange.600' }}
						_dark={{ name: 'moon', color: 'violet.900' }}
						size="md"
					/>
				}
				onPress={toggleColorMode}
			/>
		</>
	);
};
