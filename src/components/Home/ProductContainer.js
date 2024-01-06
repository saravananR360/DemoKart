import React from "react";
import { useNavigate } from "react-router-dom";
import { PaperBox, Image, FlexBox, Para } from "./styles";

const ProductContainer = ({ data }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/products/" + data.id);
  };

  return (
    <PaperBox
      onClick={goToProduct}
      cursor="true"
      elevation={3}
      sx={{ borderRadius: "10px" }}
    >
      <Image src={data.image} />
      <FlexBox sx={{ flexDirection: "column" }}>
        <Para>{data.title}</Para>
        <Para>&#36;&nbsp;{data.price}</Para>
      </FlexBox>
    </PaperBox>
  );
};

export default ProductContainer;
