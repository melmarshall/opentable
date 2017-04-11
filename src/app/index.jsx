import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <SearchBar />
        );
    }
}

class SearchBar extends React.Component {
    constructor(){
        super();

        this.state = { value: ''};

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSearchSubmit(){
        console.log(this.state.value);
    }

    handleChange(e){
        this.setState({ value: e.target.value });
    }

    render (){
        return (
            <div className='landing-img'>
                <div className='search-panel'>
                    <input type='text' className='search-bar' onChange={ this.handleChange }/>
                    <input type='submit' className='search-submit' onClick={ this.onSearchSubmit }/>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
