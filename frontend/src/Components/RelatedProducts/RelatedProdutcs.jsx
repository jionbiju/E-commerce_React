import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProdutcs = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct-items">
            {data_product.map((item,i)=>{
                return <Item  key={i} id={item.id} image={item.image} name={item.name}
                new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>

      
    </div>
  )
}

export default RelatedProdutcs
