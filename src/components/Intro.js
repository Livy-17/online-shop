import React from "react";
import { useBreakpointValue, Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Intro = props => {

  const Intro_pic = useBreakpointValue({base: "url('Intro_pic_base.jpeg')", md: "url('Intro_pic_md.jpeg')"});

  return (
    <Flex h={{base: "", md: "100vh"}} w={{base: "", md: "100vw"}} alignItems="center" justifyContent="center" backgroundImage={Intro_pic} backgroundSize="cover">
      <Flex justifyContent="center" alignItems="center" h={{base: "", md: "100vh"}} w={{base: "", md: "100vw"}} backdropFilter="blur(10px) brightness(80%)">
        <Button as={Link} to="/products" w="200px" h="40px">Explore</Button>
      </Flex>
    </Flex>
  )
};

export default Intro;