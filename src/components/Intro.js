import React from "react";
import { useBreakpointValue, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Intro = props => {

  const Intro_pic = useBreakpointValue({base: "url('Intro_pic_base.webp')", lg: "url('Intro_pic_md.webp')"});

  return (
    <Flex h={{base: "100vh", lg: "100vh"}} w={{base: "100vw", lg: "100vw"}} alignItems="center" justifyContent="center" backgroundImage={Intro_pic} backgroundSize="cover">
      <Flex justifyContent="center" alignItems="center" h={{base: "100vh", lg: "100vh"}} w={{base: "100vw", lg: "100vw"}} backdropFilter={{base: "blur(5px) brightness(90%)", lg: "blur(10px) brightness(80%)"}}>
        <Button as={Link} to="/products" w="200px" h="40px">Explore</Button>
      </Flex>
    </Flex>
  )
};

export default Intro;