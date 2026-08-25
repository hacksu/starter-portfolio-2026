# Starter Portfolio

A two-page personal site in plain HTML and CSS. No frameworks, no build step, no npm. Open `index.html` and it runs.

```
index.html        home page
projects.html     projects page
pages.css         colors, fonts, layout
site.js           name, menu, footer line
engine/
  global.css      reset, nav, links, buttons
  components.js   builds the menu and footer
```

The root files are the ones meant to be edited. Both pages link only `pages.css`, which imports the rest. Spots that need real content are marked `CHANGE THIS`.

The menu and footer are data in `site.js`, inserted at load time by `engine/components.js`. One edit instead of one per page, at the cost of both being invisible with JavaScript off.

The design is a document: one column of serif text on white, headings the same size as the words under them, and links in blue that turn purple once visited. There are no boxes, no dividing lines, and no second color, so the spacing is doing all of the work. No fonts are downloaded, so the page renders instantly and works offline. `--accent` and `--max-width` in `:root` control most of the look.
