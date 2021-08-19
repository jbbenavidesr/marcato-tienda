/**
 * Shortcode for rendering a brief content section with
 * a title and a description.
 */
 module.exports = function (contentSection) {
    return `
        <section class="[ ${ contentSection.fields.bgCssClass } ]">
            <div class="[ about-block ] [ wrapper flow ]">
                <header>
                    <h2>${ contentSection.fields.title }</h2>
                </header>
                <div class="border-top">
                    <p>${ contentSection.fields.content }</p>
                </div>
            </div>
        </section>`;
};
