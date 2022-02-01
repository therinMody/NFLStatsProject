import {Link} from '@reach/router';
import React from 'react';
import styled from '@emotion/styled';

const Menu = () => {
    return (
        <MenuContainer>
            <MenuTitle>
                <h2>Index</h2>
            </MenuTitle>

            <hr></hr>

            <MenuContent>
                <MenuLink to="/teams">
                    <h2>Teams</h2>
                </MenuLink>

                <MenuLink to="/playerStats">
                    <h2>Player Stats by <br/> Team & Week</h2>
                </MenuLink>

            </MenuContent>
        </MenuContainer>
    );
};

export default Menu;

const MenuContainer = styled.div({
    backgroundColor: '#000000',
    float: 'left',
    marginTop: '2%',
    marginLeft: '5%',
    width: '33%',
    border: '1px solid #707070',
    
});

const MenuTitle = styled.div({
    color: '#707070',
    fontSize: '200%',
    paddingLeft: '10%',

});

const MenuContent = styled.div({
    textAlign: 'center',
    fontSize: '150%',

});

const MenuLink = styled(Link)({
    color: '#707070',
    textDecoration: 'none',
    ':hover':{
        color: '#FFFFFF',
    },
});