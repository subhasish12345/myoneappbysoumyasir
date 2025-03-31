import React, { useEffect, useState } from 'react'

function MyUseEffect() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    setUser(allUsers);
    console.log(user);
    
  })
  const allUsers = [
    {id:1, name:'Soumik', email:'soumikbasu366@gmail.com', age:22},
    {id:2, name:'Raj', email:'raj6@gmail.com', age:22},
    {id:3, name:'Dhoni', email:'Dhoni07@gmail.com', age:22},
    {id:4, name:'Rohit', email:'swwsu366@gmail.com', age:22},
    {id:5, name:'Virat', email:'viru366@gmail.com', age:22},
    {id:6, name:'raju', email:'wweu366@gmail.com', age:22},
    {id:7, name:'Lala', email:'lalalu366@gmail.com', age:22},
  ]
  return(
    <>
    <table border={2} width={'100%'} cellPadding={0} style={{textAlign:"center"}} >
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((item,)=>{
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default MyUseEffect