({
    baseUrl: "./src",
    paths: {
		requireLib: '../node_modules/requirejs/require'
	},
	name: "contentScript",
	include: "requireLib",
    out: "dist/contentScript.js"
})