import browserify from 'browserify'
import watchify from 'watchify'
import babelify from 'babelify'

export default function browserifyCreate(entry, bundle, debug=false, importsToIgnore) {
	const b = browserify({
		cache: {},
		packageCache: {},
		entries: entry,
		debug: debug,
		plugin: [watchify],
	})
	.transform(babelify, {
		presets: ['es2015', 'react'],
		plugins: ['transform-object-rest-spread']
	})
	
	if (importsToIgnore) {
		importsToIgnore.forEach(i => b.ignore(i))
	}

	b.on('update', bundle)
	b.on('log', console.log)

	return b
}