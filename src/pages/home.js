import "@blueprintjs/core/lib/css/blueprint.css";
import React from 'react'
import styled from 'styled-components'
import Laptop from '../assets/laptop-screen.png'
import { Button, NavbarGroup, Navbar, NavbarHeading, Classes, NavbarDivider } from "@blueprintjs/core"
import { useHistory } from "react-router";


const StyledHome = styled.div`
    font-family: 'Roboto Mono', monospace;
    h1 {
        margin-top: 2em;
    }
`


export default function Home() {
    const history = useHistory();

    return(
        <StyledHome>
            <Navbar>
                <NavbarGroup>
                    <NavbarHeading> Simplyalgo </NavbarHeading>
                    <NavbarDivider />
                    <Button className={Classes.MINIMAL} text="Home" onClick={()=> history.push("/")}/>
                    <Button className={Classes.MINIMAL} text="Strategies" onClick={()=> history.push('/strategies')}/>
                    <Button className={Classes.DARK} text="Sign up" onClick={()=> history.push("/signup")} />
                </NavbarGroup>
            </Navbar>
            <h1>  Automate your trading strategy.  </h1>
            <p>
                Simplyalgo allows you to build, test, and deploy a fully automated strategy to financal markets under 5 clicks. 
            </p>
            <img src={Laptop} alt="Landing page graphic" />
        </StyledHome>
    
    );
}

