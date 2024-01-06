import React, { useEffect, useState } from "react";
import { Container, PageTitle, FlexBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getProducts,
} from "../../StateManagement/Reducers/ProductSlice";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import ProductContainer from "./ProductContainer";
import DeleteIcon from "@mui/icons-material/Delete";

const HomePage = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const Categories = useSelector((state) => state.product.categories);
  const Products = useSelector((state) => state.product.products);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (selectedCategory !== "") {
      dispatch(getProducts({ category: selectedCategory }));
    } else {
      dispatch(getProducts(""));
    }
  }, [selectedCategory]);

  return (
    <Container>
      <FlexBox justifyContent="center">
        <PageTitle>All Products</PageTitle>
        <FlexBox sx={{ ml: "auto" }}>
          <Button
            onClick={() => setSelectedCategory("")}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Clear Filter
          </Button>
          <FormControl sx={{ minWidth: 150, m: "16px 16px 16px 32px" }}>
            <InputLabel id="category-select">Categories</InputLabel>
            <Select
              labelId="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Categories"
            >
              <MenuItem value="">All</MenuItem>
              {Categories.map((item, ind) => (
                <MenuItem key={ind} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        {Products.map((product) => (
          <ProductContainer key={product.title} data={product} />
        ))}
      </FlexBox>
    </Container>
  );
};

export default React.memo(HomePage);
