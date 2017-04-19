import React from 'react'

class Price extends React.Component {

    render() {
        let dollarSigns = '';
        let leftoverDollars = '';

        for(var x=0; x < this.props.price; x++){
            dollarSigns = dollarSigns.concat('$');
        }

        for(var x = 0; x < (4 - this.props.price); x++){
            leftoverDollars = leftoverDollars.concat('$');
        }

        return (
            <div className='price'>
                <span className='highlighted'>{ dollarSigns }</span>
                <span className='non-highlighted'>{ leftoverDollars }</span>
            </div>
        )
    }
}

module.exports = Price;
