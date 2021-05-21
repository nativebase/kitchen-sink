import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Alert, Avatar, Badge, ActionSheet } from "../screens";

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
				name="actionsheet"
				component={ActionSheet}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="actionsheet.usage"
				component={ActionSheet}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="alert"
				component={Alert}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="avatar"
				component={Avatar}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="badge"
				component={Badge}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
