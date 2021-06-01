import React from 'react';
import { Slide, Button, Box, Text } from 'native-base';
export const Example = () => {
  const [isOpenBottom, setIsOpenBottom] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);

  let str1 = `Click Me to ${isOpenTop ? 'hide' : 'show'} Top Silder`;
  let str2 = `Click Me to ${isOpenBottom ? 'hide' : 'show'} Bottom Slider`;
  return (
    <>
      <Button m={4} onPress={() => setIsOpenTop(!isOpenTop)}>
        {str1}
      </Button>
      <Button onPress={() => setIsOpenBottom(!isOpenBottom)}>
        {str2}
        {/* Click Me to {isOpenBottom ? "hide" : "show"} Bottom Slider */}
      </Button>
      <Slide in={isOpenBottom}>
        <Box p={10} color="white" bg="blue.400" rounded="md">
          I am comming from Bottom
        </Box>
      </Slide>
      <Slide in={isOpenTop} placement="top">
        <Box p={10} color="white" bg="teal.400" rounded="md">
          I am comming from Top
        </Box>
      </Slide>
    </>
  );
};
