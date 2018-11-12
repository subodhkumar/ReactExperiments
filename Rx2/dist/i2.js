'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from "react";
// import ReactDOM from "react-dom";


var TestComp = function (_React$Component) {
	_inherits(TestComp, _React$Component);

	function TestComp() {
		_classCallCheck(this, TestComp);

		return _possibleConstructorReturn(this, (TestComp.__proto__ || Object.getPrototypeOf(TestComp)).apply(this, arguments));
	}

	_createClass(TestComp, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					' My First Component with Gulp '
				),
				React.createElement(
					'ul',
					null,
					this.props.name.map(function (name) {
						return React.createElement(
							'li',
							{ key: name },
							name
						);
					})
				)
			);
		}
	}]);

	return TestComp;
}(React.Component);

var TestComp2 = function (_React$Component2) {
	_inherits(TestComp2, _React$Component2);

	function TestComp2(props) {
		_classCallCheck(this, TestComp2);

		var _this2 = _possibleConstructorReturn(this, (TestComp2.__proto__ || Object.getPrototypeOf(TestComp2)).call(this, props));

		_this2.state = {
			val: 1
		};

		return _this2;
	}

	_createClass(TestComp2, [{
		key: 'tick',
		value: function tick() {
			this.setState(function (prevState) {
				return {
					val: prevState.val + 1
				};
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			this.timer = setInterval(function () {
				return _this3.tick();
			}, 1000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.timer);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				'Current State Value | ',
				this.state.val
			);
		}
	}]);

	return TestComp2;
}(React.Component);

var Test = React.createElement(
	'h1',
	null,
	'Test Now'
);
var names = ['a', 'b', 'c'];
// ReactDOM.render(<TestComp name={names} />,document.getElementById('testDiv'));
ReactDOM.render(Test, document.getElementById('testDiv'));
ReactDOM.render(React.createElement(TestComp2, null), document.getElementById('testDiv2'));