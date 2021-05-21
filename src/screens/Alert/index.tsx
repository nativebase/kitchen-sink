import React from "react";
import { Box, IconButton, Icon, HStack, Heading } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
export function Alert({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	return (
		<Box>
			<HStack alignItems="center">
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
				<Heading alignSelf="center">Alert</Heading>
			</HStack>
		</Box>
	);
}
