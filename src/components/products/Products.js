import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Product from "./Product.js";

const Products = props => {
  return(
    <Box m={{base: "80px 0 40px 0", lg: "100px 0 40px 0"}}>
      <Grid gap="20px" templateColumns={{base: "repeat(1, auto)", md: "repeat(2, auto)", xl: "repeat(3, auto)"}} >
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