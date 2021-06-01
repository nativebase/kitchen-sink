import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  Switch,
  Text,
  useColorMode,
} from 'native-base';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export function Home({ navigation }: { navigation: StackNavigationProp<any> }) {
  const components = [
    {
      name: 'Alert',
    },
    {
      name: 'Avatar',
    },
    {
      name: 'Badge',
    },
    {
      name: 'Box',
    },
    {
      name: 'Button',
    },
    {
      name: 'Center',
    },
    {
      name: 'CheckBox',
    },
    {
      name: 'Column',
    },
    {
      name: 'Divider',
    },
    {
      name: 'Fab',
    },
    {
      name: 'Flex',
    },
    {
      name: 'Heading',
    },
    {
      name: 'HStack',
    },
    {
      name: 'Icon',
    },
    {
      name: 'IconButton',
    },
    {
      name: 'Image',
    },
    {
      name: 'Input',
    },
    {
      name: 'Link',
    },
    {
      name: 'List',
    },
    {
      name: 'Menu',
    },
    {
      name: 'Modal',
    },
    {
      name: 'Popover',
    },
    {
      name: 'Progress',
    },
    {
      name: 'Radio',
    },
    {
      name: 'Select',
    },
    {
      name: 'Slider',
    },
    {
      name: 'Spinner',
    },
    {
      name: 'Switch',
    },
    {
      name: 'Tabs',
    },
    {
      name: 'Text',
    },
    {
      name: 'TextArea',
    },
    {
      name: 'Toast',
    },
    {
      name: 'Tooltip',
    },
    {
      name: 'Transitions',
    },
    {
      name: 'VStack',
    },
    {
      name: 'ZStack',
    },
  ];

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={colorMode === 'dark' ? 'black' : 'white'} pt={12}>
      <ScrollView contentContainerStyle={{ width: '100%' }}>
        <Heading p={3} mx={2}>
          NativeBase@3.0.0
        </Heading>
        <Divider opacity={colorMode == 'dark' ? '0.4' : '1'} />
        <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
          <Ionicons
            name="moon-sharp"
            size={24}
            color={colorMode == 'dark' ? 'white' : 'black'}
          />
          <Text>Dark Mode</Text>
          <Switch
            ml="auto"
            onToggle={toggleColorMode}
            isChecked={colorMode === 'dark'}
          />
        </HStack>
        <Divider opacity={colorMode == 'dark' ? '0.4' : '1'} />
        <Divider mt={12} opacity={colorMode == 'dark' ? '0.4' : '1'} />
        <List
          divider={
            <Divider ml={16} opacity={colorMode == 'dark' ? '0.4' : '1'} />
          }
          px={3}
          // mt={12}
          py={0}
          // borderColor="red.200"
          borderWidth={0}
          borderRightWidth={0}
          w="100%"
        >
          {components.map((comp, index) => (
            <List.Item
              key={index}
              onPress={() =>
                navigation.navigate('component', { name: comp.name })
              }
              _hover={{ bg: 'coolGray.300' }}
            >
              <HStack space={3} py={1} alignItems="center" w="100%">
                <Box mr={4}>
                  <Entypo
                    name="circular-graph"
                    size={32}
                    color={colorMode === 'dark' ? 'white' : 'black'}
                  />
                </Box>

                <Text>{comp.name}</Text>
                <Box ml="auto">
                  <Icon
                    mr={2}
                    size="sm"
                    as={<MaterialCommunityIcons name="chevron-right" />}
                    color="coolGray.500"
                  />
                </Box>
              </HStack>
            </List.Item>
          ))}
        </List>
      </ScrollView>
    </Box>
  );
}
