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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(17);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { resolve } from 'path'

var host = process.env.HOST || 'localhost';
var env = "production" || 'development';

// const confPath = resolve(__dirname, `./${env}.json`)

// 同步加载json配置文件
var conf = __webpack_require__(18)("./" + env + '.json');

// 用lodash合并
exports.default = _lodash2.default.assign({ env: env, host: host }, conf);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _koa = __webpack_require__(12);

var _koa2 = _interopRequireDefault(_koa);

var _nuxt = __webpack_require__(13);

var _koaRouter = __webpack_require__(3);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _routers = __webpack_require__(14);

var _routers2 = _interopRequireDefault(_routers);

var _ramda = __webpack_require__(5);

var _ramda2 = _interopRequireDefault(_ramda);

var _utils = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

var MIDDLEWARES = ['database', 'common', 'router'];

// 自动遍历 ./middleware/*.js 导出对象后再逐个遍历初始化koa中间件
var useMiddlewares = function useMiddlewares(app) {
  var context = __webpack_require__(23);

  // R.map(
  //   R.compose(
  //     filename => MIDDLEWARES.includes(filename),
  //     key => getFilename(key)
  //   )
  // )(context.keys())

  context.keys().forEach(function (key) {
    var filename = (0, _utils.getFilename)(key);
    var isValid = MIDDLEWARES.includes(filename);
    if (isValid) {
      console.log('成功加载系统中间件:', filename);
      try {
        _ramda2.default.forEachObjIndexed(function (initWith) {
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
    (0, _classCallCheck3.default)(this, Server);

    this.app = new _koa2.default();
    useMiddlewares(this.app);
  }

  (0, _createClass3.default)(Server, [{
    key: 'start',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(host, port) {
        var _this = this;

        var router, config, nuxt, builder;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                router = new _koaRouter2.default();

                router.use('', _routers2.default.routes());
                this.app.use(router.routes()).use(router.allowedMethods());

                // Import and Set Nuxt.js options
                config = __webpack_require__(37);

                config.dev = !("production" === 'production');
                // console.log('env === ', app.env, env, process.env.COOKIE_DOMAIN, process.env.APP_ENV, config.dev)

                // Instantiate nuxt.js
                nuxt = new _nuxt.Nuxt(config);

                // Build in development

                if (!config.dev) {
                  _context2.next = 10;
                  break;
                }

                builder = new _nuxt.Builder(nuxt);
                _context2.next = 10;
                return builder.build();

              case 10:

                this.app.use(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return next();

                          case 2:
                            ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                            ctx.req.session = ctx.session; // 必须将session添加进request中，否则nuxt的req获取不到session
                            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
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
                console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = __webpack_require__(3);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _user = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default();

router.get('/api/user', _user.userinfo);
router.post('/api/login', _user.login);
router.post('/api/logout', _user.logout);
router.get('/api/logout', _user.logout);

exports.default = router;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports.userinfo = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _axiosMockAdapter = __webpack_require__(21);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mock = new _axiosMockAdapter2.default(_axios2.default);
mock.onPost(_config2.default.base_url + '/api/v1.user/login').reply(function (config) {
  // console.log(JSON.parse(config.data).mobile)
  return [200, { 'ret': 200, 'msg': '请求成功', 'data': { 'code': 0, 'message': '登录成功', 'token': 'PhU0Sd9zwUSwOQgXnJpj7pgSwdA7YD80', 'id': 1, 'mobile': '13770267077', 'name': JSON.parse(config.data).mobile, 'sex': 1, 'status': 1, 'role_id': 1, 'depart_id': 1, 'leader_id': 0 } }];
});

var userinfo = exports.userinfo = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
    var token;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = ctx.session.user.token || '';
            return _context.abrupt('return', ctx.body = {
              ret: 200,
              msg: '获取成功',
              data: { token: token }
            });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function userinfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var login = exports.login = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
    var _ctx$request$body, mobile, psd, _url, req, ret, msg, code, message, token, signkey, info, session;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ctx$request$body = ctx.request.body, mobile = _ctx$request$body.mobile, psd = _ctx$request$body.psd;

            if (!(!mobile || !psd)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt('return', ctx.body = {
              ret: 303,
              msg: '缺少请求参数',
              data: {}
            });

          case 3:

            // 发起请求
            _url = _config2.default.base_url + '/api/v1.user/login';
            _context2.next = 6;
            return _axios2.default.post(_url, {
              mobile: mobile,
              psd: psd,
              sign: ''
            });

          case 6:
            req = _context2.sent;

            if (!(req.status !== 200)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt('return', ctx.body = {
              ret: 400,
              msg: '网络通讯异常',
              data: {}
            });

          case 9:
            if (!(req.data.ret !== 200)) {
              _context2.next = 13;
              break;
            }

            ret = req.data.ret || 400;
            msg = req.data.msg || '失败';
            return _context2.abrupt('return', ctx.body = {
              ret: ret,
              msg: msg,
              data: {}
            });

          case 13:
            if (!(req.data.data.code !== 0)) {
              _context2.next = 17;
              break;
            }

            code = req.data.data.code || -1;
            message = req.data.data.message || '登录失败';
            return _context2.abrupt('return', ctx.body = {
              ret: 200,
              msg: '请求成功',
              data: {
                code: code,
                message: message
              }
            });

          case 17:

            // 登陆成功
            token = req.data.data.token;
            signkey = _config2.default.sign_key;
            info = {
              id: req.data.data.id,
              mobile: req.data.data.mobile,
              name: req.data.data.name,
              sex: req.data.data.sex,
              status: req.data.data.status,
              role_id: req.data.data.role_id,
              depart_id: req.data.data.depart_id,
              deader_id: req.data.data.deader_id
            };
            session = ctx.session;

            session.user = {
              token: token,
              sign_key: signkey,
              info: info
            };
            ctx.session = session;

            return _context2.abrupt('return', ctx.body = {
              ret: 200,
              msg: '请求成功',
              data: {
                code: 0,
                message: '登录成功',
                token: token,
                info: info
              }
            });

          case 24:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var logout = exports.logout = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx, next) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
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
    }, _callee3, undefined, [[0, 5]]);
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
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 19,
	"./production.json": 20
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
webpackContext.id = 18;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"db":"mongodb://localhost:27017/jerryServ","SITE_ROOT_URL":"http://jj.jerryshi.com"}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {"db":"mongodb://localhost/jerryServ","SITE_ROOT_URL":"http://jj.jerryshi.com"}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios-mock-adapter");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getFilename = exports.getFilename = function getFilename(path) {
  var reg = /\/(\w+).js$/;
  var res = reg.exec(path);
  return res && res[1];
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common.js": 24,
	"./database.js": 30,
	"./router.js": 36
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
webpackContext.id = 23;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSession = exports.addBody = exports.addCORS = exports.addStatic = exports.addLogger = undefined;

var _koaBodyparser = __webpack_require__(25);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaLogger = __webpack_require__(26);

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaSession = __webpack_require__(27);

var _koaSession2 = _interopRequireDefault(_koaSession);

var _cors = __webpack_require__(28);

var _cors2 = _interopRequireDefault(_cors);

var _koaStatic = __webpack_require__(29);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addLogger = exports.addLogger = function addLogger(app) {
  app.use((0, _koaLogger2.default)());
};

var addStatic = exports.addStatic = function addStatic(app) {
  // 配置静态资源加载中间件
  app.use((0, _koaStatic2.default)(_path2.default.join(__dirname, '../static')));
};

var addCORS = exports.addCORS = function addCORS(app) {
  app.use((0, _cors2.default)());
};

var addBody = exports.addBody = function addBody(app) {
  app.use((0, _koaBodyparser2.default)());
};

var addSession = exports.addSession = function addSession(app) {
  app.keys = ['ice'];

  var CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    signed: true,
    rolling: false
  };
  app.use((0, _koaSession2.default)(CONFIG, app));
};
/* WEBPACK VAR INJECTION */}.call(exports, "server/middleware"))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("koa-session");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = __webpack_require__(31);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(6);

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _ramda = __webpack_require__(5);

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// loading mogoose "meta" plugins
_mongoose2.default.plugin(__webpack_require__(32));

var modelDir = (0, _path.resolve)(__dirname, '../database/schema');

// fs
//   .readdirSync(modelDir)
//   .filter(file => ~file.search(/\.js$/))    // only .js file
//   .forEach(file => require(resolve(modelDir, file)))

var context = __webpack_require__(33);
context.keys().forEach(function (key) {
  return context(key);
});

var database = exports.database = function database(app) {
  _mongoose2.default.set('debug', true);

  _mongoose2.default.connect(_config2.default.db, { useNewUrlParser: true });

  _mongoose2.default.connection.on('disconnected', function () {
    _mongoose2.default.connect(_config2.default.db);
  });

  _mongoose2.default.connection.on('error', function (err) {
    console.error(err);
  });

  _mongoose2.default.connection.on('open', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.info('Connected to MongoDB ', _config2.default.db);

            // TODO

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
};
/* WEBPACK VAR INJECTION */}.call(exports, "server/middleware"))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = exports = function MetaPlugin(schema, options) {

  schema.pre('save', function (next) {
    if (this.isNew) {
      this.meta = {}; // 不能给访问undefined的属性
      this.meta.createdAt = this.meta.updatedAt = Date.now();
    } else {
      this.meta.updatedAt = Date.now();
    }

    next();
  });
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./article.js": 34,
	"./articleCategory.js": 35
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
webpackContext.id = 33;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(2);
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
  pubdate: Date,
  category: {
    type: ObjectId,
    ref: 'Category'
  }
});

mongoose.model('Article', ArticleSchema);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(2);
var Schema = mongoose.Schema;

var ArticleCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

mongoose.model('ArticleCateory', ArticleCategorySchema);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// const { Route } = require('../lib/decorator')
// // const { resolve } = require('path')
// // 只要执行此中间件，就等于执行了整个路由中间层
// export const router = app => {
//   // const apiPath = resolve(__dirname, '../routes')
//   // Todo: 待修复，现在智能传相对路径，且字符串
//   const router = new Route(app, '../routes')

//   router.init()
// }


/***/ }),
/* 37 */
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
    NODE_ENV: "production"
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
      if (ctx.isClient) {
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