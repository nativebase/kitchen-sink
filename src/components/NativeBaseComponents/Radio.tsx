import React from "react";
import { Radio } from "native-base";

export const Example = () => {
	return (
		<Radio.Group name="exampleGroup" mt={4}>
			<Radio value="1" colorScheme="red" my={2}>
				Radio 1
			</Radio>
			<Radio value="2" colorScheme="green">
				Radio 2
			</Radio>
		</Radio.Group>
	);
};
