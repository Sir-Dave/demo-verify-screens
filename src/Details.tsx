import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './university_logo.png';
import image from './image.png'

import { useNavigate } from 'react-router-dom';

const Details: React.FC = () => {
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate("/");
    };

    return (
        <Container className='min-vh-100 light-blue' fluid >
            <Row className="h-100 pt-5 justify-content-center align-items-center p-4">
                <Col sm="6" md="6" lg="6" xs={{ order: 'last' }}>

                    <div className="bg-white mt-3">
                        <div className='text-center mt-3'>
                            <Image src={logo} height={120} width={150} fluid />

                        </div>
                        <h3 className='text-center mt-3 gold'> Welcome to CertVeri! </h3>
                        <h4 className='text-center mt-3 fw-bold'> Certification Verification Page </h4>

                        <div className='p-2 gy-1'>
                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>Matric No: </p>
                                <p> 050721</p>
                            </div>
                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>Surname: </p>
                                <p> Adeagbo</p>
                            </div>
                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>First Name: </p>
                                <p> John</p>
                            </div>
                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>Middle Name: </p>
                                <p> Taiwo</p>
                            </div>

                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>Degree: </p>
                                <p> Bachelor of Techology (Hons)</p>
                            </div>
                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>Course: </p>
                                <p> Computer Engineering</p>
                            </div>
                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>Grade: </p>
                                <p> Second class (Upper division)</p>
                            </div>
                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>Graduation Date: </p>
                                <p> 31-12-2020</p>
                            </div>
                            <div className='d-flex justify-content-between p-2'>
                                <p className='fw-bold'>Certification Code: </p>
                                <p> 211212234522</p>
                            </div>
                            <Button type="submit" className="btn custom-btn ml-4" onClick={ onBackClick}>
                                Go Back
                            </Button>

                        </div>
                    </div>
                </Col>

                <Col xs={{ order: 'first' }} md={{ order: 'last' }} className="d-flex justify-content-center">
                    <div>
                        <Image src={image} height={300} width={300} fluid />

                    </div>
                </Col>

            </Row>
        </Container>


    );
}

export default Details;