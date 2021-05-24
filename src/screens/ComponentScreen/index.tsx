import React from "react";
import { ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { Heading, Text, VStack, Box } from "../../../nb/NativeBase/src";
import { mapping } from "../../config/map";
import { StackNavigationProp } from "@react-navigation/stack";
import { Divider } from "native-base";

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

	return (
		<Box bg="white">
			<Header title={component.title} navigation={navigation} />
			<Text my={1}>{component.description}</Text>
			<ScrollView>
				<VStack space={6} p={2}>
					{component.components.map((element: any, index: number) => (
						<VStack space={2} key={index}>
							<Heading>{element.title}</Heading>
							<Divider />
							<element.component.Example />
							<Text>{element.description}</Text>
						</VStack>
					))}
				</VStack>
			</ScrollView>
		</Box>
	);
}
