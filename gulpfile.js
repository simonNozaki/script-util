"use strict"

const gulp = require("gulp");
const typescript = require("gulp-typescript");

gulp.task("default", async function(){
    console.log("gulp default task");
});

gulp.task("test", async function(){

});

/**
 * コンパイル
 */
gulp.task("assemble",  async function(){
    gulp.src("src/*.ts")
        .pipe(typescript())
        .pipe(gulp.dest("."))
});