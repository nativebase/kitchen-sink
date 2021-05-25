import React from 'react';
import { Button, useToast, VStack } from 'native-base';

export const Example = () => {
  const toast = useToast();
  const toastIdRef = React.useRef();

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function closeAll() {
    toast.closeAll();
  }

  function addToast() {
    toastIdRef.current = toast.show({
      title: 'Hi, Nice to see you ( ´ ∀ ` )ﾉ',
    });
  }

  return (
    <VStack space={2}>
      <Button onPress={addToast}>Toast</Button>
      <Button onPress={close} variant="outline">
        Close last toast
      </Button>
      <Button onPress={closeAll} variant="outline">
        Close all toasts
      </Button>
    </VStack>
  );
};
