import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from 'react-bootstrap/Table'
const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`https://food-dalivary.herokuapp.com/user-order/${user.uid}`)
            .then(function (response) {
                setOrders(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
    const handelDeleteClick = (id) => {
        fetch(`https://food-dalivary.herokuapp.com/items-delete/${id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" }
        }).then(res => res.json())
            .then(data => {
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
                alert('Delete ?');
            })

    }
    console.log(orders)
    return (
        <div>
            <h1>orders pages</h1>
            <div className='container'>
                <div className='row'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>orderStatus

                                </th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(Product => <tr key={Product._id}>
                                    <td>{Product?.name}</td>
                                    <td>{Product?.email}</td>
                                    <td>{Product?.phone}</td>
                                    <td>{Product?.orderStatus}</td>
                                    <td><button onClick={() => handelDeleteClick(Product._id)}> Delete</button></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Orders;