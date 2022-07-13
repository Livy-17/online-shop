import React from "react";
import { Heading, Text, Box, Flex, Divider } from "@chakra-ui/react";

const Review = props => {
  return (
    <Flex flexDirection="column" mt={{base: "20px", md: "40px"}}>
      {props.checkoutToken.live.line_items.map((product) => (
        <Flex flexDirection="column" key={product.name} mb={{base: "20px", md: "30px"}} bg="gray.100" p="20px 20px 20px 20px" borderRadius="10px">
          <Text fontSize="xl">{product.name}</Text>
          <Flex>
            <Text mr="auto" fontSize="lg">{`Quantity: ${product.quantity}`}</Text>
            <Text fontSize="lg">{product.line_total.formatted_with_symbol}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
};

export default Review;