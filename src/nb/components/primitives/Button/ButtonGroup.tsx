import React from "react";
import { Button } from "native-base";

export const Example = () => {
	return (
		<Button.Group
			variant="solid"
			isAttached
			space={6}
			mx={{ base: "auto", md: 0 }}
		>
			<Button colorScheme="teal">Save</Button>
			<Button colorScheme="danger">Cancel</Button>
		</Button.Group>
	);
};
