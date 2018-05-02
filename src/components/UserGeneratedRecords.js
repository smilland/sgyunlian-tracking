import React, { Component } from 'react';
import './styles.css';
import "./timeline.css";

// const ListItem = ({element}) =>  (<div className="cycle__list__item">
//         <span className="cycle__list__item__clip"></span>
//         <span className="cycle__list__item__bend"></span>
//         <p className="cycle__list__item__name">{element.short_description}</p>
//         <p className="cycle__list__item__date">{element.created_date}</p>
//         <img className="cycle__list__item__img" src={element.images && element.images[0]} />
//     </div>);

class UserGeneratedRecords extends Component {
  render() {
    return (
      <div className="user-generated">
        <div className="timeline">
            {
                this.props.data.map((element, index) => {
                    const image = element.images_description && element.images_description[0] ? element.images_description[0] : null;
                    return (
                        <div className="demo-card-wrapper">
                            <div className={`demo-card demo-card--step${index + 1}`}>
                                <div className="head">
                                    <div className="number-box">
                                        <span>{index + 1}</span>
                                    </div>
                                    <h2>{element.short_description}</h2>
                                </div>
                                <div className="body">
                                    <p>{element.long_description}</p>
                                    {image ? <img src={image} alt="Graphic" />: null}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
      </div>
    );
  }
}

export default UserGeneratedRecords;
