import styled from "styled-components";

export const Container = styled.div`
    color:${props => props.theme.colors.white} ;
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
`