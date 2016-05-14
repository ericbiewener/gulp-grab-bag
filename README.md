# Gulp Grab Bag
Currently just a set of Gulp tasks I use for NPM packaging. Performs the followign tasks:

1. Creates minified and non-minified versions concatenated versions and places them in a `dist` folder. `bundleName` in the below example is used to name these.
2. Creates a file-for-file mirror of the `src` directory, but compiled with Babel.
3. Compiles JS in an `examples` folder.

All tasks will watch for file changes. Syntax errors will generate helpfully obtrusive alert windows with the error information.

## Installation
`npm install --save gulp-grab-bag`

## Usage

```js
import gulp from 'gulp'
import {initializeSettings, gulpTask, jsTasks} from 'gulp-grab-bag'


initializeSettings({
    paths: {
        entry: './src/index.js',
        entryGlob: './src/**/*.js',
        dist: './dist/',
        lib: './lib/',
        entryExamples: './examples/dev.js',
        examples: './examples/',
        bundleName: 'react-font-resizer',   
    }
})

// Bundle names passed to jsTasks.dist() will be ignored by Browserify
let dist = jsTasks.dist('react'),
    lib = jsTasks.lib(),
    examples = jsTasks.examples()

gulp.task('default', () => {
    lib()
    dist()
    examples()
})
```