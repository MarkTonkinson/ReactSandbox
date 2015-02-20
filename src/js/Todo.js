var Todo = React.createClass({
	getInitialState: function(){
		return {
			checkbox: false
		}
	},
	handleTodo: function(e){
		//TODO: how do I get reference to the props, tried passing an argument, but that didn't work, this only looks at the input
		console.log(e)
		
		var todos = this.props.todos;
		console.log('checkbox', this.state.checkbox);
		
		this.setState({
			checkbox: !this.state.checkbox
		})
		
	},
	render: function(){
		var todos = this.props.todos.map(function(todo){
			return <li key={todo.key}> {todo.text} <input type="checkbox" checked={this.state.checkbox} value={todo.key} onChange={this.handleTodo}/></li>
		}.bind(this));
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