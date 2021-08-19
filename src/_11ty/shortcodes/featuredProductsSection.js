const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESSTOKEN,
});

function imageProcessing(photo) {
    return `<img
            srcset="https:${photo.fields.file.url}?w=480&fm=webp&q=80&fit=fill&f=faces 480w,
            https:${photo.fields.file.url}?w=800&fm=webp&q=80&fit=fill&f=faces 800w" sizes="(max-width: 600px) 480px,800px"
            src="https:${photo.fields.file.url}?w=480&fit=fill&f=faces"
            alt="${photo.fields.title}" loading="lazy">`;
}

module.exports = async function (featuredProductSection) {
    const output = await Promise.all(
        featuredProductSection.fields.productList.map(({ sys }) => {
            return (products = client.getEntry(sys.id).then((product) => {
                return `<article class="[ card ]">
                            <div class="[ card__img ]">
                                ${imageProcessing(product.fields.imagen)}
                            </div>
                            <div class="[ card__content ] [ flex ]">
                                <h3>${product.fields.title}</h3>
                                <button class="snipcart-add-item btn" data-item-id="${
                                    product.sys.id
                                }" data-item-price="${product.fields.precio}"
                                data-item-url="/" 
                                data-item-description="${
                                    product.fields.descripcionCorta
                                }" 
                                data-item-image="${
                                    product.fields.imagen.fields.file.url
                                }" 
                                data-item-name="${product.fields.title}">
                                    Comprar
                                </button>
                            </div>
                        </article>`;
            }));
        })
    );
    return `<section class="[ align-center ]">
                <div class="wrapper flow">
                    <header class="[ text-primary-400 ]">
                        <h2>${featuredProductSection.fields.title}</h2>
                    </header>
                    <div class="[ auto-grid ]">
                        ${output.join("")}
                    </div>
                    <div>
                        <a href="/catalog/" class="[ btn ] [ bg-quinary-200 ]">${
                            featuredProductSection.fields.ctaText
                        }</a>
                    </div>
                </div>
            </section>`;
};
