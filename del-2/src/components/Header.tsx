import React from "react";
import { Container, Navbar } from "react-bootstrap";
import FirebaseLogo from "./FireBaseLogo";

interface HeaderProps {
    actions?: React.ReactNode[];
}

const Header: React.FC<HeaderProps> = ({ actions }) => {
    return (
        <Navbar fixed='top' expand='lg' className='app-header'>
            <Container>
                <Navbar.Brand>
                    <FirebaseLogo width='150px' height='50px' />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='app-header-actions'>
                    {actions?.map((action, i) => (
                        <Navbar.Text key={i}>{action}</Navbar.Text>
                    ))}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
