import React, { Component } from 'react';
import logo from "../logo.svg";
import './styles.css';

class ProductInfo extends Component {
  render() {
    const {productName, images, location, batch, harvestDate, longDesc, shortDesc} = this.props.data || {},
       image = images && images[0] ? images[0] : null;
    return (
      <div className="product-info">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <div className="product">
            <div className="product-name">{productName}</div>
            <div className="product-location">{location}</div>
            <div className="product-details">
                <div>Batch: {batch}, Harvest Date: {harvestDate}</div>
            </div>
            <img src={image} className="product-image" alt="product image"/>
            <div className="product-description">{shortDesc}</div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
