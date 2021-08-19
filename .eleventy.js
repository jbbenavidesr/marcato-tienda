require("dotenv").config();

// Import shortcodes
const shortcodePath = "./src/_11ty/shortcodes/";
const heroSection = require(shortcodePath + "heroSection");
const contentSection = require(shortcodePath + "contentSection");
const featuredProductsSection = require(shortcodePath + "featuredProductsSection");

module.exports = function (eleventyConfig) {
    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy("./src/assets/images/");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts/");

    // Set directories of assets to add as watch targets.
    eleventyConfig.addWatchTarget("./src/assets/sass/");
    eleventyConfig.addWatchTarget("./src/assets/js/");

    // Define shortcodes
    eleventyConfig.addShortcode("heroSection", heroSection);
    eleventyConfig.addShortcode("contentSection", contentSection);
    eleventyConfig.addNunjucksAsyncShortcode("featuredProductsSection", featuredProductsSection);

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
