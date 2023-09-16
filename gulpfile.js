"use strict";
import gulp from "gulp"
import ttfToWoff2 from "gulp-ttftowoff2"

const SOURCE_FONT = "src/assets/fonts/*.ttf";
const DESTINATION_FONT = "src/assets/fonts";

const woff2 = () => {
    return gulp.src(SOURCE_FONT)
        .pipe(ttfToWoff2())
        .pipe(gulp.dest(DESTINATION_FONT))
}

gulp.task('generate-fonts', gulp.series(woff2))
