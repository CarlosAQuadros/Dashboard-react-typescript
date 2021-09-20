import React from "react";
import logoimg from '../../assets/logo.svg'

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

import {
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink
} from './styles'

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoimg} alt={'logo minha carteira'} />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href={'#'}>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href={'#'}>
                    <MdArrowDownward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href={'#'}>
                    <MdArrowUpward/>
                    Saidas
                </MenuItemLink>
                <MenuItemLink href={'#'}>
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>

            </MenuContainer>
        </Container>

    )

}
export default Aside;