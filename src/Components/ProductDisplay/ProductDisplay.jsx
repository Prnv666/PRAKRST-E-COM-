import React from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'

const ProductDisplay = (props) => {

  const {product} = props ;


  return (
    <div className='product-display'>


      <div className="product-display-left">
        <div className="productdisplay-img-list">
            <img src={product.img} alt="" />
            <img src={product.img} alt="" />
            <img src={product.img} alt="" />
            <img src={product.img} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.img} alt="" />
        </div>

      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className='productdisplay-right-price-new'>
            ${product.new_price}
          </div>

          <div className="productdisplay-right-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid error vel sint animi
            dolorem quia! Cupiditate quasi nisi velit commodi, eaque consequuntur veritatis? Voluptates
            commodi, perferendis dicta repellendus ratione et!
          </div>

          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>

          

        </div>

        <button>Add to Cart</button>
        <p className='productdisplay-right-category'><span>category :</span>Women, T-Shirt, Crop-top</p>
        <p className='productdisplay-right-category'><span>tags :</span>Modern, Latest, </p>

      </div>


    </div>
  )
}

export default ProductDisplay
