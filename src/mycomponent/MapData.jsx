import { useEffect, useState } from "react";

function MapData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const users = [
            { id: 1, name: "John", age: 30, address: { street: "123 Main St", city: "New York" } },
            { id: 2, name: "Jane", age: 25, address: { street: "456 Elm St", city: "Los Angeles" } },
            { id: 3, name: "Alice", age: 28, address: { street: "789 Maple Ave", city: "Chicago" } },
            { id: 4, name: "Bob", age: 35, address: { street: "101 Oak St", city: "Houston" } },
            { id: 5, name: "Charlie", age: 22, address: { street: "202 Pine St", city: "Phoenix" } },
            { id: 6, name: "David", age: 40, address: { street: "303 Cedar St", city: "Philadelphia" } },
            { id: 7, name: "Eva", age: 29, address: { street: "404 Birch St", city: "San Antonio" } },
            { id: 8, name: "Frank", age: 33, address: { street: "505 Walnut St", city: "San Diego" } },
            { id: 9, name: "Grace", age: 27, address: { street: "606 Cherry St", city: "Dallas" } },
            { id: 10, name: "Hank", age: 31, address: { street: "707 Elm St", city: "San Jose" } },
            { id: 11, name: "Ivy", age: 24, address: { street: "808 Spruce St", city: "Austin" } },
            { id: 12, name: "Jack", age: 36, address: { street: "909 Fir St", city: "Jacksonville" } },
            { id: 13, name: "Kathy", age: 30, address: { street: "111 Ash St", city: "San Francisco" } },
            { id: 14, name: "Leo", age: 38, address: { street: "222 Palm St", city: "Columbus" } },
            { id: 15, name: "Mia", age: 26, address: { street: "333 Willow St", city: "Charlotte" } },
        ];
        setUsers(users);
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>User Data</h2>
            <table style={{ 
                width: "80%", 
                margin: "auto", 
                borderCollapse: "collapse", 
                border: "1px solid black" 
            }}>
                <thead>
                    <tr>
                        <th style={tableStyle}>ID</th>
                        <th style={tableStyle}>Name</th>
                        <th style={tableStyle}>Age</th>
                        <th style={tableStyle}>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td style={tableStyle}>{user.id}</td>
                            <td style={tableStyle}>{user.name}</td>
                            <td style={tableStyle}>{user.age}</td>
                            <td style={tableStyle}>{user.address.street}, {user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const tableStyle = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left"
};

export default MapData;
