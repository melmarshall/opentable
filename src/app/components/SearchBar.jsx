import React from 'react';

class SearchBar extends React.Component {

    constructor(){
        super();

        this.state = { value: ''};

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSearchSubmit(){
    }

    handleChange(e){
        this.setState({ value: e.target.value });
    }

    render (){
        return (
            <div className='search-panel'>
                <input type='text' className='search-bar' placeholder='Enter name of restaurant' onChange={ this.handleChange }/>
                <input type='submit' className='search-submit' onClick={ this.onSearchSubmit }/>
            </div>
        );
    }
}

module.exports = SearchBar;
