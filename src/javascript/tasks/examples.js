import gulp from 'gulp'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'

import browserifyCreate from '../browserifyCreate'
import emitJsError from '../emitJsError'
import settings from '../../settings'


export default function() {
	function bundle() {
		console.log('JS examples')

		return b.bundle()
			.on('error', emitJsError)
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(uglify({mangle: true}))
			.pipe(gulp.dest(paths.examples))
	}

	let paths = settings.paths,
	    b = browserifyCreate(paths.entryExamples, bundle)

	return bundle
}