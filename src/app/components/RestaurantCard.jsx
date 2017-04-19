import React from 'react';
import Price from './Price.jsx'

class RestaurantCard extends React.Component {
    render(){
        return (
            <div className='card'>
                <img src={ this.props.restaurant.image_url }/>
                <div className='info'>
                    <div className='name'>{ this.props.restaurant.name }</div>
                    <Price price={ this.props.restaurant.price } />
                </div>
            </div>
        );
    }
}

module.exports = RestaurantCard;
