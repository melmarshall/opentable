import React from 'react';

import SearchBar from './SearchBar'
import RestaurantList from './RestaurantList'
import Pagination from './Pagination'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            restaurants: [],
            showScroll: false,
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
        this.calculateNumPages = this.calculateNumPages.bind(this);

        // default search
        this.onSearchSubmit('San Francisco');
    }

    calculateNumPages(){
        let numPages = Math.round(this.state.pagination.total_entries / this.state.pagination.per_page);

        if((this.state.pagination.total_entries % this.state.pagination.per_page) > 0){
            numPages = numPages + 1;
        }

        return numPages;
    }

    onSearchSubmit(value){
        // using the city param for more interesting results to play with
        this.url = this.baseUrl + `city=${value}`;

        this.fetchResults(this.url);
    }

    toggleScroll(){
        fetch(this.url)
            .then(data => data.json())
            .then((data) => {
                this.setState((prev, props) => ({
                    showScroll: !prev.showScroll,
                    restaurants: data.restaurants
                }));
            });
    }

    onPageTurn(pageNum, toggle){
        let pageTurnUrl = `${this.url}&page=${pageNum}`;

        fetch(pageTurnUrl)
            .then(data => data.json())
            .then((data) => {
                this.setState((prev, props) => ({
                    restaurants: prev.showScroll ? prev.restaurants.concat(data.restaurants) : data.restaurants,
                    pagination: {
                        current_page: data.current_page
                    }
                }));
            });
    }

    fetchResults(url){
        fetch(url)
            .then(data => data.json())
            .then((data) => {
                this.setState((prev, props) => ({
                    restaurants: data.restaurants,
                    pagination: {
                        total_entries: data.total_entries,
                        per_page: data.per_page,
                        current_page: data.current_page
                    }
                }));
            });
    }

    render() {
        let numPages = this.calculateNumPages(),
            toggleText = this.state.showScroll ? 'Pagination' : 'Infinite Scroll';

        return (
            <div>
                <div className='scroll-toggle' onClick={this.toggleScroll}>{ toggleText }</div>

                <SearchBar onSearchSubmit={ this.onSearchSubmit }/>

                <div className='results-content'>
                    { !this.state.showScroll &&
                        <Pagination
                            numPages={ numPages }
                            currentPage={ this.state.pagination.current_page}
                            onPageTurn={ this.onPageTurn }
                        />
                    }
                    <RestaurantList
                        results={ this.state.restaurants }
                        onScroll={ this.onPageTurn }
                        currentPage={ this.state.pagination.current_page }
                        numPages = { numPages }
                        showScroll={ this.state.showScroll }
                    />
                </div>
            </div>
        );
    }
}

module.exports = App;
