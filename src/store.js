import { createStore, combineReducers } from 'redux';
import { createAction } from 'redux-actions';

import { RESTAURANT_DATA, MENU_ITEMS } from './config';


export const ordersAdd = createAction('ORDERS_ADD', (sectionId, itemId) => { return { sectionId, itemId }; });
export const ordersSubtract = createAction('ORDERS_SUBTRACT', (sectionId, itemId) => { return { sectionId, itemId }; });
export const ordersRemove = createAction('ORDERS_REMOVE', (sectionId, itemId) => { return { sectionId, itemId }; });


const ordersInitialState = {
    totalCount: 0,
    totalAmount: 0,
    sections: {}
};


function orders(state=ordersInitialState, action) {
    switch (action.type) {
    case 'ORDERS_ADD':
        const sectionId = action.payload.sectionId;
        const itemId = action.payload.itemId;
        // What do if this doesn't exist!
        const section = RESTAURANT_DATA.menu.sections[sectionId];
        const item = section.items[itemId];

        const newState = Object.assign({}, state);

        newState.totalCount += 1;
        newState.totalAmount += item.price;

        var orderSection;
        if (sectionId in newState.sections) {
            orderSection = newState.sections[sectionId]
        } else {
            orderSection = {
                items: {}
            };
            newState.sections[sectionId] = orderSection;
        }

        if (itemId in orderSection.items) {
            const orderItem = orderSection.items[itemId];
            orderItem.count += 1;
            orderItem.amount += item.price;
        } else {
            const orderItem = {
                count: 1,
                amount: item.price
            };
            orderSection.items[itemId] = orderItem;
        }

        console.log(newState);

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

