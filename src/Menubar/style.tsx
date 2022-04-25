import styled from "styled-components";

import { PageText as MenuText } from "../helpers/PageText";
import { PageItemWrapper as MenuItemWrapper } from "../helpers/ItemWrapper";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: #232f3e;
  padding: 0.3em;
`;

export const Wrapper = styled(MenuItemWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
`;

export const Text = styled(MenuText)`
  margin-right: 1em;
  padding: 0.5em 0.1em;
  cursor: pointer;
  boder: 1px solid #232f3e;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : ".9em")};

  &:hover {
    border-radius: 0.2em;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

export const LeftText = styled(Text)`
  @media (max-width: 850px) {
    display: block;
  }
`;
