import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const OrderPayments = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        const url = `https://food-dalivary.herokuapp.com/singel-product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
    const handelOnBlure = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...order };
        newLoginData[field] = value;
        setOrder(newLoginData);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        axios.post('https://food-dalivary.herokuapp.com/place-order', {
            productid: product._id,
            userid: user.uid,
            name: order.name,
            email: order.email,
            orderStatus: 'Painding',
        })
            .then(function (response) {
                if (response.status == 200) {
                    const insertedId = response.data.insertedId;
                    alert(insertedId)
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <h1>Billing address</h1>
                    <Form onSubmit={handelSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' onBlur={handelOnBlure} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="name" name="name" onBlur={handelOnBlure} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" name="address" onBlur={handelOnBlure} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="cash on delivery " />
                        </Form.Group>
                        <hr />
                        <h3>Payment</h3>
                        <Form>
                            <Row>
                                <Col xs={6}>
                                    <p>Name on card</p>
                                    <Form.Control placeholder="Name on card" />
                                </Col>
                                <Col xs={6}>
                                    <p>Credit card number</p>
                                    <Form.Control placeholder="Credit card number" />
                                </Col>
                                <Col xs={4}>
                                    <p>Expiration</p>

                                    <Form.Control placeholder="Expiration" />
                                </Col>
                                <Col xs={4}>
                                    <p>CVV</p>
                                    <Form.Control placeholder="CVV" />
                                </Col>
                            </Row>
                        </Form>
                        <Button variant="primary" type="submit">
                            Place Order Payment
                        </Button>
                    </Form>
                </div>
                <div className="col-md-4">
                    <h1>Your cart</h1>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{product.title}</div>
                                {product.description}
                            </div>
                            <Badge variant="primary" pill>
                                ${product.price}
                            </Badge>
                        </ListGroup.Item>

                    </ListGroup>
                    <ListGroup.Item action variant="dark">
                        total :   ${product.price}

                    </ListGroup.Item>
                </div>
            </div>
        </div>
    );
};

export default OrderPayments;