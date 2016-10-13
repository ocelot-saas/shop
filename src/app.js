import 'bootstrap/less/bootstrap.less';
import React from 'react';
import ReactDOM from 'react-dom';

import MenuSection from './MenuSection';


const restaurantData = {
    'name': 'Horia\'s place',
    'description': 'This is the place of Horia',
    'keywords': ['a', 'b', 'c'],
    'address': '123 Road 1, Bucharest',
    'openingHours': {},
    'imageSet': {},
    'menu': {
        'sections': [{
            'id': 1,
            'name': 'Soups',
            'description': 'The soups',
            'items': [{
                'id': 1,
                'name': 'Tomato soup',
                'description': 'The tomato soup',
                'keywords': ['vegetarian', 'spicy'],
                'ingredients': ['tomato', 'cream', 'salt', 'onions'],
                'imageSet': []
            }, {
                'id': 2,
                'name': 'Mushroom soup',
                'description': 'The mushroom soup',
                'keywords': ['vegetarian', 'spicy'],
                'ingredients': ['mushroom', 'cream', 'salt', 'onions'],
                'imageSet': []
            }]
        }],
    },
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
        const menuSections = this.props.restaurant.menu.sections.map(
            section => <MenuSection key={section.id} section={section} />);

        return (
            <div className="container">
                <h1>{this.props.restaurant.name}</h1>
                <p>{this.props.restaurant.description}</p>
                {menuSections}
            </div>
        );
    }
}

ReactDOM.render(
    <MainView restaurant={restaurantData} />,
    document.getElementById('app')
);
