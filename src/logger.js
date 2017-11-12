import * as date from './date'

const prefixedLogArguments = function(args) {
	const a = [`[${date.nowString()}]`]
	for (var i = 0; i < args.length; i++) {
		a.push(args[i]);
	}
	return a
}

export const info = function() {
	console.info.apply(console, prefixedLogArguments(arguments));
}

export const warn = function() {
	console.warn.apply(console, prefixedLogArguments(arguments));
}

export const error = function() {
	console.error.apply(console, prefixedLogArguments(arguments));
}