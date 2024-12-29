import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from './projectCard'
import logo from '../logo.svg';
import DonarConceriage from '../assets/img/DonarConceriage.png'
import CleaverEducationSolutions from '../assets/img/CleaverEducationSolutions.png'
import josaa from '../assets/img/josaa.png';
import Fridayyai from '../assets/img/Fridayyai.png';
import DIMS from '../assets/img/DIMS.png';

const Projects = () => {
    const projects = [
        {
            title: 'Josaa Help',
            // description: 'JoSAA Help is a platform that helps students find the right college based on their JEE Mains and Advanced ranks. It offers state-wise filtering, tailored recommendations, and tools to compare colleges side-by-side. Students can analyze closing rank trends using customizable charts and graphs. With JoSAA Help, make confident and data-driven college decisions!',
            imgUrl: josaa,
            link: 'https://josaa-aegeg3u10-pragalbhs-projects-0805328a.vercel.app/'
        },
        {
            title: 'Fridayy.ai',
            // description: 'Fridayy AI is a smart tool for transforming e-commerce content creation. It generates stunning backgrounds, automates dynamic catalog and brochure creation, and creates SEO-friendly product descriptions with just a few keywords. Instantly enhance product photos with AI-powered background removal and studio-quality edits. Elevate your product presentation effortlessly with Fridayy AI!',
            imgUrl: Fridayyai,
            link: 'https://app.fridayy.ai/'
        },
        {
            title: 'Donar Conceriage',
            // description: 'description 1',
            imgUrl: DonarConceriage,
            link: 'https://www.donorconcierge.com/'
        },
        {
            title: 'Cleaver Education Solutions',
            // description: 'description 1',
            imgUrl: CleaverEducationSolutions,
            link: 'https://clevereducationsolutions.com/'
        },
        
        {
            title: 'DIMS',
            // description: 'description 1',
            imgUrl: DIMS,
            link: 'https://dimsservices.com/'
        },
    ]
    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav> */}

                        {/* <Tab.Content className='mt-4'>
                            <Tab.Pane eventKey={"first"}> */}
                                <Row className='mt-4'>
                                    {projects.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </Row>
                            {/* </Tab.Pane> */}

                           
                        {/* </Tab.Content>
                    </Tab.Container> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects
