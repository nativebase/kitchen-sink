import React from "react";
import { Button } from "native-base";

export const Example = () => {
	return (
		<Button mt={2} onPress={() => console.log("hello world")}>
			PRIMARY
		</Button>
	);
};
