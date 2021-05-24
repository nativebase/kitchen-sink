import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Examples } from "../screens";

const Stack = createStackNavigator();

export function DashboardStack() {
	return (
		<Stack.Navigator initialRouteName="home">
			<Stack.Screen
				name="home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="component"
				component={Examples}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
