import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../components/navbar'
import Laptop from '../assets/laptop-screen.png'

const Message = styled.h3`
    font-family: 'Roboto Mono', monospace;

`

export default function LandingPage() {

    return(
        <div style={{margin: '40px'}}>
            <NavigationBar/>
            <Message>
                Automate your trading strategy. 
            </Message>
            <p>
                Simplyalgo allows you to build, test, and deploy a fully automated strategy to financal markets under 5 clicks. 
            </p>
            <img src={Laptop} alt="Landing page graphic" />
        </div>
    )
}

