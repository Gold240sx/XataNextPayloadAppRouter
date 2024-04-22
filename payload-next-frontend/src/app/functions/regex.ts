const USER_REGEX = /^[a-zA-Z0-9_]{3,23}$/
const PWD_REGEX =
	/^(?=.*[a-x])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%"("")"]).{8,24}$/
const EML_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const LINK_REGEX = /\[(.+?)\]\((.+?)\)/g
export { USER_REGEX, PWD_REGEX, EML_REGEX, LINK_REGEX }
