import gulp from 'gulp'

import {initializeSettings, jsTasks} from './src/index'


initializeSettings({
	paths: {
		entryGlob: './src/**/*.js',
		lib: './lib/',
	}
})

let lib = jsTasks.lib()

gulp.task('default', () => {
	lib()
})