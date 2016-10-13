import 'bootstrap/less/bootstrap.less';
import React from 'react';

import MenuItem from './MenuItem';


export default class MenuSection extends React.Component {
    render () {
        const menuItems = this.props.section.items.map(
            item => <MenuItem key={item.id} item={item} />);
        
        return (
            <div>
                {this.props.section.name} <br/>
                {this.props.section.description} <br/>
                {menuItems}
            </div>
        );
    }
}
