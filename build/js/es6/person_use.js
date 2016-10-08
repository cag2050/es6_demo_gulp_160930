'use strict';

var _Person = require('./Person.js');

var _Person2 = _interopRequireDefault(_Person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = new _Person2.default('张三', 20); /**
                                         * Created by cag on 2016/9/23.
                                         */

console.log(p.say());