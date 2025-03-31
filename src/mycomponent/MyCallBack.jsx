import React, { useCallback } from "react";
import Button from './button'; 

function MyCallBack() {
    const [count, setCount] = React.useState(0);
    
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <>
            <p>Count: {count}</p>
            <Button onClick={increment} label="Increment" /> {/* Use the memoized Button */}
        </>
    );
}

export default MyCallBack;
