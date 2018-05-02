import React, { Component } from 'react';
import './styles.css';

class NavigationTab extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.onNavButtonClick(event.target.id);
  }
  render() {
    const {productName, images, location, batch, harvestDate, longDesc, shortDesc} = this.props.data || {},
        currentTabId = this.props.currentTabId,
       image = images && images[0] ? images[0] : null;
    return (
        <ul class="tabs clearfix" data-tabgroup="first-tab-group">
          <li><a className={`${currentTabId === "userRecord" ? "active": ""}`} id="userRecord" onClick={this.handleClick}>农户记录</a></li>
          <li><a className={`${currentTabId === "allRecord" ? "active": ""}`} id="allRecord" onClick={this.handleClick}>全部记录</a></li>
          <li><a className={`${currentTabId === "userInfo" ? "active": ""}`} id="userInfo" onClick={this.handleClick}>你的农场</a></li>
        </ul>
    );
  }
}

export default NavigationTab;
