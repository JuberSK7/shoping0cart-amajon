import React from "react";
import {
  Container,
  LetContainer,
  RightContainer,
  Wrapper,
  Image,
  Text,
  Paragraph,
  ImageContainer,
  SearchResult,
  ProductContainer,
  BoldText,
  IconWrapper,
} from "./style";
import { departmentList, productdetails } from "./Info";
import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  Star,
  StarHalf,
} from "@material-ui/icons";

const Menubar: React.FC = () => {
  return (
    <>
    {/* /////////////////////     MAIN CONTAINER SHOPPING ITEMS  ///////////////   */}
    
      <Container>
        <LetContainer>
          <BoldText>Deparment</BoldText>
          {departmentList.map((item) => (
            <Paragraph>
              <KeyboardArrowLeft />
              {item}
            </Paragraph>
          ))}
        </LetContainer>
        <RightContainer>
          <SearchResult>
            <BoldText>1-12 of overs result's </BoldText>
            <BoldText>All Department </BoldText>
          </SearchResult>

          <ProductContainer>
            {productdetails.map((item) => (
              <Wrapper flexDirection="column">
                <ImageContainer>
                  <Image src={item.src} />
                </ImageContainer>
                <Text>{item.name}</Text>
                <Text fontSize=".8em" color="grey">
                  {item.by}
                </Text>

                <Wrapper>
                  <IconWrapper>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarHalf />
                  </IconWrapper>
                  <KeyboardArrowDown />
                  <Text color="blue">{item.starcount}</Text>
                </Wrapper>
                <Wrapper alignItems="center" margin=".3em 0 .3em 0">
                  <Text fontSize="1.3em">{item.price}</Text>
                  <Text color="grey">{item.shipping}</Text>
                </Wrapper>
                <Text>{item.available}</Text>
              </Wrapper>
            ))}
          </ProductContainer>
        </RightContainer>
      </Container>
    </>
  );
};

export default Menubar;
