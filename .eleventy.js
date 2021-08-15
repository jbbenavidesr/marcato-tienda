
module.exports = function (eleventyConfig) {
    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/fonts/");

    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addWatchTarget("./src/js/");

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
