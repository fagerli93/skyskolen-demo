import { useAuth } from "../context/AuthProvider";

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
    <div className="app-login">
      <button onClick={handleLoginClick}>Logg inn!</button>;
    </div>
  );
};

export default LoginComponent;