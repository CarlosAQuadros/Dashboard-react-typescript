import React from "react";
import { Container } from './styles';

import ContentHeader from "../../components/ContentHeader";
import Selectinput from "../../components/SelectInput";



const List: React.FC =()=>{

    const options = [
        {value :'carlos', label:'carlos'},
        {value :'ana', label:'ana'},
        {value :'nati', label:'nati'}
    ];

    return (
        <Container>
             <ContentHeader
                title={'Saidas'}
                lineColor={'red'}
            >
                <Selectinput options={options}/>

            </ContentHeader>
        </Container>
    )

}
export default List;