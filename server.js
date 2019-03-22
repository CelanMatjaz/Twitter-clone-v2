/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/Login */ \"./src/client/components/auth/Login.js\");\n/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/Register */ \"./src/client/components/auth/Register.js\");\n/* harmony import */ var _components_tweet_Feed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tweet/Feed */ \"./src/client/components/tweet/Feed.js\");\n/* harmony import */ var _components_tweet_FeedProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tweet/FeedProfile */ \"./src/client/components/tweet/FeedProfile.js\");\n/* harmony import */ var _components_tweet_AddTweet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tweet/AddTweet */ \"./src/client/components/tweet/AddTweet.js\");\n/* harmony import */ var _components_tweet_EditTweet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tweet/EditTweet */ \"./src/client/components/tweet/EditTweet.js\");\n\n //Components\n\n\n\n\n\n\n\n\nvar Routes = function Routes() {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/login\",\n    component: _components_auth_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/register\",\n    component: _components_auth_Register__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _components_tweet_Feed__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/profile/:username\",\n    component: _components_tweet_FeedProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/add-tweet\",\n    component: _components_tweet_AddTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/edit-tweet/:id\",\n    component: _components_tweet_EditTweet__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/components/App.js":
/*!**************************************!*\
  !*** ./src/client/components/App.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/Navbar */ \"./src/client/components/layout/Navbar.js\");\n/* harmony import */ var _store_actions_actions_actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/actions/actions.auth */ \"./src/client/store/actions/actions/actions.auth.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n //Components\n\n //Actions\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.LoginCheck();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.props.loginCheck) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          width: '100%',\n          textAlign: 'center'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        style: {\n          margin: '50px auto'\n        },\n        src: \"/spinner.svg\",\n        alt: \"\"\n      }));\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        className: \"container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loginCheck: state.auth.loginCheck\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, {\n  LoginCheck: _store_actions_actions_actions_auth__WEBPACK_IMPORTED_MODULE_5__[\"LoginCheck\"]\n})(App)));\n\n//# sourceURL=webpack:///./src/client/components/App.js?");

/***/ }),

/***/ "./src/client/components/auth/Login.js":
/*!*********************************************!*\
  !*** ./src/client/components/auth/Login.js ***!
  \*********************************************/
/*! exports provided: Login, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LoginP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginP */ \"./src/client/components/auth/LoginP.js\");\n/* harmony import */ var _store_actions_actions_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/actions/actions.auth */ \"./src/client/store/actions/actions/actions.auth.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n //Components\n\n //Actions\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Login, _Component);\n\n  function Login() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      email: '',\n      password: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      _this.setState(_defineProperty({}, event.target.id, event.target.value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n\n      _this.props.login({\n        email: _this.state.email,\n        password: _this.state.password\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props$auth = this.props.auth,\n          isEmpty = _this$props$auth.isEmpty,\n          authError = _this$props$auth.authError;\n\n      if (!isEmpty && !authError) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n          to: '/'\n        });\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginP__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        data: this.state,\n        handleChange: this.handleChange,\n        handleSubmit: this.handleSubmit\n      });\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n  login: _store_actions_actions_actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"Login\"]\n})(Login));\n\n//# sourceURL=webpack:///./src/client/components/auth/Login.js?");

/***/ }),

/***/ "./src/client/components/auth/LoginP.js":
/*!**********************************************!*\
  !*** ./src/client/components/auth/LoginP.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/ErrorMessage */ \"./src/client/components/layout/ErrorMessage.js\");\n\n //Components\n\n\n\nvar Login = function Login(props) {\n  var _props$data = props.data,\n      email = _props$data.email,\n      password = _props$data.password;\n  var handleChange = props.handleChange,\n      handleSubmit = props.handleSubmit,\n      loginErrors = props.loginErrors;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form form-auth\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, loginErrors.map(function (error, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      message: error\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    id: \"email\",\n    value: email,\n    onChange: handleChange,\n    required: true\n  }), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    id: \"password\",\n    value: password,\n    onChange: handleChange,\n    required: true\n  }), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Login\")));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loginErrors: state.auth.loginErrors\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Login));\n\n//# sourceURL=webpack:///./src/client/components/auth/LoginP.js?");

/***/ }),

/***/ "./src/client/components/auth/Register.js":
/*!************************************************!*\
  !*** ./src/client/components/auth/Register.js ***!
  \************************************************/
/*! exports provided: Register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Register\", function() { return Register; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RegisterP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterP */ \"./src/client/components/auth/RegisterP.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Register =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Register, _Component);\n\n  function Register() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Register);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      username: '',\n      password: '',\n      passwordRepeat: '',\n      email: '',\n      registerErrors: [],\n      message: null\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (event) {\n      _this.setState(_defineProperty({}, event.target.id, event.target.value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (event) {\n      event.preventDefault();\n      var _this$state = _this.state,\n          username = _this$state.username,\n          email = _this$state.email,\n          password = _this$state.password,\n          passwordRepeat = _this$state.passwordRepeat;\n\n      _this.setState({\n        message: null,\n        registerErrors: []\n      });\n\n      fetch('/register', {\n        method: 'POST',\n        body: JSON.stringify({\n          username: username,\n          email: email,\n          password: password,\n          passwordRepeat: passwordRepeat\n        }),\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.status === 'Register_success') {\n          _this.setState({\n            message: 'Account successfuly created',\n            registerErrors: [],\n            username: '',\n            password: '',\n            passwordRepeat: '',\n            email: ''\n          });\n        } else {\n          _this.setState({\n            registerErrors: data.errors || ['Error registering user'],\n            message: null\n          });\n        }\n      }).catch(function (err) {\n        console.error(err);\n\n        _this.setState({\n          registerErrors: data || ['Error registering user']\n        });\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Register, [{\n    key: \"render\",\n    value: function render() {\n      if (!this.props.auth.isEmpty) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n        to: \"/\"\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterP__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        data: this.state,\n        handleChange: this.handleChange,\n        handleSubmit: this.handleSubmit\n      });\n    }\n  }]);\n\n  return Register;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n  /*register*/\n})(Register));\n\n//# sourceURL=webpack:///./src/client/components/auth/Register.js?");

/***/ }),

/***/ "./src/client/components/auth/RegisterP.js":
/*!*************************************************!*\
  !*** ./src/client/components/auth/RegisterP.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/ErrorMessage */ \"./src/client/components/layout/ErrorMessage.js\");\n/* harmony import */ var _layout_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Message */ \"./src/client/components/layout/Message.js\");\n //Components\n\n\n\n\nvar RegisterContainer = function RegisterContainer(props) {\n  var _props$data = props.data,\n      email = _props$data.email,\n      username = _props$data.username,\n      password = _props$data.password,\n      passwordRepeat = _props$data.passwordRepeat,\n      registerErrors = _props$data.registerErrors,\n      message = _props$data.message;\n  var handleChange = props.handleChange,\n      handleSubmit = props.handleSubmit;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form form-auth\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, message ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Message__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    message: message\n  }) : '', registerErrors.map(function (error, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: index,\n      message: error\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Register\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    id: \"email\",\n    value: email,\n    onChange: handleChange,\n    required: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"username\",\n    value: username,\n    onChange: handleChange,\n    required: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    id: \"password\",\n    value: password,\n    onChange: handleChange,\n    required: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"passwordRepeat\"\n  }, \"Repeat password\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    id: \"passwordRepeat\",\n    value: passwordRepeat,\n    onChange: handleChange,\n    required: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Register\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterContainer);\n\n//# sourceURL=webpack:///./src/client/components/auth/RegisterP.js?");

/***/ }),

/***/ "./src/client/components/layout/ErrorMessage.js":
/*!******************************************************!*\
  !*** ./src/client/components/layout/ErrorMessage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ErrorMessage = function ErrorMessage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message error\"\n  }, props.message);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorMessage);\n\n//# sourceURL=webpack:///./src/client/components/layout/ErrorMessage.js?");

/***/ }),

/***/ "./src/client/components/layout/Message.js":
/*!*************************************************!*\
  !*** ./src/client/components/layout/Message.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ErrorMessage = function ErrorMessage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message normal\"\n  }, props.message);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorMessage);\n\n//# sourceURL=webpack:///./src/client/components/layout/Message.js?");

/***/ }),

/***/ "./src/client/components/layout/Navbar.js":
/*!************************************************!*\
  !*** ./src/client/components/layout/Navbar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SignedInLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignedInLinks */ \"./src/client/components/layout/SignedInLinks.js\");\n/* harmony import */ var _SignedOutLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignedOutLinks */ \"./src/client/components/layout/SignedOutLinks.js\");\n\n\n //Components\n\n\n\n\nvar Navbar = function Navbar(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Twitter clone\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"right\"\n  }, props.auth.isEmpty ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignedOutLinks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignedInLinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(Navbar));\n\n//# sourceURL=webpack:///./src/client/components/layout/Navbar.js?");

/***/ }),

/***/ "./src/client/components/layout/SignedInLinks.js":
/*!*******************************************************!*\
  !*** ./src/client/components/layout/SignedInLinks.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions_actions_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/actions/actions.auth */ \"./src/client/store/actions/actions/actions.auth.js\");\n\n\n //Actions\n\n\n\nvar SignedInLinks = function SignedInLinks(props) {\n  var handleLogout = function handleLogout(e) {\n    e.preventDefault();\n    props.logout();\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/profile/\".concat(props.username)\n  }, \"Profile\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/add-tweet\"\n  }, \"Post tweet\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\",\n    onClick: handleLogout\n  }, \"Logout\")))));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    username: state.auth.userInfo.username\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  logout: _store_actions_actions_actions_auth__WEBPACK_IMPORTED_MODULE_3__[\"Logout\"]\n})(SignedInLinks));\n\n//# sourceURL=webpack:///./src/client/components/layout/SignedInLinks.js?");

/***/ }),

/***/ "./src/client/components/layout/SignedOutLinks.js":
/*!********************************************************!*\
  !*** ./src/client/components/layout/SignedOutLinks.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar SignedOutLinks = function SignedOutLinks() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/register\"\n  }, \"Register\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login\"\n  }, \"Login\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignedOutLinks);\n\n//# sourceURL=webpack:///./src/client/components/layout/SignedOutLinks.js?");

/***/ }),

/***/ "./src/client/components/tweet/AddTweet.js":
/*!*************************************************!*\
  !*** ./src/client/components/tweet/AddTweet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TweetP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TweetP */ \"./src/client/components/tweet/TweetP.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n //Components\n\n\n\nvar AddTweet =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(AddTweet, _Component);\n\n  function AddTweet() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, AddTweet);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddTweet)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      title: '',\n      body: '',\n      error: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      var _this$state = _this.state,\n          title = _this$state.title,\n          body = _this$state.body;\n      if (title.length < 31 && body.length < 256) _this.setState(_defineProperty({}, e.target.id, e.target.value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n      var token = 'Bearer ' + localStorage.getItem('token');\n      fetch('/tweet', {\n        method: 'POST',\n        body: JSON.stringify({\n          title: _this.state.title,\n          body: _this.state.body\n        }),\n        headers: {\n          Authorization: token,\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.msg === 'Tweet was added') {\n          _this.props.history.push(\"/profile/\".concat(_this.props.username));\n        } else {\n          _this.setState({\n            error: 'Could not post tweet'\n          });\n        }\n      }).catch(function (err) {\n        _this.setState({\n          error: 'Could not post tweet'\n        });\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(AddTweet, [{\n    key: \"render\",\n    value: function render() {\n      if (this.props.isEmpty) this.props.history.push('/');\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TweetP__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        data: _objectSpread({}, this.state, {\n          btnText: 'Post'\n        }),\n        handleChange: this.handleChange,\n        handleSubmit: this.handleSubmit\n      });\n    }\n  }]);\n\n  return AddTweet;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    username: state.auth.userInfo.username,\n    isEmpty: state.auth.isEmpty\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(AddTweet)));\n\n//# sourceURL=webpack:///./src/client/components/tweet/AddTweet.js?");

/***/ }),

/***/ "./src/client/components/tweet/EditTweet.js":
/*!**************************************************!*\
  !*** ./src/client/components/tweet/EditTweet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TweetP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TweetP */ \"./src/client/components/tweet/TweetP.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //Components\n\n\n\nvar EditTweet =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(EditTweet, _Component);\n\n  function EditTweet() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, EditTweet);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditTweet)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      title: '',\n      body: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      _this.setState(_defineProperty({}, e.target.id, e.target.value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n      var token = 'Bearer ' + localStorage.getItem('token');\n      fetch(\"/tweet/\".concat(_this.props.match.params.id), {\n        method: 'PUT',\n        body: JSON.stringify({\n          title: _this.state.title,\n          body: _this.state.body\n        }),\n        headers: {\n          Authorization: token,\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.msg === 'Tweet was updated') {\n          _this.props.history.push(\"/profile/\".concat(_this.props.username));\n        } else {\n          _this.setState({\n            error: 'Could not edit tweet'\n          });\n        }\n      }).catch(function (err) {\n        _this.setState({\n          error: 'Could not edit tweet'\n        });\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(EditTweet, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var token = 'Bearer ' + localStorage.getItem('token');\n      fetch(\"/tweet/\".concat(this.props.match.params.id), {\n        headers: {\n          Authorization: token,\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (tweet) {\n        if (tweet) {\n          _this2.setState({\n            title: tweet.title,\n            body: tweet.body\n          });\n        } else {\n          _this2.props.history.push('/');\n        }\n      }).catch();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TweetP__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: _objectSpread({}, this.state, {\n          btnText: 'Edit'\n        }),\n        handleChange: this.handleChange,\n        handleSubmit: this.handleSubmit\n      });\n    }\n  }]);\n\n  return EditTweet;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    username: state.auth.userInfo.username\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(EditTweet));\n\n//# sourceURL=webpack:///./src/client/components/tweet/EditTweet.js?");

/***/ }),

/***/ "./src/client/components/tweet/Feed.js":
/*!*********************************************!*\
  !*** ./src/client/components/tweet/Feed.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tweet */ \"./src/client/components/tweet/Tweet.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //Components\n\n\n\nvar Feed =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Feed, _Component);\n\n  function Feed() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Feed);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Feed)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      tweets: [],\n      error: ''\n    });\n\n    return _this;\n  }\n\n  _createClass(Feed, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var pathName = this.props.location.pathName;\n      fetch('/tweets').then(function (res) {\n        return res.json();\n      }).then(function (tweets) {\n        _this2.setState({\n          tweets: tweets\n        });\n      }).catch(function (error) {\n        console.error(error);\n\n        _this2.setState({\n          error: 'Could not get tweets'\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var error = this.state.error;\n      var tweets = this.state.tweets.map(function (tweet) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          key: tweet._id,\n          data: tweet\n        });\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"feed\"\n      }, error ? error : tweets);\n    }\n  }]);\n\n  return Feed;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    username: state.auth.userInfo.username\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Feed));\n\n//# sourceURL=webpack:///./src/client/components/tweet/Feed.js?");

/***/ }),

/***/ "./src/client/components/tweet/FeedProfile.js":
/*!****************************************************!*\
  !*** ./src/client/components/tweet/FeedProfile.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tweet */ \"./src/client/components/tweet/Tweet.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //Components\n\n\n\nvar FeedProfile =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(FeedProfile, _Component);\n\n  function FeedProfile() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, FeedProfile);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FeedProfile)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      tweets: [],\n      error: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"fetchTweets\", function () {\n      var username = _this.props.match.params.username;\n      fetch(\"/tweets/\".concat(username)).then(function (res) {\n        return res.json();\n      }).then(function (tweets) {\n        _this.setState({\n          tweets: tweets\n        });\n      }).catch(function (error) {\n        console.error(error);\n\n        _this.setState({\n          error: 'Could not get tweets'\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleEdit\", function (id) {\n      _this.props.history.push(\"/edit-tweet/\".concat(id));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleDelete\", function (id) {\n      console.log(\"/tweet/\".concat(id));\n      var token = 'Bearer ' + localStorage.getItem('token');\n      fetch(\"/tweet/\".concat(id), {\n        method: 'DELETE',\n        headers: {\n          Authorization: token\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.msg === 'Tweet was deleted') {\n          _this.fetchTweets();\n        } else {\n          _this.setState({\n            error: 'Could not delete tweet'\n          });\n        }\n      }).catch(function (err) {\n        _this.setState({\n          error: 'Could not delete tweet'\n        });\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(FeedProfile, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.fetchTweets();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var error = this.state.error;\n      var tweets = this.state.tweets.map(function (tweet) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          key: tweet._id,\n          data: tweet,\n          profileView: _this2.props.username === tweet.username,\n          edit: _this2.handleEdit,\n          delete: _this2.handleDelete\n        });\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"feed\"\n      }, error ? error : tweets);\n    }\n  }]);\n\n  return FeedProfile;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    username: state.auth.userInfo.username\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(FeedProfile));\n\n//# sourceURL=webpack:///./src/client/components/tweet/FeedProfile.js?");

/***/ }),

/***/ "./src/client/components/tweet/Tweet.js":
/*!**********************************************!*\
  !*** ./src/client/components/tweet/Tweet.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Tweet = function Tweet(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tweet\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"tweet-header\"\n  }, props.data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"tweet-text\"\n  }, props.data.body), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \"by \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/profile/\".concat(props.data.username)\n  }, props.data.username), \", \", props.data.date.slice(0, 10)), props.profileView ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.edit(props.data._id);\n    }\n  }, \"Edit\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.delete(props.data._id);\n    }\n  }, \"Delete\")) : '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tweet);\n\n//# sourceURL=webpack:///./src/client/components/tweet/Tweet.js?");

/***/ }),

/***/ "./src/client/components/tweet/TweetP.js":
/*!***********************************************!*\
  !*** ./src/client/components/tweet/TweetP.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Message */ \"./src/client/components/layout/Message.js\");\n/* harmony import */ var _layout_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/ErrorMessage */ \"./src/client/components/layout/ErrorMessage.js\");\n //Components\n\n\n\n\nvar TweetP = function TweetP(props) {\n  var _props$data = props.data,\n      title = _props$data.title,\n      body = _props$data.body,\n      btnText = _props$data.btnText,\n      error = _props$data.error;\n  var handleSubmit = props.handleSubmit,\n      handleChange = props.handleChange;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    message: error\n  }) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"title\"\n  }, \"Title\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"title\",\n    value: title,\n    onChange: handleChange\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"body\"\n  }, \"Body\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    id: \"body\",\n    value: body,\n    onChange: handleChange\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, btnText || 'Post', \" tweet\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TweetP);\n\n//# sourceURL=webpack:///./src/client/components/tweet/TweetP.js?");

/***/ }),

/***/ "./src/client/store/actions/action creators/auth.js":
/*!**********************************************************!*\
  !*** ./src/client/store/actions/action creators/auth.js ***!
  \**********************************************************/
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, LOGIN_CHECK, LOGIN_CHECK_SUCCESS, LOGIN_CHECK_FAILED, login, loginSuccess, loginFailed, logout, loginCheck, loginCheckSuccess, loginCheckFailed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN\", function() { return LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_SUCCESS\", function() { return LOGIN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_FAILED\", function() { return LOGIN_FAILED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT\", function() { return LOGOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_CHECK\", function() { return LOGIN_CHECK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_CHECK_SUCCESS\", function() { return LOGIN_CHECK_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_CHECK_FAILED\", function() { return LOGIN_CHECK_FAILED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginSuccess\", function() { return loginSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginFailed\", function() { return loginFailed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginCheck\", function() { return loginCheck; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginCheckSuccess\", function() { return loginCheckSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginCheckFailed\", function() { return loginCheckFailed; });\nvar LOGIN = 'LOGIN';\nvar LOGIN_SUCCESS = 'LOGIN_SUCCESS';\nvar LOGIN_FAILED = 'LOGIN_FAILED';\nvar LOGOUT = 'LOGOUT';\nvar LOGIN_CHECK = 'LOGIN_CHECK';\nvar LOGIN_CHECK_SUCCESS = 'LOGIN_CHECK_SUCCESS';\nvar LOGIN_CHECK_FAILED = 'LOGIN_CHECK_FAILED';\nvar login = function login() {\n  return {\n    type: LOGIN\n  };\n};\nvar loginSuccess = function loginSuccess(userInfo, token) {\n  return {\n    type: LOGIN_SUCCESS,\n    userInfo: userInfo,\n    token: token\n  };\n};\nvar loginFailed = function loginFailed(errors) {\n  return {\n    type: LOGIN_FAILED,\n    errors: errors\n  };\n};\nvar logout = function logout() {\n  return {\n    type: LOGOUT\n  };\n};\nvar loginCheck = function loginCheck() {\n  return {\n    type: LOGIN_CHECK\n  };\n};\nvar loginCheckSuccess = function loginCheckSuccess(userInfo) {\n  return {\n    type: LOGIN_CHECK_SUCCESS,\n    userInfo: userInfo\n  };\n};\nvar loginCheckFailed = function loginCheckFailed() {\n  return {\n    type: LOGIN_CHECK_FAILED\n  };\n};\nvar types = {\n  LOGIN: LOGIN,\n  LOGIN_SUCCESS: LOGIN_SUCCESS,\n  LOGIN_FAILED: LOGIN_FAILED,\n  LOGOUT: LOGOUT,\n  LOGIN_CHECK: LOGIN_CHECK,\n  LOGIN_CHECK_SUCCESS: LOGIN_CHECK_SUCCESS,\n  LOGIN_CHECK_FAILED: LOGIN_CHECK_FAILED\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (types);\n\n//# sourceURL=webpack:///./src/client/store/actions/action_creators/auth.js?");

/***/ }),

/***/ "./src/client/store/actions/actions/actions.auth.js":
/*!**********************************************************!*\
  !*** ./src/client/store/actions/actions/actions.auth.js ***!
  \**********************************************************/
/*! exports provided: Register, Login, LoginCheck, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Register\", function() { return Register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginCheck\", function() { return LoginCheck; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logout\", function() { return Logout; });\n/* harmony import */ var _action_creators_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action creators/auth */ \"./src/client/store/actions/action creators/auth.js\");\n\nvar Register = function Register(creds) {\n  return function (dispatch) {\n    dispatch(register());\n  };\n};\nvar Login = function Login(creds) {\n  return function (dispatch) {\n    dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"login\"])());\n    fetch('/login', {\n      method: 'POST',\n      body: JSON.stringify(creds),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.status === 'Login_success') {\n        dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"loginSuccess\"])(data.userInfo, data.token));\n      } else {\n        dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"loginFailed\"])(data.errors || []));\n      }\n    }).catch(function (err) {\n      console.error(err);\n      dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"loginFailed\"])(['Error loggin in user']));\n    });\n  };\n};\nvar LoginCheck = function LoginCheck() {\n  return function (dispatch) {\n    dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"loginCheck\"])());\n    var token = 'Bearer ' + localStorage.getItem('token');\n    fetch('/login-check', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': token\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.userInfo) {\n        dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"loginCheckSuccess\"])(data.userInfo));\n      } else {\n        dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"loginCheckFailed\"])());\n      }\n    }).catch(function () {\n      return dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"loginCheckFailed\"])());\n    });\n  };\n};\nvar Logout = function Logout() {\n  return function (dispatch) {\n    return dispatch(Object(_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"logout\"])());\n  };\n};\n\n//# sourceURL=webpack:///./src/client/store/actions/actions/actions.auth.js?");

/***/ }),

/***/ "./src/client/store/reducers/authReducer.js":
/*!**************************************************!*\
  !*** ./src/client/store/reducers/authReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action creators/auth */ \"./src/client/store/actions/action creators/auth.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initState = {\n  isEmpty: true,\n  userInfo: {},\n  loginErrors: [],\n  loginCheck: true\n};\n\nvar authReducer = function authReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGIN:\n      return _objectSpread({}, state, {\n        loginErrors: []\n      });\n\n    case _actions_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGIN_SUCCESS:\n      localStorage.setItem('token', action.token);\n      return _objectSpread({}, state, {\n        userInfo: action.userInfo,\n        loginErrors: [],\n        isEmpty: false\n      });\n\n    case _actions_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGIN_FAILED:\n      return _objectSpread({}, state, {\n        userInfo: {},\n        loginErrors: action.errors\n      });\n\n    case _actions_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGOUT:\n      localStorage.removeItem('token');\n      return _objectSpread({}, state, {\n        userInfo: {},\n        isEmpty: true\n      });\n\n    case _actions_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGIN_CHECK:\n      return _objectSpread({}, state, {\n        loginCheck: true,\n        isEmpty: true\n      });\n\n    case _actions_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGIN_CHECK_SUCCESS:\n      return _objectSpread({}, state, {\n        loginCheck: false,\n        userInfo: action.userInfo,\n        isEmpty: false\n      });\n\n    case _actions_action_creators_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LOGIN_CHECK_FAILED:\n      return _objectSpread({}, state, {\n        loginCheck: false,\n        isEmpty: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n//# sourceURL=webpack:///./src/client/store/reducers/authReducer.js?");

/***/ }),

/***/ "./src/client/store/reducers/rootReducer.js":
/*!**************************************************!*\
  !*** ./src/client/store/reducers/rootReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ \"./src/client/store/reducers/authReducer.js\");\n //Reducers\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./src/client/store/reducers/rootReducer.js?");

/***/ }),

/***/ "./src/server/database/index.js":
/*!**************************************!*\
  !*** ./src/server/database/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://localhost/twitter_clone', {\n  useNewUrlParser: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once('open', function () {\n  console.log('Connection established');\n}).on('error', function (error) {\n  console.log('Connection error:', error);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./src/server/database/index.js?");

/***/ }),

/***/ "./src/server/database/models/Account.js":
/*!***********************************************!*\
  !*** ./src/server/database/models/Account.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/server/database/index.js\");\n\n\nvar accountSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  username: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true\n  }\n});\nvar Account = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].model('Account', accountSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\n\n//# sourceURL=webpack:///./src/server/database/models/Account.js?");

/***/ }),

/***/ "./src/server/database/models/Tweet.js":
/*!*********************************************!*\
  !*** ./src/server/database/models/Tweet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/server/database/index.js\");\n\n\nvar tweetSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  userID: {\n    type: String,\n    required: true\n  },\n  username: {\n    type: String,\n    required: true\n  },\n  title: {\n    type: String,\n    required: true\n  },\n  body: {\n    type: String,\n    required: true\n  },\n  date: {\n    type: Date,\n    required: true\n  }\n});\nvar Tweet = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].model('Tweet', tweetSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tweet);\n\n//# sourceURL=webpack:///./src/server/database/models/Tweet.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/components/App */ \"./src/client/components/App.js\");\n/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/store */ \"./src/shared/store.js\");\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/index */ \"./src/server/routes/index.js\");\n\n //React, ReactRouter, Redux imports\n\n\n\n\n //Main component import\n\n //Redux store import\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('images'));\napp.use('/', _routes_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nvar files = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readdirSync('./public');\napp.listen(2000);\napp.get('/*', function (req, res) {\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: _shared_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n    location: req.url,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))));\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n        <head>\\n            <meta charset=\\\"utf-8\\\">\\n            <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n            <title>Twitter clone</title>\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n            <script src=\\\"/\".concat(files[0], \"\\\" defer></script>\\n            <link type=\\\"text/css\\\" href=\\\"/\").concat(files[1], \"\\\" rel=\\\"stylesheet\\\"/>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\").concat(markup, \"</div>\\n        </body>\\n        </html>\\n    \"));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/routes/auth.js":
/*!***********************************!*\
  !*** ./src/server/routes/auth.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_models_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/models/Account */ \"./src/server/database/models/Account.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware */ \"./src/server/routes/middleware.js\");\n\n\n\nvar salt = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSaltSync(10);\nvar secret = 'secret'; //DB\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/users', function (req, res) {\n  _database_models_Account__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({}, function (err, arr) {\n    res.json(arr);\n  });\n});\nrouter.post('/register', _middleware__WEBPACK_IMPORTED_MODULE_4__[\"registerCredsValidation\"], function (req, res) {\n  var _req$body = req.body,\n      username = _req$body.username,\n      email = _req$body.email,\n      password = _req$body.password;\n  _database_models_Account__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n    email: email\n  }, function (err, account) {\n    if (account) {\n      res.json(['An account with that email already exists']);\n    } else {\n      _database_models_Account__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n        username: username\n      }, function (err, account) {\n        if (account) {\n          res.json(['An account with that username already exists']);\n        } else {\n          var newAcc = new _database_models_Account__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            username: username,\n            email: email,\n            password: bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(password, salt)\n          });\n          newAcc.save(function (err) {\n            if (err) {\n              res.json({\n                errors: ['There was and error creating your account']\n              });\n            } else {\n              res.json({\n                status: 'Register_success'\n              });\n            }\n          });\n        }\n      });\n    }\n  });\n});\nrouter.post('/login', _middleware__WEBPACK_IMPORTED_MODULE_4__[\"loginCredsValidation\"], function (req, res) {\n  var _req$body2 = req.body,\n      email = _req$body2.email,\n      password = _req$body2.password;\n  _database_models_Account__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n    email: email\n  }, function (err, account) {\n    if (err) res.json({\n      errors: ['There was an error logging in']\n    });else if (!account) res.json({\n      errors: ['An account with that email does not exist']\n    });else {\n      if (bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compareSync(password, account.password)) {\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n          id: account._id\n        }, secret, function (err, token) {\n          res.json({\n            status: 'Login_success',\n            token: token,\n            userInfo: {\n              username: account.username,\n              email: account.email\n            }\n          });\n        });\n      } else {\n        res.json(['Incorrect password']);\n      }\n    }\n  });\n});\nrouter.post('/login-check', _middleware__WEBPACK_IMPORTED_MODULE_4__[\"getToken\"], _middleware__WEBPACK_IMPORTED_MODULE_4__[\"checkToken\"], function (req, res) {\n  _database_models_Account__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(req.decoded.id, function (err, account) {\n    res.json({\n      userInfo: {\n        username: account.username,\n        email: account.email\n      }\n    });\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/auth.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth.js\");\n/* harmony import */ var _tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tweet */ \"./src/server/routes/tweet.js\");\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\nrouter.use('/', _auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/', _tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/middleware.js":
/*!*****************************************!*\
  !*** ./src/server/routes/middleware.js ***!
  \*****************************************/
/*! exports provided: registerCredsValidation, loginCredsValidation, getToken, checkToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerCredsValidation\", function() { return registerCredsValidation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginCredsValidation\", function() { return loginCredsValidation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkToken\", function() { return checkToken; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database_models_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/models/Account */ \"./src/server/database/models/Account.js\");\n\nvar secret = 'secret';\n\nvar registerCredsValidation = function registerCredsValidation(req, res, next) {\n  var _req$body = req.body,\n      username = _req$body.username,\n      email = _req$body.email,\n      password = _req$body.password,\n      passwordRepeat = _req$body.passwordRepeat;\n  var errors = [];\n\n  if (username && email && password && passwordRepeat) {\n    if (password != passwordRepeat) errors.push('Passwords do not match');else {\n      if (password.length < 8) errors.push('Password is not at least 8 characters long');\n      if (passwordRepeat.length < 8) errors.push('Repeated password is not at least 8 characters long');\n    }\n\n    if (!/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(email)) {\n      errors.push('Email does not have the right format');\n    }\n\n    if (!/[0-9a-fA-F]/.test(username)) errors.push('Username can only contain numbers and upper and lower case letters');\n\n    if (errors.length === 0) {\n      next();\n    } else {\n      res.json({\n        errors: errors\n      });\n    }\n  } else {\n    res.json({\n      errors: ['At least one of the fields was empty']\n    });\n  }\n};\nvar loginCredsValidation = function loginCredsValidation(req, res, next) {\n  var _req$body2 = req.body,\n      email = _req$body2.email,\n      password = _req$body2.password;\n  var errors = [];\n\n  if (email && password) {\n    if (password.length < 8) errors.push('Password is not at least 8 characters long');\n\n    if (!/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(email)) {\n      errors.push('Email does not have the right format');\n    }\n\n    if (errors.length === 0) {\n      next();\n    } else {\n      res.json({\n        errors: errors\n      });\n    }\n  } else {\n    res.json({\n      errors: ['At least one of the fields was empty']\n    });\n  }\n};\nvar getToken = function getToken(req, res, next) {\n  var token = req.headers['authorization'];\n\n  if (token) {\n    var tokenValue = token.split(' ');\n    if (tokenValue[0] === 'Bearer' && tokenValue[1]) req.token = tokenValue[1];\n    next();\n  } else {\n    res.status(401);\n    res.json({\n      error: 'Unauthorized'\n    });\n  }\n};\nvar checkToken = function checkToken(req, res, next) {\n  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(req.token, secret, function (err, decoded) {\n    if (err) {\n      res.status(401);\n      res.json({\n        errors: ['Unauthorized']\n      });\n    } else {\n      _database_models_Account__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(decoded.id, function (err, account) {\n        if (err || !account) res.json({\n          errors: ['Unauthorized']\n        });else {\n          req.decoded = decoded;\n          next();\n        }\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/server/routes/middleware.js?");

/***/ }),

/***/ "./src/server/routes/tweet.js":
/*!************************************!*\
  !*** ./src/server/routes/tweet.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_models_Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/models/Tweet */ \"./src/server/database/models/Tweet.js\");\n/* harmony import */ var _database_models_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/models/Account */ \"./src/server/database/models/Account.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware */ \"./src/server/routes/middleware.js\");\n\n //DB\n\n\n //Middleware\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/tweets', function (req, res) {\n  _database_models_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({}, function (err, arr) {\n    res.json(arr.reverse());\n  });\n});\nrouter.get('/tweets/:username', function (req, res) {\n  _database_models_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n    username: req.params.username\n  }, function (err, arr) {\n    res.json(arr.reverse());\n  });\n});\nrouter.get('/tweet/:id', _middleware__WEBPACK_IMPORTED_MODULE_4__[\"getToken\"], _middleware__WEBPACK_IMPORTED_MODULE_4__[\"checkToken\"], function (req, res) {\n  _database_models_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.params.id, function (err, tweet) {\n    res.json(tweet);\n  });\n});\nrouter.post('/tweet', _middleware__WEBPACK_IMPORTED_MODULE_4__[\"getToken\"], _middleware__WEBPACK_IMPORTED_MODULE_4__[\"checkToken\"], function (req, res) {\n  var _req$body = req.body,\n      title = _req$body.title,\n      body = _req$body.body;\n\n  if (title && body) {\n    _database_models_Account__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(req.decoded.id, function (err, account) {\n      if (err) res.json({\n        errors: ['Something went wrong1']\n      });else {\n        var newTweet = new _database_models_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          title: title,\n          body: body,\n          userID: req.decoded.id,\n          username: account.username,\n          date: new Date()\n        });\n        newTweet.save(function (err) {\n          if (err) {\n            console.log(err);\n            res.json({\n              errors: ['Something went wrong2']\n            });\n          } else {\n            res.json({\n              msg: 'Tweet was added'\n            });\n          }\n        });\n      }\n    });\n  } else {\n    res.json({\n      errors: ['Something went wrong']\n    });\n  }\n});\nrouter.put('/tweet/:id', _middleware__WEBPACK_IMPORTED_MODULE_4__[\"getToken\"], _middleware__WEBPACK_IMPORTED_MODULE_4__[\"checkToken\"], function (req, res) {\n  var _req$body2 = req.body,\n      title = _req$body2.title,\n      body = _req$body2.body;\n  var id = req.params.id;\n\n  if (title && body) {\n    _database_models_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id, function (err, tweet) {\n      if (err) res.json({\n        errors: ['Something went wrong']\n      });else {\n        console.log(tweet);\n        tweet.title = title;\n        tweet.body = body;\n        tweet.date = new Date();\n        _database_models_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(id, tweet, function (err) {\n          if (err) res.json({\n            errors: ['Something went wrong']\n          });else res.json({\n            msg: 'Tweet was updated'\n          });\n        });\n      }\n    });\n  } else {\n    res.json({\n      errors: ['Something went wrong']\n    });\n  }\n});\nrouter.delete('/tweet/:id', _middleware__WEBPACK_IMPORTED_MODULE_4__[\"getToken\"], _middleware__WEBPACK_IMPORTED_MODULE_4__[\"checkToken\"], function (req, res) {\n  var id = req.params.id;\n  _database_models_Tweet__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(id, function (err) {\n    console.log(id);\n    if (err) res.json({\n      errors: ['Something went wrong']\n    });else res.json({\n      msg: 'Tweet was deleted'\n    });\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/tweet.js?");

/***/ }),

/***/ "./src/shared/store.js":
/*!*****************************!*\
  !*** ./src/shared/store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_store_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/store/reducers/rootReducer */ \"./src/client/store/reducers/rootReducer.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_starter_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-starter-kit */ \"redux-starter-kit\");\n/* harmony import */ var redux_starter_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_starter_kit__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar store = Object(redux_starter_kit__WEBPACK_IMPORTED_MODULE_2__[\"configureStore\"])({\n  reducer: _client_store_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  middleware: [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a],\n  devTools: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/shared/store.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-starter-kit":
/*!************************************!*\
  !*** external "redux-starter-kit" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-starter-kit\");\n\n//# sourceURL=webpack:///external_%22redux-starter-kit%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });