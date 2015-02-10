var Child = require('./Child')
var Todo = require('./Todo')
var Parent = React.createClass({
	getInitialState: function(){
		return {
			newTodo: "",
			todos: ["Eat Chicken", "Play Sports"]
		}
	},
	updateNewTodo: function(e){
		this.setState({
			newTodo: e.target.value
		})
	},
	handleAddToDo: function(){
		var newArr = this.state.todos;
		console.log(newArr)
		newArr.push(this.state.newTodo)
		this.setState({
			newTodo: '',
			todos: newArr
		});

	},
	render: function(){
		return (
			<div>
				<div>This is the parent. </div>
				<Child name="child div"/>
				<input type="text" placeholder="What do you need to do?" value={this.state.newTodo} onChange={this.updateNewTodo}/>
				<button onClick={this.handleAddToDo}>Add To Do</button>
				<Todo todos={this.state.todos}/>
			</div>
		)
	}
});

module.exports = Parent;
