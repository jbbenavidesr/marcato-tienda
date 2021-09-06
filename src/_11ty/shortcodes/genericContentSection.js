const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

module.exports = function (genericContentSection) {
    return `
	<section class="blog-post">
        <div class="wrapper">
            <header class="">
                <h1>${genericContentSection.fields.title}</h1>
            </header>
            <article class="flow">
				${documentToHtmlString(genericContentSection.fields.content)}
            </article>
        </div>
    </section>
	`;
};
