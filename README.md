# Componentz

## Publishing

Ensure you have shelljs installed

_npm install shelljs --save-dev_

npm run publish

### You might have problems with where the published index.html file points to in those cases add this to your vue.config.js:

```
// vue.config.js
module.exports = {
	configureWebpack: {
		plugins: [],
	},
	baseUrl: './',
};
```
