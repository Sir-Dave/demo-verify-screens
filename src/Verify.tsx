import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './university_logo.png';
import image from './image.png'
import InputGroup from 'react-bootstrap/InputGroup';



const Verify: React.FC = () => {

    return (
        <Container className='min-vh-100 light-blue' fluid>
            <Row className="h-100 pt-5 justify-content-center align-items-center p-4">
                <Col sm="6" md="6" lg="6" xs={{ order: 'last' }}>

                    <Form className="bg-white p-4 mt-3">
                    <div className='text-center mt-3'>
                        <Image src={logo} height={120} width={150} fluid />

                    </div>
                        <h3 className='text-center mt-3 gold'> Welcome to CertVeri! </h3>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name"
                            />
                        </Form.Group>

                        <Form.Label>Matriculation Number</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" placeholder="Enter matric number"
                                
                            />
                        </InputGroup>

                        <Button type="submit" className="btn w-100 custom-btn">
                            Verify
                        </Button>
                        
                    </Form>
                </Col>

                <Col xs={{ order: 'first' }} md={{order: 'last'}} className="d-flex justify-content-center">
                    <div>
                        <Image src={image} height={300} width={300} fluid />

                    </div>
                </Col>

            </Row>
        </Container>


    );
}

export default Verify;