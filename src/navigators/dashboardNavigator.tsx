import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";
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
			{/* <Stack.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="notifications"
        component={Notifications}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="setting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      /> */}
		</Stack.Navigator>
	);
}
