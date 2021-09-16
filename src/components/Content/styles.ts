import styled from "styled-components";

export const Container = styled.div`
    padding: 25px;
    color:${props => props.theme.colors.white} ;
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};
`