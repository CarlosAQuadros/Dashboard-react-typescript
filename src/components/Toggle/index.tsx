import React from 'react';




import {
    ToggleSelector,
    Container,
    ToggleLabel
} from '../Toggle/styles';

const Toggle: React.FC = () => (
    
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector 
        onChange={()=>{console.log('mudou')}} 
        checked 
        uncheckedIcon={false}
        checkedIcon={false}

        />
        <ToggleLabel>Dark</ToggleLabel>

    </Container>

)
export default Toggle;