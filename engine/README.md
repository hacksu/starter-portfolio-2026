# Engine

The parts of the site that don't usually change.

```
global.css      reset, nav, links, buttons
components.js   builds the menu and footer, works the Menu button
```

Everything meant to be edited is one folder up: `index.html`, `projects.html`, `pages.css`, and `site.js`.

The menu is split across all three. What it says is `site.js`, how it looks is `pages.css`, how it gets built is `components.js` in here.

Editing these two files is fine, they're just the ones most likely to break the whole site at once.
