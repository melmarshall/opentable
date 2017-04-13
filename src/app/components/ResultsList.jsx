import React from 'react';

class ResultsList extends React.Component {
    constructor(props){
        super(props);

        console.log(props);
    }

    render() {
        return (
            <div className='list-container' />
        )
    }
}

module.exports = ResultsList;
