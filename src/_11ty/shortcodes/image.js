const Image = require("@11ty/eleventy-img");
const getPhoto = require("../utils/getPhoto");

/**
 * Shortcode for getting images html with the image Plugin.
 */
module.exports = async function (photoID, assets) {
    let photo = getPhoto(photoID, assets);
    let src = "https:" + photo.file.url;
    let alt = photo.description;

    let sizes = "(min-width: 1024px) 100vw, 50vw";
    console.log(`Generating image(s) from:  ${src}`);
    if (alt === undefined) {
        // Throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }
    let metadata = await Image(src, {
        widths: [600, 900, 1500],
        formats: ["webp", "png"],
        urlPath: "/assets/images/",
        outputDir: "./public/assets/images/",
    });
    let lowsrc = metadata.png[0];
    let highsrc = metadata.png[metadata.png.length - 1];
    return `<picture>
    ${Object.values(metadata)
        .map((imageFormat) => {
            return `  <source type="${
                imageFormat[0].sourceType
            }" srcset="${imageFormat
                .map((entry) => entry.srcset)
                .join(", ")}" sizes="${sizes}">`;
        })
        .join("\n")}
    <img
      src="${lowsrc.url}"
      alt="${alt}"
      loading="lazy"
      decoding="async">
  </picture>`;
};
