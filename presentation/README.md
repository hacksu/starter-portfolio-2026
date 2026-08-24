# How the Web Works

A 40-minute HacKSU workshop on HTML, CSS, and JavaScript, taught through the starter portfolio in the folder above and ending with deploying it.

```
app.py                    three routes: deck, notes, logo
templates/
  base.html               page shell, nav bar, canvas background
  index.html              the slide order, one include per slide
  notes.html              speaker notes and run of show
  slides/*.html           one file per slide
static/
  style.css               the HacKSU deck design
  app.js                  slide navigation and particle background
```

A Flask app on port 5174: `pip install -r requirements.txt`, then `python app.py`. `/` is the deck, navigated with arrows, space, or the dots. `/notes` is the speaker notes with a minute-by-minute run of show, and prints clean.

Slide order lives in the include list in `templates/index.html` and nowhere else, so reordering or cutting a slide is one edit there.

Design and plumbing lifted from the polyglot programming deck.
