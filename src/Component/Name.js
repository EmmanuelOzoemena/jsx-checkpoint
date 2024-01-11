// import { useEffect, useState } from "react";
import { product } from "../product";


const Name = ({}) => {
  return ( 
    <div>
      <h2>{product.name}</h2>
    </div>
   );
}
 
export default Name;


  // const [name, setName]= useState("")

  // useEffect(()=>{
  //   const name = prompt("whats your name")
  //   console.log(name)
  //   setName(name)
  // },[])