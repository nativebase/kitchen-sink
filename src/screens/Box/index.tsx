import React from "react";
import { ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { Heading, Text, VStack, Box } from "../../../nb/NativeBase/src";
import { mapping } from "../../config/map";
import { StackNavigationProp } from "@react-navigation/stack";
import { Divider } from "native-base";

const box = mapping.Box;

export function BoxExamples({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	return (
		<Box bg="white">
			<Header title="Box" navigation={navigation} />
			<ScrollView>
				<VStack space={6} p={2}>
					{box.components.map((element: any, index: number) => (
						<VStack space={2}>
							<Heading>{element.title}</Heading>
							<Divider />
							<element.Component.Example />
							<Text>{element.description}</Text>
						</VStack>
					))}
				</VStack>
			</ScrollView>
		</Box>
	);
}
