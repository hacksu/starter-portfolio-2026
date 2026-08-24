# Starter Portfolio

A plain HTML and CSS portfolio. No frameworks, no build step, no npm. Download
it, open `index.html` in your browser, and start editing.

## Files

```
index.html        the home page
projects.html     your projects
pages.css         your colors, fonts, and layout
site.js           your name, your menu, your footer line
engine/
  global.css      the reset, nav, links, and buttons
  components.js   builds the menu and footer on every page
```

`pages.css` pulls in `engine/global.css` and the fonts itself, so the HTML only
ever links one stylesheet.

The four files in the main folder are yours. Edit them freely.

The `engine` folder is not off limits, but it is the part most likely to break
everything at once, and you never have to touch it to make the site your own.
Read those two files once the rest makes sense. Reading other people's code is
most of how you learn to write it.

**The menu and the footer are not in the HTML files.** They appear on every
page, so rather than making you copy them into each one and keep them in sync,
they are written once in `site.js` and put onto the page by
`engine/components.js`. That is why `<header>` and `<footer>` look empty when
you open the HTML.

## Getting started

1. Open the folder in a text editor. VS Code is a good free one.
2. Open `index.html` in your browser by double-clicking it.
3. Change something, save, refresh the browser, see what happened.

Search both HTML files for `CHANGE THIS` to find everything that needs your own
information.

## Making it yours

**Change the colors.** Open `pages.css`. The `:root` block at the top is the
whole design in five colors. Change `--accent`, save, refresh, and every link
on the site changes at once.

**Change the text.** Open `index.html`. The text between tags like `<h1>` and
`</h1>` is what shows on the page. Edit it.

**Add a project.** Open `projects.html`, find an `<article class="project row">`
block, copy the whole thing, paste it under the others, edit the title and
description.

**Change the menu.** Open `site.js` and edit the `nav` list. Each line is one
menu item: `text` is what the visitor reads, `href` is the file it opens. Add a
line and the item appears on every page at once.

**Change the footer.** Also `site.js`. Leave `{year}` where it is and it fills
in the current year on its own, so the copyright line never goes stale.

**Add your photo.** Put an image file next to the HTML files, then add this
line wherever you want it:

```html
<img src="photo.jpg" alt="A photo of me">
```

## About the design

There are no boxes, shadows, or bright colors here, and that is deliberate. The
site is built out of three things: type, thin lines, and space.

The one structural idea is the two-column `row`. A narrow left column holds a
short label in monospace, and a wide right column holds the actual content. On
the home page the labels are section names. On the projects page they are what
each project was built with. Same shape, different information, which is what
makes two pages feel like one site.

If you want to change how it feels, start with these in `pages.css`:

- `--accent` is the only color on the page. One is enough. Adding a second
  bright color is the fastest way to make this look worse.
- `--label-width` sets how wide the left column is. Try `10rem`.
- `--max-width` sets how wide the page gets. Try `640px` for something more
  compact.

## One thing to know about the menu

Because the menu and footer are built by JavaScript, they will not appear for
the very small number of visitors who turn JavaScript off, and you will not see
them in the HTML when you view source. Everything else on the page is plain
HTML and works regardless.

That is the trade: one place to edit instead of two, in exchange for a little
bit of machinery. If you would rather have the menu written out in the HTML,
delete the two `<script>` tags at the bottom of each page and paste the menu
markup into the empty `<header>` yourself.

## Putting it online

Both options are free and take about two minutes. Push this folder to a GitHub
repository first, either way.

**GitHub Pages**

1. On GitHub, go to Settings, then Pages.
2. Under Branch, pick `main` and `/ (root)`, then Save.
3. Wait a minute. Your site is at
   `https://yourusername.github.io/repository-name/`.

**Vercel**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click Add New, then Project, and pick this repository.
3. Leave every setting alone. There is no framework and no build command, so
   the defaults are already right.
4. Click Deploy. Your site is at `https://your-project.vercel.app`.

Vercel redeploys automatically every time you push to GitHub, and it is the
easier of the two if you want a custom domain later.

## Things to try next

- Add a third page: copy `projects.html`, rename it, edit it, then add one line
  to `nav` in `site.js`
- Make a dark version by swapping `--paper` and `--ink` in `pages.css`
- Pick different fonts at [fonts.google.com](https://fonts.google.com) and
  swap the `@import` line at the top of `pages.css`
