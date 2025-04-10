import { useState } from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add actual login logic here with axios
      console.log("Login attempt with:", { email, password });
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const loginFormStyle = {
    width: "100%",
    padding: "10px",
  };

  const headingStyle = {
    textAlign: "center" as const,
    marginBottom: "30px",
    color: "#2c3e50",
    fontSize: "28px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  };

  const forgotPasswordStyle = {
    textAlign: "right" as const,
    margin: "12px 0 24px",
  };

  const linkStyle = {
    color: "#3498db",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.2s ease",
    position: "relative" as const,
    display: "inline-block",
    padding: "2px 0",
  };

  const signupOptionStyle = {
    marginTop: "32px",
    textAlign: "center" as const,
    fontSize: "15px",
    color: "#7f8c8d",
    position: "relative" as const,
    padding: "20px 0 0",
    borderTop: "1px solid #ecf0f1",
  };

  const signupLinkStyle = {
    color: "#2980b9",
    fontWeight: "600",
    textDecoration: "none",
    marginLeft: "5px",
    transition: "color 0.2s ease",
  };

  const formContainerStyle = {
    borderRadius: "8px",
    background:
      "linear-gradient(to right bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    padding: "30px 25px",
  };

  const dividerStyle = {
    display: "flex" as const,
    alignItems: "center" as const,
    margin: "25px 0",
    color: "#95a5a6",
    fontSize: "14px",
  };

  const lineStyle = {
    flex: 1,
    height: "1px",
    backgroundColor: "#ecf0f1",
  };

  const dividerTextStyle = {
    padding: "0 15px",
  };

  return (
    <div style={loginFormStyle}>
      <h2 style={headingStyle}>Welcome Back</h2>

      <div style={formContainerStyle}>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div style={forgotPasswordStyle}>
            <a href="#" style={linkStyle}>
              Forgot password?
            </a>
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Sign In"}
          </Button>
        </form>

        <div style={dividerStyle}>
          <div style={lineStyle}></div>
          <span style={dividerTextStyle}>or continue with</span>
          <div style={lineStyle}></div>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Button
            variant="secondary"
            onClick={() => console.log("Google sign-in")}
          >
            Google
          </Button>
          <Button
            variant="secondary"
            onClick={() => console.log("Apple sign-in")}
          >
            Apple
          </Button>
        </div>
      </div>

      <div style={signupOptionStyle}>
        New to the platform?
        <a href="#" style={signupLinkStyle}>
          Create an account
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
