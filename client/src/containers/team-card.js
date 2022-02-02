import React from 'react';
import styled from '@emotion/styled';


const TeamCard = ({ team }) => {
    //destructure the team data
    const {City, Name, Division, Conference, WikipediaLogoUrl, PrimaryColor, SecondaryColor } = team;

    return (
        <TeamContainer>
            <CardImageContainer>
                <img width='200px' height='200px' src={WikipediaLogoUrl} alt={Name} />
            </CardImageContainer>
            <CardContent>
                <CardName>{City} {Name}</CardName>
                <CardConference>{Conference}</CardConference>
                <CardDivision>{Division}</CardDivision>
            </CardContent>
        </TeamContainer>
    );

}

export default TeamCard;

const TeamContainer = styled.div({
    padding: '1%',
    marginBottom: '1%',
    borderRadius: '1em',
    backgroundColor: 'grey'
});

const CardImageContainer = styled.div({

});

const CardContent = styled.div({
    padding: '2%',
    backgroundColor: '#000000'
});

const CardName= styled.div({
    fontSize: '200%',
});

const CardConference= styled.div({
    fontSize: '170%',
});

const CardDivision= styled.div({
    fontSize: '140%',
});

