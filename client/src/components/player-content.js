import React from 'react';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import { QueryData } from '../components';

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
    for (var i=1; i < 19; i++) {
        weeks.push(i);
    }

    function handleTeamChange() {
        setTeam(document.getElementById("teamSelection").value);
    }

    function handleWeekChange() {
        setWeek(document.getElementById("weekSelection").value);
    }

    return (
        <SectionContainer>
            <IndexHeader>View Player Stats for 2021 Regular Season</IndexHeader>

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

            </SelectionContainer>

            <Results>
                <h1>{team}</h1>
                <h1>{week}</h1>
            </Results>

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
    width: '66%',
    backgroundColor: '#141414',
    color: '#FFFFFF',
    float: 'right',
    height: 'fit-content',
    marginBottom: '10%',
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

const Results = styled.div({
    width: '66%',
    backgroundColor: '#141414',
    color: '#FFFFFF',
    float: 'right',
    height: 'fit-content',
    marginBottom: '10%',
    marginTop: '1%',
    textAlign: 'center',
    marginRight: '3%',
    fontSize: '200%',
});