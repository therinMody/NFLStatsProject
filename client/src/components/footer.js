import React from 'react';
//import {Link} from '@reach/router';
import styled from '@emotion/styled';


const Footer = () => {
    return (
        <FooterContainer>
            <h1>Developed by Therin Mody</h1>
        </FooterContainer>
    );

};

export default Footer;

const FooterContainer = styled.div({
    textAlign: 'right',
    color: '#707070',
    padding: '0.01%',
    backgroundColor: '#000000',
    bottom: 0,
    width: '100%',
    position: 'fixed',
    border: '1px solid #707070',
    left: 0,
    right: 0,
});