import 'bootstrap/less/bootstrap.less';
import React from 'react';
import { connect } from 'react-redux';


class ShoppingCartItem extends React.Component {
    render() {
        return (
            <div className="row">
                <span>{this.props.item.name}</span>
                <span>{this.props.orderItem.count}</span>
                <span>{this.props.orderItem.amount}</span>
            </div>
        );
    }
}


class ShoppingCartSection extends React.Component {
    render () {
        const orderItems = Object.keys(this.props.orderSection.items).map(iId =>
            <ShoppingCartItem
                key={iId}
                item={this.props.section.items[iId]}
                orderItem={this.props.orderSection.items[iId]} />);

        return (
            <div>
                <h3>{this.props.section.name}</h3>
                {orderItems}
            </div>
        );
    }
}


class ShoppingCart extends React.Component {
    render() {
        const orderSections = Object.keys(this.props.orders.sections).map(sId =>
            <ShoppingCartSection
                key={sId}
                section={this.props.restaurant.menu.sections[sId]}
                orderSection={this.props.orders.sections[sId]} />);

        return (
	    <div className="container">
	        <h2>Shopping Cart</h2>
	    
                {orderSections}

                <div className="row">
                    <span>Totals</span>
                    <span>{this.props.orders.totalCount}</span>
                    <span>{this.props.orders.totalAmount}</span>
                </div>
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
	ordersSubtract: (sectionId, item) => dispatch(ordersSubtract(sectionId, itemId)),
	ordersRemove: (sectionId, itemId) => dispatch(ordersRemove(sectionId, itemId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
