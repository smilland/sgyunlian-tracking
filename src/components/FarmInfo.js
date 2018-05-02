import React, { Component } from 'react';
import './farminfo.css';

class FarmInfo extends Component {
  render() {
    const {userName, description, address, phone, image, email, userDescription, farmName} = this.props.data || {};
    return (
      <div className="farm-info">
        <div className="title">{farmName}</div>
        <div className="avatar">
            <img src={image} alt={userName}/></div>
        <div className="username">{userName}</div>
        <div className="userInfo">
            <div>
                <div className="label">地址：</div>
                <div className="value">{address}</div>
            </div>
            <div>
                <div className="label">电话：</div>
                <div className="value">{phone}</div>
            </div>
            <div>
                <div className="label">Email:</div>
                <div className="value">{email}</div>
            </div>
        </div>
        <div className="farm">
            <h1 class="ribbon"><strong className="ribbon-content">农场介绍</strong></h1>
            <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default FarmInfo;
