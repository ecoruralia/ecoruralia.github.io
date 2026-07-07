---
layout: default
---

<ul class="post-list">
    {%- for post in site.posts -%}
    <li>
      <p class="post-meta">
        {{ post.date | date: "%d/%m/%Y" }}
        {%- if post.author -%}
          &nbsp;{{ post.author }}
        {%- endif -%}
      </p>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a>
      {%- if post.excerpt -%}
      <div class="post-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 30 }}
      </div>
      {%- endif -%}
      <div class="post-tags">
        {%- for tag in post.tags -%}
          {%- unless tag == "Other" -%}
            <a class="tag" href="/archive.html#{{ tag | slugify }}">#{{ tag }}</a>
          {%- endunless -%}
        {%- endfor -%}
      </div>
      <a class="read-more" href="{{ post.url | relative_url }}">Leer más</a>
    </li>
    {%- endfor -%}
  </ul>
