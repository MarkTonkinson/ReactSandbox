var Todo = React.createClass({
	render: function(){
		var todos = this.props.todos.map(function(todo){
			return <li> {todo} </li>
		})
		return (
			<div>
				<h4>To Do React</h4>
					<ul>
						{todos}
					</ul>
			</div>	
		)
	}
});
module.exports = Todo;