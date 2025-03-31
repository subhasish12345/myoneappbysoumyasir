import React, { createContext, useContext, useState } from "react";

// Create a Context
const MyContext = createContext();

// Create a Provider component
export const MyProvider = ({ children }) => {
    const [color, setColor] = useState("violet"); // Example state

    return (
        <MyContext.Provider value={{ color, setColor }}>
            {children}
        </MyContext.Provider>
    );
};

// Custom hook to use the context
export const useMyContext = () => {
    return useContext(MyContext);
};
