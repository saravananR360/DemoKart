import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const PlusIcon = styled(AddIcon)`
  transition-duration: 0.3s;

  &:hover {
    border-color: blue;
  }
`;

export const MinusIcon = styled(RemoveIcon)`
  transition-duration: 0.3s;

  &:hover {
    border-color: blue;
  }
`;

export const Input = styled.input`
  height: 32px;
  width: 44px;
  border-radius: 8px;
  padding: 0 10px;
  border: 1px solid lightgrey;
  outline: none;
  margin: 8px 12px;
`;
