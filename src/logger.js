import date from './date'

const prefixedLogArguments = function(args) {
	const a = [`[${date.nowString()}]`]
	for (var i = 0; i < args.length; i++) {
		a.push(args[i]);
	}
	return a
}

const logger = {
	info: function() {		
		console.info.apply(console, prefixedLogArguments(arguments));
	},
	warn: function() {		
		console.warn.apply(console, prefixedLogArguments(arguments));
	},
	error: function() {		
		console.error.apply(console, prefixedLogArguments(arguments));
	}
}

export default {	
	logger
}