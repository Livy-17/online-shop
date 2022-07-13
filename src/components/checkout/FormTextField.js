import React from "react";
import { Input, Box, Grid, GridItem } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";

const FormTextField = props => {

  // const { control } = useFormContext();
  // const isError = false;

  // return (
  //   <GridItem>
  //     <label style={{fontWeight: "bold"}}>{props.label}</label>
  //     <Controller render={ () => <Input mt="5px" w="100%" />} control={props.control} name={props.name} rules={{required: props.required}} />
  //   </GridItem>
  // )

  return (
    <GridItem>
      <label style={{fontWeight: "bold"}}>{props.label}</label>
      <Input mt="5px" w="100%" name={props.name} id={props.id} isRequired={props.required} />
    </GridItem>
  )
};

export default FormTextField;