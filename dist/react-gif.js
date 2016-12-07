(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactGif"] = factory(require("react"));
	else
		root["ReactGif"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('react'), require('exploder'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react, global.exploder);
	    global.reactGif = mod.exports;
	  }
	})(this, function (exports, _react, _exploder) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _react2 = _interopRequireDefault(_react);

	  var _exploder2 = _interopRequireDefault(_exploder);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var Gif = function (_Component) {
	    _inherits(Gif, _Component);

	    function Gif() {
	      _classCallCheck(this, Gif);

	      var _this = _possibleConstructorReturn(this, (Gif.__proto__ || Object.getPrototypeOf(Gif)).call(this));

	      _this.start = function () {
	        var gifLength = 10 * _this.state.length / _this.props.speed;
	        var startTime = void 0;

	        if (_this.state.paused) {
	          var offset = (_this.state.pausedTime - _this.state.startTime) % gifLength;
	          startTime = performance.now() - offset;
	        } else {
	          startTime = performance.now();
	        }

	        _this.setState({
	          paused: false,
	          pausedTime: undefined,
	          startTime: startTime
	        });
	      };

	      _this.pause = function () {
	        _this.setState({
	          paused: true,
	          pausedTime: performance.now()
	        });
	      };

	      _this.renderFrames = function () {
	        var frameStyle = {
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          WebkitTransform: 'translateZ(0)',
	          msTransform: 'translateZ(0)',
	          transform: 'translateZ(0)'
	        };

	        return _this.state.frames.map(function (frame, index) {
	          var opacity = _this.state.currentFrame >= index ? 1 : 0;
	          var position = index === 0 ? 'static' : frameStyle.position;
	          var style = _extends({}, frameStyle, { opacity: opacity, position: position });

	          return _react2.default.createElement('img', { key: index, src: frame.url, className: 'frame', style: style });
	        });
	      };

	      _this.state = {
	        currentFrame: 0,
	        frames: [],
	        length: 0,
	        offsets: [],
	        paused: false
	      };
	      return _this;
	    }

	    _createClass(Gif, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if (this.props.src) {
	          this.explode(this.props.src);
	        }
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (this.props.src !== nextProps.src) {
	          this.explode(nextProps.src);
	        }

	        if (!this.props.playing && nextProps.playing) {
	          this.start();
	        } else {
	          this.pause();
	        }
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate(prevProps, prevState) {
	        // if stopped is toggled off
	        //if (prevState.stopped === true && this.state.stopped === false) {
	        //this.animationLoop();
	        //}

	        // if startTime is updated
	        if (prevState.startTime !== this.state.startTime && this.animationLoop) {
	          this.animationLoop();
	        }
	      }
	    }, {
	      key: 'explode',
	      value: function explode(url) {
	        var _this2 = this;

	        var exploder = new _exploder2.default(url);
	        exploder.load().then(function (gif) {
	          _this2.props.onLoad(_this2);
	          _this2.gif = gif;
	          _this2.setState(gif);
	          _this2.startSpeed();
	          _this2.start();
	        });
	      }
	    }, {
	      key: 'startSpeed',
	      value: function startSpeed() {
	        var _this3 = this;

	        this.animationLoop = function () {
	          var gifLength = 10 * _this3.state.length / _this3.props.speed;
	          var duration = performance.now() - _this3.state.startTime;
	          var repeatCount = duration / gifLength;

	          var fraction = repeatCount % 1;
	          if (_this3.props.reverse) {
	            fraction = 1 - fraction;
	          }

	          if (_this3.state.paused) {
	            return;
	          }

	          if (_this3.state.stopped || repeatCount >= _this3.props.times) {
	            return;
	          }

	          var currentFrame = _this3.props.pingPong && repeatCount % 2 >= 1 ? _this3.gif.frameAt(1 - fraction) : _this3.gif.frameAt(fraction);

	          _this3.setState({ currentFrame: currentFrame });
	          requestAnimationFrame(_this3.animationLoop);
	        };
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var framesStyle = {
	          display: 'block',
	          position: 'relative'
	        };

	        return _react2.default.createElement(
	          'div',
	          { className: 'frames', style: framesStyle },
	          this.renderFrames()
	        );
	      }
	    }]);

	    return Gif;
	  }(_react.Component);

	  Gif.defaultProps = {
	    onError: function onError() {},
	    onLoad: function onLoad() {},
	    pingPong: false,
	    playing: true,
	    reverse: false,
	    speed: 1
	  };
	  Gif.propTypes = {
	    onError: _react.PropTypes.func.isRequired,
	    onLoad: _react.PropTypes.func.isRequired,
	    pingPong: _react.PropTypes.bool.isRequired,
	    playing: _react.PropTypes.bool.isRequired,
	    reverse: _react.PropTypes.bool,
	    speed: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
	    src: _react.PropTypes.string.isRequired,
	    times: _react.PropTypes.number
	  };
	  exports.default = Gif;
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Exploder"] = factory();else root["Exploder"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _gif = __webpack_require__(1);

				var _gif2 = _interopRequireDefault(_gif);

				var _stream_reader = __webpack_require__(2);

				var _stream_reader2 = _interopRequireDefault(_stream_reader);

				var _utils = __webpack_require__(3);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var url = URL && URL.createObjectURL ? URL : webkitURL;

				var gifCache = new Map();

				function base64ToArrayBuffer(base64) {
					var binary_string = window.atob(base64);
					var len = binary_string.length;
					var bytes = new Uint8Array(len);
					for (var i = 0; i < len; i++) {
						bytes[i] = binary_string.charCodeAt(i);
					}
					return bytes.buffer;
				}

				var Exploder = function () {
					function Exploder(file) {
						_classCallCheck(this, Exploder);

						this.file = file;
					}

					_createClass(Exploder, [{
						key: 'load',
						value: function load() {
							var _this = this;

							var cachedGifPromise = gifCache.get(this.file);
							if (cachedGifPromise) return cachedGifPromise;

							// If it's a base64 GIF, just process it
							if (this.file.startsWith('data:image/gif;base64,')) {
								var base64File = this.file.replace('data:image/gif;base64,', '');
								return this.explode(base64ToArrayBuffer(base64File));
							}

							var gifPromise = _utils.Promises.xhrGet(this.file, '*/*', 'arraybuffer').then(function (buffer) {
								return _this.explode(buffer);
							});

							gifCache.set(this.file, gifPromise);
							return gifPromise;
						}
					}, {
						key: 'explode',
						value: function explode(buffer) {
							console.debug("EXPLODING " + this.file);
							return new Promise(function (resolve, reject) {
								var frames = [],
								    streamReader = new _stream_reader2.default(buffer);

								// Ensure this is an animated GIF
								if (streamReader.readAscii(6) != "GIF89a") {
									reject(Error("Not a GIF!"));
									return;
								}

								streamReader.skipBytes(4); // Height & Width
								if (streamReader.peekBit(1)) {
									streamReader.log("GLOBAL COLOR TABLE");
									var colorTableSize = streamReader.readByte() & 0x07;
									streamReader.log("GLOBAL COLOR TABLE IS " + 3 * Math.pow(2, colorTableSize + 1) + " BYTES");
									streamReader.skipBytes(2);
									streamReader.skipBytes(3 * Math.pow(2, colorTableSize + 1));
								} else {
									streamReader.log("NO GLOBAL COLOR TABLE");
								}
								// WE HAVE ENOUGH FOR THE GIF HEADER!
								var gifHeader = buffer.slice(0, streamReader.index);

								var spinning = true,
								    expectingImage = false;
								while (spinning) {

									if (streamReader.isNext([0x21, 0xFF])) {
										streamReader.log("APPLICATION EXTENSION");
										streamReader.skipBytes(2);
										var blockSize = streamReader.readByte();
										streamReader.log(streamReader.readAscii(blockSize));

										if (streamReader.isNext([0x03, 0x01])) {
											// we cool
											streamReader.skipBytes(5);
										} else {
											streamReader.log("A weird application extension. Skip until we have 2 NULL bytes");
											while (!(streamReader.readByte() === 0 && streamReader.peekByte() === 0)) {}
											streamReader.log("OK moving on");
											streamReader.skipBytes(1);
										}
									} else if (streamReader.isNext([0x21, 0xFE])) {
										streamReader.log("COMMENT EXTENSION");
										streamReader.skipBytes(2);

										while (!streamReader.isNext([0x00])) {
											var blockSize = streamReader.readByte();
											streamReader.log(streamReader.readAscii(blockSize));
										}
										streamReader.skipBytes(1); //NULL terminator
									} else if (streamReader.isNext([0x2c])) {
										streamReader.log("IMAGE DESCRIPTOR!");
										if (!expectingImage) {
											// This is a bare image, not prefaced with a Graphics Control Extension
											// so we should treat it as a frame.
											frames.push({ index: streamReader.index, delay: 0 });
										}
										expectingImage = false;

										streamReader.skipBytes(9);
										if (streamReader.peekBit(1)) {
											streamReader.log("LOCAL COLOR TABLE");
											var colorTableSize = streamReader.readByte() & 0x07;
											streamReader.log("LOCAL COLOR TABLE IS " + 3 * Math.pow(2, colorTableSize + 1) + " BYTES");
											streamReader.skipBytes(3 * Math.pow(2, colorTableSize + 1));
										} else {
											streamReader.log("NO LOCAL TABLE PHEW");
											streamReader.skipBytes(1);
										}

										streamReader.log("MIN CODE SIZE " + streamReader.readByte());
										streamReader.log("DATA START");

										while (!streamReader.isNext([0x00])) {
											var blockSize = streamReader.readByte();
											//        streamReader.log("SKIPPING " + blockSize + " BYTES");
											streamReader.skipBytes(blockSize);
										}
										streamReader.log("DATA END");
										streamReader.skipBytes(1); //NULL terminator
									} else if (streamReader.isNext([0x21, 0xF9, 0x04])) {
										streamReader.log("GRAPHICS CONTROL EXTENSION!");
										// We _definitely_ have a frame. Now we're expecting an image
										var index = streamReader.index;

										streamReader.skipBytes(3);
										var disposalMethod = streamReader.readByte() >> 2;
										streamReader.log("DISPOSAL " + disposalMethod);
										var delay = streamReader.readByte() + streamReader.readByte() * 256;
										frames.push({ index: index, delay: delay, disposal: disposalMethod });
										streamReader.log("FRAME DELAY " + delay);
										streamReader.skipBytes(2);
										expectingImage = true;
									} else {
										var maybeTheEnd = streamReader.index;
										while (!streamReader.finished() && !streamReader.isNext([0x21, 0xF9, 0x04])) {
											streamReader.readByte();
										}
										if (streamReader.finished()) {
											streamReader.index = maybeTheEnd;
											streamReader.log("WE END");
											spinning = false;
										} else {
											streamReader.log("UNKNOWN DATA FROM " + maybeTheEnd);
										}
									}
								}
								var endOfFrames = streamReader.index;

								var gifFooter = buffer.slice(-1); //last bit is all we need
								for (var i = 0; i < frames.length; i++) {
									var frame = frames[i];
									var nextIndex = i < frames.length - 1 ? frames[i + 1].index : endOfFrames;
									frame.blob = new Blob([gifHeader, buffer.slice(frame.index, nextIndex), gifFooter], { type: 'image/gif' });
									frame.url = url.createObjectURL(frame.blob);
								}

								resolve(new _gif2.default(frames));
							});
						}
					}]);

					return Exploder;
				}();

				exports.default = Exploder;

				/***/
			},
			/* 1 */
			/***/function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var defaultFrameDelay = 10;

				var Gif = function () {
					function Gif(frames) {
						var _this = this;

						_classCallCheck(this, Gif);

						this.frames = frames;
						this.length = 0;
						this.offsets = [];

						frames.forEach(function (frame) {
							_this.offsets.push(_this.length);
							_this.length += frame.delay || defaultFrameDelay;
						});
					}

					_createClass(Gif, [{
						key: "frameAt",
						value: function frameAt(fraction) {
							var offset = fraction * this.length;
							for (var i = 1, l = this.offsets.length; i < l; i++) {
								if (this.offsets[i] > offset) break;
							}
							return i - 1;
						}
					}]);

					return Gif;
				}();

				exports.default = Gif;
				;

				/***/
			},
			/* 2 */
			/***/function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var StreamReader = function () {
					function StreamReader(arrayBuffer) {
						_classCallCheck(this, StreamReader);

						this.data = new Uint8Array(arrayBuffer);
						this.index = 0;
						this.log("TOTAL LENGTH: " + this.data.length);
					}

					_createClass(StreamReader, [{
						key: "finished",
						value: function finished() {
							return this.index >= this.data.length;
						}
					}, {
						key: "readByte",
						value: function readByte() {
							return this.data[this.index++];
						}
					}, {
						key: "peekByte",
						value: function peekByte() {
							return this.data[this.index];
						}
					}, {
						key: "skipBytes",
						value: function skipBytes(n) {
							this.index += n;
						}
					}, {
						key: "peekBit",
						value: function peekBit(i) {
							return !!(this.peekByte() & 1 << 8 - i);
						}
					}, {
						key: "readAscii",
						value: function readAscii(n) {
							var s = '';
							for (var i = 0; i < n; i++) {
								s += String.fromCharCode(this.readByte());
							}
							return s;
						}
					}, {
						key: "isNext",
						value: function isNext(array) {
							for (var i = 0; i < array.length; i++) {
								if (array[i] !== this.data[this.index + i]) return false;
							}
							return true;
						}
					}, {
						key: "log",
						value: function log(str) {
							//  console.log(this.index + ": " + str);
						}
					}, {
						key: "error",
						value: function error(str) {
							console.error(this.index + ": " + str);
						}
					}]);

					return StreamReader;
				}();

				exports.default = StreamReader;

				/***/
			},
			/* 3 */
			/***/function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var Promises = exports.Promises = {
					xhrGet: function xhrGet(url, accept, responseType) {
						return new Promise(function (resolve, reject) {
							var loader = new XMLHttpRequest();
							loader.open('GET', url, true);
							loader.setRequestHeader("Accept", accept);
							loader.responseType = responseType;
							loader.onload = function () {
								// This is called even on 404 etc
								// so check the status
								if (this.status == 200) {
									// Resolve the promise with the response text
									resolve(this.response);
								} else {
									// Otherwise reject with the status text
									// which will hopefully be a meaningful error
									reject(Error(this.statusText));
								}
							};

							// Handle network errors
							loader.onerror = function () {
								reject(Error("Network Error"));
							};
							loader.send();
						});
					}
				};

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports !== "undefined") {
			factory(module);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod);
			global.module = mod.exports;
		}
	})(this, function (module) {
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
	});

/***/ }
/******/ ])
});
;