export const from = (value) => {
	return typeof value === 'object' ? value : JSON.parse(value)
}
