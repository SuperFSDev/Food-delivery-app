import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from 'react-bootstrap/Table'
const AllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [newdata, setnewdata] = useState([]);
    useEffect(() => {
        fetch('https://food-dalivary.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [newdata]);
    const handelCheng = (e) => {
        if (e.orderStatus === 'Painding') {
            fetch(`https://food-dalivary.herokuapp.com/order-status-update/${e._id}`, {
                method: 'PUT',
                headers: { "content-type": "application/json" }
            }).then(res => res.json())
                .then(data => {
                    setnewdata(orders);
                    alert('Do You Want to Order');
                })
        } else {
            alert("already is in shipping process")
        }

    }
    return (
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(Product => <tr key={Product._id}>
                                <td>{Product?.name}</td>
                                <td>{Product?.email}</td>
                                <td>{Product?.phone}</td>
                                <td>{Product?.orderStatus}</td>
                                <td><button onClick={() => handelCheng(Product)}> Deliver </button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllOrders;