import React, { Component } from 'react';
import {getAll, getUserGeneratedRecord, getAllRecord} from "./services/TrackingService";
import ProductInfo from './components/ProductInfo';
import UserGeneratedRecord from "./components/UserGeneratedRecords";
import NavigationTab from "./components/NavigationTab";
import FarmInfo from "./components/FarmInfo";
import './App.css';
import AllRecords from './components/AllRecords';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
    this.state = {
      productInfo: null,
      userGeneratedRecord: null,
      currentTabId: "userRecord",
      farmInfo: null
    };
  }
  componentWillMount() {
    getAll().then(response => {
      console.log("product", response);
      this.setProductInfo(response);
      this.setFarmInfo(response);
    });
    getUserGeneratedRecord().then(response => {
      console.log("user generated record", response);
      this.setUserGeneratedRecord(response);
    })

    getAllRecord().then(response => {
      console.log("user generated record", response);
      this.setAllRecord(response);
    })
  }
  handleNav(tabId) {
    this.setState({
      currentTabId: tabId
    });
  }
  setFarmInfo(response) {
    const manufactory = response && response.manufactory,
        user = response && response.user;
      this.setState({
        farmInfo: {
          farmName: manufactory.name,
          userName: user.name,
          description: manufactory.long_description,
          address: user.address,
          phone: user.phone,
          image: user.image,
          email: user.email,
          userDescription: user.long_description,
        }
      })
  }
  setAllRecord(response) {
    const allRecords = response && response.elements;
    this.setState({
      allRecords
    });
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
      });
  }
  render() {
    const {userGeneratedRecord, allRecords, currentTabId, farmInfo} = this.state;
    return (
      <div className="sgyunlian-tracking-system">
        <ProductInfo data={this.state.productInfo} />
        <NavigationTab onNavButtonClick={this.handleNav} currentTabId={currentTabId}/>
        {userGeneratedRecord && currentTabId === "userRecord" ? 
        <UserGeneratedRecord data={this.state.userGeneratedRecord} /> : null}
        {allRecords && currentTabId === "allRecord"? 
        <AllRecords data={this.state.allRecords} /> : null}
        {farmInfo && currentTabId === "userInfo"? 
        <FarmInfo data={this.state.farmInfo} /> : null}
      </div>
    );
  }
}

export default App;
