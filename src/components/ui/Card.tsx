import React from "react";

interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">{children}</div>
    );
};
