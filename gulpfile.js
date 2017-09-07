// gulp作用 压缩css js html
// 在命令行里下载好的模块 引入的时候直接写模块的名字
// 主模块
var gulp=require("gulp");
// 用来压缩js文件的模块
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
var minifyCss=require("gulp-minify-css");
var minifyHtml=require("gulp-minify-html");
// 创建任务
//1.任务的名称
//2.具体执行什么操作
gulp.task("js",function () {
    //1.找到想要压缩的文件
    //2.pipe下一步压缩
    //3.gulp.dest()处理好的文件输出到哪里
    gulp.src("./src/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});
gulp.task("jsconcat",function () {
    //1.找到想要压缩的文件
    //2.pipe下一步压缩
    //3.压缩完合并，同时名字为all.js
    //4.gulp.dest()处理好的文件输出到哪里
    gulp.src("./src/*.js")
        .pipe(uglify())
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./dist"));
});
gulp.task("css",function () {
    gulp.src("./css/*.css")
        .pipe(minifyCss())
        .pipe(concat("all.css"))
        .pipe(gulp.dest("./dist"));
});
gulp.task("html",function () {
    gulp.src("./*.html")
        .pipe(minifyHtml())
        .pipe(gulp.dest("./dist"));
});
//执行任务 参数2 任务名称(这里是在命令行里执行gulp的时候只执行一次)
gulp.task("default",["jsconcat","css","html"]);
//实时压缩(只要文件改变就会执行一次)
//1.监听什么文件 2.执行什么任务
//gulp.watch("./src/*.js",["js"]);