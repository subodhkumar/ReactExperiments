'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_React$Component) {
	_inherits(TodoList, _React$Component);

	function TodoList() {
		_classCallCheck(this, TodoList);

		return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
	}

	_createClass(TodoList, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'ul',
				null,
				this.props.items.map(function (item) {
					return React.createElement(
						'li',
						{ key: item.key },
						item.value
					);
				})
			);
		}
	}]);

	return TodoList;
}(React.Component);

var Todo = function (_React$Component2) {
	_inherits(Todo, _React$Component2);

	function Todo(props) {
		_classCallCheck(this, Todo);

		var _this2 = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

		_this2.state = {
			items: [],
			item: ''
		};
		_this2.setText = _this2.setText.bind(_this2);
		_this2.addItem = _this2.addItem.bind(_this2);
		return _this2;
	}

	_createClass(Todo, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					' ',
					React.createElement('input', { type: 'text', onChange: this.setText, value: this.state.item }),
					React.createElement(
						'button',
						{ onClick: this.addItem },
						' Add '
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(TodoList, { items: this.state.items })
				)
			);
		}
	}, {
		key: 'setText',
		value: function setText(e) {
			this.setState({
				item: e.target.value
			});
		}
	}, {
		key: 'addItem',
		value: function addItem(e) {
			e.preventDefault();

			var newItem = {
				key: this.state.items.length,
				value: this.state.item
			};

			this.setState(function (prevState) {
				return {
					items: prevState.items.concat(newItem),
					item: ''
				};
			});
		}
	}]);

	return Todo;
}(React.Component);

var items = [{ key: 1, value: 1 }, { key: 2, value: 2 }, { key: 3, value: 3 }, { key: 4, value: 4 }, { key: 5, value: 5 }];

function Welcome(props) {
	return React.createElement(
		'h1',
		null,
		'Welcome ',
		props.name
	);
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return celsius * 9 / 5 + 32;
}

function BoilingVerdict(props) {
	if (props.celcius > 100) {
		return React.createElement(
			'h1',
			null,
			' Water will boil '
		);
	} else {
		return React.createElement(
			'h1',
			null,
			' Water will not boil'
		);
	}
}

function tryConvert(temp, convert) {
	var input = parseFloat(temp);
	if (Number.isNaN(input)) {
		return '';
	} else {
		var output = convert(input);
		var rounded = Math.round(output * 1000) / 1000;
		return rounded.toString();
	}
}

var scaleNames = {
	c: 'celcius',
	f: 'fahrenheit'
};

var TempInput = function (_React$Component3) {
	_inherits(TempInput, _React$Component3);

	function TempInput(props) {
		_classCallCheck(this, TempInput);

		return _possibleConstructorReturn(this, (TempInput.__proto__ || Object.getPrototypeOf(TempInput)).call(this, props));
	}

	_createClass(TempInput, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'fieldset',
				null,
				React.createElement(
					'legend',
					null,
					' Enter the temparature in ',
					scaleNames[this.props.scale]
				),
				React.createElement('input', { value: this.props.temp, onChange: this.props.handleChange })
			);
		}
	}]);

	return TempInput;
}(React.Component);

var Calculate = function (_React$Component4) {
	_inherits(Calculate, _React$Component4);

	function Calculate(props) {
		_classCallCheck(this, Calculate);

		var _this4 = _possibleConstructorReturn(this, (Calculate.__proto__ || Object.getPrototypeOf(Calculate)).call(this, props));

		_this4.state = { scale: 'c', temp: '' };

		_this4.handleCelciusChange = _this4.handleCelciusChange.bind(_this4);
		_this4.handleFahrenheitChange = _this4.handleFahrenheitChange.bind(_this4);

		return _this4;
	}

	_createClass(Calculate, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'handleCelciusChange',
		value: function handleCelciusChange(e) {
			this.setState({
				scale: 'c',
				temp: e.target.value
			});
		}
	}, {
		key: 'handleFahrenheitChange',
		value: function handleFahrenheitChange(e) {
			this.setState({
				scale: 'f',
				temp: e.target.value
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var scale = this.state.scale;
			var temp = this.state.temp;

			var celcius = scale === 'c' ? temp : tryConvert(temp, toCelsius);
			var fahrenheit = scale === 'f' ? temp : tryConvert(temp, toFahrenheit);

			return React.createElement(
				'div',
				null,
				React.createElement(TempInput, { scale: 'c', temp: celcius, handleChange: this.handleCelciusChange }),
				React.createElement(TempInput, { scale: 'f', temp: fahrenheit, handleChange: this.handleFahrenheitChange }),
				React.createElement(BoilingVerdict, { celcius: celcius })
			);
		}
	}]);

	return Calculate;
}(React.Component);

var header = React.createElement(
	'h1',
	null,
	'React Examples'
);
ReactDOM.render(React.createElement(Calculate, { scale: 'c' }), document.getElementById('eg2'));
ReactDOM.render(header, document.getElementById('header'));
ReactDOM.render(React.createElement(Welcome, { name: 'Subodh Kumar' }), document.getElementById('message'));
ReactDOM.render(React.createElement(Todo, { items: items }), document.getElementById('content'));