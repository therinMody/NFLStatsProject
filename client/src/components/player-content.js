import React from 'react';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import { QueryData } from '../components';
import { PlayerResults } from '../components';

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

const PlayerContent = () => {

    const { loading, error, data } = useQuery(TEAMS);
    const [week, setWeek] = React.useState(1);
    const [team, setTeam] = React.useState("ARI");

    //let resultsFlag = false;

    var weeks = [];
    for (var i = 1; i < 19; i++) {
        weeks.push(i);
    }

    function handleTeamChange() {
        setTeam(document.getElementById("teamSelection").value);
    }

    function handleWeekChange() {
        setWeek(parseInt(document.getElementById("weekSelection").value));
    }

    return (
        <SectionContainer>
            <IndexHeader>View Players for 2021 Regular Season</IndexHeader>

            <br></br>

            <SelectionContainer>
                <FormTable>
                    <tr>
                        <td>Team:</td>
                        <td>
                            <select id="teamSelection" value={team} onChange={handleTeamChange}>
                                <QueryData loading={loading} error={error} data={data}>
                                    {data?.getTeams?.map((team) => (
                                        <option key={team.Key} team={team} value={team.Key}> {team.City} {team.Name}</option>
                                    ))}
                                </QueryData>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Week:</td>
                        <td>
                            <select id="weekSelection" value={week} onChange={handleWeekChange}>
                                {weeks.map((week) => (
                                    <option>{week}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </FormTable>

                <hr></hr>

            </SelectionContainer>

            

            <PlayerResults team={team} week={week} />

        </SectionContainer>
    );

}

export default PlayerContent;

const SectionContainer = styled.div({
    marginTop: '160px'

});

const IndexHeader = styled.div({
    width: '66%',
    backgroundColor: '#141414',
    color: '#FFFFFF',
    float: 'right',
    height: 'fit-content',
    marginRight: '3%',
    fontSize: '300%',
});

const SelectionContainer = styled.div({
    width: '66%',
    backgroundColor: '#141414',
    color: '#FFFFFF',
    float: 'right',
    height: 'fit-content',
    marginTop: '1%',
    textAlign: 'center',
    marginRight: '3%',
    fontSize: '200%',
});

const FormTable = styled.table({
    borderCollapse: "separate",
    borderSpacing: "20px 20px",
    width: '50%',
});

