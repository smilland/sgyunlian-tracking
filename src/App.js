import React, { Component } from 'react';
import {getAll, getUserGeneratedRecord} from "./services/TrackingService";
import ProductInfo from './components/ProductInfo';
import UserGeneratedRecord from "./components/UserGeneratedRecords";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null,
      userGeneratedRecord: null
    };
  }
  componentWillMount() {
    getAll().then(response => {
      console.log("product", response);
      this.setProductInfo(response);
    });
    getUserGeneratedRecord().then(response => {
      console.log("user generated record", response);
      this.setUserGeneratedRecord(response);
    })
  }
  setUserGeneratedRecord(response) {
    const userGeneratedRecord = response && response.elements;
    this.setState({
      userGeneratedRecord
    });
  }
  setProductInfo(response) {
      const product = response && response.product,
        manufactory = response && response.manufactory,
        endDate = product.end_date,
        startDate = product.start_date,
        productName = product.name,
        location = manufactory.name,
        batch = "batch1",
        longDesc = product.long_description,
        images = product.images_description;
      this.setState({
        productInfo: {
          productName,
          location,
          images,
          longDesc,
          batch
        }
      })
  }
  render() {
    return (
      <div className="sgyunlian-tracking-system">
        <ProductInfo data={this.state.productInfo} />
        {this.state.userGeneratedRecord ? 
        <UserGeneratedRecord data={this.state.userGeneratedRecord} /> : null}
        
      </div>
    );
  }
}

export default App;
