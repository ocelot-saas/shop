import 'bootstrap/less/bootstrap.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRedirect, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import MenuSection from './MenuSection';
import { RESTAURANT_DATA } from './config';
import ShoppingCart from './ShoppingCart';
import { store } from './store';


class MainView extends React.Component {
    render() {
        const menuSections = this.props.route.restaurant.menu.sections.map(
            section => <MenuSection key={section.id} section={section} />);

        return (
            <div className="container">
                <h1>{this.props.route.restaurant.name}</h1>
                <p>{this.props.route.restaurant.description}</p>

                {menuSections}

	        <ShoppingCart />

	        <hr />
	        <footer>© 2016 Company, Inc.</footer>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/dist/" component={MainView} restaurant={RESTAURANT_DATA} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
