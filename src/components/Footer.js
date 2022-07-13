import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Footer = props => {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Flex color="white" bg="rgba(40, 40, 40, 0.3)" backdropFilter="blur(10px)" w="100vw" justifyContent="center" alignItems="center" position={currentPath=="/" ? "fixed" : "static"} bottom="0" p={{base: "", lg: "5px 0 5px 0"}}>
      <Text fontSize="xs">© 2022 Liwei Chen. All Rights Reserved</Text>
    </Flex>
  )
};

export default Footer;