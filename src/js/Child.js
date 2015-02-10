var Child = React.createClass({
	render: function(){
		return (
			<div>
				and this is the awesome <b>{this.props.name}</b>
			</div>
		)
	}
});

module.exports = Child;