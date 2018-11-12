class Sfc extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			time: 1
		}
	}
	changeState(){
		this.setState(prevState=>({
			time: prevState.time+.5
		}))
	}
	componentDidMount(){
		this.timer = setInterval(()=>this.changeState(),500);
	}
	componentWillUnmount(){}
	render(){
		return (
			<div> Test with States | {this.state.time} </div>
			)
	}
}

ReactDOM.render(<Sfc />,document.getElementById('testDiv2'));


class MyButton extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){}
	componentWillUnmount(){}
	render(){
		return(
		<button>Click {this.props.action}</button>
		)
	}
}

class MyInput extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){}
	componentWillUnmount(){}
	render(){
		return(
		<input />
		)
	}
}

class MyToDoForm extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){}
	componentWillUnmount(){}
	render(){
		return(
		<div>
		<MyInput /><MyButton action={this.props.btnAction} />
		</div>
		)
	}	
}

class MyToDoList extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){}
	componentWillUnmount(){}
	render(){
		return(
		<div>
		<ul>
		 	{this.props.itemList.map(item=>(<li key={item}>{item}</li>))}
		 </ul>
		</div>
		)
	}	
}


class MyToDoApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
	}
	addItem(){
		this.setState(prevState=>({
			items: prevState.items.concat('Item New')
		}));
	}
	componentDidMount(){
		var timer = setInterval(()=>(this.addItem()),5000);
	}
	componentWillUnmount(){
		clearInterval(timer);
	}
	render(){
		return(
			<div>
				<div>
					<MyInput /><MyButton btnAction="to Add" />
				</div>
				<div>
					<MyToDoList itemList={this.state.items} />
				</div>
			</div>
		)
	}
}

// ReactDOM.render(<MyToDoForm btnAction="to do"/>,document.getElementById('testAction'));
var list = [1,2,3];
ReactDOM.render(<MyToDoApp />,document.getElementById('testAction'));
// ReactDOM.render(<MyButton action="to add"/>,document.getElementById('testAction'));