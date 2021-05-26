import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Button, Column, Row, Text, useColorMode } from "native-base";
import { mapping } from "../../config/map";
import { ScrollView } from "react-native";

export function MasonLayout({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	const { colorMode, toggleColorMode } = useColorMode();

	const leftcolors = [
		"lightBlue.300",
		"violet.300",
		"cyan.400",
		"lime.500",
		"yellow.300",
		"pink.400",
		"cyan.400",
		"violet.300",
		"lightBlue.600",
		"pink.700",
	];
	const rightColors = [
		"amber.400",
		"orange.500",
		"teal.300",
		"emerald.500",
		"fuchsia.500",
		"blue.400",
		"pink.300",
		"orange.500",
		"indigo.400",
		"red.200",
	];
	//@ts-ignore
	const leftElements = [];
	//@ts-ignore
	const rightElements = [];
	Object.keys(mapping).map((key, index) => {
		if (index % 2 !== 0) {
			//@ts-ignore
			leftElements.push(mapping[key]);
		} else {
			//@ts-ignore
			rightElements.push(mapping[key]);
		}
	});
	return (
		<Box bg={colorMode === "dark" ? "black" : "white"} pt={12}>
			<ScrollView contentContainerStyle={{ width: "100%" }}>
				<Row /* space={2}  mx={2}*/>
					<Column w="50%">
						{
							//@ts-ignore
							leftElements.map((component, index) => {
								return (
									// <Box
									// 	bg={{
									// 		linearGradient: {
									// 			colors: ["lightBlue.300", "violet.800"],
									// 			start: [0, 0],
									// 			end: [1, 0],
									// 		},
									// 	}}
									// 	p={12}
									// 	rounded="lg"
									// 	_text={{
									// 		fontSize: "md",
									// 		fontWeight: "bold",
									// 		color: "white",
									// 	}}
									// >
									<Button
										variant="unstyled"
										bg={leftcolors[index % 10]}
										py={4}
										rounded={0}
										onPress={() =>
											navigation.navigate("component", {
												name: component.title,
											})
										}
									>
										<Box p={8}>
											<Text>{component.title}</Text>
											{component.basic ? <component.basic.Example /> : <></>}
										</Box>
									</Button>
									// </Box>
								);
							})
						}
					</Column>
					<Column
						w="50%"
						// space={2}
					>
						{
							//@ts-ignore
							rightElements.map((component, index) => {
								return (
									<Button
										variant="unstyled"
										bg={rightColors[index % 10]}
										py={4}
										rounded={0}
										onPress={() =>
											navigation.navigate("component", {
												name: component.title,
											})
										}
									>
										<Box p={8}>
											<Text>{component.title}</Text>
											{component.basic ? <component.basic.Example /> : <></>}
										</Box>
									</Button>
								);
							})
						}
					</Column>
				</Row>
			</ScrollView>
		</Box>
	);
}
