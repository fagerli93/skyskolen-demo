import { Button } from "react-bootstrap";

interface SignOutButtonProps {
    signOut: () => void;
    title?: string;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({
    signOut,
    title = "Sign out",
}) => {
    return (
        <Button variant='secondary' onClick={signOut}>
            {title}
        </Button>
    );
};

export default SignOutButton;
