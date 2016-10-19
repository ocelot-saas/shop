import 'bootstrap/less/bootstrap.less';
import React from 'react';
import { connect } from 'react-redux';

import { ordersAdd } from './store';


class MenuItem extends React.Component {
    handleAddToOrders() {
	this.props.ordersAdd(this.props.section.id, this.props.item.id);
    }
    
    render () {
        return (
            <div className="col-sm-12 col-md-4">
                <div className="row">
                    <img className="col-xs-4" src={this.props.item.imageSet[0].uri} />
                    <div className="col-xs-8">
                        <p>{this.props.item.name}</p>
                        <p>{this.props.item.description}</p>
                        <span>{this.props.item.price}</span> <button type="button" className="btn btn-default" onClick={this.handleAddToOrders.bind(this)}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(store) {
    return {};
}


function mapDispatchToProps(dispatch) {
    return {
        ordersAdd: (sectionId, itemId) => dispatch(ordersAdd(sectionId, itemId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
