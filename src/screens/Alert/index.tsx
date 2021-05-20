import React from "react";
import { Box, Text, IconButton, Icon, HStack } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
export function Alert({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	return (
		<Box>
			<HStack>
				<IconButton
					icon={
						<Icon
							as={<Ionicons name="arrow-back-outline" />}
							color="blueGray.400"
							size="sm"
						/>
					}
					_pressed={{ bg: "transparent" }}
					colorScheme="coolGray"
					onPress={() => navigation.navigate("home")}
				/>
				<Text>Alert</Text>
			</HStack>
		</Box>
	);
}
