var gulp = require('gulp'),
    cripweb = require('cripweb'),
    templateCache = require('gulp-angular-templatecache');


gulp.task('watch-angular-templates', function () {
    return gulp.src('src/templates/**/*.html')
        .pipe(templateCache('templates.js', {
            module: 'crip.tree-view.templates',
            standalone: true,
            base: function (file) {
                return '/crip/tree-view/' + file.path.replace(file.base, '');
            }
        }))
        .pipe(gulp.dest('src/templates'));
});


cripweb(gulp)(function(crip) {

    // Build vendor scripts
    crip.scripts('vendor', ['angular/angular.js'], 'build/js', 'vendor', 'bower_components');
    
    // Build application scripts
    crip.scripts('app', ['**/*.js'], 'build/js', 'app', 'src');

    // Compile SASS to CSS
    crip.sass('app', 'tree.scss', 'build/css', 'style', '**/*.scss', 'src/assets/sass');

    // Copy font files
    crip.copy('fonts', 'bower_components/components-font-awesome/fonts/**/*.*', 'build/fonts');

    // Watch for code changes
    crip.watch('templates', 'src/templates/**/*.html', 'watch-angular-templates');
    crip.watch('scripts', 'src/**/*.js', 'scripts-app');
    crip.watch('styles', 'src/assets/sass/**/*.scss', 'sass-app');

});
