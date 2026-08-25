/* ==========================================================================
   ENGINE/COMPONENTS.JS

   You can edit this, but it is the part most likely to break the site, and
   you do not need to touch it to make the site yours.

   It has one job: build the menu and the footer out of what you wrote in
   site.js, and put them onto the page. That is why the <header> and <footer>
   in the HTML files are empty. This fills them in.

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
   you are on gets class="active", which global.css styles differently. */
let menuItems = "";

for (const item of site.nav) {
  const isCurrent = item.href === currentPage;
  menuItems += `<li><a href="${item.href}"${isCurrent ? ' class="active"' : ""}>${item.text}</a></li>`;
}

/* innerHTML replaces everything inside a tag with the HTML you give it. */
header.innerHTML = `
  <nav class="nav container">
    <a href="index.html" class="nav-logo">${site.name}</a>
    <ul class="nav-links">${menuItems}</ul>
  </nav>
`;

/* Swap {year} in your footer text for the year it is right now. new Date()
   asks the visitor's computer for today's date, so the footer stays correct
   without you having to come back and update it every January. */
const thisYear = new Date().getFullYear();
const footerText = site.footer.replace("{year}", thisYear);

footer.innerHTML = `<div class="container"><p>${footerText}</p></div>`;
