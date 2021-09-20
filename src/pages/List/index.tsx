import React from "react";
import { 
    Container,
    Content
 } from './styles';

import ContentHeader from "../../components/ContentHeader";
import Selectinput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/historyFinanceCard";



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
            <Content>
                <HistoryFinanceCard
                tagColor='#e44c4e'
                title='Conta de luz'
                subtitle='27/07/2021'
                amount='R$ 150,00'

                />
                
                
            </Content>
        </Container>
    )

}
export default List;