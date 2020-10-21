let gulp = require("gulp");
let pug = require("gulp-pug");
let sass = require("gulp-sass");
sass.compiler = require("node-sass");
let webpack = require("webpack-stream");
let browserSync = require("browser-sync").create();
let concat = require("gulp-concat");


let PATHS = {
    src: {
        pug: "./src/views/",
        scss: "./src/scss/",
        js: "./src/scripts/"
    },
    dist: {
        html: "./dist/",
        css: "./dist/styles/",
        js: "./dist/scripts/"
    }
}
const norm = "./node_modules/normalize.css/normalize.css";


gulp.task("views", () => {
    return gulp.src(PATHS.src.pug + "index.pug")
        .pipe(pug())
        .pipe(gulp.dest(PATHS.dist.html));
});
gulp.task("styles", () => {
    return gulp.src([norm, PATHS.src.scss + "main.scss"])
        .pipe(concat("main.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(PATHS.dist.css));
});
gulp.task("compile", () => {
    return gulp.src(PATHS.src.js + "entry.js")
        .pipe(webpack({
            output: {
                filename: "result.js"
            },
            mode: "development"
        }))
        .pipe(gulp.dest(PATHS.dist.js));
});
gulp.task("startServer", () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        open: false
    });
    browserSync.watch("./dist/", browserSync.reload);
});

gulp.task("default", gulp.series("views", "styles", "compile", "startServer"));

gulp.watch(PATHS.src.pug + "index.pug", gulp.series("views"));
gulp.watch(PATHS.src.scss + "*.scss", gulp.series("styles"));
gulp.watch(PATHS.src.js + "entry.js", gulp.series("compile"));
