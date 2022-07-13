import React from "react";
import {Flex, Box, Heading, Text } from "@chakra-ui/react";
import Shipping from "./Shipping";
import Summary from "./Summary.js";
import { Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

const Checkout = props => {

  const [checkoutToken, setCheckoutToken] = React.useState(null);
  const [shippingData, setShippingData] = React.useState({});
  const [tabIndex, setTabIndex] = React.useState(0);

  React.useEffect(() => {

    if (props.cart.id) {
      const generateToken = async () => { try {
          const token = await commerce.checkout.generateToken(props.cart.id, {type: 'cart'});
          setCheckoutToken(token);
        } catch {
          console.log("Error");
        }
      }

      generateToken();
    }

  }, [props.cart]);

  const Next = (data) => {
    setShippingData(data);
  }

  const goTabOne = () => {
    setTabIndex(0);
  }

  const goTabTwo = () => {
    setTabIndex(1);
  }

  const [orderConfirmed, setOrderConfirmed] = React.useState(false);

  const handleOrderConfirmation = () => {
    setOrderConfirmed(true);
  }

  if (!orderConfirmed) {
  return (
    <Box h={{base: "", md: "1080px"}}>
      <Flex m={{base: "40px 0 0 0", md: "200px 0 140px 0"}} bg="white" p="50px 50px 50px 50px" borderRadius="10px">
        <Tabs index={tabIndex}>
          <TabList>
            <Tab fontWeight="extrabold">Shipping</Tab>
            <Tab fontWeight="extrabold">Summary</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {checkoutToken ? 
              <Shipping checkoutToken={checkoutToken} handleNext={Next} goTabTwo={goTabTwo} /> 
              :
              <Flex flexDirection="column">
                <Text mt="20px" mb="20px">Loading...</Text> 
                <Button as={Link} to="/">Back to shop</Button>
              </Flex>
              }
            </TabPanel>
            <TabPanel>
              {/* {shippingData && checkoutToken && props.handleCaptureCheckout && <Summary shippingData={shippingData} checkoutToken={checkoutToken} goTabOne={goTabOne} handleCaptureCheckout={props.handleCaptureCheckout} Next={Next} errorMessage={props.errorMessage} handleEmptyCart={props.handleEmptyCart} handleOrderConfirmation={handleOrderConfirmation} />} */}
              { checkoutToken && <Summary shippingData={shippingData} checkoutToken={checkoutToken} goTabOne={goTabOne} handleCaptureCheckout={props.handleCaptureCheckout} errorMessage={props.errorMessage} handleEmptyCart={props.handleEmptyCart} handleOrderConfirmation={handleOrderConfirmation} /> }
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )} else if (props.order.customer) {
    return (
      <Text m={{base: "", md: "40px 0 40px 0"}} pt={{base: "", md: "60px"}} fontSize="2xl" textAlign="center" >Your order has been placed!<br/>An confirmation email will be sent to your email address.</Text>
    )
  }
};

export default Checkout;