'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sfc = function (_React$Component) {
	_inherits(Sfc, _React$Component);

	function Sfc(props) {
		_classCallCheck(this, Sfc);

		var _this = _possibleConstructorReturn(this, (Sfc.__proto__ || Object.getPrototypeOf(Sfc)).call(this, props));

		_this.state = {
			time: 1
		};
		return _this;
	}

	_createClass(Sfc, [{
		key: 'changeState',
		value: function changeState() {
			this.setState(function (prevState) {
				return {
					time: prevState.time + .5
				};
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.timer = setInterval(function () {
				return _this2.changeState();
			}, 500);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				' Test with States | ',
				this.state.time,
				' '
			);
		}
	}]);

	return Sfc;
}(React.Component);

ReactDOM.render(React.createElement(Sfc, null), document.getElementById('testDiv2'));

var MyButton = function (_React$Component2) {
	_inherits(MyButton, _React$Component2);

	function MyButton(props) {
		_classCallCheck(this, MyButton);

		return _possibleConstructorReturn(this, (MyButton.__proto__ || Object.getPrototypeOf(MyButton)).call(this, props));
	}

	_createClass(MyButton, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'button',
				null,
				'Click ',
				this.props.action
			);
		}
	}]);

	return MyButton;
}(React.Component);

var MyInput = function (_React$Component3) {
	_inherits(MyInput, _React$Component3);

	function MyInput(props) {
		_classCallCheck(this, MyInput);

		return _possibleConstructorReturn(this, (MyInput.__proto__ || Object.getPrototypeOf(MyInput)).call(this, props));
	}

	_createClass(MyInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement('input', null);
		}
	}]);

	return MyInput;
}(React.Component);

var MyToDoForm = function (_React$Component4) {
	_inherits(MyToDoForm, _React$Component4);

	function MyToDoForm(props) {
		_classCallCheck(this, MyToDoForm);

		return _possibleConstructorReturn(this, (MyToDoForm.__proto__ || Object.getPrototypeOf(MyToDoForm)).call(this, props));
	}

	_createClass(MyToDoForm, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(MyInput, null),
				React.createElement(MyButton, { action: this.props.btnAction })
			);
		}
	}]);

	return MyToDoForm;
}(React.Component);

var MyToDoList = function (_React$Component5) {
	_inherits(MyToDoList, _React$Component5);

	function MyToDoList(props) {
		_classCallCheck(this, MyToDoList);

		return _possibleConstructorReturn(this, (MyToDoList.__proto__ || Object.getPrototypeOf(MyToDoList)).call(this, props));
	}

	_createClass(MyToDoList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'ul',
					null,
					this.props.itemList.map(function (item) {
						return React.createElement(
							'li',
							{ key: item },
							item
						);
					})
				)
			);
		}
	}]);

	return MyToDoList;
}(React.Component);

var MyToDoApp = function (_React$Component6) {
	_inherits(MyToDoApp, _React$Component6);

	function MyToDoApp(props) {
		_classCallCheck(this, MyToDoApp);

		var _this7 = _possibleConstructorReturn(this, (MyToDoApp.__proto__ || Object.getPrototypeOf(MyToDoApp)).call(this, props));

		_this7.state = {
			items: []
		};
		return _this7;
	}

	_createClass(MyToDoApp, [{
		key: 'addItem',
		value: function addItem() {
			this.setState(function (prevState) {
				return {
					items: prevState.items.concat('Item New')
				};
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this8 = this;

			var timer = setInterval(function () {
				return _this8.addItem();
			}, 5000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(timer);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(MyInput, null),
					React.createElement(MyButton, { btnAction: 'to Add' })
				),
				React.createElement(
					'div',
					null,
					React.createElement(MyToDoList, { itemList: this.state.items })
				)
			);
		}
	}]);

	return MyToDoApp;
}(React.Component);

// ReactDOM.render(<MyToDoForm btnAction="to do"/>,document.getElementById('testAction'));


var list = [1, 2, 3];
ReactDOM.render(React.createElement(MyToDoApp, null), document.getElementById('testAction'));
// ReactDOM.render(<MyButton action="to add"/>,document.getElementById('testAction'));