import { createStore, combineReducers } from 'redux';
import { createAction } from 'redux-actions';

import { RESTAURANT_DATA } from './config';


export const ordersAdd = createAction('ORDERS_ADD', (sectionId, itemId) => { return { sectionId, itemId }; });
export const ordersSubtract = createAction('ORDERS_SUBTRACT', (sectionId, itemId) => { return { sectionId, itemId }; });
export const ordersRemove = createAction('ORDERS_REMOVE', (sectionId, itemId) => { return { sectionId, itemId }; });


const ordersInitialState = {
    totalAmount: 0,
    orders: {}
};


function orders(state=ordersInitialState, action) {
    switch (action.type) {
    case 'ORDERS_ADD':
	const sectionId = action.payload.sectionId;
	const itemId = action.payload.itemId;
	// What do if this doesn't exist!
	const item = RESTAURANT_DATA.menu.sections[sectionId].items[itemId];

	const newState = Object.assign({}, state);

	newState.totalAmount += item.price;

	if (orderId in newState.orders) {
	    const order = newState.orders[orderId];
	    order.count++;
	    order.amount += item.price;
	} else {
	    const order = {
		count: 1,
		amount: item.price
	    };
	    newState.orders[orderId] = order;
	}

	return newState;
    case 'ORDERS_SUBTRACT':
	return state;
    case 'ORDERS_REMOVE':
	return state;
    default:
	return state;
    }
}


const reducers = combineReducers({
    orders: orders
});


export const store = createStore(reducers);

