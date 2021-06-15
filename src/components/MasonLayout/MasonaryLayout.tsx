import { HStack, VStack } from 'native-base';
import React from 'react';

export const MasonaryLayout = ({
	column,
	_hStack,
	_vStack,
	children,
	...props
}) => {
	const vStackChildren = [];
	const childrenLength = children.length;
	const columnLength = column.length;
	React.Children.map(children, (child, cIndex) => {
		const pos = cIndex % columnLength;
		if (!vStackChildren[pos]) vStackChildren[pos] = [];
		// if (childrenLength - cIndex <= columnLength) {
		// 	vStackChildren[pos].push(React.cloneElement(child, { flex: 1 }));
		// } else {
		vStackChildren[pos].push(child);
		// }
	});

	const vstackTemplate = () => {
		return column.map((flexVal, index) => {
			vStackChildren[index][vStackChildren[index].length - 1] =
				React.cloneElement(
					vStackChildren[index][vStackChildren[index].length - 1],
					{ flex: 1 },
				);
			return (
				<VStack {..._vStack} flex={flexVal}>
					{vStackChildren[index]}
				</VStack>
			);
		});
	};

	return <HStack {..._hStack}>{vstackTemplate()}</HStack>;
};
