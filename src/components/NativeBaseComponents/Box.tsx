import React from 'react';
import { Box } from 'native-base';
export const Example = () => {
  return(
	<Box size={12} 
		_light={{ bg: 'pink.500'}}
		_dark={{ bg: 'pink.400'}}
	/>
  );
};
