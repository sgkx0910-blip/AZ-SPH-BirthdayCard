HOW TO EDIT THIS WEBSITE
========================

The easiest way to change the site is to open:

    site-content.js

You can edit:
- Pastor/name and headings
- Date and zone
- Intro text
- Appreciation text
- Letter writers
- Full letter messages
- Footer
- Main colours

ADDING A LETTER
---------------
Inside `letters: [ ... ]`, copy one line such as:

{ number: "05", from: "Name", year: "2026", body: "Your full message here." },

and change the values.

REMOVING A LETTER
-----------------
Delete that person's `{ ... },` entry from the letters list.

CHANGING COLOURS
----------------
At the bottom of site-content.js, edit the four values under `theme`.

PREVIEWING
----------
Open index.html in a browser.

ADVANCED DESIGN CHANGES
-----------------------
- styles.css controls layout, fonts, sizes, spacing and animation.
- script.js controls interactions.
- index.html controls the page structure.

TIP: Make a backup before making major design changes.
