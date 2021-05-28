import React from "react";
import { TextArea, Stack } from "native-base";

export const Example = () => {
	return (
		<TextArea
			mt={4}
			w="150px"
			h={20}
			placeholder="Type here.."
			color="white"
			placeholderTextColor="white"
		/>
	);
};
