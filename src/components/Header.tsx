import React from "react";
import {
	Box,
	IconButton,
	Icon,
	HStack,
	Heading,
	Divider,
} from "../../nb/NativeBase/src";

import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

export function Header({
	title,
	navigation,
}: {
	title: string;
	navigation: StackNavigationProp<any>;
}) {
	return (
		<>
			<HStack
				alignItems="center"
				// justifyContent="space-between"
				w="100%"
			>
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
				></IconButton>

				<Heading alignSelf="center" justifyContent="center">
					{title}
				</Heading>
			</HStack>
			<Divider />
		</>
	);
}
