import { useAuth } from "../context/AuthProvider";
import SignInButton from "./SignInButton";

const LoginComponent = () => {
    const { signIn } = useAuth();

    const handleLoginClick = async () => {
        try {
            await signIn();
        } catch (err) {
            alert("Kunne ikke logge inn");
        }
    };

    return (
        <div className='app-login'>
            <SignInButton signIn={handleLoginClick} />
        </div>
    );
};

export default LoginComponent;
