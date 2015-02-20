var Child = require('./Child')
var Todo = require('./Todo')
var Parent = React.createClass({
	getInitialState: function(){
		//if the data was being populated this key would need to be set dynamically as to not overwrite current data
		return {
			text: '',
			key: 1,
			todos: []
		}
	},
	updateNewTodo: function(e){
		this.setState({
			text: e.target.value
		})
	},
	handleAddToDo: function(){
		var newArr = this.state.todos;
		var newTodo = {
			text: this.state.text,
			key: this.state.key
		}
		newArr.push(newTodo)
		this.setState({
			text: '',
			key: this.state.key + 1,
			todos: newArr
		});
	},
	render: function(){
		return (
			<div>
				<div>This is the parent. </div>
				<Child name="child div" place="hello"/>
				<input type="text" placeholder="What do you need to do?" value={this.state.text} onChange={this.updateNewTodo}/>
				<button onClick={this.handleAddToDo}>Add To Do</button>
				<Todo todos={this.state.todos}/>
			</div>
		)
	}
});

module.exports = Parent;
