import React from "react";
import { AppBar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MenuButton, PageName, NavBox } from "./styles";
import { useNavigate } from "react-router-dom";
import { setSingleProduct } from "../../StateManagement/Reducers/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { FlexBox } from "../Home/styles";

const TopNavbar = () => {
  const cartItems = useSelector((state) => state.product.cart);

  const pages = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/Products" },
    { name: "About", url: "/about" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToPage = (data) => {
    navigate(data.url);
    dispatch(setSingleProduct({}));
  };

  return (
    <>
      <AppBar position="static">
        <NavBox backcolor="#011F4B" px={3} $centerbetween>
          <PageName>DemoKart</PageName>
          <NavBox $round backcolor="#036C6B" sx={{ p: 1 }} cursor="pointer">
            <ShoppingCartIcon onClick={() => navigate("/cart")} />
            {cartItems.length !== 0 && (
              <NavBox
                height="16px"
                width="16px"
                sx={{
                  bgcolor: "red",
                  color: "white",
                  position: "absolute",
                  top: "-4px",
                  right: "-5px",
                  fontSize: "12px",
                }}
                $round
                $aligncenter
              >
                {cartItems.length}
              </NavBox>
            )}
          </NavBox>
        </NavBox>
        <NavBox backcolor="#03396c" $aligncenter sx={{ py: 1 }}>
          {pages.map((x) => (
            <MenuButton
              key={x.name}
              sx={{ mx: 4, color: "white" }}
              onClick={() => goToPage(x)}
            >
              {x.name}
            </MenuButton>
          ))}
        </NavBox>
      </AppBar>
    </>
  );
};

export default React.memo(TopNavbar);
