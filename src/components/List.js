import React from 'react'

function List({products}) {
  return (
   <ul>
    {
        products.map(product => 
            <>
            <li key={product.id}>{product.title}</li> 
            <li key={product.id}>{product.title}</li> 
            </>
          
            )
    }
   </ul>
  )
}

export default List