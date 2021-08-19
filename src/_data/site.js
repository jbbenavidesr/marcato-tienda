const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = function () {
    return client
        .getEntry("1EPmrNFJNV5pfHXnenPHLH")
        .then(function (response) {
            return response.fields;
        })
        .catch(console.error);
};
