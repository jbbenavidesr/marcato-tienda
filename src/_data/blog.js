const Cache = require("@11ty/eleventy-cache-assets");

/**
 * Grabs the remote data for products to be sold.
 *
 * @returns {Array} Empty or array of objects
 */
module.exports = async function () {
  try {
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const data = await Cache("http://localhost:1337/articulos", {
      duration: "1d", // 1 day
      type: "json",
    });

    return data;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};
