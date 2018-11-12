
class TodoList extends React.Component {
render() {
	return (
		<ul>
			{this.props.items.map(item=>(
				<li key={item.key}>{item.value}</li>
				))}
		</ul>
		)
	
}
}
class Todo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items : [],
			item:''
		}
		this.setText = this.setText.bind(this);
		this.addItem = this.addItem.bind(this);
	}
	componentWillUnmount(){

	}
	componentDidMount(){

	}
	render() {
		return (
			<div>
			<div> <input type="text" onChange={this.setText} value={this.state.item}/><button onClick={this.addItem}> Add </button></div>
			<div><TodoList items={this.state.items} /></div>
			</div>
			)

	}
	setText(e){
		this.setState({
			item:e.target.value
		});
	}
	addItem(e){
		e.preventDefault();

		var newItem = {
			key: this.state.items.length,
			value: this.state.item
		}

		this.setState((prevState)=>({
			items: prevState.items.concat(newItem),
			item:''
		}));

	}
}



var items = [
{key:1,value:1},
{key:2,value:2},
{key:3,value:3},
{key:4,value:4},
{key:5,value:5}
];

function Welcome(props){
	return <h1>Welcome {props.name}</h1>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props){
	if(props.celcius>100){
		return <h1> Water will boil </h1>;
	}
	else {
		return <h1> Water will not boil</h1>
	}
}

function tryConvert(temp,convert){
	const input = parseFloat(temp);
	if(Number.isNaN(input)){
		return ''
	}
	else {
		const output = convert(input);
		const rounded = Math.round(output*1000)/1000;
		return rounded.toString();
	}
}

const scaleNames = {
	c:'celcius',
	f:'fahrenheit'
}

class TempInput extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<fieldset>
			<legend> Enter the temparature in {scaleNames[this.props.scale]}</legend>
			<input value={this.props.temp} onChange={this.props.handleChange} />
			</fieldset>
			);
	}
}

class Calculate extends React.Component {
	constructor(props){
		super(props);
		this.state = {scale:'c',temp:''};

		this.handleCelciusChange = this.handleCelciusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

	}
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	handleCelciusChange(e){
		this.setState({
			scale:'c',
			temp:e.target.value
		});
	}
	handleFahrenheitChange(e){
		this.setState({
			scale:'f',
			temp:e.target.value
		});	
	}
	render(){
		const scale = this.state.scale;
		const temp = this.state.temp;

		const celcius = (scale==='c')?temp:tryConvert(temp,toCelsius);
		const fahrenheit = (scale==='f')?temp:tryConvert(temp,toFahrenheit);

		return (
			<div>
			<TempInput scale='c' temp={celcius} handleChange={this.handleCelciusChange}/>
			<TempInput scale='f' temp={fahrenheit} handleChange={this.handleFahrenheitChange}/>
			<BoilingVerdict celcius={celcius} />
			</div>
			)
	}
}


const header = <h1>React Examples</h1>;
ReactDOM.render(<Calculate scale="c" />,document.getElementById('eg2'));
ReactDOM.render(header,document.getElementById('header'));
ReactDOM.render(<Welcome name="Subodh Kumar"/>,document.getElementById('message'));
ReactDOM.render(<Todo items={items} />,document.getElementById('content'));