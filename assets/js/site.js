/* Westworth Is Watching — shared page behavior.
   Plain vanilla JS, no build step, nothing to install. */

(function () {

  /* 1. Hero sign cycles the four slogans like lawns down a street (home page only). */
  var slogan = document.getElementById('slogan');
  if (slogan && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var slogans = [
      "Who does the mayor work for?",
      "Keep our single family zoning",
      "We already said no.",
      "Westworth is watching."
    ];
    var i = 0;
    slogan.style.transition = 'opacity .25s ease';
    setInterval(function () {
      i = (i + 1) % slogans.length;
      slogan.style.opacity = 0;
      setTimeout(function () { slogan.textContent = slogans[i]; slogan.style.opacity = 1; }, 250);
    }, 4200);
  }

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

  /* 3. Sign-request form: until a real Formspree ID is pasted into index.html,
     don't let the form submit into the void. */
  var form = document.querySelector('form[action*="YOUR_FORM_ID"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if (!msg) {
        msg = document.createElement('p');
        msg.className = 'form-msg';
        form.appendChild(msg);
      }
      msg.textContent = 'Sign requests aren’t open quite yet — we’re finishing the print run. Check back in a few days, or just say hi to a neighbor who already has one in the yard.';
    });
  }

})();
