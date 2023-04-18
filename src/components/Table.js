import React, { useEffect, useState } from 'react'

 export function Table() {

    const [products , setProducts] = useState ([]);
    const fetchProducts = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(Response => setProducts(Response))
    }
    useEffect(() => {
       fetchProducts()
    },[])
  return (
   <>
   <table className="table">
   <thead>
     <tr className="table-primary">
       <th scope="col" style={{fontSize: '20px'}}>ID</th>
       <th scope="col" style={{fontSize: '20px'}}>Image</th>
       <th scope="col" style={{fontSize: '20px'}}>Title</th>
       <th scope="col" style={{fontSize: '20px'}}>Description</th>
       <th scope="col" style={{fontSize: '20px'}}>Price</th>
     </tr>
   </thead>
   <tbody>
     
      {
         products.map(product => 
           <>
           <tr className="table-secondary">
           <th scope="row">{product.id}</th>
           <td> <img src={product.images} alt='pic' style={{width : '120px' , borderRadius : '20px'}}/></td>
           <td>{product.title}</td>
           <td>{product.description}</td>
           <td>{product.price}</td>
           </tr>
           </>
          )}
   </tbody>
 </table>
   </>
   )
}
