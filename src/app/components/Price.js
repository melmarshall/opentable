import React from 'react'

class Price extends React.Component {

    constructor(props){
        super(props);

        this.maxDollars = 4;
    }

    render() {
        let dollarSigns = '';
        let leftoverDollars = '';

        for(var x=0; x < this.props.price; x++){
            dollarSigns = dollarSigns.concat('$');
        }

        for(var x = 0; x < (this.maxDollars - this.props.price); x++){
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
