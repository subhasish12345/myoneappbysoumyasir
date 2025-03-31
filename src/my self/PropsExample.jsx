import MyForm from "./MyForm";

// function PropsExample(props) {
//     console.log(props);
//   return (
//     <div>
//       <h1>{props.a + props.b}</h1>
    
//     </div>
//   );
// }export default PropsExample;


function PropsExample() {
  return (
  <div>
    <MyForm type="text" name={"name"} placeholder="Enter your name" />
    <MyForm type="number" name={"age"} placeholder="Enter your age" /> <br />
    <MyForm type="email" name={"email"} placeholder="Enter your email" /> <br />
    <MyForm type="password" name={"password"} placeholder="Enter your password" /> <br />
  </div>
  );
}

export default PropsExample;
