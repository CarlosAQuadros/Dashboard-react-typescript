import React, { useMemo } from "react";
import {sadEmoji, happyEmoji} from '../../utils/emojis'

import Toggle from './../Toggle';
import {

    Container,
    Profile,
    Welcome,
    UserName

} from './styles'

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * happyEmoji.length)
        return happyEmoji[indice]
    }, [])

    return (
        <Container>
            <Toggle/>
            <Profile>
                <Welcome>olá, {emoji}</Welcome>
                <UserName>Carlos</UserName>
            </Profile>
        </Container>

    )

}
export default MainHeader;