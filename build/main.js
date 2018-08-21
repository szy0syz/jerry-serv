require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controller", function() { return controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin", function() { return admin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);


var _this = this;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = __webpack_require__(4);

var _require = __webpack_require__(7),
    resolve = _require.resolve;
// const glob = require('glob')


var _ = __webpack_require__(8);
var R = __webpack_require__(9);

var symbolPrefix = Symbol('prefix');
var routeMap = new Map();

var isArray = function isArray(c) {
  return _.isArray(c) ? c : [c];
};

var Route = function () {
  function Route(app, apiPath) {
    _classCallCheck(this, Route);

    this.app = app;
    this.apiPath = apiPath;
    this.router = new Router();
  }

  _createClass(Route, [{
    key: 'init',
    value: function init() {
      // glob.sync(resolve(this.apiPath, './**/*.js')).forEach(require)
      // Todo: 待修复require.context不支持绝对路径问题
      var context = __webpack_require__(46);
      context.keys().forEach(function (key) {
        return context(key);
      });

      // 为所有中间件注册路由
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = routeMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _router;

          var _ref = _step.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var conf = _ref2[0];
          var _controller = _ref2[1];

          var controllers = isArray(_controller);
          var prefixPath = conf.target[symbolPrefix];
          if (prefixPath) prefixPath = normalizePath(prefixPath);
          var routerPath = prefixPath + conf.path;
          (_router = this.router)[conf.method].apply(_router, [routerPath].concat(_toConsumableArray(controllers)));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.app.use(this.router.routes()).use(this.router.allowedMethods());
    }
  }]);

  return Route;
}();

// 如果是根路径就直接访问，如果不是就接着访问
var normalizePath = function normalizePath(path) {
  return path.startsWith('/') ? path : '/' + path;
};

var router = function router(conf) {
  return function (target, key, descriptor) {
    conf.path = normalizePath(conf.path);

    routeMap.set(Object.assign({
      target: target
    }, conf), target[key]);
  };
};

// export 利用symbol创建唯一值在类的原型上
var controller = function controller(path) {
  return function (target) {
    return target.prototype[symbolPrefix] = path;
  };
};

var get = function get(path) {
  return router({
    method: 'get',
    path: path
  });
};

var post = function post(path) {
  return router({
    method: 'post',
    path: path
  });
};

var put = function put(path) {
  return router({
    method: 'put',
    path: path
  });
};

var del = function del(path) {
  return router({
    method: 'delete',
    path: path
  });
};

var use = function use(path) {
  return router({
    method: 'use',
    path: path
  });
};

var all = function all(path) {
  return router({
    method: 'all',
    path: path
  });
};

var decorate = function decorate(args, middleware) {
  var _args = _slicedToArray(args, 3),
      target = _args[0],
      key = _args[1],
      descriptor = _args[2];

  target[key] = isArray(target[key]);
  target[key].unshift(middleware);

  return descriptor;
};

var convert = function convert(middleware) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return decorate(args, middleware);
  };
};

// const changeToArr = R.unless(
//   R.is(isArray),
//   R.of
// )

// const convert = middleware => (target, key, descriptor) => {
//   return (target, key, descriptor) => {
//     target[key] = R.compose(
//       R.concat(
//         changeToArr(middleware)
//       ),
//       changeToArr
//     )(target[key])
//   }
// }

var auth = convert(function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('进来auth装饰器了咩？');

            if (!(!!!ctx.session || !ctx.session.user)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return', ctx.body = {
              success: false,
              code: 401,
              err: '登录失效，重新登录'
            });

          case 3:
            _context.next = 5;
            return next();

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}());

var admin = function admin(roleExpected) {
  return convert(function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      var role;
      return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              role = ctx.session.user.role;

              //Todo: casbin

              if (!(!roel || role !== roleExpected)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return', ctx.body = {
                success: false,
                code: 403,
                err: '无权限'
              });

            case 3:
              _context2.next = 5;
              return next();

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }());
};

var required = function required(rules) {
  return convert(function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      var errors, checkRules;
      return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              errors = [];
              checkRules = R.forEachObjIndexed(function (value, key) {
                errors = R.filter(function (i) {
                  return !R.has(i)(ctx.request[key]);
                })(value);
              });


              checkRules(rules);

              if (!errors.length) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt('return', ctx.body = {
                success: false,
                code: 412,
                err: errors.join(',') + ' is required'
              });

            case 5:
              _context3.next = 7;
              return next();

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }());
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articleTag__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articleType__ = __webpack_require__(51);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "admin", function() { return __WEBPACK_IMPORTED_MODULE_0__admin__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "article", function() { return __WEBPACK_IMPORTED_MODULE_1__article__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "articleTag", function() { return __WEBPACK_IMPORTED_MODULE_2__articleTag__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "articleType", function() { return __WEBPACK_IMPORTED_MODULE_3__articleType__; });







/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("xss");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

// import { resolve } from 'path'

var host = process.env.HOST || 'localhost';
var env = "development" || 'development';

// const confPath = resolve(__dirname, `./${env}.json`)

// 同步加载json配置文件
var conf = __webpack_require__(17)("./" + env + '.json');

// 用lodash合并
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({ env: env, host: host }, conf));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routers__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ramda__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ramda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(23);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

var MIDDLEWARES = ['database', 'common', 'rest', 'router'];

// 自动遍历 ./middleware/*.js 导出对象后再逐个遍历初始化koa中间件
var useMiddlewares = function useMiddlewares(app) {
  // 不递归加载子目录
  var context = __webpack_require__(24);

  // R.map(
  //   R.compose(
  //     filename => MIDDLEWARES.includes(filename),
  //     key => getFilename(key)
  //   )
  // )(context.keys())

  context.keys().forEach(function (key) {
    var filename = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getFilename */])(key);
    var isValid = MIDDLEWARES.includes(filename);
    if (isValid) {
      console.log('成功加载系统中间件:', filename);
      try {
        __WEBPACK_IMPORTED_MODULE_5_ramda___default.a.forEachObjIndexed(function (initWith) {
          return initWith(app);
        })(context(key));
      } catch (err) {
        console.error(err);
      }
    }
  });
};

var Server = function () {
  function Server() {
    _classCallCheck(this, Server);

    this.app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
    useMiddlewares(this.app);
  }

  _createClass(Server, [{
    key: 'start',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(host, port) {
        var _this = this;

        var router, config, nuxt, builder;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                router = new __WEBPACK_IMPORTED_MODULE_3_koa_router___default.a();

                router.use('', __WEBPACK_IMPORTED_MODULE_4__routers__["a" /* default */].routes());
                this.app.use(router.routes()).use(router.allowedMethods());

                // Import and Set Nuxt.js options
                config = __webpack_require__(60);

                config.dev = !("development" === 'production');
                // console.log('env === ', app.env, env, process.env.COOKIE_DOMAIN, process.env.APP_ENV, config.dev)

                // Instantiate nuxt.js
                nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

                // Build in development

                if (!config.dev) {
                  _context2.next = 10;
                  break;
                }

                builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
                _context2.next = 10;
                return builder.build();

              case 10:

                this.app.use(function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return next();

                          case 2:
                            ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                            ctx.req.session = ctx.session; // 必须将session添加进request中，否则nuxt的req获取不到session
                            return _context.abrupt('return', new Promise(function (resolve, reject) {
                              ctx.res.on('close', resolve);
                              ctx.res.on('finish', resolve);
                              nuxt.render(ctx.req, ctx.res, function (promise) {
                                // nuxt.render passes a rejected promise into callback on error.
                                promise.then(resolve).catch(reject);
                              });
                            }));

                          case 5:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());

                this.app.listen(port, host);
                console.log('Server listening on http://' + host + ':' + port); // eslint-disable-line no-console

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function start(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return start;
    }()
  }]);

  return Server;
}();

try {
  var app = new Server();
  app.start(host, port);
} catch (err) {
  console.error(err);
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_user__ = __webpack_require__(15);


var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.get('/api/user', __WEBPACK_IMPORTED_MODULE_1__controller_user__["c" /* userinfo */]);
router.post('/api/login', __WEBPACK_IMPORTED_MODULE_1__controller_user__["a" /* login */]);
router.post('/api/logout', __WEBPACK_IMPORTED_MODULE_1__controller_user__["b" /* logout */]);
router.get('/api/logout', __WEBPACK_IMPORTED_MODULE_1__controller_user__["b" /* logout */]);

router.get('/api/test', function (ctx) {
  return ctx.body = 'jerry';
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return userinfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios_mock_adapter__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios_mock_adapter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios_mock_adapter__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import { admin } from '../service'



var mock = new __WEBPACK_IMPORTED_MODULE_3_axios_mock_adapter___default.a(__WEBPACK_IMPORTED_MODULE_1_axios___default.a);
mock.onPost(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].base_url + '/api/v1.user/login').reply(function (config) {
  // console.log(JSON.parse(config.data).mobile)
  return [200, { 'ret': 200, 'msg': '请求成功', 'data': { 'code': 0, 'message': '登录成功', 'token': 'PhU0Sd9zwUSwOQgXnJpj7pgSwdA7YD80', 'id': 1, 'mobile': '13770267077', 'name': JSON.parse(config.data).mobile, 'sex': 1, 'status': 1, 'role_id': 1, 'depart_id': 1, 'leader_id': 0 } }];
});

var userinfo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var token;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = ctx.session.user && ctx.session.user.token || '';
            return _context.abrupt('return', ctx.body = {
              ret: 200,
              msg: '获取成功',
              data: { token: token || null }
            });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function userinfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var login = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var _ctx$request$body, username, password, session, token;

    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;

            if (!(!username || !password)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt('return', ctx.body = {
              ret: 303,
              msg: '缺少请求参数',
              data: {}
            });

          case 3:

            // // 发起请求
            // let _url = config.base_url + '/api/v1.user/login'
            // let req = await axios.post(_url, {
            //   mobile: mobile,
            //   psd: psd,
            //   sign: ''
            // })
            // // 网络异常
            // if (req.status !== 200) {
            //   return (ctx.body = {
            //     ret: 400,
            //     msg: '网络通讯异常',
            //     data: {}
            //   })
            // }
            // // 系统异常
            // if (req.data.ret !== 200) {
            //   let ret = req.data.ret || 400
            //   let msg = req.data.msg || '失败'
            //   return (ctx.body = {
            //     ret: ret,
            //     msg: msg,
            //     data: {}
            //   })
            // }

            // // 登陆失败
            // if (req.data.data.code !== 0) {
            //   let code = req.data.data.code || -1
            //   let message = req.data.data.message || '登录失败'
            //   return (ctx.body = {
            //     ret: 200,
            //     msg: '请求成功',
            //     data: {
            //       code: code,
            //       message: message
            //     }
            //   })
            // }

            // 登陆成功
            // let token = req.data.data.token
            // let signkey = config.sign_key

            // let info = {
            //   id: req.data.data.id,
            //   mobile: req.data.data.mobile,
            //   name: req.data.data.name,
            //   sex: req.data.data.sex,
            //   status: req.data.data.status,
            //   role_id: req.data.data.role_id,
            //   depart_id: req.data.data.depart_id,
            //   deader_id: req.data.data.deader_id
            // }

            // let session = ctx.session
            // session.user = {
            //   token: token,
            //   sign_key: signkey,
            //   info: info
            // }

            // const isValid = await admin.login(username, password)
            console.log('isValid, username, password', isValid, username, password);

            session = {}, token = 'PhU0Sd9zwUSwOQgXnJpj7pgSwdA7YD80';

            session.user = {
              token: token,
              username: username,
              name: username,
              mobile: username,
              id: '444'
            };

            ctx.session = session;

            return _context2.abrupt('return', ctx.body = {
              ret: 200,
              msg: '请求成功',
              data: {
                code: 0,
                message: '登录成功',
                token: token
              }
            });

          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var logout = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            ctx.session.user = null;
            return _context3.abrupt('return', ctx.body = {
              ret: 200,
              msg: '请求成功',
              data: {
                code: 0,
                message: '退出成功'
              }
            });

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3['catch'](0);
            return _context3.abrupt('return', ctx.body = {
              ret: 200,
              msg: '请求成功',
              data: {
                code: -1,
                message: '退出失败'
              }
            });

          case 8:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 5]]);
  }));

  return function logout(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.example.json": 18,
	"./development.json": 19,
	"./production.example.json": 20,
	"./production.json": 21
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 17;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"db":"mongodb://localhost:27017/jerryServ","SITE_ROOT_URL":"http://jj.jerryshi.com","qiniu":{"AK":"","SK":"","bucket":"","qiniuURL":"","config":{"useCdnDomain":true}}}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"db":"mongodb://localhost:27017/jerryServ","SITE_ROOT_URL":"http://jj.jerryshi.com","qiniu":{"AK":"","SK":"","bucket":"","qiniuURL":"","config":{"useCdnDomain":true}}}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {"db":"mongodb://localhost/jerryServ","SITE_ROOT_URL":"http://jj.jerryshi.com","qiniu":{"AK":"","SK":"","bucket":"","qiniuURL":"","config":{"useCdnDomain":true}}}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {"db":"mongodb://localhost/jerryServ","SITE_ROOT_URL":"http://jj.jerryshi.com"}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("axios-mock-adapter");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFilename; });
var getFilename = function getFilename(path) {
  var reg = /\/(\w+).js$/;
  var res = reg.exec(path);
  return res && res[1];
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./casbin.js": 25,
	"./common.js": 27,
	"./database.js": 33,
	"./rest.js": 42,
	"./router.js": 45
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 24;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCasbin", function() { return initCasbin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);


var _this2 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(26),
    Enforcer = _require.Enforcer;

// BasicAuthorizer class stores the casbin handler


var BasicAuthorizer = function () {
  function BasicAuthorizer(ctx, enforcer) {
    _classCallCheck(this, BasicAuthorizer);

    this.ctx = ctx;
    this.enforcer = enforcer;
  }

  // getUserName gets the user name from the request.
  // Currently, only HTTP basic authentication is supported


  _createClass(BasicAuthorizer, [{
    key: 'getUserName',
    value: function getUserName() {
      // customize to get username from context
      var user = this.ctx.user;
      var username = user.username;

      return username;
    }

    // checkPermission checks the user/method/path combination from the request.
    // Returns true (permission granted) or false (permission forbidden)

  }, {
    key: 'checkPermission',
    value: function checkPermission() {
      var ctx = this.ctx,
          enforcer = this.enforcer;
      var path = ctx.originalUrl,
          method = ctx.method;

      var user = this.getUserName();
      return enforcer.enforce(user, path, method);
    }
  }]);

  return BasicAuthorizer;
}();

// authz returns the authorizer, uses a Casbin enforcer as input


function authz(newEnforcer) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var enforcer, authzorizer;
      return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return newEnforcer();

            case 3:
              enforcer = _context.sent;

              if (enforcer instanceof Enforcer) {
                _context.next = 6;
                break;
              }

              throw new Error('Invalid enforcer');

            case 6:
              authzorizer = new BasicAuthorizer(ctx, enforcer);

              if (!authzorizer.checkPermission()) {
                ctx.status = 403;
              }
              _context.next = 10;
              return next();

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);
              throw _context.t0;

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 12]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

var initCasbin = function initCasbin(app) {
  // use authz middleware
  app.use(authz(_asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var enforcer;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Enforcer.newEnforcer("authz_model.conf", "authz_policy.csv");

          case 2:
            enforcer = _context2.sent;
            return _context2.abrupt('return', enforcer);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this2);
  }))));
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("casbin");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLogger", function() { return addLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStatic", function() { return addStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCORS", function() { return addCORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBody", function() { return addBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSession", function() { return addSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_bodyparser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_logger__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_session__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koa_cors__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_static__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);







var addLogger = function addLogger(app) {
  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_logger___default()());
};

var addStatic = function addStatic(app) {
  // 配置静态资源加载中间件
  app.use(__WEBPACK_IMPORTED_MODULE_4_koa_static___default()(__WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname, '../static')));
};

var addCORS = function addCORS(app) {
  app.use(__WEBPACK_IMPORTED_MODULE_3__koa_cors___default()());
};

var addBody = function addBody(app) {
  app.use(__WEBPACK_IMPORTED_MODULE_0_koa_bodyparser___default()());
};

var addSession = function addSession(app) {
  app.keys = ['ice'];

  var CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    signed: true,
    rolling: false
  };
  app.use(__WEBPACK_IMPORTED_MODULE_2_koa_session___default()(CONFIG, app));
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server/middleware"))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("koa-session");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(6);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






// loading mogoose "meta" plugins
__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.plugin(__webpack_require__(35));

var modelDir = Object(__WEBPACK_IMPORTED_MODULE_2_path__["resolve"])(__dirname, '../database/schema');

// fs
//   .readdirSync(modelDir)
//   .filter(file => ~file.search(/\.js$/))    // only .js file
//   .forEach(file => require(resolve(modelDir, file)))

var context = __webpack_require__(36);
context.keys().forEach(function (key) {
  return context(key);
});

var database = function database(app) {
  __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.set('debug', true);

  __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].db, { useNewUrlParser: true });

  __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connection.on('disconnected', function () {
    __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].db);
  });

  __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connection.on('error', function (err) {
    console.error(err);
  });

  __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connection.on('open', _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var User, user, ArticleType, typeLenght, typeList;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.info('Connected to MongoDB ', __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].db);

            // TODO: 
            User = __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.model('User');
            _context.next = 4;
            return User.findOne({
              username: 'admin'
            }).exec();

          case 4:
            user = _context.sent;


            if (!user) {
              user = new User({
                username: 'admin',
                password: 'admin888',
                email: 'admin@126.com'
              });
              console.info('[Info] 写入管理员数据初始化数据');
            }
            _context.next = 8;
            return user.save();

          case 8:

            ////////////////
            ArticleType = __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.model('ArticleType');
            _context.next = 11;
            return ArticleType.find().countDocuments().exec();

          case 11:
            typeLenght = _context.sent;

            if (!(typeLenght === 0)) {
              _context.next = 17;
              break;
            }

            typeList = [{
              name: '产业职教'
            }, {
              name: '校企合作'
            }, {
              name: '校园安全'
            }, {
              name: '资源干货'
            }];
            _context.next = 16;
            return ArticleType.insertMany(typeList);

          case 16:
            console.info('[Info] 写入ArticleType初始化数据');

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  })));
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server/middleware"))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = exports = function MetaPlugin(schema, options) {
  // 完全就是连锁反应 subDocument也会触发这个中间件!
  schema.pre('save', function (next) {
    if (this.isNew) {
      this.meta = {}; // 不能给访问undefined的属性
      this.meta.createdAt = this.meta.updatedAt = Date.now();
    } else {
      // find 也会执行
      this.meta.updatedAt = Date.now();
    }

    next();
  });
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./article.js": 37,
	"./articleTag.js": 38,
	"./articleType.js": 39,
	"./user.js": 40
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 36;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;
var _Schema$Types = Schema.Types,
    Mixed = _Schema$Types.Mixed,
    ObjectId = _Schema$Types.ObjectId;


var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: String,
  desc: String,
  pubdate: {
    type: Date,
    default: Date.now()
  },
  content: String,
  status: Number,
  openness: String,
  isTop: Boolean,
  password: String,
  type: {
    type: ObjectId,
    ref: 'ArticleType'
  },
  author: {
    type: ObjectId,
    ref: 'User'
  },
  tags: [{
    type: ObjectId,
    ref: 'ArticleTag'
  }],
  likeList: [{
    username: String,
    userid: String,
    meta: {
      createdAt: {
        type: Date,
        default: Date.now()
      },
      updatedAt: {
        type: Date,
        default: Date.now()
      }
    }
  }],
  commentList: [{
    username: String,
    avatar: String,
    userid: String,
    content: String,
    meta: {
      createdAt: {
        type: Date,
        default: Date.now()
      },
      updatedAt: {
        type: Date,
        default: Date.now()
      }
    }
  }],
  clickNum: {
    type: Number,
    default: 0
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
});

ArticleSchema.virtual('likeNum').get(function () {
  return this.likeList.length || 0;
});

ArticleSchema.virtual('commentNum').get(function () {
  return this.commentList.length || 0;
});

ArticleSchema.set('toJSON', { virtuals: true });
ArticleSchema.set('toObject', { virtuals: true });

// ArticleSchema.pre('find', function (next) {
//   console.log('我是pre方法1')
//   console.log(this)
//   next()
// })

mongoose.model('Article', ArticleSchema);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var ArticleTagSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
});

mongoose.model('ArticleTag', ArticleTagSchema);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var ArticleTypeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
});

mongoose.model('ArticleType', ArticleTypeSchema);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var _this2 = this;

var mongoose = __webpack_require__(1);
var bcrypt = __webpack_require__(41);
var Schema = mongoose.Schema;

var SALT_WORK_FACTOR = 10;
var MAX_LOGIN_ATTEMPTS = 5;
var LOCK_TIME = 2 * 60 * 60 * 1000;

var UserSchema = new Schema({
  username: {
    unique: true,
    required: true,
    type: String
  },
  email: {
    unique: true,
    required: true,
    type: String
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'http://cdn.jerryshi.com/picgo/20180819213615.png'
  },
  role: {
    type: String,
    default: 'user'
  },
  lockUntil: Number,
  loginAttempts: {
    type: Number,
    required: true,
    default: 0
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
});

UserSchema.virtual('isLocked').get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now()); // 取两次反转boolean
});

UserSchema.pre('save', function (next) {
  var _this = this;

  if (!this.isModified('password')) return next();

  // 使用第三方库构建盐
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    // 如果构建盐失败返回
    if (err) return next(err);
    // 尝试用盐加密
    bcrypt.hash(_this.password, salt, function (error, hash) {
      // 加密失败抛出去
      if (error) return next(err);

      _this.password = hash;
      // 交出控制权
      next();
    });
  });
});

UserSchema.methods = {
  // _password为网站提交来的明文password，第二个就是数据库中加盐后的hash密码
  comparePassword: function comparePassword(_password, password) {
    return new Promise(function (resolve, reject) {
      bcrypt.compare(_password, password, function (err, isMatch) {
        if (!err) resolve(isMatch);else reject(err);
      });
    });
  },

  incLoginAttempts: function incLoginAttempts(user) {
    return new Promise(function (resolve, reject) {
      if (_this2.lockUntil && _this2.lockUntil < Date.now()) {
        _this2.update({
          $set: { // 原来mongoose的$set+$unset就是个原子操作
            loginAttempts: 1
          },
          $unset: {
            lockUntil: 1
          }
        }, function (err) {
          if (!err) resolve(true);else reject(err);
        });
      } else {
        var updates = {
          $inc: {
            loginAttempts: 1
          }
        };

        if (_this2.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !_this2.isLockde) {
          updates.$set = {
            lockUntil: Date.now() + LOCK_TIME
          };
        }

        _this2.update(updates, function (err) {
          if (!err) resolve(true);else reject(err);
        });
      }
    });
  }
};

mongoose.model('User', UserSchema);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRestful", function() { return addRestful; });
var restfulRouter = __webpack_require__(43);

var addRestful = function addRestful(app) {
  app.use(restfulRouter.routes()).use(restfulRouter.allowedMethods());
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Router = __webpack_require__(4);
var rest = __webpack_require__(44);

var router = new Router({ prefix: '/autoapi' });

function skipMid(ctx, next, str) {
  //是否设置跳过
  if (!router.skip || !router.skip[ctx.params.tab]) {
    return false;
  }
  //是否全部跳过
  if (router.skip[ctx.params.tab] == 'ALL') {
    next();
    return true;
  }
  //是否跳过一个
  if (router.skip[ctx.params.tab].split(',').indexOf(str) >= 0) {
    next();
    return true;
  }
  return false;
}

router.get('/:tab', rest.get).post('/:tab', rest.post);

// router.get('/:tab', (ctx, next) => {
//   if (skipMid(ctx, next, 'GET')) {
//     return
//   }
//   console.log('进来了', skipMid(ctx, next, 'GET'))
//   rest.get(ctx, next)
// })

// router.use('/:tab').get(function(ctx, next) {
//   if (skipMid(ctx, next, 'GET')) {
//     return
//   }
//   rest.get(ctx, next)
// })

// rest.skip = {
//   'user': 'fetchID'  // 跳过对user资源的fetchID请求
// }

module.exports = router;

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var getModel = function getModel(tab) {
  var model = void 0;
  try {
    model = mongoose.model(tab);
  } catch (error) {
    model = mongoose.model(tab, new Schema({}, { strict: false }));
  }
  return model;
};

var get = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var where, sort, skip, limit, populate, key, data;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            where = ctx.query._where;
            sort = ctx.query._sort || {};
            skip = parseInt(ctx.query._skip, 10) || 0;
            limit = parseInt(ctx.query._limit, 10) || 100;
            populate = ctx.query._populate || '';

            if (where) {
              where = JSON.parse(where);
              for (key in where) {
                if (where[key]._regex) {
                  where[key] = new RegExp(where[key]._regex);
                }
                if (where[key]._lt) {
                  where[key].$lt = where[key]._lt;
                  delete where[key]._lt;
                }
                if (where[key]._lte) {
                  where[key].$lte = where[key]._lte;
                  delete where[key]._lte;
                }
                if (where[key]._gt) {
                  where[key].$gt = where[key]._gt;
                  delete where[key]._gt;
                }
                if (where[key]._gte) {
                  where[key].$gte = where[key]._gte;
                  delete where[key]._gte;
                }
                if (where[key]._ne) {
                  where[key].$ne = where[key]._ne;
                  delete where[key]._ne;
                }
              }
            }

            //查询 - 根据：tab
            _context.next = 8;
            return getModel(ctx.params.tab).find(where).sort(sort).skip(skip).limit(limit).populate(populate).exec();

          case 8:
            data = _context.sent;


            ctx.body = {
              success: 'true',
              data: data
            };

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function get(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var post = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var Model, doc, entity, data;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Model = getModel(req.params.tab);
            doc = ctx.request.body;
            entity = new Model(doc);
            _context2.next = 5;
            return entity.save();

          case 5:
            data = _context2.sent;

            ctx.body = {
              success: true,
              data: data
            };

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function post(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
var _require = __webpack_require__(2),
    Route = _require.Route;
// const { resolve } = require('path')
// 只要执行此中间件，就等于执行了整个路由中间层


var router = function router(app) {
  // const apiPath = resolve(__dirname, '../routes')
  // Todo: 待修复，现在只能传相对路径，且字符串
  var router = new Route(app, '../routes');

  router.init();
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin.js": 47,
	"./article.js": 52,
	"./articleHandler.js": 53,
	"./articleTag.js": 54,
	"./articleType.js": 55,
	"./qiniu.js": 56
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminController", function() { return adminController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__(3);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}



var _require = __webpack_require__(2),
    controller = _require.controller,
    get = _require.get,
    del = _require.del,
    post = _require.post,
    auth = _require.auth,
    admin = _require.admin,
    required = _require.required;

var adminController = (_dec = controller('/api/admin'), _dec2 = get('/user'), _dec3 = post('/login'), _dec4 = required({
  body: ['username', 'password']
}), _dec(_class = (_class2 = function () {
  function adminController() {
    _classCallCheck(this, adminController);
  }

  _createClass(adminController, [{
    key: 'getUser',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ctx.body = {
                  ret: 200,
                  msg: '获取成功',
                  data: { username: 'jerry', name: 'jerry' }
                };

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUser(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: 'login',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
        var _ctx$request$body, username, password, matchData;

        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_1__service__["admin"].login(username, password);

              case 3:
                matchData = _context2.sent;

                if (matchData.user) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return', ctx.body = {
                  ret: 403,
                  success: false,
                  msg: '用户不存在'
                });

              case 6:
                if (!matchData.match) {
                  _context2.next = 9;
                  break;
                }

                ctx.session.user = {
                  _id: matchData.user._id,
                  username: matchData.user.username,
                  token: 'PhU0Sd9zwUSwOQgXnJpj7pgSwdA7YD80',
                  sign_key: '4444',
                  info: {
                    id: '111',
                    mobile: '138',
                    name: 'admin',
                    status: 1
                  }
                };

                return _context2.abrupt('return', ctx.body = {
                  success: true,
                  ret: 200,
                  msg: '请求成功',
                  data: {
                    code: 0,
                    message: '登录成功',
                    token: '3232893283928392',
                    info: {
                      name: username,
                      mobile: '13988889999'
                    }
                  }
                });

              case 9:

                ctx.body = {
                  ret: 403,
                  success: false,
                  msg: '用户名或密码不正确'
                };

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login(_x3) {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return adminController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'getUser', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'getUser'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'login', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'login'), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var User = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('User');

var login = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(username, password) {
    var match, user;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            match = false;
            _context.next = 3;
            return User.findOne({ username: username }).exec();

          case 3:
            user = _context.sent;

            if (!user) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return user.comparePassword(password, user.password);

          case 7:
            match = _context.sent;

          case 8:
            return _context.abrupt('return', {
              match: match,
              user: user
            });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchList", function() { return fetchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDetail", function() { return fetchDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLiker", function() { return addLiker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subLiker", function() { return subLiker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var Article = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Article');

var fetchList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var data;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Article.find({}, { __v: 0, password: 0, content: 0 }).skip((page - 1) * size).limit(Number(size)).sort({ '_id': -1 }).populate({ path: 'type', select: 'name' }).populate({ path: 'tags', select: 'name' }).populate({ path: 'author', select: '_id username avatar' }).exec();

          case 2:
            data = _context.sent;
            return _context.abrupt('return', data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchList() {
    return _ref.apply(this, arguments);
  };
}();

var fetchDetail = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(_ref2) {
    var _id = _ref2._id,
        username = _ref2.username,
        userid = _ref2.userid;
    var entity, isHas;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Article.findOne({ _id: _id }, { __v: 0 }).lean().exec();

          case 2:
            entity = _context2.sent;


            // default value （要不要节省流量不传递呢？）
            entity.isLike = false;

            // 如果 存在点赞人list 且 传了参数 再去编译，节省系统开支
            if (entity.likeList.length > 0 && (username || userid)) {
              isHas = entity.likeList.some(function (i) {
                return i.username === username || i.userid === userid;
              });

              if (isHas) {
                entity.isLike = true;
              }
            }

            return _context2.abrupt('return', entity);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchDetail(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var create = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(model) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            model = new Article(model);
            _context3.next = 3;
            return model.save();

          case 3:
            model = _context3.sent;
            return _context3.abrupt('return', model);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function create(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var update = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(model) {
    var entity;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return Article.findOne({ _id: model._id }).exec();

          case 3:
            entity = _context4.sent;


            //TODO: no data

            delete model._id;
            entity = Object.assign(entity, model);
            _context4.next = 8;
            return entity.save();

          case 8:
            entity = _context4.sent;
            return _context4.abrupt('return', entity);

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);

          case 15:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 12]]);
  }));

  return function update(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(_id) {
    var res;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Article.remove({ _id: _id });

          case 2:
            res = _context5.sent;
            return _context5.abrupt('return', res);

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function remove(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

var addLiker = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(_ref7) {
    var _id = _ref7._id,
        username = _ref7.username,
        userid = _ref7.userid;
    var entity;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Article.findOne({ _id: _id }, { __v: 0 }).exec();

          case 2:
            entity = _context6.sent;


            // 数据服务层不管业务逻辑，业务逻辑交给控制器层
            entity.likeList.push({ username: username, userid: userid });
            _context6.next = 6;
            return entity.save();

          case 6:
            entity = _context6.sent;
            return _context6.abrupt('return', entity);

          case 8:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function addLiker(_x7) {
    return _ref8.apply(this, arguments);
  };
}();

var subLiker = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(_ref9) {
    var _id = _ref9._id,
        username = _ref9.username,
        userid = _ref9.userid;
    var entity, targetId;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Article.findOne({ _id: _id }, { __v: 0 }).exec();

          case 2:
            entity = _context7.sent;

            // 需要取消点赞的subdocument的_id
            targetId = null;

            // 遍历subdocument 找到目标id

            entity.likeList.some(function (i) {
              var result = i.username === username || i.userid === userid;
              if (result) {
                targetId = i._id;
              }
              return result;
            });
            // remove subDocument
            _context7.next = 7;
            return entity.likeList.id(targetId).remove();

          case 7:
            _context7.next = 9;
            return entity.save();

          case 9:
            entity = _context7.sent;
            return _context7.abrupt('return', entity);

          case 11:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function subLiker(_x8) {
    return _ref10.apply(this, arguments);
  };
}();

var addComment = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(_ref11) {
    var _id = _ref11._id,
        username = _ref11.username,
        userid = _ref11.userid,
        avatar = _ref11.avatar,
        content = _ref11.content;
    var entity;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Article.findOne({ _id: _id }, { __v: 0 }).exec();

          case 2:
            entity = _context8.sent;


            entity.commentList.push({ username: username, userid: userid, avatar: avatar, content: content });
            _context8.next = 6;
            return entity.save();

          case 6:
            entity = _context8.sent;
            return _context8.abrupt('return', entity);

          case 8:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function addComment(_x9) {
    return _ref12.apply(this, arguments);
  };
}();

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchList", function() { return fetchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDetail", function() { return fetchDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var Model = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('ArticleTag');

var fetchList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var data;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Model.find().skip((page - 1) * size).limit(Number(size)).sort({ '_id': -1 }).exec();

          case 2:
            data = _context.sent;
            return _context.abrupt('return', data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchList() {
    return _ref.apply(this, arguments);
  };
}();

var fetchDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(_id) {
    var entity;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Model.findOne(_id).exec();

          case 2:
            entity = _context2.sent;
            return _context2.abrupt('return', entity);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchDetail(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var create = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(model) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            model = new Model(model);
            _context3.next = 3;
            return model.save();

          case 3:
            model = _context3.sent;
            return _context3.abrupt('return', model);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function create(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var update = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(model) {
    var entity;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return Model.findOne({ _id: model._id }).exec();

          case 3:
            entity = _context4.sent;


            //TODO: no data

            delete model._id;
            entity = Object.assign(entity, model);
            _context4.next = 8;
            return entity.save();

          case 8:
            entity = _context4.sent;
            return _context4.abrupt('return', entity);

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);

          case 15:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 12]]);
  }));

  return function update(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(_id) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Model.remove({ _id: _id });

          case 2:
            return _context5.abrupt('return', true);

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function remove(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchList", function() { return fetchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDetail", function() { return fetchDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var Model = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('ArticleType');

var fetchList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var data;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Model.find().skip((page - 1) * size).limit(Number(size)).sort({ '_id': -1 }).exec();

          case 2:
            data = _context.sent;
            return _context.abrupt('return', data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchList() {
    return _ref.apply(this, arguments);
  };
}();

var fetchDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(_id) {
    var entity;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Model.findOne(_id).exec();

          case 2:
            entity = _context2.sent;
            return _context2.abrupt('return', entity);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchDetail(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var create = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(model) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            model = new Model(model);
            _context3.next = 3;
            return model.save();

          case 3:
            model = _context3.sent;
            return _context3.abrupt('return', model);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function create(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var update = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(model) {
    var entity;
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return Model.findOne({ _id: model._id }).exec();

          case 3:
            entity = _context4.sent;


            //TODO: no data

            delete model._id;
            entity = Object.assign(entity, model);
            _context4.next = 8;
            return entity.save();

          case 8:
            entity = _context4.sent;
            return _context4.abrupt('return', entity);

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);

          case 15:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 12]]);
  }));

  return function update(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(_id) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Model.remove({ _id: _id });

          case 2:
            return _context5.abrupt('return', true);

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function remove(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleController", function() { return articleController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xss__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}



var _require = __webpack_require__(3),
    Article = _require.article;

var _require2 = __webpack_require__(2),
    controller = _require2.controller,
    get = _require2.get,
    del = _require2.del,
    put = _require2.put,
    post = _require2.post,
    required = _require2.required;

var articleController = (_dec = controller('/api/article'), _dec2 = get('/'), _dec3 = get('/:_id'), _dec4 = post('/'), _dec5 = put('/'), _dec6 = del('/:_id'), _dec(_class = (_class2 = function () {
  function articleController() {
    _classCallCheck(this, articleController);
  }

  _createClass(articleController, [{
    key: 'get',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var _ctx$query, page, size, data;

        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ctx$query = ctx.query, page = _ctx$query.page, size = _ctx$query.size;
                _context.next = 3;
                return Article.fetchList(page, size);

              case 3:
                data = _context.sent;

                ctx.body = {
                  success: true,
                  data: data
                };

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _ref.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: 'detail',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
        var _id, _ctx$query2, username, userid, data;

        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _id = ctx.params._id;
                _ctx$query2 = ctx.query, username = _ctx$query2.username, userid = _ctx$query2.userid;
                _context2.next = 4;
                return Article.fetchDetail({ _id: _id, username: username, userid: userid });

              case 4:
                data = _context2.sent;


                ctx.body = {
                  success: true,
                  data: data
                };

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function detail(_x2) {
        return _ref2.apply(this, arguments);
      }

      return detail;
    }()
  }, {
    key: 'post',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = ctx.request.body;


                if (!data.pubdate) {
                  data.pubdate = Date.now();
                }

                // TODO: 修正业务逻辑-根据不同角色用户改变status

                // 默认提交则自动审核
                if (data.status === 1) {
                  data.status = 9;
                }

                data = {
                  title: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.title),
                  desc: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.desc),
                  cover: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.cover),
                  pubdate: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.pubdate),
                  content: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.content),
                  type: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.type),
                  status: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.status),
                  openness: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.openness),
                  password: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.password),
                  isTop: Boolean(data.isTop),
                  tags: data.tags,
                  author: '5b72ff427b1fd01b980e0f84'
                  // to test
                  // likeList: data.likeList
                };

                _context3.prev = 4;
                _context3.next = 7;
                return Article.create(data);

              case 7:
                data = _context3.sent;

                ctx.body = {
                  data: data,
                  success: true
                };
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3['catch'](4);

                ctx.body = {
                  err: _context3.t0,
                  success: false
                };

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 11]]);
      }));

      function post(_x3) {
        return _ref3.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: 'put',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = ctx.request.body;
                // TODO: 修正业务逻辑-根据不同角色用户改变status

                // 默认提交则自动审核

                if (data.status === 1) {
                  data.status = 9;
                }

                data = {
                  _id: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data._id),
                  title: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.title),
                  desc: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.desc),
                  cover: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.cover),
                  pubdate: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.pubdate),
                  content: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.content),
                  type: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.type),
                  status: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.status),
                  openness: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.openness),
                  password: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.password),
                  isTop: Boolean(data.isTop),
                  tags: data.tags
                };

                _context4.prev = 3;
                _context4.next = 6;
                return Article.update(data);

              case 6:
                data = _context4.sent;

                ctx.body = {
                  data: data,
                  success: true
                };
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4['catch'](3);

                ctx.body = {
                  error: _context4.t0,
                  success: false
                };

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 10]]);
      }));

      function put(_x4) {
        return _ref4.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: 'delete',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx) {
        var _id, data;

        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _id = ctx.params._id;
                _context5.next = 3;
                return Article.remove(_id);

              case 3:
                data = _context5.sent;


                ctx.body = {
                  success: true,
                  data: data
                };

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _delete(_x5) {
        return _ref5.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return articleController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'get', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'get'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'detail', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'detail'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'post', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'post'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'put', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'put'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'delete', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'delete'), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleHandlerController", function() { return articleHandlerController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xss__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}



var _require = __webpack_require__(3),
    Article = _require.article;

var _require2 = __webpack_require__(2),
    controller = _require2.controller,
    get = _require2.get,
    del = _require2.del,
    put = _require2.put,
    post = _require2.post,
    required = _require2.required;

var articleHandlerController = (_dec = controller('/api/articleHandler'), _dec2 = post('/like'), _dec3 = post('/unlike'), _dec4 = post('/comment'), _dec(_class = (_class2 = function () {
  function articleHandlerController() {
    _classCallCheck(this, articleHandlerController);
  }

  _createClass(articleHandlerController, [{
    key: 'postLike',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var params;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // must contain: _id, username, userid
                params = ctx.request.body;
                _context.prev = 1;
                _context.next = 4;
                return Article.addLiker(params);

              case 4:

                ctx.body = {
                  msg: '点赞成功',
                  success: true
                };
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](1);

                ctx.body = {
                  error: _context.t0,
                  success: false
                };
                console.error(_context.t0);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function postLike(_x) {
        return _ref.apply(this, arguments);
      }

      return postLike;
    }()
  }, {
    key: 'postUnLike',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
        var params;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // must contain: _id, username, userid
                params = ctx.request.body;
                _context2.prev = 1;
                _context2.next = 4;
                return Article.subLiker(params);

              case 4:

                ctx.body = {
                  msg: '取消点赞',
                  success: true
                };
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](1);

                ctx.body = {
                  error: _context2.t0,
                  success: false
                };
                console.error(_context2.t0);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      function postUnLike(_x2) {
        return _ref2.apply(this, arguments);
      }

      return postUnLike;
    }()
  }, {
    key: 'postComment',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
        var params, data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // must contain: _id, username, userid, avatar, content
                params = ctx.request.body;
                _context3.prev = 1;
                _context3.next = 4;
                return Article.addComment(params);

              case 4:
                data = _context3.sent;


                ctx.body = {
                  msg: '评论成功',
                  success: true
                };
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3['catch'](1);

                ctx.body = {
                  error: _context3.t0,
                  success: false
                };
                console.error(_context3.t0);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8]]);
      }));

      function postComment(_x3) {
        return _ref3.apply(this, arguments);
      }

      return postComment;
    }()
  }]);

  return articleHandlerController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'postLike', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'postLike'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'postUnLike', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'postUnLike'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'postComment', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'postComment'), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleController", function() { return articleController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xss__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}



var _require = __webpack_require__(3),
    Model = _require.articleTag;

var _require2 = __webpack_require__(2),
    controller = _require2.controller,
    get = _require2.get,
    del = _require2.del,
    post = _require2.post;

var articleController = (_dec = controller('/api/articleTag'), _dec2 = get('/'), _dec3 = post('/'), _dec(_class = (_class2 = function () {
  function articleController() {
    _classCallCheck(this, articleController);
  }

  _createClass(articleController, [{
    key: 'get',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var _ctx$query, page, size, data;

        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ctx$query = ctx.query, page = _ctx$query.page, size = _ctx$query.size;
                _context.next = 3;
                return Model.fetchList(page, size);

              case 3:
                data = _context.sent;

                ctx.body = {
                  success: true,
                  data: data
                };

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _ref.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: 'post',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = ctx.request.body;


                data = {
                  name: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.name)
                };

                _context2.prev = 2;
                _context2.next = 5;
                return Model.create(data);

              case 5:
                data = _context2.sent;

                ctx.body = {
                  data: data,
                  success: true
                };
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](2);

                ctx.body = {
                  error: _context2.t0,
                  success: false
                };

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function post(_x2) {
        return _ref2.apply(this, arguments);
      }

      return post;
    }()
  }]);

  return articleController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'get', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'get'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'post', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'post'), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleController", function() { return articleController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xss__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}



var _require = __webpack_require__(3),
    Model = _require.articleType;

var _require2 = __webpack_require__(2),
    controller = _require2.controller,
    get = _require2.get,
    del = _require2.del,
    post = _require2.post;

var articleController = (_dec = controller('/api/articleType'), _dec2 = get('/'), _dec3 = post('/'), _dec(_class = (_class2 = function () {
  function articleController() {
    _classCallCheck(this, articleController);
  }

  _createClass(articleController, [{
    key: 'get',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var _ctx$query, page, size, data;

        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ctx$query = ctx.query, page = _ctx$query.page, size = _ctx$query.size;
                _context.next = 3;
                return Model.fetchList(page, size);

              case 3:
                data = _context.sent;

                ctx.body = {
                  success: true,
                  data: data
                };

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _ref.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: 'post',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = ctx.request.body;


                data = {
                  title: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.title),
                  cover: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.title),
                  pubdate: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.pubdate),
                  content: __WEBPACK_IMPORTED_MODULE_1_xss___default()(data.content)
                };

                _context2.prev = 2;
                _context2.next = 5;
                return Model.create(data);

              case 5:
                data = _context2.sent;

                ctx.body = {
                  data: data,
                  success: true
                };
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](2);

                ctx.body = {
                  err: _context2.t0,
                  success: false
                };

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function post(_x2) {
        return _ref2.apply(this, arguments);
      }

      return post;
    }()
  }]);

  return articleController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'get', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'get'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'post', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'post'), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QiniuController", function() { return QiniuController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_qiniu__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_decorator__ = __webpack_require__(2);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}




var QiniuController = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2__lib_decorator__["controller"])('/api/qiniu'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_2__lib_decorator__["get"])('/token'), _dec(_class = (_class2 = function () {
  function QiniuController() {
    _classCallCheck(this, QiniuController);
  }

  _createClass(QiniuController, [{
    key: 'qiniuToken',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var key, token;
        return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = ctx.query.key;
                token = __WEBPACK_IMPORTED_MODULE_1__lib_qiniu__["a" /* uptoken */](key);


                ctx.body = {
                  success: true,
                  data: {
                    key: key,
                    token: token
                  }
                };

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function qiniuToken(_x) {
        return _ref.apply(this, arguments);
      }

      return qiniuToken;
    }()
  }]);

  return QiniuController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'qiniuToken', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'qiniuToken'), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uptoken; });
/* unused harmony export fetchImage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qiniu__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shelljs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shelljs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shelljs__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





// qiniu.conf.ACCESS_KEY = config.qiniu.AK
// qiniu.conf.SECRET_KEY = config.qiniu.SK

// const bucket = config.qiniu.bucket

var mac = new __WEBPACK_IMPORTED_MODULE_1_qiniu___default.a.auth.digest.Mac(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].qiniu.AK, __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].qiniu.SK);
var options = {
  scope: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].qiniu.bucket
};

var putPolicy = new __WEBPACK_IMPORTED_MODULE_1_qiniu___default.a.rs.PutPolicy(options);

var uploadToken = putPolicy.uploadToken(mac);

// "qiniu": "^7.1.3" // 太新了，装6.1.13
// 7.1.3 方式
// let mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
// let config = new qiniu.conf.Config()
// config.useHttpsDomain = true
// config.zone = qiniu.zone.Zone.z2
// let bucketManager = new qiniu.rs.BucketManager(mac, config)

var uptoken = function uptoken(key) {
  // return new qiniu.rs.PutPolicy(`${bucket}:${key}`).token()
  return uploadToken;
};

var fetchImage = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(url, key) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_jerry_Git_jerry_serv_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              // client.fetch(url, bucket, key, (err, ret) => {
              //   if (err) reject(err)
              //   else resolve(ret)
              // })

              var bash = 'qshell fetch ' + url + ' ' + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].qiniu.bucket + ' ' + key;
              var child = Object(__WEBPACK_IMPORTED_MODULE_3_shelljs__["exec"])(bash, { async: true });
              child.stdout.on('data', function (data) {
                resolve(data);
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function fetchImage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("qiniu");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("shelljs");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-temp',
    meta: [{ charset: 'utf-8' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', name: 'iview', href: '/styles/iview.css' }, { rel: 'stylesheet', name: 'theme', href: '' }]
  },
  css: [{ src: '~assets/css/main.css' }, 'quill/dist/quill.snow.css', 'quill/dist/quill.bubble.css', 'quill/dist/quill.core.css'
  // { src: 'iview/dist/styles/iview.css' }
  ],
  plugins: [{ src: '~plugins/flexible.js', ssr: false }, { src: '~plugins/iview.js', ssr: true }, { src: '~/plugins/quillEditor.js', ssr: false }],
  loading: './components/loading.vue',
  env: {
    NODE_ENV: "development"
  },
  cache: {
    max: 1000,
    maxAge: 900000
  },
  router: {
    middleware: 'route' // 在每页渲染前运行 middleware/route.js 中间件的逻辑
  },
  build: {
    // babel: {  // 前端不需要修饰器，后端才要
    //   plugins: ['babel-plugin-transform-decorators-legacy']
    // },
    vendor: ['axios', 'iview', './plugins/iview.js'],
    extend: function extend(config, ctx) {
      // if (ctx.isClient) {
      if (process.client) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map