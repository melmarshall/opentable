import React from 'react';

import SearchBar from './SearchBar.jsx'
import RestaurantList from './RestaurantList.jsx'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            restaurants: []
        };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit(value){
        fetch('http://opentable.herokuapp.com/api/restaurants?name=' + value)
            .then(data => data.json())
            .then((data) => {
                this.setState({ restaurants: data.restaurants });
            });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchSubmit={ this.onSearchSubmit }/>
                <RestaurantList results={ this.state.restaurants } />
            </div>
        );
    }
}

module.exports = App;
