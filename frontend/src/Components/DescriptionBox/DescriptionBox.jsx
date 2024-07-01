import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review(155)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internt.
            It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and
            conduct transactions without the need for a physical pressence. E-commerce websites have gained popularity due to their 
            convenience, accessibility, and the global reach they offer.
        </p>
        <p>
            E-commerce websites typically display products or services along with detailed description, images, prices,and any available
            varations (e.g sizes,colors). Each product ususally has its own dedication page with relevant infotmation.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
