import React from "react";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Product from "./Product.js";

const Products = props => {
  return(
    <Box m={{base: "80px 0 40px 0", md: "100px 0 40px 0"}}>
      <Grid gap="20px" templateColumns={{base: "auto", sm: "repeat(2, auto)", md: "repeat(3, auto)"}} >
        {props.products.map(
          obj => 
          <GridItem key={obj.id} >
            <Product product={obj} handleAddToCart={props.handleAddToCart} />
          </GridItem>
        )}          
      </Grid>
    </Box>
  )
};

export default Products;