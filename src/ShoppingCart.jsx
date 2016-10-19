import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import React from 'react';
import { connect } from 'react-redux';

import { ordersAdd, ordersSubtract, ordersRemove } from './store';


class ShoppingCartItem extends React.Component {
    handleAddToOrders() {
        this.props.onClickAddToOrders(this.props.section.id, this.props.item.id);
    }

    handleSubtractFromOrders() {
         this.props.onClickSubtractFromOrders(this.props.section.id, this.props.item.id);
    }

    handleRemoveFromOrders() {
        this.props.onClickRemoveFromOrders(this.props.section.id, this.props.item.id);
    }
    
    render() {
        return (
            <div className="row">
                <span>{this.props.item.name}</span>
                <span>{this.props.orderItem.count}</span>
                <span>{this.props.orderItem.amount}</span>
		<button type="button" className="btn btn-default" onClick={this.handleAddToOrders.bind(this)}><i className="fa fa-plus"></i></button>
		<button type="button" className="btn btn-default" onClick={this.handleSubtractFromOrders.bind(this)}><i className="fa fa-minus"></i></button>
		<button type="button" className="btn btn-default" onClick={this.handleRemoveFromOrders.bind(this)}><i className="fa fa-times"></i></button>
            </div>
        );
    }
}


class ShoppingCartSection extends React.Component {
    render () {
        const orderItems = Object.keys(this.props.orderSection.items).map(iId =>
            <ShoppingCartItem
                key={iId}
		section={this.props.section}
                item={this.props.section.items[iId]}
                orderItem={this.props.orderSection.items[iId]}
		onClickAddToOrders={this.props.onClickAddToOrders}
		onClickSubtractFromOrders={this.props.onClickSubtractFromOrders}
		onClickRemoveFromOrders={this.props.onClickRemoveFromOrders}/>);

        return (
            <div>
                <h3>{this.props.section.name}</h3>
                {orderItems}
            </div>
        );
    }
}


class ShoppingCart extends React.Component {
    handleCheckout() {
    }
    
    render() {
        const orderSections = Object.keys(this.props.orders.sections).map(sId =>
            <ShoppingCartSection
                key={sId}
                section={this.props.restaurant.menu.sections[sId]}
                orderSection={this.props.orders.sections[sId]}
		onClickAddToOrders={this.props.ordersAdd}
		onClickSubtractFromOrders={this.props.ordersSubtract}
		onClickRemoveFromOrders={this.props.ordersRemove}/>);

	const checkoutDisabled = this.props.orders.totalCount == 0;


        return (
	    <div className="container">
	        <h2>Shopping Cart</h2>
	    
                {orderSections}

                <div className="row">
                    <span>Totals</span>
                    <span>{this.props.orders.totalCount}</span>
                    <span>{this.props.orders.totalAmount}</span>
                </div>

                <button type="button" className="btn btn-primary" disabled={checkoutDisabled} onClick={this.handleCheckout.bind(this)}>Checkout</button>
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
	ordersAdd: (sectionId, itemId) => dispatch(ordersAdd(sectionId, itemId)),
	ordersSubtract: (sectionId, itemId) => dispatch(ordersSubtract(sectionId, itemId)),
	ordersRemove: (sectionId, itemId) => dispatch(ordersRemove(sectionId, itemId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
