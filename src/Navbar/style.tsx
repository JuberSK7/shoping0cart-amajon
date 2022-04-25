import styled from 'styled-components'
import { PageText as NavText } from "../helpers/PageText"
import { PageItemWrapper as NavItemWrapper } from '../helpers/ItemWrapper'


export const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
color: white;
background-color: #131A22;
`
export const Wrapper = styled(NavItemWrapper)`
display: flex;
flex-direction: ${(props) =>props.flexDirection ? props.flexDirection : "column"};
align-items: ${(props) =>props.alignItems ? props.alignItems : "flex-start" };
padding: .1em;
cursor: pointer;
border: 1px solid #131A22;

&:hover{
    
    border-redius: .2em;
}

@media(max-width: 850px){
    display: none;
}
`
export const Flag = styled.img`
width: 2em;`

export const Text = styled(NavText)`
color: ${(props) => props.color ? props.color : "#fffff"};
font-size: ${(props) => props.fontSize ? props.fontSize : ".9em"};

`
export const Logo = styled.img`
width: 6em;
padding: .2em .1em;
border: 1px solid #131A22;
cursor: pointer;

&:hover{

    border-radius: .2em;
}

`
export const Select = styled.select`
border: none;
padding: .72em .5em;
border-radius: .2em 0em 0em .2em;
cursor: pointer;



@media(max-width: 850px) {
    display: none;
}
`
export const SearchBox = styled.input`
background-color: #fff;
padding: .78em;
width: 47%;
border: none;
   
@media(max-width: 850px){
    border-redius: .2em;
    margin: .3em 0;
}
`
export const SearchIconWrapper = styled.span`
padding: .32em .5em;
color: #ff9900;
margin-left: -1em
background-color: #fabd60;
border-radius: 0em .2em .2em 0em;
cursor: pointer;
transition: all 250ms ease;

&:hover{
    background-color: #ff9900;
    color: #fff;
}
@media(max-width: 850px){
    display: none;
}

`