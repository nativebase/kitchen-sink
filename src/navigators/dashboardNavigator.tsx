import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Examples, MasonLayout, Test } from '../screens';

const Stack = createStackNavigator();

export function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName="masonlayout">
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
      <Stack.Screen
        name="masonlayout"
        component={MasonLayout}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
				name="test"
				component={Test}
				options={{
					headerShown: false,
				}}
			/> */}
    </Stack.Navigator>
  );
}
