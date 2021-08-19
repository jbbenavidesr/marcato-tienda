const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = function () {
    return client
        .getEntries({ content_type: "headerNavigation", order: "sys.createdAt" })
        .then(function (response) {
            const navItem = response.items.map(function (navItem) {
                return navItem.fields;
            });
            return navItem;
        })
        .catch(console.error);
};
