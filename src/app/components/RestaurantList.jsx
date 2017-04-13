import React from 'react';

import RestaurantCard from './RestaurantCard.jsx'

class RestaurantList extends React.Component {
    render() {
        const cards = [];

        this.props.results.forEach((restaurant) => {
            cards.push(
                <RestaurantCard restaurant={ restaurant } />
            )
        });

        return (
            <div className='restaurant-list'>
                { cards }
            </div>
        )
    }
}

module.exports = RestaurantList;
