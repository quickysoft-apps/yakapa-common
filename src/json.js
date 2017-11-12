const toJson = (value) => {
	return typeof value === 'object' ? value : JSON.parse(value)
}

export default {
	toJson
}