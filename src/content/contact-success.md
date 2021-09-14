---
layout: "layouts/page.njk"
permalink: "/gracias-por-contactarnos/index.html"
noContact: true
eleventyComputed:
    title: "{{ site.globalCTA.success.title }}"
    content: "{{ site.globalCTA.success.content }}"
---

<section class="blog-post">
    <div class="wrapper">
        <header>
            <h1 class="text-size-500">{{ title }}</h1>
        </header>
        <article class="flow">
            <p>{{ content }}</p>
            <p>Mientras tanto, puedes seguir mirando <a href="/">nuestros productos.</a></p>
        </article>
    </div>
</section>
