var gulp = require('gulp');
var crip = require('cripweb');

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
    'src/assets/js');

crip.sass('src/assets/sass/style.scss',
    'src/assets/sass/**/*.scss',
    'compile-sass',
    'style',
    'build/css');

crip.copy('src/views/**/*.*', 'build', 'copy-views');
crip.copy('bower_components/components-font-awesome/fonts/**/*.*', 'build/fonts', 'copy-fonts');

gulp.task('default', function () {
    crip.gulp.start('crip-default');
    crip.watch();
});
