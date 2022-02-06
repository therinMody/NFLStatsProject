import React from 'react';
import styled from '@emotion/styled';
//import { useQuery, gql } from '@apollo/client';

const PlayerContent = () => {
    return (
        <SectionContainer>
            <IndexHeader>View Player Stats</IndexHeader>

            <SelectionContainer>

            </SelectionContainer>

        </SectionContainer>
    );
}

export default PlayerContent;

const SectionContainer = styled.div({
    marginTop: '160px'

});

const IndexHeader = styled.div({
    color: '#F5F5F5',
    fontSize: '250%',
    marginLeft: '30%',
    marginTop: '5%',
    marginBotton: '5%',
    width: '66%',
    textAlign: 'center',
});

const SelectionContainer = styled.div({

});