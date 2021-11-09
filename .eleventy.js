module.exports = config => {

	// Set directories to pass through to the dist folder
	config.addPassthroughCopy('./src/images/');
	config.addPassthroughCopy('./src/styles/');
	config.addPassthroughCopy('./src/scripts/');

	// Returns work items, sorted by display order
	config.addCollection('recipes', collection => {
		return collection
			.getFilteredByGlob('./src/recipes/*.md').reverse()
	});

	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist'
		}
	};
};
