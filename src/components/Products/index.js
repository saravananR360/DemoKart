import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSingleProduct,
  storeCartItems,
} from "../../StateManagement/Reducers/ProductSlice";
import { Box, Button } from "@mui/material";
import { FlexBox, Image, PaperBox, Para } from "../Home/styles";
import CircularProgress from "@mui/joy/CircularProgress";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Input } from "./styles";

const Products = () => {
  const Product = useSelector((state) => state.product.singleProduct);
  const dispatch = useDispatch();
  const params = useParams();
  const [count, setCount] = useState(0);
  const loading = useSelector((state) => state.product.productLoading);
  const cartItems = useSelector((state) => state.product.cart);

  const addToCart = () => {
    dispatch(storeCartItems({ id: Product.id, count }));
  };

  const handleInput = (e) => {
    if (!isNaN(e.target.value)) setCount(Number(e.target.value));
  };

  const changeCount = (type) => {
    if (type === "add") {
      if (count + 1 >= 0 && count + 1 < 100) setCount(count + 1);
    } else {
      if (count - 1 >= 0 && count - 1 < 100) setCount(count - 1);
    }
  };

  useEffect(() => {
    if (params.pid) {
      dispatch(getSingleProduct({ id: params.pid }));
      setCount(
        Number(
          cartItems
            .filter((x) => Number(x.id) === Number(params.pid))
            .map((x) => x.count)
        )
      );
    }
  }, []);

  return (
    <FlexBox alignItems="start ">
      {!loading ? (
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
          <FlexBox width="50%" textAlign="left" justifyContent="start" pt={2}>
            <Para fw="600">{Product.title}</Para>
            <FlexBox justifyContent="start" py={6}>
              <Para width="25%">&#36;&nbsp;{Product.price}</Para>
              <FlexBox
                $round
                sx={{ bgcolor: "lightgrey" }}
                height="32px"
                width="32px"
                $hover
              >
                <RemoveIcon onClick={() => changeCount("minus")} />
              </FlexBox>
              <Input value={count} onChange={handleInput} maxLength={2} />

              <FlexBox
                $round
                sx={{ bgcolor: "lightgrey", mr: 2 }}
                height="32px"
                width="32px"
                $hover
              >
                <AddIcon onClick={() => changeCount("add")} />
              </FlexBox>
              <Button variant="contained" onClick={() => addToCart()}>
                Add to cart
              </Button>
            </FlexBox>
            <Para mr="24px" fw="600" mb="0 !important">
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
