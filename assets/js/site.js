/* Westworth Is Watching — shared page behavior.
   Plain vanilla JS, no build step, nothing to install. */

(function () {

  /* 1. The hero sign holds one message: "Who does the mayor work for?"
     (The old slogan rotation was retired November 2026.) */

  /* 2. Fact / speculation labels.
     Anyone editing a page just starts a line with one of these words and a colon:
       FACT: the council voted 4-1 on June 18.
       SPECULATION: we think this was about the rezoning.
       OPINION: this should have been on the agenda in plain words.
       UNVERIFIED: a neighbor reported this; we have not seen the document yet.
     This turns those words into the styled tags you see on the page. */
  var LABELS = {
    'FACT': 'badge-fact',
    'DOCUMENTED': 'badge-fact',
    'SPECULATION': 'badge-spec',
    'OPINION': 'badge-spec',
    'UNVERIFIED': 'badge-unverified'
  };
  var re = /^(FACT|DOCUMENTED|SPECULATION|OPINION|UNVERIFIED)\s*:\s*/;
  document.querySelectorAll('.content li, .content p, .content td').forEach(function (el) {
    var first = el.firstChild;
    if (!first || first.nodeType !== 3) return;           // must start with plain text
    var m = first.nodeValue.match(re);
    if (!m) return;
    first.nodeValue = first.nodeValue.replace(re, '');
    var tag = document.createElement('span');
    tag.className = 'badge ' + LABELS[m[1]];
    tag.textContent = m[1] === 'DOCUMENTED' ? 'FACT' : m[1];
    el.insertBefore(tag, first);
  });

  /* 3. Upcoming-meetings list: hide entries whose date has passed.
     The list itself lives in _data/meetings.yml. */
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  document.querySelectorAll('[data-meeting-date]').forEach(function (el) {
    var parts = el.getAttribute('data-meeting-date').split('-');
    var d = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    if (d < today) el.style.display = 'none';
  });


})();
