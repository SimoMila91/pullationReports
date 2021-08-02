import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'semantic-ui-react';

export default function MessageModal({open, closeModal}) {
  let history = useHistory();

  return (
    <Modal
        size="mini"
        open={open}
        onClose={closeModal}
      >
        <Modal.Header>Would you like to add a new pollution?</Modal.Header>
        <Modal.Content>
          <p>Click NO to be redirected to the home page</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={e => history.push('/')}>
            No
          </Button>
          <Button positive onClick={closeModal}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
  )
}