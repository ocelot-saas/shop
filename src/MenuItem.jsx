import 'bootstrap/less/bootstrap.less';
import React from 'react';


export default class MenuItem extends React.Component {
    render () {
        return (
            <div className="col-sm-12 col-md-4">
                <div className="row">
                    <img className="col-xs-4" src={this.props.item.imageSet[0].uri} />
                    <div className="col-xs-8">
		        <p>{this.props.item.name}</p>
                        <p>{this.props.item.description}</p>
			<span>20 USD</span> <button type="button" className="btn btn-default">Add</button>
		    </div>
		</div>
            </div>
        );
    }
}
