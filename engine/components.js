/* ==========================================================================
   ENGINE/COMPONENTS.JS

   You can edit this, but it is the part most likely to break the site, and
   you do not need to touch it to make the site yours.

   It does two jobs:

   1. Builds the menu and the footer out of what you wrote in site.js, and
      puts them onto the page. That is why the <header> and <footer> in the
      HTML files are empty: this fills them in.
   2. Opens and closes the menu when you tap the Menu button on a phone.

   To change what the menu says, edit site.js. To change how it looks, edit
   pages.css. Come here only if you want to change the actual structure.
   ========================================================================== */

/* The <header> and <footer> tags waiting to be filled in. */
const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");

/* Which file is open right now, for example "projects.html". The address ends
   in a slash when someone visits the site without naming a file, and in that
   case the browser is showing index.html. */
const currentPage = window.location.pathname.split("/").pop() || "index.html";

/* Build the menu, one <li> per item in site.nav. The item matching the page
   you are on gets class="active", which pages.css styles differently. */
let menuItems = "";

for (const item of site.nav) {
  const isCurrent = item.href === currentPage;
  menuItems += `<li><a href="${item.href}"${isCurrent ? ' class="active"' : ""}>${item.text}</a></li>`;
}

/* innerHTML replaces everything inside a tag with the HTML you give it. */
header.innerHTML = `
  <nav class="nav container">
    <a href="index.html" class="nav-logo">${site.name}</a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Menu">Menu</button>
    <ul class="nav-links" id="nav-links">${menuItems}</ul>
  </nav>
`;

/* Swap {year} in your footer text for the year it is right now. new Date()
   asks the visitor's computer for today's date, so the footer stays correct
   without you having to come back and update it every January. */
const thisYear = new Date().getFullYear();
const footerText = site.footer.replace("{year}", thisYear);

footer.innerHTML = `<div class="container"><p>${footerText}</p></div>`;

/* The menu button only exists now that the header above has been built, so
   this has to come after it. */
const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", function () {
  /* "toggle" adds the class if it is missing and removes it if it is there.
     global.css shows the menu whenever it has the class "open". */
  links.classList.toggle("open");
});
