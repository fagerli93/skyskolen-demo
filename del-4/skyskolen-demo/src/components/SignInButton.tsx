import React from "react";
import { Button } from "react-bootstrap";

interface SignInButtonProps {
    signIn: () => void;
}

const SignInButton: React.FC<SignInButtonProps> = ({ signIn }) => {
    return (
        <Button variant='primary' size='lg' onClick={signIn}>
            Logg inn!
        </Button>
    );
};

export default SignInButton;
