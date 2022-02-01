import React from 'react';
import styled from '@emotion/styled';

const TeamCard = ({ team }) => {
    //destructure the team data
    const {City, Name, Division, Conference, WikipediaLogoUrl } = team;

    return (
        <TeamContainer>
            <CardImageContainer>
                <CardImage src={WikipediaLogoUrl} alt={Name} />
            </CardImageContainer>
            <CardContent>
                <CardName>{City} {Name}</CardName>
                <CardDivision>{Division}</CardDivision>
                <CardConference>{Conference}</CardConference>
            </CardContent>
        </TeamContainer>
    );

}

export default TeamCard;

const TeamContainer = styled.div({

});

const CardImageContainer = styled.div({

});

const CardImage = styled.div({

});

const CardContent = styled.div({

});

const CardName= styled.div({

});

const CardDivision= styled.div({

});

const CardConference= styled.div({

});