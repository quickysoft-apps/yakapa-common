const nowString = () => {
	return new Date().toJSON().slice(0, 19).replace(/T/g, ' ')
}

const toJson = (value) => {
	return typeof value === 'object' ? value : JSON.parse(value)
}

const prefixedLogArguments = function(args) {
	const a = [`[${nowString()}]`]
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
	nowString,
	toJson,
	logger
}