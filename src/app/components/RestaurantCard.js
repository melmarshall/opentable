import React from 'react';
import CardInfo from './CardInfo'

class RestaurantCard extends React.Component {
    render(){
        return (
            <div className='card'>
                <img src={ this.props.restaurant.image_url }/>
                <CardInfo restaurant={ this.props.restaurant } />
            </div>
        );
    }
}

module.exports = RestaurantCard;
