import { Link } from '@reach/router';
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
                <table width='100%'>
                    <tr>
                        <td>
                            <Plus>
                                +
                            </Plus>
                        </td>
                        <td>
                            <MenuLink to="/teams">
                                <h2>Teams</h2>
                            </MenuLink>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Plus>
                                +
                            </Plus>
                        </td>
                        <td>
                            <MenuLink to="/playerStats">
                                <h2>Player Stats by <br /> Team & Week</h2>
                            </MenuLink>
                        </td>
                    </tr>
                </table>
            </MenuContent>
        </MenuContainer>
    );
};

export default Menu;

const MenuContainer = styled.div({
    backgroundColor: '#000000',
    float: 'left',
    width: '25%',
    border: '1px solid #707070',
    position: 'fixed',
    left: 0,
    top: 133,
    height: '100%',
    clear: 'both',
});

const MenuTitle = styled.div({
    color: '#707070',
    fontSize: '200%',
    textAlign: 'center',

});

const MenuContent = styled.div({
    textAlign: 'center',
    fontSize: '125%',
    padding: '2%',

});

const MenuLink = styled(Link)({
    color: '#707070',
    textDecoration: 'none',
    ':hover': {
        color: '#FFFFFF',
    },
});

const Plus = styled.div({
    color: '#FFFFFF',
    fontSize: '200%',
});