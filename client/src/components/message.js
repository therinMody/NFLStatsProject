import React from 'react';
import styled from '@emotion/styled';

const Message = () => {

    return (
        <MessageContainer>
                <h1>Please select an option <br /> from the index to browse NFL data...</h1>
        </MessageContainer>
    );
};

export default Message;

const MessageContainer = styled.div({
    float: 'right',
    color: '#FFFFFF',
    padding: '2%',
    textAlign: 'center',
    width: '56%',
    marginTop: '150px'
});