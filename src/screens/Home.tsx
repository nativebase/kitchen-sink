import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
	Box,
	Button,
	Divider,
	Heading,
	HStack,
	Icon,
	List,
	Switch,
	Text,
	useColorMode,
} from "native-base";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
export function Home({ navigation }: { navigation: StackNavigationProp<any> }) {
	const components = [
		{
			name: "ActionSheet",
			url: "actionsheet",
		},
		{
			name: "Alert",
			url: "alert",
		},
		{
			name: "Avatar",
			url: "avatar",
		},
		{
			name: "Badge",
			url: "badge",
		},
		{
			name: "Button",
			url: "button",
		},
		{
			name: "Card",
			url: "card",
		},
		{
			name: "",
			url: "",
		},
		{
			name: "Alert",
			url: "alert",
		},
		{
			name: "Avatar",
			url: "avatar",
		},
		{
			name: "Badge",
			url: "badge",
		},
		{
			name: "Button",
			url: "button",
		},
		{
			name: "Card",
			url: "card",
		},
	];

	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box bg={colorMode === "dark" ? "black" : "white"} pt={12}>
			<ScrollView>
				<Heading p={3} mx={2}>
					NativeBase@3.0.0
				</Heading>
				<Divider />
				<HStack alignItems="center" space={6} py={4} px={3} mx={2}>
					<Ionicons name="moon-sharp" size={24} color="black" />
					<Text>Dark Mode</Text>
					<Switch
						ml="auto"
						onToggle={toggleColorMode}
						isChecked={colorMode === "dark"}
					/>
				</HStack>
				<Divider />
				<List divider={<Divider ml={16} />} px={3} mt={12} py={0}>
					{components.map((comp) => (
						<List.Item onPress={() => navigation.navigate(comp.url)}>
							<HStack w="100%" space={3} py={1} alignItems="center">
								<Box mr={4}>
									<Entypo name="circular-graph" size={32} color="black" />
								</Box>

								<Text>{comp.name}</Text>
								<Icon
									ml="auto"
									mr={2}
									size="sm"
									as={<MaterialCommunityIcons name="chevron-right" />}
									color="coolGray.500"
								/>
							</HStack>
						</List.Item>
					))}
				</List>
			</ScrollView>
		</Box>
	);
}
