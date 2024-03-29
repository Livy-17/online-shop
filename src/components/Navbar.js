import React from "react";
import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import MyDrawer from "./cart/MyDrawer.js";
import MyModal from "./cart/MyModal.js";
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = props => {

  const [isOpenDrawer, setDrawer] = React.useState(false);
  const openDrawer = () => {
    setDrawer(true)
  };
  const closeDrawer = () => {
    setDrawer(false)
  };

  const [isOpenModal, setModal] = React.useState(false);
  const openModal = () => {
    setModal(true)
  };
  const closeModal = () => {
    setModal(false)
  };

  const drawerRef = React.useRef();
  const modalRef = React.useRef();

  const breakpointsOnClick = useBreakpointValue({base: openModal, lg: openDrawer});
  const breakpointsRef = useBreakpointValue({base: modalRef, lg: drawerRef});

  return (
    <Box w="100vw" zIndex="99">

      <Flex alignItems="center" bg="rgba(40, 40, 40, 0.3)" backdropFilter="blur(10px)" position="fixed" top="0" w="100vw" h={{base: "50px", lg: "60px"}}>
        <Heading as={Link} to="/" size="lg" mr={{base: "10px", lg: "30px"}} color="white" ml={{base: "10px", lg: "30px"}} _hover={{cursor: "pointer"}} >EpicShoes</Heading>
        <Text as={Link} to="/products" fontSize="xl" mr="auto" color="white" _hover={{cursor: "pointer", bg: "rgba(40, 40, 40, 0.3)", borderRadius: "10px"}} _active={{bg: "rgba(40, 40, 40, 0.6)"}} p="5px 10px 5px 10px" >Store</Text>
        <Flex alignItems="center" justifyContent="center" bg={{base: "rgba(40, 40, 40, 0.1)", lg: "rgba(40, 40, 40, 0.3)"}} borderRadius="10px" w={{base: "60px", lg: "60px"}} mr={{base: "10px", lg: "40px"}}>
          <ShoppingCartIcon className="Navbar--ShoppingCartIcon" ref={breakpointsRef} onClick={breakpointsOnClick} sx={{width: "40px", height: "40px"}}/>
          <Badge bg="none" color="white">{props.totalItems}</Badge>
        </Flex>
      </Flex>

      <MyDrawer handleRemoveFromCart={props.handleRemoveFromCart} handleUpdateCartQuantity={props.handleUpdateCartQuantity} handleEmptyCart={props.handleEmptyCart} cart={props.cart} isOpen={isOpenDrawer} placement="right" onClose={closeDrawer} finalFocusRef={drawerRef} />

      <MyModal isOpen={isOpenModal} onClose={closeModal} handleRemoveFromCart={props.handleRemoveFromCart} handleUpdateCartQuantity={props.handleUpdateCartQuantity} handleEmptyCart={props.handleEmptyCart} cart={props.cart} placement="right" finalFocusRef={drawerRef} />

    </Box>
  )
};

export default Navbar;