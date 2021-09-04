module.exports = function (dateString) {
    let date = new Date(dateString);
    return date.toLocaleDateString("es-CO", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};
