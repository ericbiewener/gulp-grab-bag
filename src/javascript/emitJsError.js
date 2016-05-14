import {dialog} from '../utils'

export default function emitJsError(error) {
	console.log(error)
	dialog.emit(
		'JS ERROR',
		error.filename,
		dialog.getLineAndColumnString(error),
		error
	)
}