import React from "react";
import { Container } from "react-bootstrap";

const AppContainer: React.FC = ({ children }) => {
    return (
        <Container className='app' fluid='md'>
            {children}
        </Container>
    );
};

export default AppContainer;
