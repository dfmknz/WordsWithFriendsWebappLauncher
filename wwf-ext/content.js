const waitFor = (selector, cb) => {
  const el = document.querySelector(selector);
  if (el) return cb(el);
  setTimeout(() => waitFor(selector, cb), 100);
};

waitFor('button.play-now-btn', btn => btn.click());
