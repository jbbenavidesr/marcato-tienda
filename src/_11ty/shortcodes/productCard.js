const imageProcessing = require("./image");

/**
 * This is the product-card component that'll be used for displaying products.
 *
 * @param product The fields object in the response of an item from Contentful.
 * 					The id field should be added.
 * @param url the url from the current page where the item will be displayed.
 * @param headingLevel number from 2 to 6 with the level of the heading the card
 * 						should have. Usually 2 or 3. 3 by default.
 */
module.exports = async function (product, url, assets, headingLevel = 3) {
    return `<article class="[ product-card ]">
				<div class="[ product-card__content ] [ flow ]">
					<div>
						<h${headingLevel} class="product-card__title">
							<a href="/partituras/${product.slug}/"  class="[ product-card__main-link ]">	
								${product.title}
							</a>
						</h${headingLevel}>
						<small class="product-card__price">$${product.precio.toLocaleString(
                            "es-CO"
                        )}</small>
					</div>
					<p class="product-card__description">${product.descripcionCorta}</p>
					<button class="snipcart-add-item btn" 
						data-item-id="${product.id}"
						data-item-price="${product.precio}"
						data-item-url="${url}"
						data-item-description="${product.descripcionCorta}"
						data-item-file-guid="${product.guid}"
						data-item-image="https:${product.imagen.fields.file.url}"
						data-item-max-quantity="1"
						data-item-name="${product.title}">
						Comprar
					</button>
				</div>
				<div class="[ product-card__img ]">
					${await imageProcessing(product.imagen.sys.id, assets)}
				</div>
			</article>`;
};
