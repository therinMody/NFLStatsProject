import React from 'react';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import { QueryData } from '../components';
import TeamCard from '../containers/team-card';

//gql to retrive the list of teams
const TEAMS = gql`
    query getTeams {
        getTeams {
            Key
            City
            Name
            Division
            Conference
            WikipediaLogoUrl
            PrimaryColor
            SecondaryColor
        }
    }
`;

const TeamList = () => {
    const { loading, error, data } = useQuery(TEAMS);

    return (

        <>

        <TeamContainer>
            <QueryData loading={loading} error={error} data={data}>
                {data?.getTeams?.map((team) => (
                    <TeamCard key={team.Key} team={team} />
                ))}
            </QueryData>
        </TeamContainer>

        </>
    );

};

export default TeamList;

const TeamContainer = styled.div({
    width: '56%',
    backgroundColor: '#141414',
    color: '#FFFFFF',
    float: 'right',
    height: 'fit-content',
    marginBottom: '10%',
    marginTop: '1%',
    textAlign: 'center',
    marginRight: '3%',
});