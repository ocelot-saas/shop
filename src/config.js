export const RESTAURANT_DATA = {
    'name': 'Horia\'s place',
    'description': 'This is the place of Horia',
    'keywords': ['a', 'b', 'c'],
    'address': '123 Road 1, Bucharest',
    'openingHours': {},
    'imageSet': {},
    'menu': {
        'sections': {
	    1: {
		'id': 1,
		'name': 'Soups',
		'description': 'The soups',
		'items': {
		    1: {
			'id': 1,
			'name': 'Tomato soup',
			'description': 'The tomato soup',
			'keywords': ['vegetarian', 'spicy'],
			'ingredients': ['tomato', 'cream', 'salt', 'onions'],
			'price': 20,
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
		    },
		    2: {
			'id': 2,
			'name': 'Mushroom soup',
			'description': 'The mushroom soup',
			'keywords': ['vegetarian', 'spicy'],
			'ingredients': ['mushroom', 'cream', 'salt', 'onions'],
			'price': 40,
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
		    },
		    3: {
			'id': 3,
			'name': 'Onion soup',
			'description': 'The onion soup',
			'keywords': ['vegetarian', 'oniony'],
			'ingredients': ['onions', 'cream', 'salt'],
			'price': 30,
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
		    },
		    4: {
			'id': 4,
			'name': 'Pumpkin soup',
			'description': 'The pumpkin soup',
			'keywords': ['vegetarian', 'pumpkiny'],
			'ingredients': ['pumpkins', 'cream', 'salt'],
			'price': 40,
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
		    }
		}
	    }
	}
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
};


export const ENV = '{{{ ENV }}}';
export const ADDRESS = '{{{ ADDRESS }}}';
export const PORT = '{{{ PORT }}}';
export const MASTER_DOMAIN = '{{{ MASTER_DOMAIN }}}';
export const AUTH0_KEY = '{{{ AUTH0_KEY }}}';
export const AUTH0_DOMAIN = '{{{ AUTH0_DOMAIN }}}';
export const IDENTITY_SERVICE_DOMAIN = '{{{ IDENTITY_SERVICE_DOMAIN }}}';
export const INVENTORY_SERVICE_DOMAIN = '{{{ INVENTORY_SERVICE_DOMAIN }}}';
export const IDENTITY_SERVICE_PUBLIC_DOMAIN = '{{{ IDENTITY_SERVICE_PUBLIC_DOMAIN }}}';
export const INVENTORY_SERVICE_PUBLIC_DOMAIN = '{{{ INVENTORY_SERVICE_PUBLIC_DOMAIN }}}';
