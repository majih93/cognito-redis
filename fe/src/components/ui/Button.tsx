import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
}) => {
  const baseButtonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "500" as const,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 0.2s",
    opacity: disabled ? 0.7 : 1,
  };

  const primaryStyle = {
    ...baseButtonStyle,
    backgroundColor: "#4a77e5",
    color: "white",
  };

  const secondaryStyle = {
    ...baseButtonStyle,
    backgroundColor: "#f5f5f5",
    color: "#333",
  };

  const buttonStyle = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
