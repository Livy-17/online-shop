import React from "react";
import { Image, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { DeleteIcon, PlusSquareIcon } from "@chakra-ui/icons";

const CartItem = props => {
  return (
    <Flex flexDirection="column" m="30px 0 30px 0" p="10px 10px 10px 10px" w="270px" h="190px" alignItems="center" justifyContent="center">
      <Image mb="10px" src={props.item.image.url} w="220px" h="90px" objectFit="contain" />
      <Heading size="sm" mb="5px">{props.item.name}</Heading>
      <Flex alignItems="center" w="100%">
        <Text fontSize="sm" mr="auto">{props.item.price.formatted_with_symbol}</Text>
        <Text mr="5px" p="0 7px 0 7px" _hover={{cursor: "pointer"}} onClick={() => props.handleUpdateCartQuantity(props.item.id, props.item.quantity - 1)}>-</Text>
        <Text fontSize="xs">{props.item.quantity}</Text>
        <Text ml="5px" p="0 7px 0 7px" _hover={{cursor: "pointer"}} onClick={() => props.handleUpdateCartQuantity(props.item.id, props.item.quantity + 1)}>+</Text>
        <DeleteIcon w="13px" h="13px" ml="10px" _hover={{cursor: "pointer"}} onClick={() => props.handleRemoveFromCart(props.item.id)}  />
      </Flex>
    </Flex> 
  )
};

export default CartItem;