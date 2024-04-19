import { useState, useEffect } from "react";
import axios from "axios"
const ToyShop = () => {
 const [supplierId, setSupplierId] = useState(1);
 const [products, setProducts] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
    try {
     const result = await axios(
      `http://127.0.0.1:3000/api/product/${supplierId}`
    );
    setProducts(result.data);
    } catch (error) {
     console.error('err',error)
    }
   
   };

   fetchData();
 }, [supplierId]);

 const handleSupplierChange = (event) => {
  setSupplierId(event.target.value);
};

 return (
   <div>
     <select value={supplierId} onChange={handleSupplierChange}>
      <option value="">Select a supplier</option>
      <option value="1">Toy Universe</option>
      <option value="2">Toy Shop</option>
      <option value="3">Kids World</option>
     </select>
     <h1>Products</h1>
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>
         {products.map((product) => (
           <tr key={product.id}>
             <td>{product.name}</td>
             <td>{product.price}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 );
}

export default ToyShop;