import styled from "styled-components";
import { PageText } from "../helpers/PageText";
import { PageItemWrapper } from "../helpers/ItemWrapper";

export const Container = styled.div`
  display: flex;
  padding: 1em;
`;
export const LetContainer = styled.div`
  width: 18vw;
  height: 80vh;
  border-right: 2px solid #ddd;

  @media (max-width: 650px) {
    display: none;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 82vw;
  height: 80vh;
  margin-left: 1.5em;
`;

export const Wrapper = styled(PageItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "left")};
  margin: ${(props) => (props.margin ? props.margin : "")};
`;

export const Image = styled.img`
  width: 13em;
`;

export const Text = styled(PageText)`
  color: ${(props) => (props.color ? props.color : "#131A22")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "#131A22")};
`;
export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  padding-bottom: 0.1em;
  font-size: 0.9em;
`;
export const ImageContainer = styled.div`
  height: 14em;
  display: flex;
  align-items: center;
`;
export const SearchResult = styled.div`
  width: 95%;
  padding: 0.6em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
export const BoldText = styled.div`
  font-weight: bold;
  padding: 0.4em;
`;

export const IconWrapper = styled.div`
  color: #ff9900;
  border: none;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 18em);
  grid-gap: 2em;
  margin-top: 2em;

  @media (max-width: 915px) {
    grid-template-columns: repeat(auto-fit, 14em);
    align-items: center;
    justify-content: center;
  }
`;
