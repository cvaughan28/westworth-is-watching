# How to edit this site (no coding needed)

This site is a set of plain text files. GitHub turns them into web pages automatically about a minute after you save. You can do everything below from your web browser — nothing to install.

## The one rule

**Every claim gets a label.** Start the line with one of these words and a colon:

```
FACT: The council voted on June 18. (link to agenda or minutes)
SPECULATION: We think this is connected to the rezoning.
OPINION: The agenda should have said so in plain words.
UNVERIFIED: A neighbor reported this; we haven't seen the document yet.
```

The site turns those words into the styled tags you see on the pages. A FACT needs a document, a recording, or a firsthand witness behind it. If it's what we *think*, it's SPECULATION or OPINION — no exceptions, even when we're pretty sure. This rule is what keeps the site credible and keeps us out of trouble.

## Editing an existing page

1. Go to the repository on GitHub and open the `topics` or `meetings` folder.
2. Click the page you want, then click the **pencil icon** (top right of the file view).
3. Make your changes. Keep the lines between the `---` marks at the top as they are (that's the page's title and summary — edit the text after the colons if you need to, but keep the format).
4. Scroll down, write one line about what you changed (e.g. "added vote count from minutes"), and click **Commit changes**.
5. Wait a minute or two, then refresh the live site.

## Adding a new meeting page

1. Open the `meetings` folder and click **Add file → Create new file**.
2. Name it with the date first, like `2026-08-11-council-meeting.md`.
3. Copy the top block and headings from an existing meeting page and fill in your notes. The new meeting shows up in the Meetings list automatically — no other step.
4. If the city posted a recording, put the link in `video_url:` at the top, and note timestamps in your text like `(at 14:30 in the recording)` so people can check for themselves.

## Adding a document

When a records request comes back or you get a PDF worth sharing:

1. Create a folder called `files` at the top level of the repository (if it doesn't exist yet) and upload the PDF there (**Add file → Upload files**).
2. Link to it from the relevant page like this: `[the invoice](/files/invoice-june.pdf)`
3. Add it to the Documents list on the home page (`index.html`) — copy one of the existing `<div class="doc">` blocks and edit the text.

## Giving a friend edit access

Repository **Settings → Collaborators → Add people**, enter their GitHub username. They'll need a free GitHub account. Only add people you trust to follow the labeling rule — every edit is public and permanent in the site's history.

## Things to keep doing (and not doing)

- **Do** link the source next to every FACT. The link is the armor.
- **Do** describe officials by office and official conduct. Stick to what they did in their public role.
- **Don't** post anyone's home address, phone number, family details, or anything about their life outside city business.
- **Don't** state a suspicion as a fact, even in a headline. Headlines can be questions.
- **Don't** copy long passages from news articles — quote a line or two and link the rest.
- If someone tells us a page is wrong, take it seriously, check the record, and fix it fast. Corrections make the site stronger, not weaker.
