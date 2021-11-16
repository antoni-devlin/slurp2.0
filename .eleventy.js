// Image processing with eleventy-img
const Image = require('@11ty/eleventy-img');
const path = require('path');

const imageShortcode = async (
	relativeSrc,
	alt,
	className,
	widths = [null, 300, 1000],
	formats = ['jpeg', 'webp'],
	sizes = '100vw'
) => {
	const { dir: imgDir } = path.parse(relativeSrc);
	const fullSrc = path.join('src', relativeSrc);

	const imageMetadata = await Image(fullSrc, {
		widths,
		formats,
		outputDir: path.join('_site', imgDir),
		urlPath: imgDir,
	});
};


module.exports = config => {

	// Shortcodes
	config.addShortcode('image', imageShortcode);

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
