import 'bootstrap/less/bootstrap.less';
import React from 'react';


export default class MenuItem extends React.Component {
    render () {
        return (
            <div>
                {this.props.item.name} <br/>
                {this.props.item.description} <br/>
            </div>
        );
    }
}
