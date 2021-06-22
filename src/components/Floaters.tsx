import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Fab, useColorMode, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from './Logo';

export const Floaters = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Logo
				size={{ base: 64, md: 450 }}
				zIndex={-1}
				opacity={0.4}
				_ios={{
					opacity: 0.6,
				}}
				// size={64}
				position="absolute"
				top={{ base: -80, md: -180 }}
				// top={-80}
				right={{ base: -60, md: -100 }}
			/>
			<StatusBar
				style={colorMode === 'dark' ? 'light' : 'dark'}
				backgroundColor={colorMode == 'dark' ? '#27272a' : '#f3f2f2'}
				translucent={true}
			/>
			<Fab
				shadow={7}
				variant="unstyled"
				_dark={{
					bg: 'orange.50',
					_hover: {
						bg: 'orange.100',
					},
					_pressed: {
						bg: 'orange.100',
					},
				}}
				_light={{
					bg: 'blueGray.900',
					_hover: {
						bg: 'blueGray.800',
					},
					_pressed: {
						bg: 'blueGray.800',
					},
				}}
				p={3}
				icon={
					<Icon
						as={Ionicons}
						_dark={{ name: 'sunny', color: 'orange.400' }}
						_light={{ name: 'moon', color: 'blueGray.100' }}
						size="md"
					/>
				}
				onPress={toggleColorMode}
			/>
		</>
	);
};
