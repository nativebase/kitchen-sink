import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Box,
  useColorMode,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  Fab,
  Icon,
  useColorModeValue,
  IconButton,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { mapping } from '../../config/map';
import { ScrollView, StatusBar } from 'react-native';
import { MasonMobile } from '../../components/MasonLayout/mobile';
import { MasonWeb } from '../../components/MasonLayout/web';

export function MasonLayout({
  navigation,
}: {
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
    <Box
      safeAreaTop
      flex={1}
      bg={useColorModeValue('slateGray.50', 'gray.800')}
    >
      <StatusBar
        barStyle={colorMode == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorMode == 'dark' ? '#27272a' : '#f3f2f2'}
        translucent={false}
      />
      {isLargeScreen ? (
        <></>
      ) : (
        <Fab
          bg={colorMode == 'dark' ? 'black' : 'white'}
          icon={
            <Icon
              as={
                colorMode == 'dark' ? (
                  <Ionicons name="sunny" size={24} color="white" />
                ) : (
                  <Ionicons name="moon" size={24} color="black" />
                )
              }
              size="lg"
            />
          }
          onPress={toggleColorMode}
        />
      )}
      <HStack
        px={4}
        borderRadius="lg"
        mb={4}
        py={2}
        space={2}
        alignItems="center"
      >
        <Heading color={colorMode == 'dark' ? 'white' : 'gray.800'}>
          NativeBase
        </Heading>
        <Text
          color={colorMode == 'dark' ? 'white' : 'gray.800'}
          alignSelf="flex-end"
          lineHeight={{ base: 8, md: '44px' }}
        >
          v3.0
        </Text>
        {isLargeScreen ? (
          <IconButton
            ml="auto"
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
      <ScrollView contentContainerStyle={{ width: '100%' }}>
        {isLargeScreen ? (
          <MasonWeb navigation={navigation} />
        ) : (
          <MasonMobile navigation={navigation} />
        )}
      </ScrollView>
    </Box>
  );
}
