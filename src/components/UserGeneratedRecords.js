import React, { Component } from 'react';
import './styles.css';

const ListItem = ({element}) =>  (<div className="cycle__list__item">
        <span className="cycle__list__item__clip"></span>
        <span className="cycle__list__item__bend"></span>
        <p className="cycle__list__item__name">{element.short_description}</p>
        <p className="cycle__list__item__date">{element.created_date}</p>
        <img className="cycle__list__item__img" src={element.images && element.images[0]} />
    </div>);

class UserGeneratedRecords extends Component {
  render() {
    const {created_date, images_description, long_description, short_description} = this.props.data || {},
       image = images_description && images_description[0] ? images_description[0] : null,
       evenData = [], oddData = [];
       this.props.data.forEach((element, index) => {
           if ((index % 2) === 0) {
              evenData.push(element);
           } else {
               oddData.push(element);
           }
       });
    return (
      <div className="user-generated">
        <div className="content-inner">
            <div className="cycle clearfix">
                <div className="cycle__list cycle__list-left">
                    {evenData.map((element, index) => {
                        return (<ListItem element={element}/>);
                    })}
                </div>
                <div className="cycle__list cycle__list-right">
                    {evenData.map((element, index) => {
                        return (<ListItem element={element}/>);
                    })}
                </div>
                })}
                <div className="cycle-footer"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default UserGeneratedRecords;
