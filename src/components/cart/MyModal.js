import React from "react";
import { Flex, Text, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import ModalItem from "./ModalItem.js";
import { Link } from "react-router-dom";

const MyModal = props => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} placement={props.placement} finalFocusRef={props.finalFocusRef} >
      <ModalOverlay />
      <ModalContent overflow='scroll' width='80vw'>
        <ModalHeader>Shopping Cart</ModalHeader>
        <ModalCloseButton />
        {props.cart.line_items &&
        props.cart.line_items.length === 0 ?
        <Text m='20px 0 40px 0' textAlign="center">Shopping cart is empty.<br />Add something!</Text> :
        <Box mt='20px'>
          <ModalBody>
            {props.cart.line_items && props.cart.line_items.map(obj => <ModalItem key={obj.id} item={obj} handleUpdateCartQuantity={props.handleUpdateCartQuantity} handleRemoveFromCart={props.handleRemoveFromCart} />)}
          </ModalBody>
          <ModalFooter>
            <Flex>
              <Button mr='10px' w={{base: '100px', sm: '125px'}} variant="outline" bg="red.100" onClick={() => {props.handleEmptyCart(); props.onClose();}}>Empty Cart</Button>
              <Button w={{base: '100px', sm: '125px'}} variant="solid" bg="blue.100" as={Link} to="/checkout" onClick={props.onClose}>Checkout</Button>
            </Flex>
          </ModalFooter>
        </Box>
        }
      </ModalContent>
    </Modal>
  )
};

export default MyModal;