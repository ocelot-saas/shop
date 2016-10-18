import { createStore, combineReducers } from 'redux';
import { createAction } from 'redux-actions';


export const ordersAdd = createAction('ORDERS_ADD', (order) => { return { order }; });
export const ordersRemove = createAction('ORDERS_REMOVE', (order) => { return { order }; });


const ordersInitialState = {
    orders: []
};


function orders(state=ordersInitialState, action) {
    switch (action.type) {
    case 'ORDERS_ADD':
	return {
	    orders: state.orders.concat(action.payload.order)
	}
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

