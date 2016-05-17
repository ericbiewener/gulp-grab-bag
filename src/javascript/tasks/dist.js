import gulp from 'gulp'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'

import browserifyCreate from '../browserifyCreate'
import emitJsError from '../emitJsError'
import settings from '../../settings'


export default function(...importsToIgnore) {
	function bundle() {
		console.log('JS dist')

		return b.bundle()
			.on('error', emitJsError)
			.pipe(source(`${paths.bundleName}.js`))
			.pipe(buffer())
			.pipe(gulp.dest(paths.dist))
			.pipe(rename(`${paths.bundleName}.min.js`))
			.pipe(uglify({mangle: true}))
			.pipe(gulp.dest(paths.dist))
	}

	let paths = settings.paths,
	    b = browserifyCreate(paths.entry, bundle, false, importsToIgnore)

	return bundle
}