import React from 'react';
import { Popover, Button } from 'native-base';

export function Example() {
  return (
    <Popover
      trigger={(triggerProps) => {
        return (
          <Button
            mt={4}
            {...triggerProps}
            shadow={6}
            _text={{ color: 'white' }}
          >
            Trigger
          </Button>
        );
      }}
    >
      <Popover.Content accessibilityLabel="hello world" borderRadius={'xl'}>
        <Popover.Arrow />
        <Popover.CloseButton />
        <Popover.Header>Confirmation</Popover.Header>
        <Popover.Body>
          Are you sure you want to continue with your action?
        </Popover.Body>
        <Popover.Footer justifyContent="flex-end">
          <Button.Group>
            <Button size="sm" variant="ghost" _text={{ color: 'white' }}>
              Cancel
            </Button>
            <Button size="sm" _text={{ color: 'white' }}>
              Apply
            </Button>
          </Button.Group>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  );
}
