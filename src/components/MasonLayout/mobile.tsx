import {
  Box,
  useColorMode,
  Row,
  Column,
  Button,
  Center,
  Heading,
} from 'native-base';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { mapping } from '../../config/map';

export const MasonMobile = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Row space={4} m={4}>
      <Column flex={1} space={4}>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['cyan.500', 'emerald.300'],

              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Alert',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Alert
              </Heading>

              <mapping.Alert.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['red.400', 'amber.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Badge',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Badge
              </Heading>

              <mapping.Badge.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Button',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Button
              </Heading>

              <mapping.Button.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['green.700', 'lime.200'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'CheckBox',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                CheckBox
              </Heading>

              <mapping.CheckBox.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'purple.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Divider',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Divider
              </Heading>

              <mapping.Divider.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['fuchsia.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Flex',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Flex
              </Heading>

              <mapping.Flex.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['rose.500', 'amber.500'],

              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'HStack',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                HStack
              </Heading>

              <mapping.HStack.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['cyan.500', 'emerald.300'],

              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'IconButton',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                IconButton
              </Heading>

              <mapping.IconButton.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['red.400', 'amber.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Input',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Input
              </Heading>

              <mapping.Input.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Link',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Link
              </Heading>

              <mapping.Link.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['green.700', 'lime.200'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Modal',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Modal
              </Heading>

              <mapping.Modal.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'purple.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Progress',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Progress
              </Heading>

              <mapping.Progress.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['fuchsia.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Select',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Select
              </Heading>

              <mapping.Select.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['rose.500', 'amber.500'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Spinner',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Spinner
              </Heading>

              <mapping.Spinner.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['cyan.500', 'emerald.300'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Tabs',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Tabs
              </Heading>

              <mapping.Tabs.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['red.400', 'amber.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Toast',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Toast
              </Heading>

              <mapping.Toast.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Transitions',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Transitions
              </Heading>

              <mapping.Transitions.basic.Example />
            </Center>
          </Button>
        </Box>
      </Column>

      <Column flex={1} space={4}>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['green.700', 'lime.200'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Avatar',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Avatar
              </Heading>

              <mapping.Avatar.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Box',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Box
              </Heading>

              <mapping.Box.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['fuchsia.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Center',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Center
              </Heading>

              <mapping.Center.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['rose.500', 'amber.500'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Column',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Column
              </Heading>

              <mapping.Column.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['cyan.500', 'emerald.300'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Fab',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Fab
              </Heading>
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['red.400', 'amber.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Heading',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Heading
              </Heading>

              <mapping.Heading.basic.Example />
            </Center>
          </Button>
        </Box>
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Icon',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Icon
              </Heading>

              <mapping.Icon.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['cyan.500', 'emerald.300'],

              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Image',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Image
              </Heading>

              <mapping.Image.basic.Example />
            </Center>
          </Button>
        </Box>
        {/* ===== */}
        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['green.700', 'lime.200'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Menu',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Menu
              </Heading>

              <mapping.Menu.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Popover',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Popover
              </Heading>

              <mapping.Popover.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['fuchsia.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Radio',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Radio
              </Heading>

              <mapping.Radio.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['rose.500', 'amber.500'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Slider',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Slider
              </Heading>

              <mapping.Slider.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['cyan.500', 'emerald.300'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Switch',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Switch
              </Heading>

              <mapping.Switch.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['red.400', 'amber.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Text',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Text
              </Heading>

              <mapping.Text.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'TextArea',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                TextArea
              </Heading>

              <mapping.TextArea.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['green.700', 'lime.200'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'Tooltip',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                Tooltip
              </Heading>

              <mapping.Tooltip.basic.Example />
            </Center>
          </Button>
        </Box>

        <Box
          rounded="xl"
          bg={{
            linearGradient: {
              colors: ['blue.400', 'pink.400'],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        >
          <Button
            variant="unstyled"
            py={4}
            onPress={() =>
              navigation.navigate('component', {
                name: 'ZStack',
              })
            }
          >
            <Center py={8} px={1} w="100%">
              <Heading color="white" size="sm">
                ZStack
              </Heading>

              <mapping.ZStack.basic.Example />
            </Center>
          </Button>
        </Box>
      </Column>
    </Row>
  );
};
