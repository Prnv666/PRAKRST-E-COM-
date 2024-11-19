import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumps from '../Components/Breadcrumps/Breadcrumps';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';



const Product = () => {

  const {all_product} = useContext(shopContext);
  const {ProductId} = useParams();
  const product = all_product.find((e)=>e.id === Number(ProductId))
  return (
    <>
      <Breadcrumps product ={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </>
  )
}

export default Product
