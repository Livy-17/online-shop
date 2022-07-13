import React from "react";
import { Image, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

const Product = props => {
  return (
    <Flex flexDirection="column" bg="white" borderRadius="10px" p="40px 20px 40px 20px" w={{base: '300px', md: "400px"}} h={{base: '400px', md: "450px"}} alignItems="center" justifyContent="center">
      <Image mb="60px" src={props.product.image.url} alt="" w={{base: '250px', md: "300px"}} h={{base: '120px', md: "150px"}} objectFit="contain" />
      <Heading size="sm" mb="10px" w={{base: '250px', md: "300px"}}>{props.product.name}</Heading>
      <Text mb={{base: "30px", md: "60px"}} dangerouslySetInnerHTML={{ __html: props.product.description }} size="sm" w={{base: "250px", md: "300px"}} />
      <Flex alignItems="center" w={{base: "250px", md: "300px"}} justifyContent="space-between">
        <Text size="sm">{props.product.price.formatted_with_symbol}</Text>
        <PlusSquareIcon p="10px 10px 10px 10px" w="40px" h="40px" _hover={{cursor: "pointer", bg: "rgba(40, 40, 40, 0.1)", borderRadius: "5px",}} _active={{bg: "rgba(40, 40, 40, 0.3)"}} onClick={() => props.handleAddToCart(props.product.id, 1)} />
      </Flex>
    </Flex>
  )
};

export default Product;