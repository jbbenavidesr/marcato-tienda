const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

module.exports = function (richText) {
    return documentToHtmlString(richText);
};
