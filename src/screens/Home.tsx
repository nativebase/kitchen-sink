import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Text } from "native-base";

export function Home({ navigation }: { navigation: StackNavigationProp<any> }) {
	return (
		<Box>
			<Text>Hello</Text>
		</Box>
	);
}
