import React from "react";
import { Avatar } from "native-base";

export const Example = () => {
	return (
		<Avatar
			shadow={6}
			mt={4}
			source={{ uri: "https://alpha.nativebase.io/img/native-base-icon.png" }}
		>
			NB
			<Avatar.Badge bg={"red.200"} />
		</Avatar>
	);
};
