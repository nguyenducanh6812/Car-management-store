webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(159);
	
	var _CarList = __webpack_require__(222);
	
	var _CarList2 = _interopRequireDefault(_CarList);
	
	var _CarEdit = __webpack_require__(554);
	
	var _CarEdit2 = _interopRequireDefault(_CarEdit);
	
	var _ClientSide = __webpack_require__(555);
	
	var _ClientSide2 = _interopRequireDefault(_ClientSide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NoMatch = function NoMatch() {
	  return _react2.default.createElement(
	    'h2',
	    null,
	    'No match to the route'
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.hashHistory },
	  _react2.default.createElement(_reactRouter.Route, { path: '/cars', component: _CarList2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/client', component: _ClientSide2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/cars/:id', component: _CarEdit2.default }),
	  _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: '/cars' }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
	), document.getElementById('main'));

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsUpdate = __webpack_require__(223);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _reactRouter = __webpack_require__(159);
	
	var _CarFilter = __webpack_require__(225);
	
	var _CarFilter2 = _interopRequireDefault(_CarFilter);
	
	var _CarAdd = __webpack_require__(507);
	
	var _CarAdd2 = _interopRequireDefault(_CarAdd);
	
	var _ChatBox = __webpack_require__(508);
	
	var _ChatBox2 = _interopRequireDefault(_ChatBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CarRow = function CarRow(props) {
	  var handleOnClick = function handleOnClick() {
	    console.log('Delete car was called');
	    var carRemove = props.car;
	    props.removeCar(carRemove);
	  };
	  return _react2.default.createElement(
	    'tr',
	    null,
	    _react2.default.createElement(
	      'td',
	      null,
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/cars/' + props.car._id },
	        props.car._id
	      )
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.car.name
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.car.color
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.car.status
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: handleOnClick },
	        'Delete'
	      )
	    )
	  );
	};
	
	CarRow.propTypes = {
	  car: _react2.default.PropTypes.object.isRequired,
	  removeCar: _react2.default.PropTypes.func.isRequired
	};
	
	function CarTable(props) {
	  var carRows = props.cars.map(function (car, i) {
	    return _react2.default.createElement(CarRow, { key: i, car: car, removeCar: props.removeCar });
	  });
	  return _react2.default.createElement(
	    'table',
	    { className: 'table table-striped table-bordered table-condensed' },
	    _react2.default.createElement(
	      'thead',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'th',
	          null,
	          'Id'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Name'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Color'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Status'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Action'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'tbody',
	      null,
	      carRows
	    )
	  );
	}
	
	CarTable.propTypes = {
	  cars: _react2.default.PropTypes.array.isRequired,
	  removeCar: _react2.default.PropTypes.func.isRequired
	};
	
	var CarList = function (_React$Component) {
	  _inherits(CarList, _React$Component);
	
	  _createClass(CarList, null, [{
	    key: 'contextTypes',
	    get: function get() {
	      return { router: _react2.default.PropTypes.object.isRequired };
	    }
	  }, {
	    key: 'propTypes',
	    get: function get() {
	      return { location: _react2.default.PropTypes.object.isRequired };
	    }
	  }]);
	
	  function CarList() {
	    _classCallCheck(this, CarList);
	
	    var _this = _possibleConstructorReturn(this, (CarList.__proto__ || Object.getPrototypeOf(CarList)).call(this));
	
	    _this.state = { cars: [], onAddress: 'receiveClient', emitAddress: 'toClient' };
	    _this.addCar = _this.addCar.bind(_this);
	    _this.changeFilter = _this.changeFilter.bind(_this);
	    _this.removeCar = _this.removeCar.bind(_this);
	    return _this;
	  }
	
	  _createClass(CarList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('CarList: componentDidMount');
	      this.loadData();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var oldQuery = prevProps.location.query;
	      var newQuery = this.props.location.query;
	      // todo: comparing shallow objects -- better way?
	      // todo: when do we get called even when there's no change?
	      if (oldQuery.name === newQuery.name && oldQuery.status === newQuery.status) {
	        console.log('CarList: componentDidUpdate, no change in filter, not updating');
	        return;
	      }
	      console.log('CarList: componentDidUpdate, loading data with new filter');
	      this.loadData();
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData() {
	      var _this2 = this;
	
	      console.log('LoadData was call: ');
	      console.log(this.props.location);
	      fetch('/api/cars/' + this.props.location.search).then(function (response) {
	        return response.json();
	      }).then(function (cars) {
	        _this2.setState({ cars: cars });
	      }).catch(function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'changeFilter',
	    value: function changeFilter(newFilter) {
	      var search = Object.keys(newFilter).filter(function (k) {
	        return newFilter[k] !== '';
	      }).map(function (k) {
	        return encodeURIComponent(k) + '=' + encodeURIComponent(newFilter[k]);
	      }).join('&');
	      console.log('Search: ', search);
	      console.log('This context router: ', this.context.router);
	      this.context.router.push({ search: '?' + search });
	    }
	  }, {
	    key: 'addCar',
	    value: function addCar(newCar) {
	      var _this3 = this;
	
	      console.log('Adding car:', newCar);
	      fetch('/api/cars', {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify(newCar)
	
	      }).then(function (res) {
	        return res.json();
	      }).then(function (car) {
	        var modifiedCars = (0, _reactAddonsUpdate2.default)(_this3.state.cars, { $push: [car] });
	        _this3.setState({ cars: modifiedCars });
	      }).catch(function (err) {
	        console.log('Error adding car:', err);
	      });
	    }
	  }, {
	    key: 'removeCar',
	    value: function removeCar(carRemoved) {
	      var _this4 = this;
	
	      console.log('Delete car was called');
	      fetch('/api/cars/ ' + carRemoved._id, {
	        method: 'DELETE',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify(carRemoved)
	      }).then(function (res) {
	        return res.json();
	      }).then(function (car) {
	        console.log('Delete success: ', car);
	        _this4.loadData();
	      }).catch(function (err) {
	        console.log('Error delete car:', err);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log('Rendering CarList, num items:', this.state.cars.length);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Cars Store'
	        ),
	        _react2.default.createElement(_CarFilter2.default, { submitHandler: this.changeFilter, initFilter: this.props.location.query }),
	        _react2.default.createElement(CarTable, { cars: this.state.cars, removeCar: this.removeCar }),
	        _react2.default.createElement(_CarAdd2.default, { addCar: this.addCar }),
	        _react2.default.createElement(_ChatBox2.default, { onAddress: 'receiveClient', emitAddress: this.state.emitAddress,
	          user: 'Admin: ' })
	      );
	    }
	  }]);
	
	  return CarList;
	}(_react2.default.Component);
	
	exports.default = CarList;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(224);

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var assign = __webpack_require__(39);
	var keyOf = __webpack_require__(79);
	var invariant = __webpack_require__(13);
	var hasOwnProperty = {}.hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}
	
	function update(value, spec) {
	  !((typeof spec === 'undefined' ? 'undefined' : _typeof(spec)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && (typeof mergeObj === 'undefined' ? 'undefined' : _typeof(mergeObj)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && (typeof nextValue === 'undefined' ? 'undefined' : _typeof(nextValue)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CarFilter = function (_React$Component) {
	  _inherits(CarFilter, _React$Component);
	
	  _createClass(CarFilter, null, [{
	    key: 'propTypes',
	    get: function get() {
	      return {
	        initFilter: _react2.default.PropTypes.object.isRequired,
	        submitHandler: _react2.default.PropTypes.func.isRequired
	      };
	    }
	  }]);
	
	  function CarFilter(props) {
	    _classCallCheck(this, CarFilter);
	
	    var _this = _possibleConstructorReturn(this, (CarFilter.__proto__ || Object.getPrototypeOf(CarFilter)).call(this, props));
	
	    _this.state = {
	      status: _this.props.initFilter.status,
	      name: _this.props.initFilter.name
	    };
	    _this.submit = _this.submit.bind(_this);
	    _this.onChangeStatus = _this.onChangeStatus.bind(_this);
	    _this.onChangeName = _this.onChangeName.bind(_this);
	    return _this;
	  }
	
	  _createClass(CarFilter, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (newProps.initFilter.status === this.state.status && newProps.initFilter.name === this.state.name) {
	        console.log('CarFilter: componentWillReceiveProps, no change');
	        return;
	      }
	      console.log('CarFilter: componentWillReceiveProps, new filter:', newProps.initFilter);
	      this.setState({ status: newProps.initFilter.status, name: newProps.initFilter.name });
	    }
	  }, {
	    key: 'onChangeStatus',
	    value: function onChangeStatus(e) {
	      this.setState({ status: e.target.value });
	    }
	  }, {
	    key: 'onChangeName',
	    value: function onChangeName(e) {
	      this.setState({ name: e.target.value });
	    }
	  }, {
	    key: 'submit',
	    value: function submit(e) {
	      e.preventDefault();
	      var newFilter = {};
	      if (this.state.name) newFilter.name = this.state.name;
	      if (this.state.status) newFilter.status = this.state.status;
	      this.props.submitHandler(newFilter);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log('Rendering CarFilter, state=', this.state);
	      return _react2.default.createElement(
	        _reactBootstrap.Panel,
	        { collapsible: true, defaultExpanded: true, header: 'Filter' },
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          { fluid: true },
	          _react2.default.createElement(
	            _reactBootstrap.Row,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12, sm: 6, md: 4 },
	              _react2.default.createElement(
	                _reactBootstrap.FormGroup,
	                null,
	                _react2.default.createElement(
	                  _reactBootstrap.ControlLabel,
	                  null,
	                  'Car Name'
	                ),
	                _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'name', value: this.state.name,
	                  onChange: this.onChangeName })
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12, sm: 6, md: 4 },
	              _react2.default.createElement(
	                _reactBootstrap.FormGroup,
	                null,
	                _react2.default.createElement(
	                  _reactBootstrap.ControlLabel,
	                  null,
	                  'Status'
	                ),
	                _react2.default.createElement(
	                  _reactBootstrap.FormControl,
	                  { componentClass: 'select', value: this.state.status,
	                    onChange: this.onChangeStatus },
	                  _react2.default.createElement(
	                    'option',
	                    { value: '' },
	                    '(Any)'
	                  ),
	                  _react2.default.createElement(
	                    'option',
	                    null,
	                    'Stocking'
	                  ),
	                  _react2.default.createElement(
	                    'option',
	                    null,
	                    'Out of Stock'
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12, sm: 6, md: 4 },
	              _react2.default.createElement(
	                _reactBootstrap.FormGroup,
	                null,
	                _react2.default.createElement(
	                  _reactBootstrap.ControlLabel,
	                  null,
	                  '\xA0'
	                ),
	                _react2.default.createElement(
	                  _reactBootstrap.ButtonToolbar,
	                  null,
	                  _react2.default.createElement(
	                    _reactBootstrap.Button,
	                    { type: 'submit', bsStyle: 'primary', onClick: this.submit },
	                    'Search'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return CarFilter;
	}(_react2.default.Component);
	
	exports.default = CarFilter;

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CarAdd = function (_React$Component) {
	  _inherits(CarAdd, _React$Component);
	
	  function CarAdd(props) {
	    _classCallCheck(this, CarAdd);
	
	    var _this = _possibleConstructorReturn(this, (CarAdd.__proto__ || Object.getPrototypeOf(CarAdd)).call(this, props));
	
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }
	
	  _createClass(CarAdd, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      console.log('Got submit:', e);
	      e.preventDefault();
	      var form = document.forms.carAdd;
	      this.props.addCar({ color: form.color.value, name: form.name.value,
	        status: 'Stocking', priority: 'P1' });
	      form.color.value = '';form.name.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log('Rendering CarAdd');
	      return _react2.default.createElement(
	        _reactBootstrap.Panel,
	        { header: 'Add Car' },
	        _react2.default.createElement(
	          'form',
	          { name: 'carAdd' },
	          _react2.default.createElement(
	            _reactBootstrap.FormGroup,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.ControlLabel,
	              null,
	              'Car Name'
	            ),
	            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'name' })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.FormGroup,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.ControlLabel,
	              null,
	              'Color'
	            ),
	            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'color', label: 'Color' })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.handleSubmit },
	            'Add'
	          )
	        )
	      );
	    }
	  }]);
	
	  return CarAdd;
	}(_react2.default.Component);
	
	exports.default = CarAdd;
	
	
	CarAdd.propTypes = {
	  addCar: _react2.default.PropTypes.func.isRequired
	};

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(226);
	
	var _Inbox = __webpack_require__(509);
	
	var _Inbox2 = _interopRequireDefault(_Inbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable eol-last */
	/**
	 * Created by admin on 6/14/17.
	 */
	
	
	var io = __webpack_require__(510);
	var socket = io();
	
	var MessageContent = function MessageContent(props) {
	  var messages = props.messages.map(function (message, i) {
	    var user = void 0;
	    message.user !== '' && (user = message.user + ': ');
	    return _react2.default.createElement(
	      'div',
	      { key: i },
	      user,
	      ' ',
	      message.text
	    );
	  });
	  return _react2.default.createElement(
	    'div',
	    null,
	    messages
	  );
	};
	
	MessageContent.propTypes = {
	  messages: _react2.default.PropTypes.array.isRequired
	};
	
	var ChatBox = function (_React$Component) {
	  _inherits(ChatBox, _React$Component);
	
	  function ChatBox(props) {
	    _classCallCheck(this, ChatBox);
	
	    var _this = _possibleConstructorReturn(this, (ChatBox.__proto__ || Object.getPrototypeOf(ChatBox)).call(this, props));
	
	    _this.state = { chatBoxShow: 'tabbed_sidebar ng-scope chat_sidebar', message: { user: '', text: '', server_read: false,
	        idMessage: 0, time: new Date() }, messagesInbox: [],
	      emitAddress: '', onAddress: '', messages: [{ user: '', text: '' }], text: '' };
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.sendMessage = _this.sendMessage.bind(_this);
	    _this.loadMessage = _this.loadMessage.bind(_this);
	    return _this;
	  }
	
	  _createClass(ChatBox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      console.log('Chat box did mount, socket.on at: ', this.props.onAddress);
	      socket.on(this.props.onAddress, function (data) {
	        console.log('Receive message: ', data.message);
	        _this2.receiveMessage(data);
	        if (data.message.server_read === false) {
	          console.log('Admin da doc tin nhan.');
	          data.message.server_read = true;
	          fetch('/api/message/update', {
	            method: 'PUT',
	            headers: { 'Content-Type': 'application/json' },
	            body: JSON.stringify(data.message)
	          });
	        }
	      });
	      this.props.onAddress === 'receiveClient' && this.loadMessage();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      console.log('Chat box WillReceiveProps.', props);
	      this.setState({ emitAddress: props.emitAddress });
	      this.setState({ onAddress: props.onAddress });
	      if (props.messages) this.setState({ messages: props.messages });
	    }
	  }, {
	    key: 'loadMessage',
	    value: function loadMessage() {
	      var _this3 = this;
	
	      console.log('Load message was call');
	      fetch('api/message').then(function (response) {
	        return response.json();
	      }).then(function (message) {
	        _this3.setState({ messagesInbox: message });
	        console.log('List Messages Inbox load from database');
	        console.log(_this3.state.messagesInbox);
	      }).catch(function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var idMessage = new Date().getTime();
	      var time = new Date();
	      this.setState({ text: event.target.value });
	      this.setState({ message: { user: this.props.user, text: event.target.value,
	          server_read: false, idMessage: idMessage, time: time } });
	      console.log('id message la: ', idMessage);
	    }
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage() {
	      this.setState({ text: '' });
	      console.log('Tin nhan gui di', this.state.message);
	      socket.emit(this.state.emitAddress, {
	        message: this.state.message
	      });
	
	      //Write message to database
	      var newMessage = this.state.message;
	      newMessage.server_read = newMessage.user === 'Admin: ' ? true : false;
	      console.log('Write message: ', newMessage);
	      fetch('/api/message', {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify(newMessage)
	
	      }).catch(function (err) {
	        console.log('Error adding car:', err);
	      });
	      //Add messsage to messages
	      var addMessage = this.state.messages;
	      addMessage.push(this.state.message);
	      this.setState({ messages: addMessage });
	      console.log('Messages sau khi add: ', this.state.messages);
	      this.setState({ message: '' });
	    }
	  }, {
	    key: 'receiveMessage',
	    value: function receiveMessage(data) {
	      this.setState({ message: data.message });
	      var addMessage = this.state.messages;
	      addMessage.push(data.message);
	      this.setState({ messages: addMessage });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Inbox2.default, { messagesInbox: this.state.messagesInbox }),
	        _react2.default.createElement(
	          _reactBootstrap.Panel,
	          { bsStyle: 'primary', collapsible: true, defaultExpanded: true, header: 'ChatBox' },
	          _react2.default.createElement(MessageContent, { messages: this.state.messages }),
	          _react2.default.createElement(
	            _reactBootstrap.InputGroup,
	            null,
	            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', value: this.state.text,
	              onChange: this.handleChange }),
	            _react2.default.createElement(
	              _reactBootstrap.InputGroup.Button,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                { onClick: function onClick() {
	                    _this4.sendMessage();
	                  } },
	                'Send'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ChatBox;
	}(_react2.default.Component);
	
	exports.default = ChatBox;

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by admin on 6/19/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var InboxRow = function InboxRow(props) {
	    return _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	            'td',
	            null,
	            props.message.user
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            props.message.text
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            props.message.time
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement(
	                _reactBootstrap.Button,
	                null,
	                'Reply'
	            )
	        )
	    );
	};
	InboxRow.propsTypes = {
	    message: _react2.default.PropTypes.object.isRequired
	};
	
	function InboxTable(props) {
	    console.log('Inbox Table receive data');
	    console.log(props.messages);
	    var inboxRows = props.messages.map(function (message, i) {
	        return _react2.default.createElement(InboxRow, { key: i, message: message });
	    });
	
	    return _react2.default.createElement(
	        _reactBootstrap.Panel,
	        { bsStyle: 'success', collapsible: true, defaultExpanded: true, header: 'Inbox' },
	        _react2.default.createElement(
	            _reactBootstrap.Table,
	            { striped: true, bordered: true, condensed: true, hover: true },
	            _react2.default.createElement(
	                'thead',
	                null,
	                _react2.default.createElement(
	                    'tr',
	                    null,
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        'UserName'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        'Message'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        'Time'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        'Action'
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'tbody',
	                null,
	                inboxRows
	            )
	        )
	    );
	}
	InboxTable.propsTypes = {
	    messages: _react2.default.PropTypes.array.isRequired
	};
	
	var Inbox = function (_React$Component) {
	    _inherits(Inbox, _React$Component);
	
	    function Inbox(props) {
	        _classCallCheck(this, Inbox);
	
	        var _this = _possibleConstructorReturn(this, (Inbox.__proto__ || Object.getPrototypeOf(Inbox)).call(this, props));
	
	        _this.state = { messages: [] };
	        return _this;
	    }
	
	    _createClass(Inbox, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            console.log('Inbox will receive props', props);
	            this.setState({ messages: props.messagesInbox });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(InboxTable, { messages: this.state.messages })
	            );
	        }
	    }]);
	
	    return Inbox;
	}(_react2.default.Component);
	
	exports.default = Inbox;

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(511);
	var parser = __webpack_require__(516);
	var Manager = __webpack_require__(523);
	var debug = __webpack_require__(513)('socket.io-client');
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = lookup;
	
	/**
	 * Managers cache.
	 */
	
	var cache = exports.managers = {};
	
	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */
	
	function lookup(uri, opts) {
	  if ((typeof uri === 'undefined' ? 'undefined' : _typeof(uri)) === 'object') {
	    opts = uri;
	    uri = undefined;
	  }
	
	  opts = opts || {};
	
	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
	
	  var io;
	
	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	  if (parsed.query && !opts.query) {
	    opts.query = parsed.query;
	  }
	  return io.socket(parsed.path, opts);
	}
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = parser.protocol;
	
	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */
	
	exports.connect = lookup;
	
	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */
	
	exports.Manager = __webpack_require__(523);
	exports.Socket = __webpack_require__(549);

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var parseuri = __webpack_require__(512);
	var debug = __webpack_require__(513)('socket.io-client:url');
	
	/**
	 * Module exports.
	 */
	
	module.exports = url;
	
	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */
	
	function url(uri, loc) {
	  var obj = uri;
	
	  // default to window.location
	  loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;
	
	  // relative path support
	  if ('string' === typeof uri) {
	    if ('/' === uri.charAt(0)) {
	      if ('/' === uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }
	
	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' !== typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }
	
	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }
	
	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }
	
	  obj.path = obj.path || '/';
	
	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;
	
	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
	
	  return obj;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
	
	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');
	
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	
	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;
	
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	
	    return uri;
	};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(514);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (window && window.process && window.process.type === 'renderer') {
	    return true;
	  }
	
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
	  // is firebug? http://stackoverflow.com/a/398120/376773
	  window && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
	  // is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
	  // double check webkit in userAgent just in case we are in a worker
	  navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function (v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs(args) {
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return;
	
	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit'
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  );var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function (match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}
	
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }
	
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(515);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor(namespace) {
	  var hash = 0,
	      i;
	
	  for (i in namespace) {
	    hash = (hash << 5) - hash + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }
	
	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function createDebug(namespace) {
	
	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;
	
	    var self = debug;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);
	
	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	
	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	
	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }
	
	  return debug;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  exports.names = [];
	  exports.skips = [];
	
	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function (val, options) {
	  options = options || {};
	  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtLong(ms) {
	  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(513)('socket.io-parser');
	var Emitter = __webpack_require__(517);
	var hasBin = __webpack_require__(518);
	var binary = __webpack_require__(520);
	var isBuf = __webpack_require__(522);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = 4;
	
	/**
	 * Packet types.
	 *
	 * @api public
	 */
	
	exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
	
	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */
	
	exports.CONNECT = 0;
	
	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */
	
	exports.DISCONNECT = 1;
	
	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */
	
	exports.EVENT = 2;
	
	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */
	
	exports.ACK = 3;
	
	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */
	
	exports.ERROR = 4;
	
	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */
	
	exports.BINARY_EVENT = 5;
	
	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */
	
	exports.BINARY_ACK = 6;
	
	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */
	
	exports.Encoder = Encoder;
	
	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */
	
	exports.Decoder = Decoder;
	
	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */
	
	function Encoder() {}
	
	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */
	
	Encoder.prototype.encode = function (obj, callback) {
	  if ((obj.type === exports.EVENT || obj.type === exports.ACK) && hasBin(obj.data)) {
	    obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK;
	  }
	
	  debug('encoding packet %j', obj);
	
	  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
	    encodeAsBinary(obj, callback);
	  } else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};
	
	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */
	
	function encodeAsString(obj) {
	
	  // first is type
	  var str = '' + obj.type;
	
	  // attachments if we have them
	  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
	    str += obj.attachments + '-';
	  }
	
	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' !== obj.nsp) {
	    str += obj.nsp + ',';
	  }
	
	  // immediately followed by the id
	  if (null != obj.id) {
	    str += obj.id;
	  }
	
	  // json data
	  if (null != obj.data) {
	    str += JSON.stringify(obj.data);
	  }
	
	  debug('encoded %j as %s', obj, str);
	  return str;
	}
	
	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */
	
	function encodeAsBinary(obj, callback) {
	
	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;
	
	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }
	
	  binary.removeBlobs(obj, writeEncoding);
	}
	
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */
	
	function Decoder() {
	  this.reconstructor = null;
	}
	
	/**
	 * Mix in `Emitter` with Decoder.
	 */
	
	Emitter(Decoder.prototype);
	
	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */
	
	Decoder.prototype.add = function (obj) {
	  var packet;
	  if (typeof obj === 'string') {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
	      // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);
	
	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else {
	      // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  } else if (isBuf(obj) || obj.base64) {
	    // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) {
	        // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  } else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};
	
	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */
	
	function decodeString(str) {
	  var i = 0;
	  // look up type
	  var p = {
	    type: Number(str.charAt(0))
	  };
	
	  if (null == exports.types[p.type]) return error();
	
	  // look up attachments if type binary
	  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
	    var buf = '';
	    while (str.charAt(++i) !== '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) !== '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }
	
	  // look up namespace (if any)
	  if ('/' === str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' === c) break;
	      p.nsp += c;
	      if (i === str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }
	
	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i === str.length) break;
	    }
	    p.id = Number(p.id);
	  }
	
	  // look up json data
	  if (str.charAt(++i)) {
	    p = tryParse(p, str.substr(i));
	  }
	
	  debug('decoded %s as %j', str, p);
	  return p;
	}
	
	function tryParse(p, str) {
	  try {
	    p.data = JSON.parse(str);
	  } catch (e) {
	    return error();
	  }
	  return p;
	}
	
	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */
	
	Decoder.prototype.destroy = function () {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};
	
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */
	
	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}
	
	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */
	
	BinaryReconstructor.prototype.takeBinaryData = function (binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length === this.reconPack.attachments) {
	    // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};
	
	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */
	
	BinaryReconstructor.prototype.finishedReconstruction = function () {
	  this.reconPack = null;
	  this.buffers = [];
	};
	
	function error() {
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function (event, fn) {
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* global Blob File */
	
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(519);
	
	var toString = Object.prototype.toString;
	var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
	var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Supports Buffer, ArrayBuffer, Blob and File.
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(obj) {
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    return false;
	  }
	
	  if (isArray(obj)) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      if (hasBinary(obj[i])) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  if (typeof global.Buffer === 'function' && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || typeof global.ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
	    return true;
	  }
	
	  // see: https://github.com/Automattic/has-binary/pull/4
	  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
	    return hasBinary(obj.toJSON(), true);
	  }
	
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
	      return true;
	    }
	  }
	
	  return false;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

	'use strict';
	
	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*global Blob,File*/
	
	/**
	 * Module requirements
	 */
	
	var isArray = __webpack_require__(521);
	var isBuf = __webpack_require__(522);
	var toString = Object.prototype.toString;
	var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
	var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';
	
	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */
	
	exports.deconstructPacket = function (packet) {
	  var buffers = [];
	  var packetData = packet.data;
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData, buffers);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return { packet: pack, buffers: buffers };
	};
	
	function _deconstructPacket(data, buffers) {
	  if (!data) return data;
	
	  if (isBuf(data)) {
	    var placeholder = { _placeholder: true, num: buffers.length };
	    buffers.push(data);
	    return placeholder;
	  } else if (isArray(data)) {
	    var newData = new Array(data.length);
	    for (var i = 0; i < data.length; i++) {
	      newData[i] = _deconstructPacket(data[i], buffers);
	    }
	    return newData;
	  } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && !(data instanceof Date)) {
	    var newData = {};
	    for (var key in data) {
	      newData[key] = _deconstructPacket(data[key], buffers);
	    }
	    return newData;
	  }
	  return data;
	}
	
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */
	
	exports.reconstructPacket = function (packet, buffers) {
	  packet.data = _reconstructPacket(packet.data, buffers);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};
	
	function _reconstructPacket(data, buffers) {
	  if (!data) return data;
	
	  if (data && data._placeholder) {
	    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
	  } else if (isArray(data)) {
	    for (var i = 0; i < data.length; i++) {
	      data[i] = _reconstructPacket(data[i], buffers);
	    }
	  } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
	    for (var key in data) {
	      data[key] = _reconstructPacket(data[key], buffers);
	    }
	  }
	
	  return data;
	}
	
	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */
	
	exports.removeBlobs = function (data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;
	
	    // convert any blob
	    if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
	      pendingBlobs++;
	
	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function () {
	        // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        } else {
	          bloblessData = this.result;
	        }
	
	        // if nothing pending its callback time
	        if (! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };
	
	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) {
	      // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !isBuf(obj)) {
	      // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }
	
	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

	'use strict';
	
	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	module.exports = isBuf;
	
	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */
	
	function isBuf(obj) {
	  return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Module dependencies.
	 */
	
	var eio = __webpack_require__(524);
	var Socket = __webpack_require__(549);
	var Emitter = __webpack_require__(517);
	var parser = __webpack_require__(516);
	var on = __webpack_require__(551);
	var bind = __webpack_require__(552);
	var debug = __webpack_require__(513)('socket.io-client:manager');
	var indexOf = __webpack_require__(547);
	var Backoff = __webpack_require__(553);
	
	/**
	 * IE6+ hasOwnProperty
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Module exports
	 */
	
	module.exports = Manager;
	
	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */
	
	function Manager(uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};
	
	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  var _parser = opts.parser || parser;
	  this.encoder = new _parser.Encoder();
	  this.decoder = new _parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}
	
	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */
	
	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};
	
	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */
	
	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.generateId(nsp);
	    }
	  }
	};
	
	/**
	 * generate `socket.id` for the given `nsp`
	 *
	 * @param {String} nsp
	 * @return {String}
	 * @api private
	 */
	
	Manager.prototype.generateId = function (nsp) {
	  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
	};
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Manager.prototype);
	
	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};
	
	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};
	
	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};
	
	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};
	
	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};
	
	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};
	
	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */
	
	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};
	
	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */
	
	Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;
	
	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;
	
	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });
	
	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });
	
	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);
	
	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);
	
	    this.subs.push({
	      destroy: function destroy() {
	        clearTimeout(timer);
	      }
	    });
	  }
	
	  this.subs.push(openSub);
	  this.subs.push(errorSub);
	
	  return this;
	};
	
	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */
	
	Manager.prototype.onopen = function () {
	  debug('open');
	
	  // clear old subs
	  this.cleanup();
	
	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');
	
	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};
	
	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */
	
	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};
	
	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};
	
	/**
	 * Called with data.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};
	
	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */
	
	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};
	
	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */
	
	Manager.prototype.socket = function (nsp, opts) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp, opts);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.generateId(nsp);
	    });
	
	    if (this.autoConnect) {
	      // manually call here since connecting event is fired before listening
	      onConnecting();
	    }
	  }
	
	  function onConnecting() {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }
	
	  return socket;
	};
	
	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */
	
	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;
	
	  this.close();
	};
	
	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;
	  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;
	
	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else {
	    // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};
	
	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */
	
	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};
	
	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */
	
	Manager.prototype.cleanup = function () {
	  debug('cleanup');
	
	  var subsLength = this.subs.length;
	  for (var i = 0; i < subsLength; i++) {
	    var sub = this.subs.shift();
	    sub.destroy();
	  }
	
	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;
	
	  this.decoder.destroy();
	};
	
	/**
	 * Close the current socket.
	 *
	 * @api private
	 */
	
	Manager.prototype.close = Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' === this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};
	
	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */
	
	Manager.prototype.onclose = function (reason) {
	  debug('onclose');
	
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};
	
	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */
	
	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;
	
	  var self = this;
	
	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);
	
	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;
	
	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);
	
	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;
	
	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);
	
	    this.subs.push({
	      destroy: function destroy() {
	        clearTimeout(timer);
	      }
	    });
	  }
	};
	
	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */
	
	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(525);

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(526);
	
	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(533);

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Module dependencies.
	 */
	
	var transports = __webpack_require__(527);
	var Emitter = __webpack_require__(517);
	var debug = __webpack_require__(513)('engine.io-client:socket');
	var index = __webpack_require__(547);
	var parser = __webpack_require__(533);
	var parseuri = __webpack_require__(512);
	var parsejson = __webpack_require__(548);
	var parseqs = __webpack_require__(541);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Socket;
	
	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */
	
	function Socket(uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);
	
	  opts = opts || {};
	
	  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
	    opts = uri;
	    uri = null;
	  }
	
	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }
	
	  this.secure = null != opts.secure ? opts.secure : global.location && 'https:' === location.protocol;
	
	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }
	
	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
	  this.query = opts.query || {};
	  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.transportOptions = opts.transportOptions || {};
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.prevBufferLen = 0;
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
	
	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
	  this.forceNode = !!opts.forceNode;
	
	  // other options for Node.js client
	  var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	
	    if (opts.localAddress) {
	      this.localAddress = opts.localAddress;
	    }
	  }
	
	  // set on handshake
	  this.id = null;
	  this.upgrades = null;
	  this.pingInterval = null;
	  this.pingTimeout = null;
	
	  // set on heartbeat
	  this.pingIntervalTimer = null;
	  this.pingTimeoutTimer = null;
	
	  this.open();
	}
	
	Socket.priorWebsocketSuccess = false;
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	Socket.protocol = parser.protocol; // this is an int
	
	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */
	
	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(532);
	Socket.transports = __webpack_require__(527);
	Socket.parser = __webpack_require__(533);
	
	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */
	
	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);
	
	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;
	
	  // transport name
	  query.transport = name;
	
	  // per-transport options
	  var options = this.transportOptions[name] || {};
	
	  // session id if we already have one
	  if (this.id) query.sid = this.id;
	
	  var transport = new transports[name]({
	    query: query,
	    socket: this,
	    agent: options.agent || this.agent,
	    hostname: options.hostname || this.hostname,
	    port: options.port || this.port,
	    secure: options.secure || this.secure,
	    path: options.path || this.path,
	    forceJSONP: options.forceJSONP || this.forceJSONP,
	    jsonp: options.jsonp || this.jsonp,
	    forceBase64: options.forceBase64 || this.forceBase64,
	    enablesXDR: options.enablesXDR || this.enablesXDR,
	    timestampRequests: options.timestampRequests || this.timestampRequests,
	    timestampParam: options.timestampParam || this.timestampParam,
	    policyPort: options.policyPort || this.policyPort,
	    pfx: options.pfx || this.pfx,
	    key: options.key || this.key,
	    passphrase: options.passphrase || this.passphrase,
	    cert: options.cert || this.cert,
	    ca: options.ca || this.ca,
	    ciphers: options.ciphers || this.ciphers,
	    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
	    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
	    extraHeaders: options.extraHeaders || this.extraHeaders,
	    forceNode: options.forceNode || this.forceNode,
	    localAddress: options.localAddress || this.localAddress,
	    requestTimeout: options.requestTimeout || this.requestTimeout,
	    protocols: options.protocols || void 0
	  });
	
	  return transport;
	};
	
	function clone(obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}
	
	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';
	
	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }
	
	  transport.open();
	  this.setTransport(transport);
	};
	
	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */
	
	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;
	
	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }
	
	  // set up transport
	  this.transport = transport;
	
	  // set up transport listeners
	  transport.on('drain', function () {
	    self.onDrain();
	  }).on('packet', function (packet) {
	    self.onPacket(packet);
	  }).on('error', function (e) {
	    self.onError(e);
	  }).on('close', function () {
	    self.onClose('transport close');
	  });
	};
	
	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */
	
	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 });
	  var failed = false;
	  var self = this;
	
	  Socket.priorWebsocketSuccess = false;
	
	  function onTransportOpen() {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;
	
	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' === msg.type && 'probe' === msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
	
	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' === self.readyState) return;
	          debug('changing transport and sending upgrade packet');
	
	          cleanup();
	
	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }
	
	  function freezeTransport() {
	    if (failed) return;
	
	    // Any callback called by transport should be ignored since now
	    failed = true;
	
	    cleanup();
	
	    transport.close();
	    transport = null;
	  }
	
	  // Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;
	
	    freezeTransport();
	
	    debug('probe transport "%s" failed because of error: %s', name, err);
	
	    self.emit('upgradeError', error);
	  }
	
	  function onTransportClose() {
	    onerror('transport closed');
	  }
	
	  // When the socket is closed while we're probing
	  function onclose() {
	    onerror('socket closed');
	  }
	
	  // When the socket is upgraded while we're probing
	  function onupgrade(to) {
	    if (transport && to.name !== transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }
	
	  // Remove all listeners on the transport and on self
	  function cleanup() {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }
	
	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);
	
	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);
	
	  transport.open();
	};
	
	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */
	
	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
	  this.emit('open');
	  this.flush();
	
	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};
	
	/**
	 * Handles a packet.
	 *
	 * @api private
	 */
	
	Socket.prototype.onPacket = function (packet) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
	
	    this.emit('packet', packet);
	
	    // Socket is live - any packet counts
	    this.emit('heartbeat');
	
	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;
	
	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;
	
	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;
	
	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};
	
	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */
	
	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' === this.readyState) return;
	  this.setPing();
	
	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};
	
	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */
	
	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' === self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || self.pingInterval + self.pingTimeout);
	};
	
	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};
	
	/**
	* Sends a ping packet.
	*
	* @api private
	*/
	
	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};
	
	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */
	
	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);
	
	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;
	
	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};
	
	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */
	
	Socket.prototype.flush = function () {
	  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};
	
	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */
	
	Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */
	
	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' === typeof data) {
	    fn = data;
	    data = undefined;
	  }
	
	  if ('function' === typeof options) {
	    fn = options;
	    options = null;
	  }
	
	  if ('closing' === this.readyState || 'closed' === this.readyState) {
	    return;
	  }
	
	  options = options || {};
	  options.compress = false !== options.compress;
	
	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};
	
	/**
	 * Closes the connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.readyState = 'closing';
	
	    var self = this;
	
	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }
	
	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }
	
	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }
	
	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }
	
	  return this;
	};
	
	/**
	 * Called upon transport error
	 *
	 * @api private
	 */
	
	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};
	
	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */
	
	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;
	
	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);
	
	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');
	
	    // ensure transport won't stay open
	    this.transport.close();
	
	    // ignore further transport communication
	    this.transport.removeAllListeners();
	
	    // set ready state
	    this.readyState = 'closed';
	
	    // clear session id
	    this.id = null;
	
	    // emit close event
	    this.emit('close', reason, desc);
	
	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};
	
	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */
	
	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module dependencies
	 */
	
	var XMLHttpRequest = __webpack_require__(528);
	var XHR = __webpack_require__(530);
	var JSONP = __webpack_require__(544);
	var websocket = __webpack_require__(545);
	
	/**
	 * Export transports.
	 */
	
	exports.polling = polling;
	exports.websocket = websocket;
	
	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */
	
	function polling(opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;
	
	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    xd = opts.hostname !== location.hostname || port !== opts.port;
	    xs = opts.secure !== isSSL;
	  }
	
	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);
	
	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// browser shim for xmlhttprequest module
	
	var hasCORS = __webpack_require__(529);
	
	module.exports = function (opts) {
	  var xdomain = opts.xdomain;
	
	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;
	
	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;
	
	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) {}
	
	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) {}
	
	  if (!xdomain) {
	    try {
	      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
	    } catch (e) {}
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */
	
	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module requirements.
	 */
	
	var XMLHttpRequest = __webpack_require__(528);
	var Polling = __webpack_require__(531);
	var Emitter = __webpack_require__(517);
	var inherit = __webpack_require__(542);
	var debug = __webpack_require__(513)('engine.io-client:polling-xhr');
	
	/**
	 * Module exports.
	 */
	
	module.exports = XHR;
	module.exports.Request = Request;
	
	/**
	 * Empty function
	 */
	
	function empty() {}
	
	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function XHR(opts) {
	  Polling.call(this, opts);
	  this.requestTimeout = opts.requestTimeout;
	  this.extraHeaders = opts.extraHeaders;
	
	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    this.xd = opts.hostname !== global.location.hostname || port !== opts.port;
	    this.xs = opts.secure !== isSSL;
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(XHR, Polling);
	
	/**
	 * XHR supports binary
	 */
	
	XHR.prototype.supportsBinary = true;
	
	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */
	
	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  opts.requestTimeout = this.requestTimeout;
	
	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;
	
	  return new Request(opts);
	};
	
	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};
	
	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	function Request(opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined !== opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	  this.requestTimeout = opts.requestTimeout;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	
	  this.create();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */
	
	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;
	
	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	
	    if ('POST' === this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }
	
	    try {
	      xhr.setRequestHeader('Accept', '*/*');
	    } catch (e) {}
	
	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }
	
	    if (this.requestTimeout) {
	      xhr.timeout = this.requestTimeout;
	    }
	
	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 2) {
	          var contentType;
	          try {
	            contentType = xhr.getResponseHeader('Content-Type');
	          } catch (e) {}
	          if (contentType === 'application/octet-stream') {
	            xhr.responseType = 'arraybuffer';
	          }
	        }
	        if (4 !== xhr.readyState) return;
	        if (200 === xhr.status || 1223 === xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }
	
	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }
	
	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};
	
	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */
	
	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};
	
	/**
	 * Called if we have data.
	 *
	 * @api private
	 */
	
	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};
	
	/**
	 * Called upon error.
	 *
	 * @api private
	 */
	
	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};
	
	/**
	 * Cleans up house.
	 *
	 * @api private
	 */
	
	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' === typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }
	
	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }
	
	  if (global.document) {
	    delete Request.requests[this.index];
	  }
	
	  this.xhr = null;
	};
	
	/**
	 * Called upon load.
	 *
	 * @api private
	 */
	
	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type');
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response || this.xhr.responseText;
	    } else {
	      data = this.xhr.responseText;
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};
	
	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */
	
	Request.prototype.hasXDR = function () {
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};
	
	/**
	 * Aborts the request.
	 *
	 * @api public
	 */
	
	Request.prototype.abort = function () {
	  this.cleanup();
	};
	
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	
	Request.requestsCount = 0;
	Request.requests = {};
	
	if (global.document) {
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}
	
	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(532);
	var parseqs = __webpack_require__(541);
	var parser = __webpack_require__(533);
	var inherit = __webpack_require__(542);
	var yeast = __webpack_require__(543);
	var debug = __webpack_require__(513)('engine.io-client:polling');
	
	/**
	 * Module exports.
	 */
	
	module.exports = Polling;
	
	/**
	 * Is XHR2 supported?
	 */
	
	var hasXHR2 = function () {
	  var XMLHttpRequest = __webpack_require__(528);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	}();
	
	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */
	
	function Polling(opts) {
	  var forceBase64 = opts && opts.forceBase64;
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(Polling, Transport);
	
	/**
	 * Transport name.
	 */
	
	Polling.prototype.name = 'polling';
	
	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */
	
	Polling.prototype.doOpen = function () {
	  this.poll();
	};
	
	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */
	
	Polling.prototype.pause = function (onPause) {
	  var self = this;
	
	  this.readyState = 'pausing';
	
	  function pause() {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }
	
	  if (this.polling || !this.writable) {
	    var total = 0;
	
	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }
	
	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};
	
	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */
	
	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};
	
	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */
	
	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function callback(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' === self.readyState) {
	      self.onOpen();
	    }
	
	    // if its a close packet, we close the ongoing requests
	    if ('close' === packet.type) {
	      self.onClose();
	      return false;
	    }
	
	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };
	
	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);
	
	  // if an event did not trigger closing
	  if ('closed' !== this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');
	
	    if ('open' === this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};
	
	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */
	
	Polling.prototype.doClose = function () {
	  var self = this;
	
	  function close() {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }
	
	  if ('open' === this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};
	
	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */
	
	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function callbackfn() {
	    self.writable = true;
	    self.emit('drain');
	  };
	
	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';
	
	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // avoid port if default for schema
	  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
	    port = ':' + this.port;
	  }
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(533);
	var Emitter = __webpack_require__(517);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Transport;
	
	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */
	
	function Transport(opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	  this.forceNode = opts.forceNode;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	  this.localAddress = opts.localAddress;
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Transport.prototype);
	
	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */
	
	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};
	
	/**
	 * Opens the transport.
	 *
	 * @api public
	 */
	
	Transport.prototype.open = function () {
	  if ('closed' === this.readyState || '' === this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }
	
	  return this;
	};
	
	/**
	 * Closes the transport.
	 *
	 * @api private
	 */
	
	Transport.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.doClose();
	    this.onClose();
	  }
	
	  return this;
	};
	
	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	Transport.prototype.send = function (packets) {
	  if ('open' === this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};
	
	/**
	 * Called upon open
	 *
	 * @api private
	 */
	
	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};
	
	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */
	
	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};
	
	/**
	 * Called with a decoded packet.
	 */
	
	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon close.
	 *
	 * @api private
	 */
	
	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var keys = __webpack_require__(534);
	var hasBinary = __webpack_require__(518);
	var sliceBuffer = __webpack_require__(535);
	var after = __webpack_require__(536);
	var utf8 = __webpack_require__(537);
	
	var base64encoder;
	if (global && global.ArrayBuffer) {
	  base64encoder = __webpack_require__(539);
	}
	
	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */
	
	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
	
	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
	
	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;
	
	/**
	 * Current protocol version.
	 */
	
	exports.protocol = 3;
	
	/**
	 * Packet types.
	 */
	
	var packets = exports.packets = {
	  open: 0 // non-ws
	  , close: 1 // non-ws
	  , ping: 2,
	  pong: 3,
	  message: 4,
	  upgrade: 5,
	  noop: 6
	};
	
	var packetslist = keys(packets);
	
	/**
	 * Premade error packet.
	 */
	
	var err = { type: 'error', data: 'parser error' };
	
	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */
	
	var Blob = __webpack_require__(540);
	
	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */
	
	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if (typeof supportsBinary === 'function') {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }
	
	  if (typeof utf8encode === 'function') {
	    callback = utf8encode;
	    utf8encode = null;
	  }
	
	  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;
	
	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }
	
	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }
	
	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];
	
	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
	  }
	
	  return callback('' + encoded);
	};
	
	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}
	
	/**
	 * Encode packet helpers for binary types
	 */
	
	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);
	
	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i + 1] = contentArray[i];
	  }
	
	  return callback(resultBuffer.buffer);
	}
	
	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var fr = new FileReader();
	  fr.onload = function () {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}
	
	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }
	
	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);
	
	  return callback(blob);
	}
	
	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */
	
	exports.encodeBase64Packet = function (packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function () {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }
	
	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};
	
	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */
	
	exports.decodePacket = function (data, binaryType, utf8decode) {
	  if (data === undefined) {
	    return err;
	  }
	  // String data
	  if (typeof data === 'string') {
	    if (data.charAt(0) === 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }
	
	    if (utf8decode) {
	      data = tryDecode(data);
	      if (data === false) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);
	
	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }
	
	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }
	
	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};
	
	function tryDecode(data) {
	  try {
	    data = utf8.decode(data, { strict: false });
	  } catch (e) {
	    return false;
	  }
	  return data;
	}
	
	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */
	
	exports.decodeBase64Packet = function (msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!base64encoder) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }
	
	  var data = base64encoder.decode(msg.substr(1));
	
	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }
	
	  return { type: type, data: data };
	};
	
	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary === 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }
	
	  var isBinary = hasBinary(packets);
	
	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }
	
	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }
	
	  if (!packets.length) {
	    return callback('0:');
	  }
	
	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function (message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }
	
	  map(packets, encodeOne, function (err, results) {
	    return callback(results.join(''));
	  });
	};
	
	/**
	 * Async array map using after
	 */
	
	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);
	
	  var eachWithIndex = function eachWithIndex(i, el, cb) {
	    each(el, function (error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };
	
	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}
	
	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */
	
	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data !== 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }
	
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var packet;
	  if (data === '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	  var length = '',
	      n,
	      msg;
	
	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	
	    if (chr !== ':') {
	      length += chr;
	      continue;
	    }
	
	    if (length === '' || length != (n = Number(length))) {
	      // parser error - ignoring payload
	      return callback(err, 0, 1);
	    }
	
	    msg = data.substr(i + 1, n);
	
	    if (length != msg.length) {
	      // parser error - ignoring payload
	      return callback(err, 0, 1);
	    }
	
	    if (msg.length) {
	      packet = exports.decodePacket(msg, binaryType, false);
	
	      if (err.type === packet.type && err.data === packet.data) {
	        // parser error in individual packet - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      var ret = callback(packet, i + n, l);
	      if (false === ret) return;
	    }
	
	    // advance cursor
	    i += n;
	    length = '';
	  }
	
	  if (length !== '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	};
	
	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */
	
	exports.encodePayloadAsArrayBuffer = function (packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function (data) {
	      return doneCallback(null, data);
	    });
	  }
	
	  map(packets, encodeOne, function (err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function (acc, p) {
	      var len;
	      if (typeof p === 'string') {
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);
	
	    var resultArray = new Uint8Array(totalLength);
	
	    var bufferIndex = 0;
	    encodedPackets.forEach(function (p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }
	
	      if (isString) {
	        // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else {
	        // true binary
	        resultArray[bufferIndex++] = 1;
	      }
	
	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;
	
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });
	
	    return callback(resultArray.buffer);
	  });
	};
	
	/**
	 * Encode as Blob
	 */
	
	exports.encodePayloadAsBlob = function (packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function (encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }
	
	      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
	
	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;
	
	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }
	
	  map(packets, encodeOne, function (err, results) {
	    return callback(new Blob(results));
	  });
	};
	
	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */
	
	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var bufferTail = data;
	  var buffers = [];
	
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';
	
	    for (var i = 1;; i++) {
	      if (tailArray[i] === 255) break;
	
	      // 310 = char length of Number.MAX_VALUE
	      if (msgLength.length > 310) {
	        return callback(err, 0, 1);
	      }
	
	      msgLength += tailArray[i];
	    }
	
	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);
	
	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }
	
	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }
	
	  var total = buffers.length;
	  buffers.forEach(function (buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */
	
	module.exports = Object.keys || function keys(obj) {
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;
	
	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */
	
	module.exports = function (arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;
	
	  if (arraybuffer.slice) {
	    return arraybuffer.slice(start, end);
	  }
	
	  if (start < 0) {
	    start += bytes;
	  }
	  if (end < 0) {
	    end += bytes;
	  }
	  if (end > bytes) {
	    end = bytes;
	  }
	
	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }
	
	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = after;
	
	function after(count, callback, err_cb) {
	    var bail = false;
	    err_cb = err_cb || noop;
	    proxy.count = count;
	
	    return count === 0 ? callback() : proxy;
	
	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times');
	        }
	        --proxy.count;
	
	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true;
	            callback(err
	            // future error callbacks will go to error handler
	            );callback = err_cb;
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result);
	        }
	    }
	}
	
	function noop() {}

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! https://mths.be/utf8js v2.1.2 by @mathias */
	;(function (root) {
	
		// Detect free variables `exports`
		var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports;
	
		// Detect free variable `module`
		var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						// low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}
	
		function checkScalarValue(codePoint, strict) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				if (strict) {
					throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
				}
				return false;
			}
			return true;
		}
		/*--------------------------------------------------------------------------*/
	
		function createByte(codePoint, shift) {
			return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
		}
	
		function encodeCodePoint(codePoint, strict) {
			if ((codePoint & 0xFFFFFF80) == 0) {
				// 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) {
				// 2-byte sequence
				symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
			} else if ((codePoint & 0xFFFF0000) == 0) {
				// 3-byte sequence
				if (!checkScalarValue(codePoint, strict)) {
					codePoint = 0xFFFD;
				}
				symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
				symbol += createByte(codePoint, 6);
			} else if ((codePoint & 0xFFE00000) == 0) {
				// 4-byte sequence
				symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
			return symbol;
		}
	
		function utf8encode(string, opts) {
			opts = opts || {};
			var strict = false !== opts.strict;
	
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint, strict);
			}
			return byteString;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}
	
			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}
	
			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}
	
		function decodeSymbol(strict) {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;
	
			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}
	
			if (byteIndex == byteCount) {
				return false;
			}
	
			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}
	
			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				byte2 = readContinuationByte();
				codePoint = (byte1 & 0x1F) << 6 | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;
				if (codePoint >= 0x0800) {
					return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}
	
			throw Error('Invalid UTF-8 detected');
		}
	
		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString, opts) {
			opts = opts || {};
			var strict = false !== opts.strict;
	
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol(strict)) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}
	
		/*--------------------------------------------------------------------------*/
	
		var utf8 = {
			'version': '2.1.2',
			'encode': utf8encode,
			'decode': utf8decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if ("function" == 'function' && _typeof(__webpack_require__(249)) == 'object' && __webpack_require__(249)) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && !freeExports.nodeType) {
			if (freeModule) {
				// in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.utf8 = utf8;
		}
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(538)(module), (function() { return this; }())))

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

	"use strict";
	
	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function () {
	  "use strict";
	
	  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	
	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }
	
	  exports.encode = function (arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	        i,
	        len = bytes.length,
	        base64 = "";
	
	    for (i = 0; i < len; i += 3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
	      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if (len % 3 === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode = function (base64) {
	    var bufferLength = base64.length * 0.75,
	        len = base64.length,
	        i,
	        p = 0,
	        encoded1,
	        encoded2,
	        encoded3,
	        encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	        bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i += 4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i + 1)];
	      encoded3 = lookup[base64.charCodeAt(i + 2)];
	      encoded4 = lookup[base64.charCodeAt(i + 3)];
	
	      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
	      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
	      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	    }
	
	    return arraybuffer;
	  };
	})();

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Create a blob builder even when vendor prefixes exist
	 */
	
	var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;
	
	/**
	 * Check if Blob constructor is supported
	 */
	
	var blobSupported = function () {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch (e) {
	    return false;
	  }
	}();
	
	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */
	
	var blobSupportsArrayBufferView = blobSupported && function () {
	  try {
	    var b = new Blob([new Uint8Array([1, 2])]);
	    return b.size === 2;
	  } catch (e) {
	    return false;
	  }
	}();
	
	/**
	 * Check if BlobBuilder is supported
	 */
	
	var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
	
	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */
	
	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;
	
	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }
	
	      ary[i] = buf;
	    }
	  }
	}
	
	function BlobBuilderConstructor(ary, options) {
	  options = options || {};
	
	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);
	
	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }
	
	  return options.type ? bb.getBlob(options.type) : bb.getBlob();
	};
	
	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};
	
	module.exports = function () {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	
	exports.encode = function (obj) {
	  var str = '';
	
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }
	
	  return str;
	};
	
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	
	exports.decode = function (qs) {
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (a, b) {
	  var fn = function fn() {};
	  fn.prototype = b.prototype;
	  a.prototype = new fn();
	  a.prototype.constructor = a;
	};

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

	'use strict';
	
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
	    length = 64,
	    map = {},
	    seed = 0,
	    i = 0,
	    prev;
	
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';
	
	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);
	
	  return encoded;
	}
	
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;
	
	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }
	
	  return decoded;
	}
	
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());
	
	  if (now !== prev) return seed = 0, prev = now;
	  return now + '.' + encode(seed++);
	}
	
	//
	// Map each character to its index.
	//
	for (; i < length; i++) {
	  map[alphabet[i]] = i;
	} //
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module requirements.
	 */
	
	var Polling = __webpack_require__(531);
	var inherit = __webpack_require__(542);
	
	/**
	 * Module exports.
	 */
	
	module.exports = JSONPPolling;
	
	/**
	 * Cached regular expressions.
	 */
	
	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;
	
	/**
	 * Global JSONP callbacks.
	 */
	
	var callbacks;
	
	/**
	 * Noop.
	 */
	
	function empty() {}
	
	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */
	
	function JSONPPolling(opts) {
	  Polling.call(this, opts);
	
	  this.query = this.query || {};
	
	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }
	
	  // callback identifier
	  this.index = callbacks.length;
	
	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });
	
	  // append to query string
	  this.query.j = this.index;
	
	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(JSONPPolling, Polling);
	
	/*
	 * JSONP only supports binary as base64 encoded strings
	 */
	
	JSONPPolling.prototype.supportsBinary = false;
	
	/**
	 * Closes the socket.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }
	
	  Polling.prototype.doClose.call(this);
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');
	
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };
	
	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;
	
	  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);
	
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};
	
	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;
	
	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;
	
	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);
	
	    this.form = form;
	    this.area = area;
	  }
	
	  this.form.action = this.uri();
	
	  function complete() {
	    initIframe();
	    fn();
	  }
	
	  function initIframe() {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }
	
	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }
	
	    iframe.id = self.iframeId;
	
	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }
	
	  initIframe();
	
	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');
	
	  try {
	    this.form.submit();
	  } catch (e) {}
	
	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState === 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(532);
	var parser = __webpack_require__(533);
	var parseqs = __webpack_require__(541);
	var inherit = __webpack_require__(542);
	var yeast = __webpack_require__(543);
	var debug = __webpack_require__(513)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	var NodeWebSocket;
	if (typeof window === 'undefined') {
	  try {
	    NodeWebSocket = __webpack_require__(546);
	  } catch (e) {}
	}
	
	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */
	
	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  WebSocket = NodeWebSocket;
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = WS;
	
	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */
	
	function WS(opts) {
	  var forceBase64 = opts && opts.forceBase64;
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
	  this.protocols = opts.protocols;
	  if (!this.usingBrowserWebSocket) {
	    WebSocket = NodeWebSocket;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(WS, Transport);
	
	/**
	 * Transport name.
	 *
	 * @api public
	 */
	
	WS.prototype.name = 'websocket';
	
	/*
	 * WebSockets support binary
	 */
	
	WS.prototype.supportsBinary = true;
	
	/**
	 * Opens socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }
	
	  var uri = this.uri();
	  var protocols = this.protocols;
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	  if (this.localAddress) {
	    opts.localAddress = this.localAddress;
	  }
	
	  try {
	    this.ws = this.usingBrowserWebSocket ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
	  } catch (err) {
	    return this.emit('error', err);
	  }
	
	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }
	
	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'nodebuffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }
	
	  this.addEventListeners();
	};
	
	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */
	
	WS.prototype.addEventListeners = function () {
	  var self = this;
	
	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};
	
	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */
	
	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!self.usingBrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }
	
	          if (self.perMessageDeflate) {
	            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }
	
	        // Sometimes the websocket has already been closed but the browser didn't
	        // have a chance of informing us about it yet, in that case send will
	        // throw an error
	        try {
	          if (self.usingBrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }
	
	        --total || done();
	      });
	    })(packets[i]);
	  }
	
	  function done() {
	    self.emit('flush');
	
	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};
	
	/**
	 * Called upon close
	 *
	 * @api private
	 */
	
	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};
	
	/**
	 * Closes socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';
	
	  // avoid port if default for schema
	  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
	    port = ':' + this.port;
	  }
	
	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};
	
	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */
	
	WS.prototype.check = function () {
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

	"use strict";
	
	var indexOf = [].indexOf;
	
	module.exports = function (arr, obj) {
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */
	
	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;
	
	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }
	
	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
	
	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }
	
	  if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
	    return new Function('return ' + data)();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(516);
	var Emitter = __webpack_require__(517);
	var toArray = __webpack_require__(550);
	var on = __webpack_require__(551);
	var bind = __webpack_require__(552);
	var debug = __webpack_require__(513)('socket.io-client:socket');
	var parseqs = __webpack_require__(541);
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = Socket;
	
	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */
	
	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};
	
	/**
	 * Shortcut to `Emitter#emit`.
	 */
	
	var emit = Emitter.prototype.emit;
	
	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */
	
	function Socket(io, nsp, opts) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (opts && opts.query) {
	    this.query = opts.query;
	  }
	  if (this.io.autoConnect) this.open();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */
	
	Socket.prototype.subEvents = function () {
	  if (this.subs) return;
	
	  var io = this.io;
	  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
	};
	
	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */
	
	Socket.prototype.open = Socket.prototype.connect = function () {
	  if (this.connected) return this;
	
	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' === this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};
	
	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};
	
	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }
	
	  var args = toArray(arguments);
	  var packet = { type: parser.EVENT, data: args };
	
	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;
	
	  // event ack callback
	  if ('function' === typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }
	
	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }
	
	  delete this.flags;
	
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};
	
	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */
	
	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');
	
	  // write connect packet if necessary
	  if ('/' !== this.nsp) {
	    if (this.query) {
	      var query = _typeof(this.query) === 'object' ? parseqs.encode(this.query) : this.query;
	      debug('sending connect packet with query %s', query);
	      this.packet({ type: parser.CONNECT, query: query });
	    } else {
	      this.packet({ type: parser.CONNECT });
	    }
	  }
	};
	
	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */
	
	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};
	
	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onpacket = function (packet) {
	  if (packet.nsp !== this.nsp) return;
	
	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;
	
	    case parser.EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.ACK:
	      this.onack(packet);
	      break;
	
	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;
	
	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;
	
	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};
	
	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);
	
	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }
	
	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};
	
	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */
	
	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);
	
	    self.packet({
	      type: parser.ACK,
	      id: id,
	      data: args
	    });
	  };
	};
	
	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' === typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};
	
	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */
	
	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};
	
	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */
	
	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];
	
	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};
	
	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */
	
	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};
	
	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */
	
	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }
	
	  this.io.destroy(this);
	};
	
	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.close = Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }
	
	  // remove socket from pool
	  this.destroy();
	
	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};
	
	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.compress = function (compress) {
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = toArray;
	
	function toArray(list, index) {
	    var array = [];
	
	    index = index || 0;
	
	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i];
	    }
	
	    return array;
	}

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Module exports.
	 */
	
	module.exports = on;
	
	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */
	
	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function destroy() {
	      obj.removeListener(ev, fn);
	    }
	  };
	}

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Slice reference.
	 */
	
	var slice = [].slice;
	
	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function (obj, fn) {
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function () {
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  };
	};

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Expose `Backoff`.
	 */
	
	module.exports = Backoff;
	
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Backoff.prototype.duration = function () {
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand = Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};
	
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	
	Backoff.prototype.reset = function () {
	  this.attempts = 0;
	};
	
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMin = function (min) {
	  this.ms = min;
	};
	
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMax = function (max) {
	  this.max = max;
	};
	
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	
	Backoff.prototype.setJitter = function (jitter) {
	  this.jitter = jitter;
	};

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsUpdate = __webpack_require__(223);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _reactRouter = __webpack_require__(159);
	
	var _reactBootstrap = __webpack_require__(226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CarEdit = function (_React$Component) {
	  _inherits(CarEdit, _React$Component);
	
	  function CarEdit(props) {
	    _classCallCheck(this, CarEdit);
	
	    var _this = _possibleConstructorReturn(this, (CarEdit.__proto__ || Object.getPrototypeOf(CarEdit)).call(this, props));
	
	    _this.submit = _this.submit.bind(_this);
	    _this.onChange = _this.onChange.bind(_this);
	    _this.dismissAlert = _this.dismissAlert.bind(_this);
	
	    _this.state = { successVisible: false, car: {} };
	    return _this;
	  }
	
	  _createClass(CarEdit, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadData();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      console.log('CarEdit: componentDidUpdate', prevProps.params.id, this.props.params.id);
	      if (this.props.params.id !== prevProps.params.id) {
	        this.loadData();
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      var changes = {};
	      changes[e.target.name] = { $set: e.target.value };
	      var modifiedCar = (0, _reactAddonsUpdate2.default)(this.state.car, changes);
	      this.setState({ car: modifiedCar });
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData() {
	      var _this2 = this;
	
	      fetch('/api/cars/' + this.props.params.id).then(function (response) {
	        return response.json();
	      }).then(function (car) {
	        _this2.setState({ car: car }); // all the attributes of the car are top level state items
	      });
	    }
	  }, {
	    key: 'submit',
	    value: function submit(e) {
	      var _this3 = this;
	
	      e.preventDefault();
	      fetch('/api/cars/' + this.props.params.id, {
	        method: 'PUT',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify(this.state.car)
	
	      }).then(function (response) {
	        return response.json();
	      }).then(function (car) {
	        _this3.setState({ car: car });
	        _this3.setState({ successVisible: true });
	        _this3.dismissTimer = setTimeout(_this3.dismissAlert, 5000);
	      });
	    }
	  }, {
	    key: 'dismissAlert',
	    value: function dismissAlert() {
	      this.setState({ successVisible: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var success = _react2.default.createElement(
	        _reactBootstrap.Alert,
	        { bsStyle: 'success', onDismiss: this.dismissAlert },
	        'Car saved to DB successfully.'
	      );
	      var car = this.state.car;
	      return _react2.default.createElement(
	        'div',
	        { style: { maxWidth: 600 } },
	        _react2.default.createElement(
	          _reactBootstrap.Panel,
	          { header: 'Edit car: ' + this.props.params.id },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.submit },
	            _react2.default.createElement(
	              _reactBootstrap.FormGroup,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.ControlLabel,
	                null,
	                'Priority'
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.FormControl,
	                { componentClass: 'select', name: 'priority', value: car.priority,
	                  onChange: this.onChange },
	                _react2.default.createElement(
	                  'option',
	                  { value: 'P1' },
	                  'P1'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'P2' },
	                  'P2'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'P3' },
	                  'P3'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.FormGroup,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.ControlLabel,
	                null,
	                'Status'
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.FormControl,
	                { componentClass: 'select', name: 'status', value: car.status,
	                  onChange: this.onChange },
	                _react2.default.createElement(
	                  'option',
	                  null,
	                  'Stocking'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  null,
	                  'Out of Stock'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.FormGroup,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.ControlLabel,
	                null,
	                'Name'
	              ),
	              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'name', value: car.name, onChange: this.onChange })
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.FormGroup,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.ControlLabel,
	                null,
	                'Color'
	              ),
	              _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'color', value: car.color,
	                onChange: this.onChange })
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.ButtonToolbar,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                { type: 'submit', bsStyle: 'primary' },
	                'Submit'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: 'btn btn-link', to: '/cars' },
	                'Back'
	              )
	            )
	          )
	        ),
	        this.state.successVisible ? success : null
	      );
	    }
	  }]);
	
	  return CarEdit;
	}(_react2.default.Component);
	
	exports.default = CarEdit;
	
	
	CarEdit.propTypes = {
	  params: _react2.default.PropTypes.object.isRequired
	};

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(556);
	
	var _CarListClientSide = __webpack_require__(561);
	
	var _CarListClientSide2 = _interopRequireDefault(_CarListClientSide);
	
	var _ChatBox = __webpack_require__(508);
	
	var _ChatBox2 = _interopRequireDefault(_ChatBox);
	
	var _reactBootstrap = __webpack_require__(226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by admin on 6/12/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ClientSide = function (_React$Component) {
	  _inherits(ClientSide, _React$Component);
	
	  _createClass(ClientSide, null, [{
	    key: 'propTypes',
	    get: function get() {
	      return { location: _react2.default.PropTypes.object.isRequired };
	    }
	  }]);
	
	  function ClientSide() {
	    _classCallCheck(this, ClientSide);
	
	    var _this = _possibleConstructorReturn(this, (ClientSide.__proto__ || Object.getPrototypeOf(ClientSide)).call(this));
	
	    _this.state = { cars: [], emitAddress: 'toServer', onAddress: 'receiveServer', email: '' };
	    _this.onChangeEmail = _this.onChangeEmail.bind(_this);
	    _this.changeEmail = _this.changeEmail.bind(_this);
	    return _this;
	  }
	
	  _createClass(ClientSide, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('CarList: componentDidMount');
	      this.loadData();
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData() {
	      var _this2 = this;
	
	      console.log('LoadData was call: ');
	      console.log(this.props.location);
	      fetch('/api/cars/' + this.props.location.search).then(function (response) {
	        return response.json();
	      }).then(function (cars) {
	        _this2.setState({ cars: cars });
	        console.log(cars);
	      }).catch(function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'onChangeEmail',
	    value: function onChangeEmail(event) {
	      console.log('On change email');
	      this.setState({ email: event.target.value });
	      console.log(this.state.email);
	    }
	  }, {
	    key: 'changeEmail',
	    value: function changeEmail() {
	      console.log('change email address');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      console.log('Rendering Client side.');
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_CarListClientSide2.default, { cars: this.state.cars }),
	        _react2.default.createElement(
	          _reactBootstrap.InputGroup,
	          null,
	          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', bsSize: 'large', validationState: 'success', value: this.state.email,
	            onChange: this.onChangeEmail }),
	          _react2.default.createElement(
	            _reactBootstrap.InputGroup.Button,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              { onClick: function onClick() {
	                  _this3.changeEmail();
	                } },
	              'Accept'
	            )
	          )
	        ),
	        _react2.default.createElement(_ChatBox2.default, { emitAddress: this.state.emitAddress, onAddress: this.state.onAddress,
	          user: this.state.email })
	      );
	    }
	  }]);
	
	  return ClientSide;
	}(_react2.default.Component);
	
	exports.default = ClientSide;

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(557);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;
	
	var options = {"sourceMap":true}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(559)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./ClientSide.css", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./ClientSide.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(558)(undefined);
	// imports
	
	
	// module
	exports.push([module.id, ".src-___ClientSide__glyphicon___NULP7 { margin-right:5px; }\n.src-___ClientSide__thumbnail___3wDY-\n{\n    margin-bottom: 20px;\n    padding: 0px;\n    -webkit-border-radius: 0px;\n    -moz-border-radius: 0px;\n    border-radius: 0px;\n}\n\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD\n{\n    float: none;\n    width: 100%;\n    background-color: #fff;\n    margin-bottom: 10px;\n}\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD:nth-of-type(odd):hover,.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD:hover\n{\n    background: #428bca;\n}\n\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD .src-___ClientSide__list-group-image___xgPcf\n{\n    margin-right: 10px;\n}\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD .src-___ClientSide__thumbnail___3wDY-\n{\n    margin-bottom: 0px;\n}\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD .src-___ClientSide__caption___2FR4J\n{\n    padding: 9px 9px 0px 9px;\n}\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD:nth-of-type(odd)\n{\n    background: #eeeeee;\n}\n\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD:before, .src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD:after\n{\n    display: table;\n    content: \" \";\n}\n\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD img\n{\n    float: left;\n}\n.src-___ClientSide__item___39Z9F.src-___ClientSide__list-group-item___3CcZD:after\n{\n    clear: both;\n}\n.src-___ClientSide__list-group-item-text___3LWNh\n{\n    margin: 0 0 11px;\n}\n\n.src-___ClientSide__grid-group-item___1K2NU\n{\n    float: left;\n}", ""]);
	
	// exports
	exports.locals = {
		"glyphicon": "src-___ClientSide__glyphicon___NULP7",
		"thumbnail": "src-___ClientSide__thumbnail___3wDY-",
		"item": "src-___ClientSide__item___39Z9F",
		"list-group-item": "src-___ClientSide__list-group-item___3CcZD",
		"list-group-image": "src-___ClientSide__list-group-image___xgPcf",
		"caption": "src-___ClientSide__caption___2FR4J",
		"list-group-item-text": "src-___ClientSide__list-group-item-text___3LWNh",
		"grid-group-item": "src-___ClientSide__grid-group-item___1K2NU"
	};

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function (useSourceMap) {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if (item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}
	
		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
			});
	
			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}
	
		return [content].join('\n');
	}
	
	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
	
		return '/*# ' + data + ' */';
	}

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	
	var stylesInDom = {};
	
	var	memoize = function (fn) {
		var memo;
	
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};
	
	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});
	
	var getElement = (function (fn) {
		var memo = {};
	
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
	
			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});
	
	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];
	
	var	fixUrls = __webpack_require__(560);
	
	module.exports = function(list, options) {
		if (false) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
	
		options.attrs = typeof options.attrs === "object" ? options.attrs : {};
	
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton) options.singleton = isOldIE();
	
		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";
	
		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";
	
		var styles = listToStyles(list, options);
	
		addStylesToDom(styles, options);
	
		return function update (newList) {
			var mayRemove = [];
	
			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
	
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
	
			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}
	
			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
	
				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
	
					delete stylesInDom[domStyle.id];
				}
			}
		};
	};
	
	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
	
			if(domStyle) {
				domStyle.refs++;
	
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
	
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
	
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
	
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};
	
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
	
			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}
	
		return styles;
	}
	
	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)
	
		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}
	
		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
	
		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);
	
		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement (options) {
		var style = document.createElement("style");
	
		options.attrs.type = "text/css";
	
		addAttrs(style, options.attrs);
		insertStyleElement(options, style);
	
		return style;
	}
	
	function createLinkElement (options) {
		var link = document.createElement("link");
	
		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";
	
		addAttrs(link, options.attrs);
		insertStyleElement(options, link);
	
		return link;
	}
	
	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}
	
	function addStyle (obj, options) {
		var style, update, remove, result;
	
		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);
	
		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
	
			style = singleton || (singleton = createStyleElement(options));
	
			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);
	
		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);
	
				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}
	
		update(obj);
	
		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}
	
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
	
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;
	
			if (childNodes[index]) style.removeChild(childNodes[index]);
	
			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			style.setAttribute("media", media)
		}
	
		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}
	
			style.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;
	
		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}
	
		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = link.href;
	
		link.href = URL.createObjectURL(blob);
	
		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),

/***/ 560:
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */
	
	module.exports = function (css) {
		// get current location
		var location = typeof window !== "undefined" && window.location;
	
		if (!location) {
			throw new Error("fixUrls requires window.location");
		}
	
		// blank or null?
		if (!css || typeof css !== "string") {
			return css;
		}
	
		var baseUrl = location.protocol + "//" + location.host;
		var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
	
		// convert each url(...)
		/*
	 This regular expression is just a way to recursively match brackets within
	 a string.
	 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	    (  = Start a capturing group
	      (?:  = Start a non-capturing group
	          [^)(]  = Match anything that isn't a parentheses
	          |  = OR
	          \(  = Match a start parentheses
	              (?:  = Start another non-capturing groups
	                  [^)(]+  = Match anything that isn't a parentheses
	                  |  = OR
	                  \(  = Match a start parentheses
	                      [^)(]*  = Match anything that isn't a parentheses
	                  \)  = Match a end parentheses
	              )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
	  \)  = Match a close parens
	 	 /gi  = Get all matches, not the first.  Be case insensitive.
	  */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
				return $1;
			}).replace(/^'(.*)'$/, function (o, $1) {
				return $1;
			});
	
			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
				return fullMatch;
			}
	
			// convert the url to a full url
			var newUrl;
	
			if (unquotedOrigUrl.indexOf("//") === 0) {
				//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}
	
			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});
	
		// send back the fixed css
		return fixedCss;
	};

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(556);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by admin on 6/13/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Car = function Car(props) {
	    console.log('Layout cua item', props.layOut);
	    return _react2.default.createElement(
	        'div',
	        { className: props.layOut },
	        _react2.default.createElement(
	            'div',
	            { className: 'thumbnail' },
	            _react2.default.createElement('img', { className: 'group list-group-image', src: 'http://placehold.it/400x250/000/fff', alt: '' }),
	            _react2.default.createElement(
	                'div',
	                { className: 'caption' },
	                _react2.default.createElement(
	                    'h4',
	                    { className: 'group inner list-group-item-heading' },
	                    'Car Name'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: 'group inner list-group-item-text' },
	                    props.car.name
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-xs-12 col-md-6' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            '$21.000'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-xs-12 col-md-6' },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'btn btn-success', href: 'http://www.bravebits.co/vi/' },
	                            'Add to cart'
	                        )
	                    )
	                )
	            )
	        )
	    );
	};
	
	Car.propTypes = {
	    car: _react2.default.PropTypes.object.isRequired,
	    layOut: _react2.default.PropTypes.string.isRequired
	};
	
	var CarListClientSide = function (_React$Component) {
	    _inherits(CarListClientSide, _React$Component);
	
	    _createClass(CarListClientSide, null, [{
	        key: 'propTypes',
	        get: function get() {
	            return {
	                cars: _react2.default.PropTypes.array.isRequired
	            };
	        }
	    }]);
	
	    function CarListClientSide(props) {
	        _classCallCheck(this, CarListClientSide);
	
	        var _this = _possibleConstructorReturn(this, (CarListClientSide.__proto__ || Object.getPrototypeOf(CarListClientSide)).call(this, props));
	
	        _this.state = { layOut: 'item col-xs-4 col-lg-4 grid-group-item' };
	        _this.grid = 'grid';
	        _this.list = 'list';
	        _this.changeLayout = _this.changeLayout.bind(_this);
	        return _this;
	    }
	
	    _createClass(CarListClientSide, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            console.log('New Props, ', newProps);
	        }
	    }, {
	        key: 'changeLayout',
	        value: function changeLayout(layout) {
	            console.log('abs', layout);
	            var layoutState = layout === 'grid' ? 'item col-xs-4 col-lg-4 grid-group-item' : 'item col-xs-4 col-lg-4 list-group-item';
	            this.setState({ layOut: layoutState });
	            console.log('changeLayout clicked: ', this.state.layOut);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            console.log('Layout sau khi click: ', this.state.layOut);
	            var cars = this.props.cars.map(function (car, i) {
	                return _react2.default.createElement(Car, { key: i, car: car, layOut: _this2.state.layOut });
	            });
	            console.log('Day la danh sach cars lay duoc tu server: ', this.props.cars);
	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'well well-sm' },
	                    _react2.default.createElement(
	                        'strong',
	                        null,
	                        'Category Title'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'btn-group' },
	                        _react2.default.createElement(
	                            'button',
	                            { id: this.list, className: 'btn btn-default btn-sm',
	                                onClick: function onClick() {
	                                    return _this2.changeLayout(_this2.list);
	                                } },
	                            _react2.default.createElement('span', { className: 'glyphicon glyphicon-th-list' }),
	                            'List'
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { id: this.grid, className: 'btn btn-default btn-sm',
	                                onClick: function onClick() {
	                                    return _this2.changeLayout(_this2.grid);
	                                } },
	                            _react2.default.createElement('span', { className: 'glyphicon glyphicon-th' }),
	                            'Grid'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'products', className: 'row list-group' },
	                    cars
	                )
	            );
	        }
	    }]);
	
	    return CarListClientSide;
	}(_react2.default.Component);
	
	exports.default = CarListClientSide;

/***/ })

});
//# sourceMappingURL=app.bundle.js.map