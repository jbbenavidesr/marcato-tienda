const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTFL_SPACE,
    accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = async function (featuredBlogPostsSection) {
    return await Promise.all(
        featuredBlogPostsSection.fields.postList.map(function (post) {
            return client
                .getEntry(post.sys.id)
                .then(function (response) {
                    return `<article class="[ post ] [ flow ]">
                            <header>
								<p class="post__theme">${response.fields.tema.fields.tema}</p>
								<h3 class="post__title">${response.fields.title}</h3>
							</header>
							<section class="[ post__content ] [ flow ]">
								<p class="post__summary">${response.fields.resumen}</p>
								<a href="/blog/${response.fields.slug}/" class="post__link">Leer más</a>
                        </article>`;
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    )
        .then(function (cards) {
            return `<section class="[ featured-blog-posts-section ] [ bg-quinary-200 ]">
                        <header class="[ featured-blog-posts-section__heading ] [ align-center ]">
                            <h2>${featuredBlogPostsSection.fields.title}</h2>
                        </header>
                        <div class="wrapper flow">
                            <div class="[ featured-blog-posts-section__body ]">
                                ${cards.join("")}
                            </div>
                        </div>
                    </section>`;
        })
        .catch(function (error) {
            console.log(error);
        });
};
