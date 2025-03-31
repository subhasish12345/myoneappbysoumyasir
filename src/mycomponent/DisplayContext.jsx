import React from 'react';
import { useMyContext } from './MyContext';

const DisplayContext = () => {
    const { color, setColor } = useMyContext();

    return (
        <div>
            <h1>Current Color: {color}</h1>
            <button onClick={() => setColor("blue")}>Change Color to Blue</button>
            <button onClick={() => setColor("red")}>Change Color to Red</button>
        </div>
    );
};

export default DisplayContext;
