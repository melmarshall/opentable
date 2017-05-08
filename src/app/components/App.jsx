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
        this.calculateNumPages = this.calculateNumPages.bind(this);

        // default search
        this.onSearchSubmit('oxnard');
    }

    calculateNumPages(){
        let numPages = Math.round(this.state.pagination.total_entries / this.state.pagination.per_page);

        if((this.state.pagination.total_entries % this.state.pagination.per_page) > 0){
            numPages = numPages + 1;
        }

        return numPages;
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

        this.onPageTurn(1);
    }

    onPageTurn(pageNum){
        let pageTurnUrl = `${this.url}&page=${pageNum}`;

        this.fetchResults(pageTurnUrl);
    }

    fetchResults(url){
        fetch(url)
            .then(data => data.json())
            .then((data) => {
                this.setState((prev, props) => ({
                    restaurants: prev.showScroll ? prev.restaurants.concat(data.restaurants) : data.restaurants,
                    pagination: {
                        total_entries: data.total_entries,
                        per_page: data.per_page,
                        current_page: data.current_page
                    }
                }));
            });
    }

    render() {
        return (
            <div>
                <div className='scroll-toggle' onClick={this.toggleScroll}>{ this.state.toggleText }</div>

                <SearchBar onSearchSubmit={ this.onSearchSubmit }/>

                <div className='results-content'>
                    { !this.state.showScroll &&
                        <Pagination
                            numPages={ this.calculateNumPages() }
                            currentPage={ this.state.pagination.current_page}
                            onPageTurn={ this.onPageTurn }
                        />
                    }
                    <RestaurantList
                        results={ this.state.restaurants }
                        onScroll={ this.onPageTurn }
                        pagination={ this.state.pagination }
                        showScroll={ this.state.showScroll }
                    />
                </div>
            </div>
        );
    }
}

module.exports = App;
