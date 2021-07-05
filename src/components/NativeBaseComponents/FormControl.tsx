import React from 'react';
import { Input, VStack, Box, Checkbox, CheckIcon } from 'native-base';


export const Example = () => {
  return (
    <Box 
      // justifyContent="center"
      w={{ base: "80%", lg: "50%" }}
      mt= {3}
      alignSelf="center"
      p={3}
    >
      <VStack
        // justifyContent="center"
        alignItems="center"
        // w="50%"
        py={3}
        
        // h={40}

        
        _light={{
          bg: 'lightBlue.400',
          
        }}
        _dark={{
          bg: 'lightBlue.500',
          
        }}
        space={2}
        borderWidth={6}
        borderColor="lightBlue.600"
        
      >
        <Box
          _light={{
            bg: 'cyan.100',
          }}
          _dark={{
            bg: 'cyan.200',
          }}
          h="8px"
          rounded="pill"
          // mx={4}
          w="80%"
          
        />
        <Box
          _light={{
            bg: 'cyan.100',
          }}
          _dark={{
            bg: 'cyan.200',
          }}
          h="8px"
          rounded="pill"
          // mx={4}
          w="80%"
        
        />

        <Box
          _light={{
            bg: 'cyan.100',
          }}
          _dark={{
            bg: 'cyan.200',
          }}
          h="8px"
          rounded="pill"
          // mx={4}
          w="80%"
          
        />
        <Box
          _light={{
            bg: 'cyan.100',
          }}
          _dark={{
            bg: 'cyan.200',
          }}
          h="8px"
          rounded="pill"
          // mx={4}
          w="80%"
          
        />
         <Box
          alignItems="flex-start"
          w="80%"
        >
        <Box
          _light={{
            bg: 'cyan.300',
          }}
          _dark={{
            bg: 'cyan.400',
          }}
          h="8px"
          rounded="pill"
          w="47%"
          // mx={4}
        />
        </Box>

        <Box
          mt={2}
          alignItems="flex-end"
          w="80%"
        >
          <Box         
            borderWidth={3}
            _light={{
              borderColor: 'cyan.300',
              bg: 'lightBlue.400',
            }}
            _dark={{
              borderColor: 'cyan.200',
              bg: 'lightBlue.500',
            }}
            h="15px"
            borderRadius={4}
            w="40%"
            // mx="10px"
          />
        </Box>
  </VStack>
    </Box>
  );
};
