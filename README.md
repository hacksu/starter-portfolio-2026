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

The design is type, thin lines, and space. Its one structural idea is the two-column `row`: a short monospace label on the left, content on the right. Section names on the home page, tools on the projects page. `--accent`, `--label-width`, and `--max-width` in `:root` control most of the look.
