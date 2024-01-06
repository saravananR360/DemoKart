import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSingleProduct,
  storeCartItems,
} from "../../StateManagement/Reducers/ProductSlice";
import { Box, Button } from "@mui/material";
import { FlexBox, Image, PaperBox, Para } from "../Home/styles";
import CircularProgress from "@mui/joy/CircularProgress";

const Products = () => {
  const Product = useSelector((state) => state.product.singleProduct);
  const dispatch = useDispatch();
  const params = useParams();

  const AddToCart = () => {
    dispatch(storeCartItems(Product.id));
  };

  useEffect(() => {
    if (params.pid) dispatch(getSingleProduct({ id: params.pid }));
  }, []);

  return (
    <FlexBox>
      {Object.keys(Product).length > 0 ? (
        <>
          <Box
            width="50%"
            sx={{ py: 4, display: "flex", justifyContent: "end" }}
          >
            <PaperBox elevation={3} margin="0 40px 0 0">
              <Image
                src={Product.image}
                height="calc(100% - 16px)"
                width="calc(100% - 16px)"
              />
            </PaperBox>
          </Box>
          <FlexBox
            width="50%"
            textAlign="left"
            justifyContent="flex-start"
            alignItems="start"
          >
            <Para>{Product.title}</Para>
            <FlexBox justifyContent="start">
              <Para>&#36;&nbsp;{Product.price}</Para>
              <Button variant="contained" onClick={() => AddToCart()}>
                Add to cart
              </Button>
            </FlexBox>
            <Para width="max-content" mr="24px">
              Description :
            </Para>
            <Para>{Product.description}</Para>
          </FlexBox>
        </>
      ) : (
        <FlexBox height="400px">
          <CircularProgress />
        </FlexBox>
      )}
    </FlexBox>
  );
};

export default React.memo(Products);
