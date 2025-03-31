import React from 'react';

const Button = React.memo(({ onClick, label }) => {
    console.log(`Rendering button: ${label}`); // For debugging purposes
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
});

export default Button;
 