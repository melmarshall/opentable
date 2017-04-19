import React from 'react';
import Price from './Price.jsx'

class CardInfo extends React.Component {
    render(){
        let address = `${this.props.restaurant.address}
            ${this.props.restaurant.city}, ${this.props.restaurant.state}
            ${this.props.restaurant.postal_code}`;
            
        return (
            <div className='info'>
                <div className='name'>{ this.props.restaurant.name }</div>
                <Price price={ this.props.restaurant.price } />
                <div className='reserve-link'>
                    <a href={this.props.restaurant.reserve_url} className='reserve'>Reserve</a>
                </div>
                <div className='address'>{ address }</div>
            </div>
        )
    }
}

module.exports = CardInfo;
