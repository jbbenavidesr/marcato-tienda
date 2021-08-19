const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESSTOKEN,
});

const imageProcessing = require("../utils/imageProcessing");

module.exports = async function (featuredProductSection) {
    const url = this.page.url;
    return await Promise.all(
        featuredProductSection.fields.productList.map(function(partitura){
            return client.getEntry(partitura.sys.id)
            .then(function (response){
                return `<article class="[ card ]">
                            <div class="[ card__img ]">
                                ${imageProcessing(response.fields.imagen)}
                            </div>
                            <div class="[ card__content ] [ flex ]">
                                <h3>${ response.fields.title }</h3>
                                <button class="snipcart-add-item btn" 
                                    data-item-id="${partitura.sys.id}"
                                    data-item-price="${response.fields.precio}"
                                    data-item-url="${ url }"
                                    data-item-description="${ response.fields.descripcionLarga }"
                                    data-item-image="${ response.fields.imagen.fields.file.url }"
                                    data-item-name="${ response.fields.title }">
                                    Comprar
                                </button>
                            </div>
                        </article>`;
            }).catch(function(error){
                console.log(error);
            })
        })).then(function(cards){
            return `<section class="[ align-center ]">
                        <div class="wrapper flow">
                            <header class="[ text-primary-400 ]">
                                <h2>${featuredProductSection.fields.title}</h2>
                            </header>
                            <div class="[ auto-grid ]">
                                ${cards.join("")}
                            </div>
                            <div>
                                <a href="/catalog/" class="[ btn ] [ bg-quinary-200 ]">${
                                    featuredProductSection.fields.ctaText
                                }</a>
                            </div>
                        </div>
                    </section>`;
        }).catch(function (error){
            console.log(error);
        });
};
