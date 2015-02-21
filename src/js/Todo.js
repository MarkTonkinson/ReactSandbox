var Todo = React.createClass({
	getInitialState: function(){
		//So I tried to avoid giving the child state, but I can't figure out how to refer to the parent state to make the update
		//This works
		//Next TODO: Work on animating the removes and adds! :)
		return {
			todos: this.props.todos
		}
	},
	handleTodo: function(i){
		//TODO: how do I get reference to the props, tried passing an argument, but that didn't work, this only looks at the input
		this.props.todos[i].selected = true;
		newTodoArr = this.props.todos.splice(i, 1)
		this.setState({
			todos: newTodoArr
		})	

	},
	render: function(){
		
		return (
			<div>
				<h4>To Do React</h4>
					<ul>
						{this.props.todos.map(function(todo, i){
							return (
								<li key={todo.key}> {todo.text}  <input type="checkbox" checked={todo.selected} value={todo.key} onChange={this.handleTodo.bind(this, i)}/></li>
							);
						}, this)}
					</ul>
			</div>	
		)
	}
});
module.exports = Todo;