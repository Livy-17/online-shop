import React from "react";
import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const ModalItem = props => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" mb='40px'>
      <Image src={props.item.image.url} w="200px" h="100px" objectFit="contain" />
      <Heading size="sm" m='10px 0 10px 0' w='90%'>{props.item.name}</Heading>
      <Flex alignItems="center" w="90%">
        <Text fontSize="sm" mr="auto">{props.item.price.formatted_with_symbol}</Text>
        <Text _hover={{cursor: "pointer"}} onClick={() => props.handleUpdateCartQuantity(props.item.id, props.item.quantity - 1)}>-</Text>
        <Text fontSize="xs" m='0 10px 0 10px'>{props.item.quantity}</Text>
        <Text _hover={{cursor: "pointer"}} onClick={() => props.handleUpdateCartQuantity(props.item.id, props.item.quantity + 1)}>+</Text>
        <DeleteIcon ml='20px' _hover={{cursor: "pointer"}} onClick={() => props.handleRemoveFromCart(props.item.id)}  />
      </Flex>
    </Flex> 
  )
};

export default ModalItem;