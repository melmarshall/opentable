import React from 'react';

class Pagination extends React.Component {
    constructor(props){
        super(props);

        this.numPages = Math.round(this.props.pageInfo.total_entries / this.props.pageInfo.per_page);

        if((this.props.pageInfo.total_entries % this.props.pageInfo.per_page) > 0){
            this.numPages = this.numPages + 1;
        }
    }

    render() {
        return (
            <div className='restaurant-list'>yo</div>
        )
    }
}

module.exports = Pagination;
