import React, { Component } from 'react';
import './styles.css';
import {toISODate} from "../utils";
import Collapsible from 'react-collapsible';

const Record = ({element}) => {
    const image = element.images_description && element.images_description[0] ? element.images_description[0] : null;
    return element ? (
        <div className="record">
            <p>{element.long_description}</p>
            {image ? <img src={image} alt="Graphic" />: null}
        </div>
    ) : null;
};

class AllRecords extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className="all-records">
        {this.props.data.map((element) => {
            return <Collapsible trigger={`${toISODate(element.created_date)} ${element.short_description}`}>
                <Record element = {element}/>
            </Collapsible>
        })}
      </div>
    );
  }
}

export default AllRecords;
