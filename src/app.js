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
        const menuSections = Object.keys(this.props.route.restaurant.menu.sections).map(sId =>
            <MenuSection
                key={sId}
                section={this.props.route.restaurant.menu.sections[sId]} />);

        return (
            <div className="container">
                <h1>{this.props.route.restaurant.general.name}</h1>
                <p>{this.props.route.restaurant.general.description}</p>

                {menuSections}

	        <ShoppingCart restaurant={RESTAURANT_DATA} />

	        <hr />
	        <footer>© 2016 Company, Inc.</footer>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainView} restaurant={RESTAURANT_DATA} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
