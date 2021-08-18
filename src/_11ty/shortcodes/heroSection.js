/**
 * Shortcode for rendering the Hero Section
 */
module.exports = function (heroSection) {
    return `
        <section class="[ hero ] [ bg-neutral-800 ]">
            <div class=" [ wrapper wrapper--sm ]">
                <h1>${ heroSection.fields.title }</h1>
            </div>
        </section>`;
};
