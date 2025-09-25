import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl transition"
        >
            {children}
        </button>
    );
};
