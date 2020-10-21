let gulp = require("gulp");
let pug = require("gulp-pug");
let sass = require("gulp-sass");
sass.compiler = require("node-sass");

let PATHS = {
    src: {
        pug: "./src/views/",
        scss: "./src/scss/"
    },
    dist: {
        html: "./dist/",
        css: "./dist/styles/"
    }
}



gulp.task("views", () => {
    return gulp.src(PATHS.src.pug + "index.pug")
        .pipe(pug())
        .pipe(gulp.dest(PATHS.dist.html));
});
gulp.task("styles", () => {
    return gulp.src(PATHS.src.scss + "main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(PATHS.dist.css));
});