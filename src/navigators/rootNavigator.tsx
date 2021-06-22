import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Examples, MasonLayout } from '../screens';

const Stack = createStackNavigator();

export function RootStack() {
	return (
		<Stack.Navigator initialRouteName="Kitchensink | NativeBase">
			<Stack.Screen
				name="home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Component | NativeBase"
				component={Examples}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Kitchensink | NativeBase"
				component={MasonLayout}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
