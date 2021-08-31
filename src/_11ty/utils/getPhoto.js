/**
 * Helper function for processing images, for now, very simple. needs to
 * become better for optimizing
 */
module.exports = function (photoID, assets) {
    return assets.find(function (asset) {
        return asset.id === photoID;
    });
};
