import React from "react";
import { FlexBox, PageTitle } from "../Home/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductContainer from "../Home/ProductContainer";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { storeCartItems } from "../../StateManagement/Reducers/ProductSlice";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cart);
  const allProducts = useSelector((state) => state.product.allProducts);

  return (
    <FlexBox>
      <PageTitle>My Cart</PageTitle>
      <Button
        onClick={() => {
          dispatch(storeCartItems([]));
        }}
        variant="outlined"
        startIcon={<DeleteIcon />}
        sx={{ ml: 2 }}
      >
        Clear cart
      </Button>
      <FlexBox mt="24px">
        {allProducts
          .filter((x) => cartItems.map((x) => x.id).includes(x.id))
          .map((item, ind) => (
            <ProductContainer key={ind} data={item} source="cart" />
          ))}
      </FlexBox>
    </FlexBox>
  );
};

export default React.memo(CategoriesPage);
