import React from "react";
import { Grid, GridItem, Select } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

const FormSelectField = props => {

  // const { control } = useForm();
  // const handleSelectOnChange = (event) => props.set(event.target.value);
  // const selectOptions = [];
  // props.arrayName.map((item) => selectOptions.push({value: item.id, label: item.label, key: item.id}));

  // return (
  //   <GridItem>
  //     <label style={{fontWeight: "bold"}}>{props.label}</label>
  //     {/* <Controller name={props.name} control={props.control} render={
  //       ({handleSelectOnChange}) => <Select value={props.value} onChange={handleSelectOnChange} options={selectOptions} />
  //     } /> */}

  //     <Controller name={props.name} control={props.control} render={
  //       () => 
  //       <Select mt="5px" value={props.value} onChange={(event) => props.set(event.target.value)}>
  //         {props.arrayName.map((item) => (
  //           <option key={item.id} value={item.id}>{item.label}</option>
  //         ))}
  //       </Select>
  //     } />

  //     {/* <Select mt="5px" value={props.value} onChange={(event) => props.set(event.target.value)}>
  //       {props.arrayName.map((item) => (
  //         <option key={item.id} value={item.id}>{item.label}</option>
  //       ))}
  //     </Select> */}
  //   </GridItem>
  // )

  return (
    <GridItem>
      <label style={{fontWeight: "bold"}}>{props.label}</label>
      <Select mt="5px" name={props.name} onChange={(event) => props.set(event.target.value)} id={props.id}>
        {props.arrayName.map((item) => (
          <option key={item.id} value={item.id}>{item.label}</option>
        ))}
      </Select>
    </GridItem>
  )

};

export default FormSelectField;