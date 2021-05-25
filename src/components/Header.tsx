import React from "react";
import {
	Box,
	IconButton,
	Icon,
	HStack,
	Heading,
	Divider,
	Text,
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
			<HStack alignItems="center" w="100%" py={2}>
				<IconButton
					position="absolute"
					// left={0}
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

				<Heading alignSelf="center" justifyContent="center" mx="auto">
					{title}
				</Heading>
			</HStack>

			<Divider />
		</>
	);
}
