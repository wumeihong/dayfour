//引入模块
var gulp = require("gulp");
var webwerver = require("gulp-webserver");
gulp.task(webserver({
    host:"localhost",
    port:8080,
    livereload:true,

}))


gulp.task("default",["webserver"])