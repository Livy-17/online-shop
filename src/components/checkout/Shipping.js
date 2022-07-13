import React from "react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Flex, Grid, GridItem, Button } from '@chakra-ui/react';
import { useForm, FormProvider, Controller, useFormContext } from "react-hook-form";
import FormTextField from "./FormTextField";
import FormSelectField from "./FormSelectField";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";
import { selectClasses } from "@mui/material";

const Shipping = props => {

  const methods = useForm();

  const [shippingCountries, setShippingCountries] = React.useState([]);
  const [shippingCountry, setShippingCountry] = React.useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = React.useState([]);
  const [shippingSubdivision, setShippingSubdivision] = React.useState('');
  const [shippingOptions, setShippingOptions] = React.useState([]);
  const [shippingOption, setShippingOption] = React.useState('');

  const fetchShippingCountries = async (checkoutTokenId) => {
    const response = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(response.countries); 
    setShippingCountry(Object.keys(response.countries)[0]);
  }

  const fetchSubdivisions = async (countryCode) => {
    const response = await commerce.services.localeListSubdivisions(countryCode);
    setShippingSubdivisions(response.subdivisions);
    setShippingSubdivision(Object.keys(response.subdivisions)[0]);
  }

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const response = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    setShippingOptions(response);
    setShippingOption(response[0].id);
  }

  React.useEffect(() => {
    fetchShippingCountries(props.checkoutToken.id)
  }, []);

  React.useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);
  
  React.useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(props.checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}));
  const options = shippingOptions.map((elem) => ({ id: elem.id, label: `${elem.description} - ${elem.price.formatted_with_symbol}`}));

  // const onSubmit = (data) => {
  //   // props.handleNext({...data, shippingCountry, shippingSubdivision: shippingSubdivision, shippingOption});
  //   data.preventDefault();
  //   console.log(data)
  // }
  
  // const onSubmit = (data) => {
  //   const firstName = data.target
  //   props.handleNext();
  // }

  const onSubmit = () => {
    // const shippingForm = document.getElementById('shippingForm');
    // document.body.appendChild(shippingForm);
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postcode = document.getElementById('postcode').value;
    const shippingCountry = document.getElementById('shippingCountry').value;
    const shippingSubdivision = document.getElementById('shippingSubdivision').value;
    const shippingOption = document.getElementById('shippingOption').value;
    props.handleNext({firstName: firstName, lastName: lastName, email: email, telephone: telephone, address: address, city: city, postcode: postcode, shippingCountry: shippingCountry, shippingSubdivision: shippingSubdivision, shippingOption: shippingOption});
  }

  // return (
  //   <Box w={{base: "", lg: "1000px"}} mt={{base: "", lg: "20px"}}>
  //     <FormProvider {...methods}>
  //       <form onSubmit={methods.handleSubmit(onSubmit)}>
  //         <Grid templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}} gap="10px">
  //           <FormTextField control={methods.control} name="firstName" label="First Name" required={true} />
  //           <FormTextField control={methods.control} name="lastName" label="Last Name" required={true} />
  //           <FormTextField control={methods.control} name="email" label="Email" required={true} />
  //           <FormTextField control={methods.control} name="telephone" label="Telephone" required={true} />
  //           <FormTextField control={methods.control} name="address" label="Address" required={true} />
  //           <FormTextField control={methods.control} name="postcode" label="Postcode" required={true} />
  //           <FormSelectField control={methods.control} name="shippingcountry" label="Shipping Country" value={shippingCountry} set={setShippingCountry} arrayName={countries} />
  //           <FormSelectField control={methods.control} name="shippingsubdivision" label="City/State" value={shippingSubdivision} set={setShippingSubdivision} arrayName={subdivisions} />
  //           <FormSelectField control={methods.control} name="shippingoption" label="Shipping Option" value={shippingOption} set={setShippingOption} arrayName={options} />
  //         </Grid>
  //         <br />
  //         <Flex justifyContent="space-between">
  //           <Button as={Link} to="/" w={{base: "",lg: "150px"}}>Back to Shop</Button>
  //           <Button type="submit" onClick={props.goTabTwo} w={{base: "", lg: "150px"}} bg="blue.100">Next</Button>
  //         </Flex>
  //       </form>
  //     </FormProvider>
  //   </Box>
  // )

  return (
    <Box w={{base: "", lg: "800px", xl: "1000px"}} mt={{base: "10px", lg: "20px"}}>
        {/* <form method="post" id='shippingForm'> */}
          <Grid templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}} gap="10px">
            <FormTextField name="firstName" label="First Name" required={true} id='firstName' />
            <FormTextField name="lastName" label="Last Name" required={true} id='lastName' />
            <FormTextField name="email" label="Email" required={true} id='email' />
            <FormTextField name="telephone" label="Telephone" required={true} id='telephone' />
            <FormTextField name="address" label="Address" required={true} id='address' />
            <FormTextField name="town_city" label="City" required={true} id='city' />
            <FormTextField name="postcode" label="Postcode" required={true} id='postcode' />
            <FormSelectField name="shippingcountry" label="Shipping Country" value={shippingCountry} set={setShippingCountry} arrayName={countries} id='shippingCountry' />
            <FormSelectField name="shippingsubdivision" label="County/State" value={shippingSubdivision} set={setShippingSubdivision} arrayName={subdivisions} id='shippingSubdivision' />
            <FormSelectField name="shippingoption" label="Shipping Option" value={shippingOption} set={setShippingOption} arrayName={options} id='shippingOption' />
          </Grid>
          <br />
          <Flex justifyContent="space-between">
            <Button type="button" as={Link} to="/" w={{base: "",lg: "150px"}}>Back to Shop</Button>
            <Button type="button" onClick={() => {onSubmit(); props.goTabTwo();}} w={{base: "", lg: "150px"}} bg="blue.100">Next</Button>
          </Flex>
        {/* </form> */}
    </Box>
  )

};

export default Shipping;