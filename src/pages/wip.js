import React from 'react'
import styled from 'styled-components'
import loading from '../assets/giphy.gif'

const Message = styled.h3`
    font-family: 'Roboto Mono', monospace;

`

export default function WorkInProgress() {

    return(
        <div style={{textAlign: 'center', marginTop: '10%'}}>
            <img src={loading} alt="work in progress" />
            <Message> Work in progress... </Message>
        </div>
    )
}

