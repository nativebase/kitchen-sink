import React from 'react';
import { Fade, Button, Box } from 'native-base';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        onPress={() => setIsOpen(!isOpen)}
        mt={4}
        _text={{ color: 'white' }}
      >
        {isOpen ? 'hide' : 'show'}
      </Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          _text={{ color: 'white' }}
        >
          Fade
        </Box>
      </Fade>
    </>
  );
};
