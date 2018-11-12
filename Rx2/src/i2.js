 // import React from "react";
 // import ReactDOM from "react-dom";


class TestComp extends React.Component {
render() {
	return (
		<div>
		<h1> My First Component with Gulp </h1>
		<ul>
		{this.props.name.map(name=>(
				<li key={name}>{name}</li>
				))}
		</ul>
		</div>
		)
	
}
}

class TestComp2 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			val : 1
		}
		
	}

	
	tick(){
		this.setState(prevState=>({
			val: prevState.val+1
		}));
	}

	componentDidMount(){
		this.timer = setInterval(()=>this.tick(),1000);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}
	
	


	render(){
		return (
			<div>Current State Value | {this.state.val}</div>
		)
	}

}
var Test = <h1>Test Now</h1>;
var names = ['a','b','c'];
// ReactDOM.render(<TestComp name={names} />,document.getElementById('testDiv'));
ReactDOM.render(Test,document.getElementById('testDiv'));
ReactDOM.render(<TestComp2 />,document.getElementById('testDiv2'));