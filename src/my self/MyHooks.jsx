import { useState } from "react";
function MyHooks() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>)}
        export default MyHooks;
            
            
            
           