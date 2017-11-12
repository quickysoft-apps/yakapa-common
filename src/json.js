export const toJson = (value) => {
	return typeof value === 'object' ? value : JSON.parse(value)
}
