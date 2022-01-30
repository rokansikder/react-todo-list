import React from 'react';
import {Container} from 'reactstrap';
import NavMenu from './NavMenu';

export default (props) => {
    return (
        <>
            <NavMenu />
            <Container>{props.children}</Container>
        </>
    );
};
