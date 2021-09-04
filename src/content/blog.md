---
pagination:
    data: blog
    size: 1
    alias: blogPost
permalink: "/blog/{{ blogPost.slug | slug }}/index.html"
layout: "layouts/blogPost.njk"
eleventyComputed:
    title: "{{ blogPost.title }}"
---
