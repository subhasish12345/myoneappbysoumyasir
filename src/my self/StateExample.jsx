import { useState } from "react";

function StateExample() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const handleRegister = () => {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Age:", age);
    }

    return (
        <div>
            <input type="text" name="name" id="name" placeholder="Enter your name" onChange={(event) => setName(event.target.value)} /><br />
            <input type="text" name="email" id="email" placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)} /><br />
            <input type="text" name="password" id="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} /><br />
            <input type="text" name="age" id="age" placeholder="Enter your age" onChange={(event) => setAge(event.target.value)} /><br />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default StateExample;
