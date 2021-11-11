---
permalink: '/tags/{{ tag }}/'
pagination:
    data: collections
    size: 1
    alias: tag
---

# Recipes tagged with "{{tag | title}}"

{% set taglist = collections[ tag ] %}
{% for post in taglist %}

[{{post.data.title}}]({{post.url}})

{% endfor %}