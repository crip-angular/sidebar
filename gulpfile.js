var gulp = require('gulp');
var crip = require('cripweb');
var templateCache = require('gulp-angular-templatecache');

crip.scriptsConfig({
    dest: 'build/js',
    minify: true
});

crip.scripts([
        '/jquery/dist/jquery.js',
        '/angular/angular.js',
        '/angular-resource/angular-resource.js',
        '/crip-angular-core/build/crip-core.js'
    ],
    'vendor',
    'scripts-vendor',
    'bower_components'
);

crip.scripts(['**/*.js'],
    'app',
    'scripts-app',
    'src');

crip.sass('src/assets/sass/style.scss',
    'src/assets/sass/**/*.scss',
    'compile-sass',
    'style',
    'build/css');


gulp.task('watch-angular-templates', function () {
    return gulp.src('src/templates/**/*.html')
        .pipe(templateCache('templates.js', {
            module: 'crip.treeView.templates',
            standalone: true,
            base: function (file) {
                return '/crip/tree-view/' + file.path.replace(file.base, '')
            }
        }))
        .pipe(gulp.dest('src/templates'));
});


crip.addWatch(
    './src/templates/**/*.html',
    'watch-angular-templates',
    gulp
);


crip.copy('src/views/**/*.*', 'build', 'copy-views');
crip.copy('bower_components/components-font-awesome/fonts/**/*.*', 'build/fonts', 'copy-fonts');

gulp.task('default', function () {
    crip.gulp.start('crip-default');
    crip.watch();
});
