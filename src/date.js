const nowString = () => {
	return new Date().toJSON().slice(0, 19).replace(/T/g, ' ')
}

export default {
  nowString
}