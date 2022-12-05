import React from 'react'
import item from '../model';
import StoreItem from './StoreItem';

interface Props {
  cart: item[];
}


// @ts-ignore
const ShoppingCart: React.FC = (props: Props): JSX.Element => {
  let itemList:React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>[] = [];
  props.cart.forEach((item, index) => {
    itemList.push(<li key={index}>{item.name}</li>)
  })
  return (
    <div className='shopping_cart'>
      {/* 
            // @ts-ignore */}
      {itemList}
    </div>
  )
}

export default ShoppingCart