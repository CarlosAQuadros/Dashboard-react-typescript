import React from "react";
import ContentHeader from "../../components/ContentHeader";
import Selectinput from "../../components/SelectInput";

import{ Container }from './styles'

const Dashboard: React.FC =()=>{

    const options = [
        {value :'carlos', label:'carlos'},
        {value :'ana', label:'ana'},
        {value :'nati', label:'nati'}
    ]

    return (
        <Container>
            <ContentHeader
                title={'Dashboard'}
                lineColor={'white'}
            >
                <Selectinput options={options}/>

            </ContentHeader>
        </Container>
    )

}
export default Dashboard;