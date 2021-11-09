---
permalink: '/tags/{{ tag }}/'
pagination:
    data: collections
    size: 1
    alias: tag
---

{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse  %}

[{{post.data.title}}]({{post.url}})


{% for tag in post.data.tags  %}
 - {{tag}}
{% endfor  %}
{%endfor%}