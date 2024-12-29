import { Container, Nav, Navbar } from "react-bootstrap"
import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { Github, Linkedin } from 'react-bootstrap-icons';

export const NavBar: React.FC = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);


    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return()=> window.removeEventListener("scroll", onScroll)

    },[])

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled? "scrolled": ""}>
            <Container>
                {/* <Navbar.Brand href="#home">
                   <span className="logo-text"> Logo</span>
                </Navbar.Brand> */}
                

                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#" onClick={() => window.open("https://www.linkedin.com/in/pragalbh-srivastav-762a95189", "_blank")}><Linkedin fill="#fff"/></a>
                            <a href="#" onClick={() => window.open("https://github.com/pragalbhad", "_blank")}><Github /></a>
                        </div>
                        {/* <button className="vvd" onClick={() => console.log('connect')}><span>Lets connect</span></button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}