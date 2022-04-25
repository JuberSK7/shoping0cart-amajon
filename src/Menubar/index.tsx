import React from "react";
import { Menu } from "@material-ui/icons";
import { Container, Wrapper, Text, LeftText } from "./style";

{
  /* /////////////////////     MAIN MENU BAR CONTAINER   ///////////////   */
}

const Mainbar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper>
          <Menu />
          <Text>All</Text>
        </Wrapper>

        <Wrapper>
          <Text>Best Sellers</Text>
          <Text>Mobile</Text>
          <Text>Customers Service</Text>
          <Text>Today's Deals</Text>
          <Text>Fashions</Text>
          <Text>Electronics</Text>
          <Text>Home&Kitchen</Text>
        </Wrapper>
      </Wrapper>

      <Wrapper>
        <LeftText>Shoping Made Easy | Downloade The App</LeftText>
      </Wrapper>
    </Container>
  );
};

export default Mainbar;
