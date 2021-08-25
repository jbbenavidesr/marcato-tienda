const Cache = require("@11ty/eleventy-cache-assets");

const space = process.env.CTFL_SPACE;
const accessToken = process.env.CTFL_ACCESSTOKEN;
const baseURL = "https://cdn.contentful.com";

module.exports = async function () {
    let url = `${baseURL}/spaces/${space}/entries?access_token=${accessToken}&include=10`;

    /* This returns a promise */
    const response = await Cache(url, {
        duration: "1w", // save for 1 day
        type: "json", // we’ll parse JSON for you
    });

    let data = {};

    response.items.forEach(function (entry) {
        let contentType = entry.sys.contentType.sys.id;
        entry.fields.id = entry.sys.id;
        entry.fields.date = new Date(entry.sys.updatedAt);

        if (!data[contentType]) {
            data[contentType] = [];
        }

        data[contentType].push(entry.fields);
    });

    data.assets = response.includes.Asset.map(function (asset) {
        asset.fields.id = asset.sys.id;
        asset.fields.date = new Date(asset.sys.updatedAt);
        return asset.fields;
    });

    return data;
};
