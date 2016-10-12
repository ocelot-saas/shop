import 'app.less';
import React from 'react';
import ReactDOM from 'react-dom';

const restaurantData = {
    'name': 'Horia\'s place',
    'description': 'This is the place of Horia',
    'keywords': ['a', 'b', 'c'],
    'address': '123 Road 1, Bucharest',
    'openingHours': {},
    'imageSet': {},
    'menu': [{
        'name': 'Soups',
        'description': 'The soups',
        'items': [{
            'name': 'Tomato soup',
            'description': 'The tomato soup',
            'keywords': ['vegetarian', 'spicy'],
            'ingredients': ['tomato', 'cream', 'salt', 'onions'],
            'imageSet': []
        }, {
            'name': 'Mushroom soup',
            'description': 'The mushroom soup',
            'keywords': ['vegetarian', 'spicy'],
            'ingredients': ['mushroom', 'cream', 'salt', 'onions'],
            'imageSet': []
        },]
    }],
    'platforms': {
        'website': {
            'subdomain': 'horias-place'
        },
        'callCenter': {
            'phoneNumber': '123',
        },
        'emailCenter': {
            'emailName': 'contact'
        }
    }
}


class MainView extends React.Component {
    render() {
        return <h1>{this.props.restaurant.name}</h1>;
    }
}

ReactDOM.render(
    <MainView restaurant={restaurantData} />,
    document.getElementById('app')
);
