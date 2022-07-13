import React from "react";
import { Heading, Text, Button, Divider, Flex, Box, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Summary = props => {

  const handlePay = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement); 
    const { error, paymentMethod } = await stripe.createPaymentMethod({type: 'card', card: cardElement, billing_details: {name: `${props.shippingData.firstName} ${props.shippingData.lastName}`,}, });
    console.log(paymentMethod)
    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items : props.checkoutToken.live.line_items,
        customer: {firstname: props.shippingData.firstName, lastname: props.shippingData.lastName, email: props.shippingData.email },
        shipping: {name: `${props.shippingData.firstName} ${props.shippingData.lastName}`, street: props.shippingData.address, town_city: props.shippingData.city, county_state: props.shippingData.shippingSubdivision, postal_zip_code: props.shippingData.postcode, country: props.shippingData.shippingCountry},
        fulfillment: {shipping_method: props.shippingData.shippingOption},
        billing: {name: `${props.shippingData.firstName} ${props.shippingData.lastName}`, street: props.shippingData.address, town_city: props.shippingData.city, county_state: props.shippingData.shippingSubdivision, postal_zip_code: props.shippingData.postcode, country: props.shippingData.shippingCountry},
        payment: {gateway: 'stripe', card: {token: paymentMethod.id}},
        pay_what_you_want: '1000.00'
      }
      props.handleCaptureCheckout(props.checkoutToken.id, orderData);
    }
  }

  return (
    <Box>
      <Flex flexDirection="column" w={{base: "", md: "1000px"}} mt={{base: "20px", md: "20px"}}>
        <Heading fontSize="3xl" mb={{base: '20px', md: ''}}>Order Summary</Heading>
        <Review checkoutToken={props.checkoutToken} />
        <Text mt={{base: "30px", md: "30px"}} fontSize="xl" fontWeight="bold">{`Total: ${props.checkoutToken.live.subtotal.formatted_with_symbol}`}</Text>
        <Divider m={{base: "30px 0 30px 0", md: "40px 0 40px 0"}} />
        <Heading fontSize="3xl" mb={{base: "30px", md: "40px"}}>Payment Method</Heading>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({elements, stripe}) => (
              <form onSubmit={(event) => {handlePay(event, elements, stripe);}}>
                <CardElement />
                <Flex mt={{base: "60px", md: "40px"}} justifyContent="space-between">
                  <Button onClick={props.goTabOne} w={{base: "100px", md: "150px"}}>Back</Button>
                  {/* { props.checkoutToken.live.line_items &&  <Text>123</Text> }
                  { props.shippingData.firstName && <Text>456</Text> }
                  { props.shippingData.lastName && <Text>789</Text> }
                  { props.shippingData.email &&  <Text>qwe</Text> }
                  { props.shippingData.address &&  <Text>asd</Text> }
                  { props.shippingData.shippingSubdivision &&  <Text>rty</Text> }
                  { props.shippingData.postcode &&  <Text>fgh</Text> }
                  { props.shippingData.shippingOption && <Text>vbn</Text> } */}
                  <Button type="button" disabled={!stripe} w={{base: "100px", md: "150px"}} bg="blue.100">Pay</Button>
                </Flex>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </Flex>
    </Box>
  )
};

export default Summary;