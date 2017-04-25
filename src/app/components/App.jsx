import React from 'react';

import SearchBar from './SearchBar.jsx'
import RestaurantList from './RestaurantList.jsx'
import Pagination from './Pagination.jsx'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            restaurants: [],
            pagination: {
                total_entries: 0,
                per_page: 0
            }
        };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        
        this.onSearchSubmit('San Francisco');
    }

    onSearchSubmit(value){
        let url = `http:\/\/opentable.herokuapp.com\/api\/restaurants?
            name=${value}&city=${value}`;

        fetch(url)
            .then(data => data.json())
            .then((data) => {
                this.setState({
                    restaurants: data.restaurants,
                    pagination: {
                        total_entries: data.total_entries,
                        per_page: data.per_page
                    }
                });
            });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <SearchBar onSearchSubmit={ this.onSearchSubmit }/>
                <Pagination pageInfo={ this.state.pagination } />
                <RestaurantList results={ this.state.restaurants } />
            </div>
        );
    }
}

module.exports = App;
