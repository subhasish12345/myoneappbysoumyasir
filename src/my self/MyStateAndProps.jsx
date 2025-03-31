
import MyProps from './MyProps';

function MyStateAndProps({ name, role }) {

   

    return (
        <div>
            {/* <MyProps name={name} role={userRole} />
            <input 
                type="text" 
                placeholder="Enter your role" 
                value={userRole} 
                onChange={(e) => setUserRole(e.target.value)} 
            />
            <button onClick={() => {
                console.log('Register button clicked');
            }}>Register</button> */}


            <h2>Name: {name}</h2>
            <h4>Role: {role}</h4>


        </div>
    );
}

export default MyStateAndProps;
