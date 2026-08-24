// ── Slide navigation ────────────────────────────────────────
hljs.highlightAll();

const slides = document.querySelectorAll('.slide');
const total  = slides.length;
let current  = 0;

const slideCounterEl = document.getElementById('slide-counter');
const prevBtnEl      = document.getElementById('btn-prev');
const nextBtnEl      = document.getElementById('btn-next');

const dotsEl = document.getElementById('progress-dots');
slides.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.title = `Slide ${i + 1}`;
  d.onclick = () => goTo(i);
  dotsEl.appendChild(d);
});

function goTo(idx) {
  if (total === 0) return;

  slides[current].classList.remove('active');
  dotsEl.children[current].classList.remove('active');
  current = Math.max(0, Math.min(idx, total - 1));
  slides[current].classList.add('active');
  dotsEl.children[current].classList.add('active');
  slideCounterEl.textContent = `${current + 1} / ${total}`;
  prevBtnEl.disabled = current === 0;
  nextBtnEl.disabled = current === total - 1;
}

function navigate(dir) { goTo(current + dir); }

function isTypingTarget(target) {
  if (!target) return false;
  return target.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(target.tagName);
}

const NEXT_KEYS = new Set([
  'ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Spacebar', 'Enter',
  'MediaTrackNext', 'n', 'N', 'j', 'J', 'l', 'L',
]);

const PREV_KEYS = new Set([
  'ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace',
  'MediaTrackPrevious', 'p', 'P', 'k', 'K', 'h', 'H',
]);

const NEXT_KEYCODES = new Set([32, 34, 39, 40]);
const PREV_KEYCODES = new Set([8, 33, 37, 38]);

document.addEventListener('keydown', e => {
  if (isTypingTarget(e.target)) return;

  const key = e.key;
  const code = e.keyCode;
  const isNext = NEXT_KEYS.has(key) || e.code === 'Space' || NEXT_KEYCODES.has(code);
  const isPrev = PREV_KEYS.has(key) || PREV_KEYCODES.has(code);

  if (isNext) {
    e.preventDefault();
    navigate(1);
  } else if (isPrev) {
    e.preventDefault();
    navigate(-1);
  } else if (e.key === 'Home') {
    e.preventDefault();
    goTo(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    goTo(total - 1);
  }
});

goTo(0);

// ── HacKSU particle network background ──────────────────────
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx    = canvas.getContext('2d');

  const NODE_COUNT  = 90;
  const MAX_DIST    = 180;
  const NODE_COLOR  = '#35c982';
  const LINE_COLOR  = '53, 201, 130';
  const SPEED       = 0.35;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const nodes = Array.from({ length: NODE_COUNT }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    r:  Math.random() * 1.5 + 1,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx   = nodes[i].x - nodes[j].x;
        const dy   = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = NODE_COLOR;
      ctx.fill();
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  draw();
})();
