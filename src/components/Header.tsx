import React from 'react';
import {
  Box,
  IconButton,
  Icon,
  HStack,
  Heading,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  Switch,
  Text,
} from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

export function Header({
  title,
  navigation,
}: {
  title: string;
  navigation: StackNavigationProp<any>;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  return (
    <HStack
      alignItems="center"
      w="100%"
      py={2}
      bg={useColorModeValue('white', 'blueGray.900')}
      mb={{ base: 8, md: 0 }}
    >
      <IconButton
        position="absolute"
        left={{ base: 0, md: 1 }}
        icon={
          !isLargeScreen ? (
            <Icon
              as={<Ionicons name="arrow-back-outline" />}
              color="blueGray.400"
              size="sm"
            />
          ) : (
            <Text>Home</Text>
          )
        }
        _pressed={{ bg: 'transparent' }}
        colorScheme="coolGray"
        onPress={() => navigation.navigate('masonlayout')}
      ></IconButton>

      <Heading
        alignSelf="center"
        justifyContent="center"
        mx="auto"
        color={colorMode == 'dark' ? 'gray.100' : 'trueGray.700'}
      >
        {title}
      </Heading>
      {isLargeScreen ? (
        <IconButton
          size="md"
          icon={
            <Icon
              as={
                colorMode == 'dark' ? (
                  <Ionicons name="sunny" color="white" />
                ) : (
                  <Ionicons name="moon" color="black" />
                )
              }
              size="lg"
            />
          }
          onPress={toggleColorMode}
          mr={3}
        />
      ) : (
        <></>
      )}
    </HStack>
  );
}
