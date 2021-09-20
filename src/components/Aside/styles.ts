import styled from "styled-components";


export const Container = styled.div`
    color:${props => props.theme.colors.white} ;
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};

    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
    
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 70px;
`
export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

`
export const Title = styled.h3`
    margin-left: 10px;
   
`
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    

    margin-top: 50px;

`
export const MenuItemLink = styled.a`
    margin: 7px 0;
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: opacity .3s ;
    &:hover{
        opacity: 0.7;
      

    }
    >svg{
        font-size: 18px;
        margin-right: 5px ;
    }

`