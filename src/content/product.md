---
pagination:
    data: partituras
    size: 1
    alias: partitura
permalink: "/partituras/{{ partitura.slug | slug }}/index.html"
layout: "layouts/product.njk"
eleventyComputed:
    title: "{{ partitura.title }}"
---
