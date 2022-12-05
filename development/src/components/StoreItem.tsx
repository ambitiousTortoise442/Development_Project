import React from 'react'
import item from '../model';
import './styles.css'

const StoreItem = (item: item) => {
    return (
        <div className='store_item'>
            <h3>{item.name}</h3>
            <img className='item_img'
                src="https://cdn.shopify.com/s/files/1/0187/7082/1184/products/product-image-1795768765_grande.jpg?v=1630633667" 
                alt=""/>
            <button onClick={item.handleClick} className='additem_button'>Add To Cart</button>
        </div>
    )
}                                 

export default StoreItem