const gulp = require('gulp')
const browserSync = require('browser-sync').create()


watch = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('./assets/css/*.css').on('change', browserSync.reload)
    gulp.watch('./*.html').on('change', browserSync.reload)
}

// gulp.task('build', 
//     gulp.parallel(style)
// )

gulp.task('default',
gulp.series(watch))