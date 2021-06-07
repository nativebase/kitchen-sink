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
import { Dimensions, ScrollView, StatusBar } from 'react-native';
import { MasonMobile } from '../../components/MasonLayout/mobile';
import { MasonWeb } from '../../components/MasonLayout/web';
import { Logo } from '../../icons/Logo';

export function MasonLayout({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { width, height } = Dimensions.get('window');

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
      bg={useColorModeValue('slateGray.50', 'blueGray.700')}
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
        px={{ base: 4, md: 0 }}
        borderRadius="lg"
        mb={4}
        ml={{ base: 0, md: '-25px' }}
        py={2}
        space={2}
        alignItems="center"
        width={width > 1152 ? 1152 : 'auto'}
        alignSelf={width > 1152 ? 'center' : 'flex-start'}
      >
        <Logo size={{ base: 12, md: 16 }} />
        <Heading color={colorMode == 'dark' ? 'white' : 'gray.800'}>
          NativeBase
        </Heading>
        <Text
          color={colorMode == 'dark' ? 'white' : 'gray.800'}
          alignSelf="flex-end"
          lineHeight={{ base: 8, md: '50px' }}
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
            mr={{ base: 3, md: 0 }}
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
