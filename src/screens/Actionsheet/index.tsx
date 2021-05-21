import React from "react";

import { List, Text } from "native-base";
import { Box, IconButton, Icon, HStack, Heading } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

export function ActionSheet({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	const sections = [
		{
			name: "Usage",
			url: "actionsheet.usage",
		},
		{
			name: "Icon",
			url: "actionsheet.icon",
		},
		{
			name: "DisableOverlay",
			url: "actionsheet.disableOverlay",
		},
		{
			name: "Composition",
			url: "actionsheet.composition",
		},
	];
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
				<Heading alignSelf="center">Badge</Heading>
			</HStack>
			<List>
				{sections.map((section, index) => (
					<List.Item
						key={index}
						onPress={() => navigation.navigate(section.url)}
					>
						<Text>{section.name}</Text>
					</List.Item>
				))}
			</List>
		</Box>
	);
}

export { Example as ActionSheetComposition } from "./Composition";
export { Example as ActionSheetDisableOverlay } from "./DisableOverlay";
export { Example as ActionSheetIcon } from "./Icon";
export { Example as ActionSheetUsage } from "./Usage";
