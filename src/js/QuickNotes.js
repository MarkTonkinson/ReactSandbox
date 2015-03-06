
var divStyle = {
	border: '1px solid black',
	margin: '1rem',
	padding: '0rem 1rem 1rem 1rem',
	width: '20%',
}

//I can just add these to the react class I would think
var textAreaStyle = {
	width: '100%'
}

var startingPosition = {
	pageX: '50',
	pageY: '50'
}

//Interesting behavioral difference, height is auto adjusted
//unless I set the height?  yes
var QuickNotes = React.createClass({
	getInitialState: function(){
		return {
			posX: '',
			posY: '',
			divStyle: divStyle
		}
	},
	componentDidMount: function(){

	},
	handleDrag: function(e){
		//console.log('element, ', this.state.element)
		console.log('page,', e.pageX, e.pageY, e.left, e.top)
		if(e.pageX !== 0 && e.pageY !== 0){
			this.setState({
				posX: e.screenX,
				posY: e.screenY
			})
		}

		console.log('hey ', this.state.posX, this.state.posY)
	},
	handleDrop: function(e){

		console.log('hey last ', this.state.posX, this.state.posY)
			divStyle.left = this.state.posX + 'px'
			divStyle.top = this.state.posY + 'px'
		this.setState({
			divStyle: divStyle
		})

		console.log(this.state.divStyle)
		this.forceUpdate()
		
	},
	render: function(){
		return (
			<div style={this.state.divStyle} draggable onDrag={this.handleDrag} onDragEnd={this.handleDrop}>
				<h3>Notes</h3>
				<textarea style={textAreaStyle}></textarea>
			</div>
		)
	}
});

module.exports = QuickNotes

