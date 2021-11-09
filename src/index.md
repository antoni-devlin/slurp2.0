---
title: 'Home'
layout: 'layouts/homepage.html'
---
{% for post in collections.recipes  %}
<article onclick="location.href='{{post.url}}';" class="recipe-card">
	<img src="{{post.data.hero.path}}" alt="{{post.data.hero.alt}}">
	<h1>{{post.data.title}}</h1>
</article>
{% endfor  %}