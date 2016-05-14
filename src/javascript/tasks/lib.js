import gulp from 'gulp'
import babel from 'gulp-babel'
import settings from '../../settings'


export function libOnce() {
	let paths = settings.paths

	return function() {
		console.log('JS lib')

		gulp.src(paths.entryGlob)
			.pipe(babel({
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}))
			.pipe(gulp.dest(paths.lib))
	}
}

export function lib() {
	let paths = settings.paths,
	    fn = libOnce()

	return function() {
		gulp.watch(paths.entryGlob, fn)
		fn()
	}
}