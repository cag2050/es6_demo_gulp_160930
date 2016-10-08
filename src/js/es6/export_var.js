/**
 * Created by chenanguo on 2016/9/30.
 */
// webpack编译es6 module报错，尚不知原因。export文件后缀修改为.jsx,就能编译通过
/*
 ERROR in ./es6/import_var.js
 Module not found: Error: a dependency to an entry point is not allowed
 @ ./es6/import_var.js 3:18-44
 */
var name = "Jeff";
var age = 30;
export {name, age};