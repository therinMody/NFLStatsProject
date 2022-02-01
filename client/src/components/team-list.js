import React from 'react';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import { QueryData } from '../components';
import TeamCard from '../containers/team-card';

//gql to retrive the list of teams
export const TEAMS = gql`
    query getTeams {
        teamsForDisplay {
            Key
            City
            Name
            Division
            Conference
            WikipediaLogoUrl
        }
    }
`;

const TeamList = () => {
    const { loading, error, data } = useQuery(TEAMS);

    return (
        <TeamContainer>
            <QueryData loading={loading} error={error} data={data}>
                {data?.teamsForDisplay?.map((team, index) => (
                    <TeamCard key={team.Key} team={team} />
                ))}
            </QueryData>
        </TeamContainer>
    );

}

export default TeamList;

const TeamContainer = styled.div({
    width: '56%',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    float: 'right',
    
});