import React from 'react';
import { Button, Modal } from 'native-base';
import { useState } from 'react';

export const Example = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        mt={4}
        shadow={6}
        onPress={() => setShowModal(true)}
        _text={{ color: 'white' }}
      >
        Button
      </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat.
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button _text={{ color: 'white' }}>LEARN MORE</Button>
              <Button
                _text={{ color: 'white' }}
                onPress={() => {
                  setShowModal(false);
                }}
              >
                ACCEPT
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
