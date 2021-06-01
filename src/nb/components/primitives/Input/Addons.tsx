import React from "react";

import {
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Stack,
	useColorModeValue,
} from "native-base";

export const Example = () => {
	return (
		<Stack alignItems="center" mx={3}>
			<InputGroup>
				<InputLeftAddon children={"https://"} />
				<Input
					placeholder="nativebase"
					placeholderTextColor={useColorModeValue(
						"blueGray.400",
						"blueGray.50"
					)}
				/>
				<InputRightAddon children={".io"} />
			</InputGroup>
		</Stack>
	);
};
