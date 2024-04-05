// /** @type {import('next').NextConfig} */

const path = require("path")

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
}

// const nextConfig = {
// 	// sassOptions: {
// 	// 	includePaths: [path.join(__dirname, "styles")],
// 	// },
// }

// export default nextConfig
