var Todo = React.createClass({
	getInitialState: function(){
		return {
			checkbox: false
		}
	},
	handleTodo: function(e){
		var todos = this.props.todos;
		console.log('todos', todos);
		this.setState({
			checkbox: e.target.value
		})
		console.log('checkbox', this.state.checkbox);
	},
	render: function(){
		var todos = this.props.todos.map(function(todo){
			return <li> {todo} <input type="checkbox" checkbox={this.state.checkbox} onChange={this.handleTodo}/></li>
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