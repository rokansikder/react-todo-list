import React, {Fragment} from 'react';
import {Collapse, Container, Navbar, NavItem, NavLink, Nav} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';
import * as Icons from 'react-bootstrap-icons';

export default () => {
    return (
        <>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
                <Container>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/" tag={RRNavLink}>
                                    <Icons.ListUl />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/calendar" tag={RRNavLink}>
                                    <Icons.Calendar2Check />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
};
