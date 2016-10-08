/**
 * Created by chenanguo on 2016/9/30.
 */
var gulp = require("gulp"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify");

//开发版路径
var src = {};
src.root = "src/";
src.js = src.root + "js/**/*.js";

//发布版路径
var build = {};
build.root = "build/";
build.js = build.root + "js/";

//js压缩配置
var uglify_config = {
    mangle: {
        except: ['define', 'require', 'module', 'exports'],
        toplevel: true //变量混淆
    },
    compress: false
};

// 时间格式化函数
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

/**
 * 构建js
 */
gulp.task('js', function () {
    console.log("脚本构建中...");
    // console.log(new Date().Format('yyyy-MM-dd hh:mm:ss'));
    gulp.src(src.js)
        .pipe(babel({presets: ['es2015']}))
        // .pipe(uglify(uglify_config))
        .pipe(gulp.dest(build.js));
    console.log("脚本构建完毕");
});

// 监控文件，自动处理
gulp.task('watch', function () {
    gulp.watch(src.js, function (e) {
        var src_path = e.path,
            build_path = src_path.replace(/\\src\\/g, "\\build\\"),
            _build_path = build_path.substr(0, build_path.lastIndexOf("\\"));
        console.log('文件：' + src_path + "被修改");
        if (src_path.indexOf(".js") > -1) {
            console.log("js文件正在生成...");
            gulp.src(src_path)
                .pipe(babel({presets: ['es2015']}))
                // .pipe(uglify(uglify_config))
                .pipe(gulp.dest(_build_path));
        }
        console.log("修改后的文件已经生成");
        console.log("------" + new Date().Format("yyyy-MM-dd hh:mm:ss") + "------");
    });
    console.log("开始监控js变化");
});

gulp.task('default', ['js','watch']);