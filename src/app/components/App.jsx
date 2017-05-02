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
            showScroll: false,
            toggleText: 'Infinite Scroll',
            pagination: {
                total_entries: 0,
                per_page: 0,
                current_page: 1
            }
        };
        this.baseUrl = `http:\/\/opentable.herokuapp.com\/api\/restaurants?`;

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.toggleScroll = this.toggleScroll.bind(this);
        this.onPageTurn = this.onPageTurn.bind(this);
        this.fetchResults = this.fetchResults.bind(this);

        // default search
        this.onSearchSubmit('San Francisco');
    }

    onSearchSubmit(value){
        // TODO: put back restaurant name param
        this.url = this.baseUrl + `city=${value}`;

        this.fetchResults(this.url);
    }

    toggleScroll(){
        this.setState((prev, props) => ({
            showScroll: !prev.showScroll,
            toggleText: prev.toggleText === 'Infinite Scroll' ? 'Pagination' : 'Infinite Scroll'
        }));
    }

    onPageTurn(pageNum){
        let pageTurnUrl = `${this.url}&page=${pageNum}`;

        this.fetchResults(pageTurnUrl);
    }

    fetchResults(url){
        fetch(url)
            .then(data => data.json())
            .then((data) => {
                this.setState({
                    restaurants: data.restaurants,
                    pagination: {
                        total_entries: data.total_entries,
                        per_page: data.per_page,
                        current_page: data.current_page
                    }
                });
            });
    }

    render() {
        console.log(this.state.showScroll);
        return (
            <div>
                <SearchBar onSearchSubmit={ this.onSearchSubmit }/>

                <div className='results-content'>
                    <div className='scroll-toggle' onClick={this.toggleScroll}>{ this.state.toggleText }</div>

                    <Pagination
                        pageInfo={ this.state.pagination }
                        onPageTurn={ this.onPageTurn }
                    />
                    <RestaurantList results={ this.state.restaurants } />
                </div>
            </div>
        );
    }
}

module.exports = App;
