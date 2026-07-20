---
layout: default
title: Topics
---

<div class="page-head">
  <div class="crumb">&nbsp;</div>
  <h1>The full story, topic by topic</h1>
  <p class="summary">New to all this? Start with Our Village, then Trinity Terrace. Everything here follows one rule: facts are tagged as facts, and our opinions are tagged as ours.</p>
  <div class="page-rule"></div>
</div>

<section>
  <div class="cardlist">
    {% assign topic_pages = site.pages | where_exp: "p", "p.dir == '/topics/'" | where_exp: "p", "p.name != 'index.md'" | sort: "order" %}
    {% for t in topic_pages %}
    <a class="topic-card" href="{{ t.url | relative_url }}">
      <h3>{{ t.title }}</h3>
      <p>{{ t.summary }}</p>
      <span class="go">Read →</span>
    </a>
    {% endfor %}
  </div>
</section>
