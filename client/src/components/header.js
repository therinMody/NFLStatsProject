import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
    return (
        <HeaderBar>
            <Container>
                <h1>NFL Statistics</h1>
            </Container>
        </HeaderBar>
    );

};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
    backgroundColor: '#000000',
    color: '#707070',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: '200%',
    border: '2px solid',
});

const Container = styled.div({
    
});