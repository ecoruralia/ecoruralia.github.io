---
layout: page
title: Archivo del Blog
---

<div class="archive-page">
{% for tag in site.tags %}
  <h3>#{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.date | date: "%d/%m/%Y" }} — {{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
</div>
