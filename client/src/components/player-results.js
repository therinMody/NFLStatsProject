import React from 'react';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import { QueryData } from '../components';
import PlayerCard from '../containers/player-card';


//gql to retrieve the list of players for week and team
const GET_PLAYERS = gql`
    query getPlayerStats($teamKey: String!, $week: Int!) {
        getPlayerStats(teamKey: $teamKey, week: $week) {
            PlayerID
            Name
            Position
            PositionCategory
        }
    }
`;

const PlayerResults = ({ team, week }) => {

    console.log(team);

    const { loading, error, data } = useQuery(GET_PLAYERS, {
        variables: { teamKey: team, week: week }
    });


    return (
        <Results>

            <h3>Players on {team} for week: {week}</h3>

            <PlayerContainer>

                <PlayerTable>
                    <tr>
                        <td>Name</td>
                        <td>Position</td>
                        <td>Category</td>
                    </tr>

                    <tr>
                        <td colSpan={3}><br/></td>
                    </tr>

                    <QueryData loading={loading} error={error} data={data}>
                    {data?.getPlayerStats?.map((player) => (
                        <PlayerCard key={player.PlayerID} player={player} />
                    ))}
                </QueryData>

                </PlayerTable>

                
            </PlayerContainer>


        </Results>
    );
}

export default PlayerResults;

const Results = styled.div({
    width: '66%',
    backgroundColor: '#141414',
    color: '#FFFFFF',
    float: 'right',
    height: 'fit-content',
    marginBottom: '10%',
    marginRight: '3%',
    fontSize: '200%',
});

const PlayerContainer = styled.div({

});

const PlayerTable = styled.table({
    borderCollapse: "separate",
    borderSpacing: "20px 20px",
    width: '100%',
});