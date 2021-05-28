import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { Header } from "../../components/Header";
import {
	Heading,
	VStack,
	Box,
	useColorMode,
	useColorModeValue,
	Divider,
	Flex,
	Fab,
	Icon,
} from "native-base";
import { mapping } from "../../config/map";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

export function Examples({
	route,
	navigation,
}: {
	route: any;
	navigation: StackNavigationProp<any>;
}) {
	let name: string = route.params.name;

	//@ts-ignore
	const component = mapping[name];
	console.log(component);
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box
			safeAreaTop
			flex={1}
			bg={colorMode == "dark" ? "blueGray.900" : "white"}
		>
			<StatusBar
				barStyle={colorMode == "dark" ? "light-content" : "dark-content"}
				translucent={false}
			/>
			<Box bg={useColorModeValue("slateGray.50", "blueGray.700")}>
				<Fab
					bg={colorMode == "dark" ? "black" : "white"}
					icon={
						<Icon
							as={
								colorMode == "dark" ? (
									<Ionicons name="sunny" size={24} color="white" />
								) : (
									<Ionicons name="moon" size={24} color="black" />
								)
							}
							size="lg"
						/>
					}
					onPress={toggleColorMode}
				/>
				<Header title={component.title} navigation={navigation} />

				<ScrollView>
					<VStack mx={2} space={2} p={2} mb={24}>
						{component.components.map((element: any, index: number) => (
							<Box
								shadow={1}
								bg={useColorModeValue("white", "blueGray.900")}
								// py={2}
								my={2}
								mx={3}
								// p={4}
								borderRadius={16}
							>
								<VStack key={index}>
									<Heading
										size="md"
										p={4}
										color={colorMode == "dark" ? "gray.100" : "trueGray.700"}
									>
										{element.title}
									</Heading>
									<Divider
										bg={colorMode == "dark" ? "blueGray.700" : "warmGray.200"}
									/>
									<Flex
										nativeID="1111"
										//@ts-ignore
										align={{ base: "center", md: "flex-start" }}
										p={6}
										justify="center"
										d="flex"
									>
										<element.component.Example />
									</Flex>
								</VStack>
							</Box>
						))}
					</VStack>
				</ScrollView>
			</Box>
		</Box>
	);
}
