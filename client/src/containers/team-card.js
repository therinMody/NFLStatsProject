import React from 'react';
import styled from '@emotion/styled';


const TeamCard = ({ team }) => {
    //destructure the team data
    const {City, Name, Division, Conference, WikipediaLogoUrl, PrimaryColor, SecondaryColor } = team;

    let pColor = '#' + PrimaryColor;
    let sColor = '#' + SecondaryColor;

    const TeamContainer = styled.div({
        padding: '1%',
        width: '20%',
        height: 'fit-content',
        float: 'left',
        margin: '5%',
        height: '400px',
        borderRadius: '1em',
        backgroundColor: pColor,
        color: sColor,
        
    });

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

const CardImageContainer = styled.div({

});

const CardContent = styled.div({
    padding: '2%',
});

const CardName= styled.div({
    fontSize: '250%',
});

const CardConference= styled.div({
    fontSize: '170%',
});

const CardDivision= styled.div({
    fontSize: '140%',
});

