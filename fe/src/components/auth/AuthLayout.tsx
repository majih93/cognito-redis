import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const authLayoutStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  };

  const authContainerStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  };

  const authLogoStyle = {
    textAlign: "center" as const,
    marginBottom: "24px",
  };

  return (
    <div style={authLayoutStyle}>
      <div style={authContainerStyle}>
        <div style={authLogoStyle}>
          <h1>Login System</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
