import React from "react";
import { Tooltip, Button } from "native-base";

export function Example() {
	return (
		<Tooltip label="Hey, I'm here!" openDelay={500}>
			<Button mt={4}>More</Button>
		</Tooltip>
	);
}
