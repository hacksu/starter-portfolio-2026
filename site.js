/* ==========================================================================
   SITE.JS

   THIS IS YOUR FILE. Edit anything here.

   The menu and the footer appear on every page. Rather than copying them into
   each HTML file and having to remember to change both, they are written out
   once, here, and put onto the page by dont-edit/components.js.

   Change something here and it changes on every page at once.
   ========================================================================== */

const site = {

  /* Your name, shown at the top left of every page. */
  name: "Your Name",

  /* The menu. Each line is one item.

     "text" is what the visitor reads. "href" is the file it opens.

     To add a page: make a copy of one of your HTML files, then add a line
     here pointing at it. Keep the commas between the lines. */
  nav: [
    { text: "Home", href: "index.html" },
    { text: "Projects", href: "projects.html" },
  ],

  /* The footer line.

     &copy; is the code for the copyright symbol, and {year} is swapped for
     the current year when the page loads, so the footer never goes stale. */
  footer: "&copy; {year} Your Name",

};
