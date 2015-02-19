var Child = React.createClass({
	render: function(){
		return (
			<div>
				and this is the awesome <b>{this.props.name} and {this.props.place}</b>
			</div>
		)
	}
});

module.exports = Child;