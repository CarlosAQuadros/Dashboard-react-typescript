import React from "react";
import {
    Container,
    Profile,
    Welcome,
    UserName

} from './styles'

const MainHeader: React.FC =()=>{
    return (
        <Container>
             <h1>Togle</h1>
             <Profile>
                 <Welcome>olá</Welcome>
                 <UserName>Carlos</UserName>
             </Profile>
        </Container>
       
    )

}
export default MainHeader;