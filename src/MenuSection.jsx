import 'bootstrap/less/bootstrap.less';
import React from 'react';

import MenuItem from './MenuItem';


export default class MenuSection extends React.Component {
    render () {
        const menuItems = Object.keys(this.props.section.items).map(
            iId => <MenuItem key={iId} section={this.props.section} item={this.props.section.items[iId]} />);
        
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
