import { product } from "../product";


const Price = ({}) => {
  return ( 
    <div>
      <h3 style={{ fontSize: '24px' }}>${product.price}</h3>
    </div>
   );
}
 
export default Price;