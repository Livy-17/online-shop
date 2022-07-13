import React from "react";
import { Text, Box, Flex,Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import DrawerItem from "./DrawerItem.js";
import { Link } from "react-router-dom";

const MyDrawer = props => {

  return (
    <Drawer isOpen={props.isOpen} placement={props.placement} onClose={props.onClose} finalFocusRef={props.finalFocusRef} >
      <DrawerOverlay>
      <DrawerContent overflow='scroll'>
        <DrawerCloseButton />
        <DrawerHeader>Shopping Cart</DrawerHeader>
        {props.cart.line_items &&
        props.cart.line_items.length === 0 ?
        <Text m="20px 0 0 20px" w="270px" textAlign="center" fontSize="sm">Shopping cart is empty. Add something!</Text> :
        <Box>
          <DrawerBody>
            {props.cart.line_items && props.cart.line_items.map(obj => <DrawerItem key={obj.id} item={obj} handleUpdateCartQuantity={props.handleUpdateCartQuantity} handleRemoveFromCart={props.handleRemoveFromCart} />)}
          </DrawerBody>
          <DrawerFooter>
            <Flex flexDirection="column">
              <Text ml="auto" mb="10px">{props.cart.subtotal && `Subtotal: ${props.cart.subtotal.formatted_with_symbol}`}</Text>
              <Flex>
                <Button mr={{base: "", lg: "10px"}} w={{base: "", lg: "125px"}} variant="outline" bg="red.100" onClick={() => {props.handleEmptyCart(); props.onClose();}}>Empty Cart</Button>
                <Button w={{base: "", lg: "125px"}} variant="solid" bg="blue.100" as={Link} to="/checkout" onClick={props.onClose}>Checkout</Button>
              </Flex>
            </Flex>
          </DrawerFooter>
        </Box>
        }
      </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
};

export default MyDrawer;