import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import image from '../assets/img/image.webp'

const Banner = () => {

    return (
        <section className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi i am Pragalbh`} <span className='wrap'>Software Developer</span></h1>
                        <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                        <button onClick={() => console.log('connect')}>Let's conccect <ArrowRightCircle /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={image} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner