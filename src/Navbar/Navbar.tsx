import React from "react";
import logo from "../assests/logo.png";
import flag from "../assests/flag.png";
import {
  Container,
  Logo,
  Wrapper,
  Text,
  Select,
  SearchBox,
  SearchIconWrapper,
  Flag,
} from "./style";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  ArrowDropDown,
  RoomOutlined,
} from "@material-ui/icons";

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo src={logo}></Logo>
        <Wrapper flexDirection="row" alignItems="center">
          <RoomOutlined />

          <Wrapper>
            <Text fontSize=".7em">Deliver in</Text>
            <Text>India</Text>
          </Wrapper>
        </Wrapper>
        <Select>
          <option value="All">All</option>
        </Select>
        <SearchBox />
        <SearchIconWrapper>
          <SearchOutlined />
        </SearchIconWrapper>

        <Wrapper flexDirection="row" alignItems="flex-start">
          <Flag src={flag} />
          <ArrowDropDown />
        </Wrapper>
        <Wrapper>
          <Text fontSize=".7em">Hello, Sing I</Text>
          <Wrapper flexDirection="row" alignItems="center">
            <Text>Account & List </Text>
            <ArrowDropDown />
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <Text>Rerturn</Text>
          <Text>& Orders</Text>
        </Wrapper>

        <Wrapper flexDirection="row" alignItems="center">
          <Wrapper alignItems="center">
            <Text color="#ff9900">0</Text>
            <ShoppingCartOutlined />
          </Wrapper>
          <Text>Cart</Text>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
