import React from 'react';
import {render} from 'react-dom';

import SearchBar from './components/SearchBar.jsx'
import RestaurantList from './components/RestaurantList.jsx'

const restaurants = [
    {
        "id": 1779,
        "name": "House of Prime Rib",
        "address": "1906 Van Ness Ave.",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94109",
        "country": "US",
        "phone": "4158854605",
        "lat": 37.793381,
        "lng": -122.422502,
        "price": 3,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=1779",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=1779",
        "image_url": "https://www.opentable.com/img/restimages/1779.jpg"
    },
    {
        "id": 49783,
        "name": "25 Lusk",
        "address": "25 Lusk Street",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94107",
        "country": "US",
        "phone": "4154955875",
        "lat": 37.778501,
        "lng": -122.394311,
        "price": 3,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=49783",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=49783",
        "image_url": "https://www.opentable.com/img/restimages/49783.jpg"
    },
    {
        "id": 52849,
        "name": "Atelier Crenn",
        "address": "3127 Fillmore Street",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94123",
        "country": "US",
        "phone": "4154400460x",
        "lat": 37.798405,
        "lng": -122.435775,
        "price": 4,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=52849",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=52849",
        "image_url": "https://www.opentable.com/img/restimages/52849.jpg"
    }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <RestaurantList results={ restaurants } />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
