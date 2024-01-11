import { product } from "../product";

const Description = ({}) => {
  return ( 
    <div>
      <h6 style={{ color:'black', fontSize: '20px' }}>{product.description}</h6>
    </div>
   );
}
 
export default Description;