import React from "react";
import { FlexBox, Para } from "../Home/styles";
import { NavBox } from "../TopNavbar/styles";
import Link from "@mui/joy/Link";

const Footer = () => {
  const pages = [
    { name: "Home", url: "/" },
    { name: "Categories", url: "/categories" },
    { name: "About", url: "/about" },
  ];

  return (
    <NavBox width="100%" padding={3} backcolor="#011F4B">
      <NavBox backcolor="inherit" $column sx={{ px: 3, py: 1.5 }}>
        <Para textDecoration="underline" color="white" width="max-content">
          Links
        </Para>
        {pages.map((x) => (
          <Link key={x.name} sx={{ my: 1, color: "#90EE90" }} href={x.url}>
            {x.name}
          </Link>
        ))}
      </NavBox>
      <NavBox backcolor="inherit" color="#90EE90" $column sx={{ m: "auto" }}>
        <Para color="white" width="max-content">
          DemoKart
        </Para>
        <Para width="max-content">Door No, Sample Street</Para>
        <Para width="max-content">Sample City - 000000</Para>
      </NavBox>
    </NavBox>
  );
};

export default Footer;
