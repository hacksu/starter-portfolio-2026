# How the Web Works - workshop deck

A 40-minute HacKSU workshop teaching HTML, CSS, and JavaScript through the
starter portfolio in the folder above, ending with deploying it.

## Run it

```bash
pip install -r requirements.txt
python app.py
```

Then open http://localhost:5174

- `/` the deck. Arrows, space, or page up/down to navigate. Click a dot to jump.
- `/notes` speaker notes with a minute-by-minute run of show. Ctrl+P prints clean.

## Structure

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

To reorder or cut a slide, edit the include list in `templates/index.html`.
Nothing else references the order.

Design and plumbing lifted from the polyglot programming deck.
