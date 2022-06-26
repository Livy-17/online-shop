import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import ModalItem from "./ModalItem.js";

const MyModal = props => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Shopping Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalItem />
        </ModalBody>
        <ModalFooter>
          <Button variant="solid">Checkout</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};

export default MyModal;