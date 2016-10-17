import 'bootstrap/less/bootstrap.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRedirect, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import MenuSection from './MenuSection';
import store from './store';

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
                'imageSet': [{
		    'orderNo': 1,
		    'uri': 'http://placehold.it/100x100?text=im1',
		    'width': 100,
		    'height': 100
		}, {
		    'orderNo': 2,
		    'uri': 'http://placehold.it/100x100?text=im2',
		    'width': 100,
		    'height': 100
		}]
            }, {
                'id': 2,
                'name': 'Mushroom soup',
                'description': 'The mushroom soup',
                'keywords': ['vegetarian', 'spicy'],
                'ingredients': ['mushroom', 'cream', 'salt', 'onions'],
                'imageSet': [{
		    'orderNo': 1,
		    'uri': 'http://placehold.it/100x100?text=im3',
		    'width': 100,
		    'height': 100
		}, {
		    'orderNo': 2,
		    'uri': 'http://placehold.it/100x100?text=im4',
		    'width': 100,
		    'height': 100
		}]
            }, {
                'id': 3,
                'name': 'Onion soup',
                'description': 'The onion soup',
                'keywords': ['vegetarian', 'oniony'],
                'ingredients': ['onions', 'cream', 'salt'],
                'imageSet': [{
		    'orderNo': 1,
		    'uri': 'http://placehold.it/100x100?text=im5',
		    'width': 100,
		    'height': 100
		}, {
		    'orderNo': 2,
		    'uri': 'http://placehold.it/100x100?text=im6',
		    'width': 100,
		    'height': 100
		}]
            }, {
                'id': 4,
                'name': 'Pumpkin soup',
                'description': 'The pumpkin soup',
                'keywords': ['vegetarian', 'pumpkiny'],
                'ingredients': ['pumpkins', 'cream', 'salt'],
                'imageSet': [{
		    'orderNo': 1,
		    'uri': 'http://placehold.it/100x100?text=im7',
		    'width': 100,
		    'height': 100
		}, {
		    'orderNo': 2,
		    'uri': 'http://placehold.it/100x100?text=im8',
		    'width': 100,
		    'height': 100
		}]
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
        const menuSections = this.props.route.restaurant.menu.sections.map(
            section => <MenuSection key={section.id} section={section} />);

        return (
            <div className="container">
                <h1>{this.props.route.restaurant.name}</h1>
                <p>{this.props.route.restaurant.description}</p>

                {menuSections}

	        <hr />
	        <footer>© 2016 Company, Inc.</footer>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/dist/" component={MainView} restaurant={restaurantData} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
