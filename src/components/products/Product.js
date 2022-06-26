import React from "react";
import { Image, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

const Product = props => {
  return (
    <Flex flexDirection="column" bg="white" borderRadius="10px" p="40px 20px 40px 20px" w="400px" h="450px" alignItems="center" justifyContent="center">
      <Image mb="60px" src={props.product.image.url} alt="" w="300px" h="150px" objectFit="contain" />
      <Heading size="sm" mb="10px" w="300px">{props.product.name}</Heading>
      <Text mb="60px" dangerouslySetInnerHTML={{ __html: props.product.description }} size="sm" w="300px" />
      <Flex alignItems="center" w="300px" justifyContent="space-between">
        <Text size="sm">{props.product.price.formatted_with_symbol}</Text>
        <PlusSquareIcon p="10px 10px 10px 10px" w="40px" h="40px" _hover={{cursor: "pointer", bg: "rgba(40, 40, 40, 0.1)", borderRadius: "5px",}} _active={{bg: "rgba(40, 40, 40, 0.3)"}} onClick={() => props.handleAddToCart(props.product.id, 1)} />
      </Flex>
    </Flex>
  )
};

export default Product;