import React from 'react';
import styled from '@emotion/styled';

const PlayerCard = ({player}) => {
    return (

        <tr>
            <td>{player.Name}</td>
            <td>{player.Position}</td>
            <td>{player.PositionCategory}</td>
        </tr>
        
    );
}

export default PlayerCard;

