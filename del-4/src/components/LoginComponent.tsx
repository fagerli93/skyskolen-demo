import { getAnalytics, logEvent } from "firebase/analytics";
import { useAuth } from "../context/AuthProvider";
import SignInButton from "./SignInButton";

const LoginComponent = () => {
    const { signIn } = useAuth();
    const analytics = getAnalytics();

    const handleLoginClick = async () => {
        try {
            await signIn();
            logEvent(analytics, "User logged in!");
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
