const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESSTOKEN,
});

const productCard = require("./productCard");

/**
 * This shortcode makes an API request to contentful and
 * gets the specific content included in the section.
 *
 * TODO: Check if it can be taken from the partituras data file and remove
 * one API call.
 */
module.exports = async function (featuredProductSection) {
    const url = this.page.url;
    return await Promise.all(
        featuredProductSection.fields.productList.map(function (partitura) {
            return client
                .getEntry(partitura.sys.id)
                .then(function (response) {
                    response.fields.id = response.sys.id;
                    return productCard(response.fields, url, 3);
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    )
        .then(function (cards) {
            return `<section class="[ featured-products-section ] [ align-center ]">
                        <div class="wrapper flow">
                            <header class="[ text-primary-400 ]">
                                <h2>${featuredProductSection.fields.title}</h2>
                            </header>
                            <div class="[ auto-grid ]">
                                ${cards.join("")}
                            </div>
                            <div>
                                <a href="/partituras/" class="[ btn ]">${
                                    featuredProductSection.fields.ctaText
                                }</a>
                            </div>
                        </div>
                    </section>`;
        })
        .catch(function (error) {
            console.log(error);
        });
};
