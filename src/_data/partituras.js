const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = function () {
    return client
        .getEntries({ content_type: "partitura", order: "sys.createdAt" })
        .then(function (response) {
            const partitura = response.items.map(function (partitura) {
                partitura.fields.date = new Date(partitura.sys.updatedAt);
                partitura.fields.id = partitura.sys.id;
                return partitura.fields;
            });
            return partitura;
        })
        .catch(console.error);
};
