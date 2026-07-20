---
layout: default
title: Meetings
---

<div class="page-head">
  <div class="crumb">&nbsp;</div>
  <h1>City Hall, on the record</h1>
  <p class="summary">Our notes from council and Planning &amp; Zoning meetings — what was on the agenda, what actually happened, and the moments worth remembering. Where the city posts a recording, we link it with timestamps so you can watch for yourself.</p>
  <div class="page-rule"></div>
</div>

<section>
  {% assign meeting_pages = site.pages | where_exp: "p", "p.path contains 'meetings/'" | where_exp: "p", "p.name != 'index.md'" | sort: "date" | reverse %}
  {% for m in meeting_pages %}
  <div class="meeting-row">
    <div class="date">{{ m.date | date: "%b %-d, %Y" | upcase }}</div>
    <div>
      <h3><a href="{{ m.url | relative_url }}">{{ m.title }}</a></h3>
      <p>{{ m.summary }}</p>
    </div>
  </div>
  {% endfor %}
</section>
