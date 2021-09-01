---
title: "Blog"
pagination:
    data: blog
    size: 3
    alias: blogPosts
    addAllPagesToCollections: true
permalink: "/blog{% if pagination.pageNumber > 0 %}/pagina/{{ pagination.pageNumber }}{% endif %}/index.html"
tags: "blog"
layout: "layouts/blog.njk"
paginationNextText: "Siguiente"
paginationPrevText: "Atrás"
paginationAnchor: "#blog-list"
---

Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a facere fugiat dicta dignissimos placeat corporis, itaque veritatis eius magni officia repellendus harum sit atque reprehenderit, architecto repellat aliquid nemo!
