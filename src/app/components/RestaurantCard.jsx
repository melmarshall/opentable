import React from 'react';

class RestaurantCard extends React.Component {
    render(){
        return (
            <div className='card'>
                <img src={ this.props.restaurant.image_url }/>
                <div className='info'>
                    <div className='name'>{ this.props.restaurant.name }</div>
                    <div className='price'>{ this.props.restaurant.price }</div>
                </div>
            </div>
        );
    }
}

module.exports = RestaurantCard;
