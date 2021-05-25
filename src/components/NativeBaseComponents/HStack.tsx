import React from "react";
import { HStack, Stack, Center, Heading } from "native-base";

export function Example() {
	return (
		<HStack space={2} alignItems="center" mt={3}>
			<Center
				// size={16}
				bg="primary.400"
				rounded="md"
				_text={{ color: "white" }}
				shadow={3}
			>
				Box 1
			</Center>
			<Center
				bg="secondary.400"
				// size={16}
				rounded="md"
				_text={{ color: "white" }}
				shadow={3}
			>
				Box 2
			</Center>
		</HStack>
	);
}
