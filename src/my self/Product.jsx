import './Product.css';
function Product({productname, price, description}){
    productname = 'fridge';
    return (
    <div className="mydiv">
    <h3>{productname}</h3>
    <h4>{price}</h4>
    <h5>{description}</h5>
    </div>
    )
    }
    export default Product;