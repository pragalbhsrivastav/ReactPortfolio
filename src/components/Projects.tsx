import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from './projectCard'
import logo from '../logo.svg';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'description 1',
            imgUrl: logo
        },
    ]
    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque reprehenderit autem maxime reiciendis, nam maiores similique facilis illo tenetur tempora expedita id a laborum. Voluptatum libero fuga quo possimus.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                        </Nav>

                        <Tab.Content className='mt-4'>
                            <Tab.Pane eventKey={"first"}>
                                <Row>
                                    {projects.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </Row>
                            </Tab.Pane>

                           
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects
