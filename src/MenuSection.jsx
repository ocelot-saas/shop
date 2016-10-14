import 'bootstrap/less/bootstrap.less';
import React from 'react';

import MenuItem from './MenuItem';


export default class MenuSection extends React.Component {
    render () {
        const menuItems = this.props.section.items.map(
            item => <MenuItem key={item.id} item={item} />);
        
        return (
	    <div className="container">
                <h2>{this.props.section.name}</h2>
                <p>{this.props.section.description}</p>

		<div className="row">
                    {menuItems}
		</div>
	    </div>
        );
    }
}
