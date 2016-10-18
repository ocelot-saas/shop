import 'bootstrap/less/bootstrap.less';
import React from 'react';
import { connect } from 'react-redux';


class ShoppingCart extends React.Component {
    render() {
        console.log(this.props.orders);
        const orders = this.props.orders.orders.map(o => <li>{o}</li>);

        return (
	    <div className="container">
	        <h2>Shopping Cart</h2>
	    
                <ol>
                    {orders}
                </ol>
	    </div>
	)
    };
}


function mapStateToProps(store) {
    return {
	orders: store.orders
    }
};


function mapDispatchToProps(dispatch) {
    return {
	ordersAdd: (order) => dispatch(ordersAdd(order)),
	ordersRemove: (order) => dispatch(ordersRemove(order))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
