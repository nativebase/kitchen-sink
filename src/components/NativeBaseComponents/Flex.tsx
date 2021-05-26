import React from "react";
import { Flex, Center, Heading, Button, Box } from "native-base";

export function Example() {
	return (
		<Box>
			<Flex direction="row" my={3} shadow={8}>
				<Box p={2} bg="primary.100" _text={{ color: "gray.800" }}>
					100
				</Box>
				<Box p={2} bg="primary.400" _text={{ color: "white" }}>
					200
				</Box>
			</Flex>
			<Flex direction="column" shadow={8}>
				<Box p={2} bg="primary.100" _text={{ color: "gray.800" }}>
					100
				</Box>
				<Box p={2} bg="primary.400" _text={{ color: "white" }}>
					200
				</Box>
			</Flex>
		</Box>
	);
}
