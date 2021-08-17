require('dotenv').config();

module.exports = function (eleventyConfig) {
    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy("./src/assets/images/");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts/");

    eleventyConfig.addWatchTarget("./src/assets/sass/");
    eleventyConfig.addWatchTarget("./src/assets/js/");

    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: "src",
            output: "public",
        },
    };
};
