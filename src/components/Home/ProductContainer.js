import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PaperBox, Image, FlexBox, Para } from "./styles";
import { useSelector } from "react-redux";

const ProductContainer = ({ data, source }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.product.cart);

  const goToProduct = () => {
    navigate("/products/" + data.id);
  };

  return (
    <>
      <PaperBox
        onClick={goToProduct}
        cursor="true"
        elevation={3}
        sx={{ borderRadius: "10px" }}
        $cartBox
      >
        <Image src={data.image} />
        <FlexBox sx={{ flexDirection: "column" }}>
          <Para fw="600" width="100%">
            {data.title}
          </Para>
          <Para>&#36;&nbsp;{data.price}</Para>
        </FlexBox>
        {source === "cart" && (
          <FlexBox sx={{ marginTop: "auto" }}>
            Quantity :{" "}
            {cartItems.filter((x) => x.id === data.id).map((x) => x.count)}
          </FlexBox>
        )}
      </PaperBox>
    </>
  );
};

export default ProductContainer;
