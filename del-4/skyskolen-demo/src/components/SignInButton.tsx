import React from "react";
import { Button } from "react-bootstrap";

interface SignInButtonProps {
    signIn: () => void;
    title?: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({
    signIn,
    title = "Sign in",
}) => {
    return (
        <Button variant='primary' size='lg' onClick={signIn}>
            {title}
        </Button>
    );
};

export default SignInButton;
