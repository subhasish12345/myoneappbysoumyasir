function MyForm(props) {
    console.log(props);
    return (
        <>
        <input type={props.type} name={props.name} placeholder={props.placeholder} />
        
        </>
    );
}export default MyForm;