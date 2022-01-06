import React, { useState } from 'react';
import 'react-bootstrap-drawer/lib/style.css';
import './Dashboard.css';
import DashboardHome from '../DashboardHome/DashboardHome';
import Test from '../Test/Test';
import {
    Button,
    Col,
    Collapse,
    Container,
    Nav,
    Row,
} from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Drawer } from 'react-bootstrap-drawer';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import Orders from '../Orders/Orders';
import Addfoods from '../AddFoods/Addfoods';
import Payments from '../Payments/Payments';
import AllOrders from '../AllOrders/AllOrders';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const [open, setOpen] = useState(false);
    const { admin, user, logOut } = useAuth();

    const handleToggle = () => setOpen(!open);

    return (
        <>
            <Container fluid>
                <Row className="flex-xl-nowrap">
                    <Col xs={12} md={3} lg={2} className="p-0">
                        <Drawer>
                            <Drawer.Toggle onClick={handleToggle} />
                            <Collapse in={open}>
                                <Drawer.Overflow>
                                    <Drawer.ToC>
                                        <Nav.Link className="dashboard" as={Link} to="/">
                                            <i className="fa fa-home" aria-hidden="true"></i> Food Delivery
                                        </Nav.Link>
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/dashboardHome`}>
                                                <i className="fas fa-circle"></i> Dashboard
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/myorders`}>
                                                <i className="fas fa-circle"></i> My Orders
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/payments`}>
                                                <i className="fas fa-circle"></i> Payments
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        <hr></hr>
                                        {admin &&
                                            <Drawer.Nav>
                                                <Nav.Link className="nav-item" as={Link} to={`${url}/home`}>
                                                    <i className="fas fa-circle"></i> Home
                                                </Nav.Link>
                                            </Drawer.Nav>
                                        }
                                        {admin &&
                                            <Drawer.Nav>
                                                <Nav.Link className="nav-item" as={Link} to={`${url}/orders`}>
                                                    <i className="fas fa-circle"></i> orders
                                                </Nav.Link>
                                            </Drawer.Nav>
                                        }
                                        {admin &&
                                            <Drawer.Nav>
                                                <Nav.Link className="nav-item" as={Link} to={`${url}/add-food`}>
                                                    <i className="fas fa-circle"></i> Add food Items
                                                </Nav.Link>
                                            </Drawer.Nav>
                                        }
                                        {user.email &&
                                            <Button onClick={logOut} className="btn-sm px-2 mt-3" variant="light">Logout</Button>
                                        }
                                    </Drawer.ToC>
                                </Drawer.Overflow>
                            </Collapse>
                        </Drawer>
                    </Col>
                    <Col xs={12} md={9} lg={10}>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/dashboardHome`}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/payments`}>
                                <Payments></Payments>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <Orders></Orders>
                            </Route>
                            <AdminRoute exact path={`${path}/home`}>
                                <Test></Test>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/orders`}>
                                <AllOrders></AllOrders>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/add-food`}>
                                <Addfoods></Addfoods>
                            </AdminRoute>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;