import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Col, FloatingLabel, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

const Addfoods = () => {
    const [products, addprodcuts] = useState([])
    const handelinput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...products };
        newLoginData[field] = value;
        addprodcuts(newLoginData);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        axios.post('https://food-dalivary.herokuapp.com/products', {
            title: products.name,
            size: products.size,
            price: products.price,
            description: products.details,
            img: products.url

        })
            .then(function (response) {
                if (response.status == 200) {
                    alert("products is added ")
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" onBlur={handelinput} name="name" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Datails">
                            <Form.Control
                                as="textarea"
                                placeholder="Description"
                                style={{ height: '100px' }}
                                name="details"
                                onBlur={handelinput}
                            />
                        </FloatingLabel>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Price" name="price" onBlur={handelinput} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Photo Url" name="url" onBlur={handelinput} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="size" name="size" onBlur={handelinput} />
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Add Products
                        </Button>
                    </Form>
                </div>

            </div>

        </div>
    );
};

export default Addfoods;