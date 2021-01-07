import React from 'react'
import {Container} from './SubmitButton.style'

export const SubmitButton = (props) => {
    
    return (
        <Container>
            {props.children}
        </Container>
    );
}